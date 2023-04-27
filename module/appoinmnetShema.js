const mongoose = require('mongoose')
const appointmentshema = mongoose.Schema({
    userId:{
        type:String,
        required:true

    },
 
    doctorId:{
        type:String,
        required:true

    },
    doctorInfo:{
        type:String,
        required:true

    },
    userInfo:{
        type:String,
        required:true

    },
    date:{
        type:String,
        required:true

    },
    status:{
        type:String,
        required:true ,
        default:"pending" 
    },
    time:{
        type:String,
        required:true ,
     }
},{timestamps:true})
module.exports = mongoose.model('appoinmnetShema ', appointmentshema)
