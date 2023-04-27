const doctorshema = require('../module/DoctorShema')
const usershema = require('../module/usermoduleshema')



const getallusercontroller =async(req,res)=>{
                try {
                const users  =await usershema.find({})
                res.status(200).send({
                    success:true,
                    message:"user data",
                    data:users
                })

                } catch (error) {
                 console.log(error)
                 res.status(500).send({
                    success:false,
                    message :"error while fetching user",
                    error
                 })
                    
                }

}

const getalldoctorscontroller =async(req,res)=>{
    try {
        const users  =await  doctorshema.find({})
        res.status(200).send({
            success:true,
            message:"doctros data",
            data:users
        })

        } catch (error) {
         console.log(error)
         res.status(500).send({
            success:false,
            message :"error while fetching user",
            error
         })
            
        }
    
}

const accountstatuscontroller = async(req,res)=>{
        try {
           const {doctorId ,status} = req.body
           const doctor = await doctorshema.findByIdAndUpdate(doctorId,{status})
           const user = await usershema.findOne({_id:doctor.status})
            const notification=user.notification
            notification.push({
                type:"doctor-account-requset-updated",
                message:`your doctor account request has ${status}`

            })
            user.isDoctor = status === 'aproved '? true :false
            await user.save()
            res.status(200).send({
                success:true,
                message:"account status updated",
                data:doctor
            })

        } catch (error) {
            console.log(error)
         res.status(500).send({
            success:false,
            message :"error while fetching user",
            error
         })
        }
}

module.exports ={getallusercontroller,getalldoctorscontroller,accountstatuscontroller}