const DoctorShema = require("../module/DoctorShema")

const getsingledoctorinfoctrl =async(req,res)=>{
            try {
            const doctor = await DoctorShema.findOne({userId:req.body.userId})
            res.status(200).send({
                success:true,
                message:" doctor fetching success",
                data:doctor
            })




            } catch (error) {
                console.log(error)
                res.status(500).send({
                    success:false,
                    message :"error in fetching doctor "
                }) 
            }

}

const updatedoctorinfoctrl =async(req,res)=>{
            try {
                const doctor = await DoctorShema.findOneAndUpdate({userId:req.body.userId},req.body)
                res.status(200).send({
                    success:true,
                    message:" doctor upadte success",
                    data:doctor
                })

            } catch (error) {
                console.log(error)
                res.status(500).send({
                    success:false,
                    message :"error in fetching doctor "
                }) 
            }

}

const getdocotorByidctrl= async(req,res)=>{
            try {
                const doctor = await DoctorShema.findOne({_id:req.body.doctorId})
                res.status(200).send({
                    success:true,
                    message:" get  singledoctor  info success",
                    data:doctor
                })
            } catch (error) {
                console.log(error)
                res.status(500).send({
                    success:false,
                    message :"error in single doctor "
                }) 
            }

}


module.exports = {getsingledoctorinfoctrl,updatedoctorinfoctrl,getdocotorByidctrl, }