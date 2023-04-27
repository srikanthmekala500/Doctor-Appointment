const userShema = require('../module/usermoduleshema')
const bcrypt = require('bcrypt')
const Jwt = require('jsonwebtoken')
const Doctorshema = require('../module/DoctorShema')
const  appoinmnetShema = require('../module/appoinmnetShema')
const moment = require('moment')
const  registercontroller = async(req,res)=>{
        try {
            const exisitinguser = await userShema.findOne({email:req.body.email})
            if(exisitinguser){
                return res.status(200).send({
                    success:false,
                    message:"user alredy exisite"
                })
            }
            const password =req.body.password
            const salt = await bcrypt.genSalt(10)
            const hashedpassword = await bcrypt.hash(password,salt)
            req.body.password= hashedpassword
            const newuser =  new userShema(req.body)
            await newuser.save()
            res.status(200).send({
                success:true,
                message:"Registion successful"
            })


        } catch (error) {
            console.log(error)
            res.status(500).send({
                success:false,
                message:`registion error ${error.message}`
            })
        }   
}




const  logincontroller = async(req,res)=>{
        try {
            //check the user email id 
            const user = await userShema.findOne({email:req.body.email}) 
            if(!user){
                return res.status(400).send({
                    success:false,
                    message:'invdied email error  '
                })
            }
                        //check the user password 

            const ismach = await bcrypt.compare(req.body.password, user.password)
                if(!ismach){
                    return res.status(400).send({
                        success:false,
                        message:'invdied email error '
                    })
                }
            const token = Jwt.sign({id: user._id},process.env.JWT_SECRET,{expiresIn:'1d'})
            res.status(200).send({
                         success:true,
                        message:'login successfull',
                        token
            })

        } catch (error) {
            console.log(error)
            res.status(500).send({
                success:false,
                message:`invided to login ${error.message}`
            })
            
        }   
 
}


const authcontroller =async (req,res)=>{
    try {
        const user = await userShema.findById({ _id: req.body.userId})
        user.password = undefined
        if(!user){
            return res.status(200).send({
                message:"user not found",
                success:false
            })
        }else{
            res.status(200).send({
                success:true,
                data: user
            })
        }

   
    } catch (error) {
            console.log(error)
            res.status(500).send({
                message:"auth error",
                success:false
            })
    }

}


const applydoctorcontroller =async(req,res)=>{
    try {
    const newDoctor = await Doctorshema({...req.body,status:'pending'})
        await newDoctor.save()
        const adminuser = await userShema.findOne({isAdmin:true})
        const notification = await adminuser.notification
        notification.push({
            type :"appy-doctor-request",
            message :`${newDoctor.firstname} ${newDoctor.lastname}  has applied for docotor account`,
            data:{
                doctorId : newDoctor._id,
                name :newDoctor.firstname +""+newDoctor.lastname,
                onClickpath:"/admin/doctrs"
            }
        })
        await userShema.findByIdAndUpdate(adminuser._id,{notification})
        res.status(200).send({
            success:true,
            message:"Doctor account applied successfully"
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            message:"error applydoctor",
                success:false ,
                error
        })
    }

}
 const getallnotidoctorcontroller =async(req,res)=>{
        try {
        const user = await userShema.findOne({_id:req.body.userId})
        const seenotification = user.seenotification;
        const  notification =user.notification
        seenotification.push(...notification) 
        user.notification =[]
        user.seenotification =notification
        const updateuser = await user.save()
        res.status(200).send({
            success:true,
            message :'all notofication are marked red ',
            data :updateuser
        })
        } catch (error) {
            console.log(error)
            res.status(500).send({
                message:"error applydoctor",
                    success:false ,
                    error
            })
        }   
 }
 const deleteallnotidoctorcontroller= async(req,res)=>{
        try {
            const user = await userShema.findOne({_id:req.body.userId})
            user.notification=[]
            user.seenotification=[]
            const updateuser = await user.save()
            updateuser.password= undefined
            res.status(200).send({
                success:true,
                message:"notification delete",
                data:updateuser
            })
            


        } catch (error) {
            console.log(error)
            res.status(500).send({
                success:false,
                message:"unable to delete notification"
            })
            
        }
 }

const getalldoctorctrl =async(req,res)=>{
            try {
                const docotor =await Doctorshema.find({status:'Aprove'})
                res.status(200).send({
                    success:true,
                    message:"doctor list",
                    data:docotor
                })
            } catch (error) {
                console.log(error)
                res.status(500).send({
                    success:false,
                    message:"unable to get doctor info"
                })  
            }
}
//booking appointemnt
const appointmentctrl =async(req,res)=>{
    try {
        req.body.date = moment(req.body.date,"DD-MM-YYYY").toISOString()
        req.body.time = moment(req.body.date,"HH.mm").toISOString()
       req.body.status ='pending'
       const newAppointment = new appoinmnetShema(req.body)
        await newAppointment.save()
        const user  = await userShema.findOne({ _id:req.body.doctorInfo.userId})
        user.notification.push({
            type :"new appoinmnet request",
            message:`new appoinmnet request from ${req.body.userInfo.name}`,
            onclickpath:'/user/appointmnets'
        })
        await user.save()
        res.status(200).send({
            success:true,
            message:"appoinmnet book succesussfull"
        })



    } catch (error) {
        console.log(error)
            res.status(500).send({
                success:false,
                message :"error in appoinmnet "
            }) 
    }
}
const bookaavilablectrl =async(req,res)=>{
            try {
                const date = moment(req.body.date,"DD-MM-YYYY").toISOString()
                const fromTime = moment(req.body.time, "HH:mm")
                        .subtract(1, "hours")
                        .toISOString();
                const toTime = moment(req.body.time, "HH:mm").add(1, "hours").toISOString();
                const doctorId = req.body.doctorId
                const appointments=  await appoinmnetShema.find({
                    doctorId,
                    date,
                    time: {
                      $gte: fromTime,
                      $lte: toTime,
                    },
                  });
                  if (appointments.length > 0) {
                    return res.status(200).send({
                      message: "Appointments not Availibale at this time",
                      success: true,
                    });
                  } else {
                    return res.status(200).send({
                      success: true,
                      message: "Appointments available",
                    });
                  }






            } catch (error) {
                console.log(error)
            res.status(500).send({
                success:false,
                message :"error book avliable appoinmnet "
            }) 
            }
}
module.exports ={logincontroller,
    registercontroller,
    authcontroller,
    applydoctorcontroller,
    getallnotidoctorcontroller,
    deleteallnotidoctorcontroller,
    getalldoctorctrl,
    appointmentctrl,
    bookaavilablectrl}