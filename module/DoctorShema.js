const mongoose = require('mongoose')

const Doctorshema = new mongoose.Schema({
            userId:{
                type:String,
            },
            firstname:{
                type:String,
                required:[true,"frist is required "]
            },
            lastname:{
                type:String,
                required:[true," lastname is required "]
            },
            phone:{
                type:String,
                required:[true," phoneis required "]
            },
            email:{
                type:String,
                required:[true," email is required "]
            },
            website:{
                type:String,
             },
             address:{
                type:String,
                required:[true," address is required "]
            },
            specializtion:{
                type:String,
                required:[true," specializtion is required "]
            },
            experience:{
                type:String,
                required:[true,"experience is required "]
            },
            feespercunsaltion :{
                type:Number,
                required:[true,"fee is required "]
            },
            status:{
                type:String,
                default:"pending"
            },
            timings:{
                type:Object,
                // required:[true,"timings is required "]
            },
            
},{timestamps:true})


module.exports = mongoose.model('DoctorShema',Doctorshema)
