const mongoose = require('mongoose')




const userShema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'name is requried ']
    },
    email:{
        type:String,
        required:[true,'email is requried ']
    },
     password:{
        type:String,
        required:[true,'password is requried ']
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
    isDoctor:{
        type:Boolean,
        default:false,
    },
    notification:{
        type:Array,
        default:[],
    },
    seenotification:{
        type:Array,
        default:[],
    },
})











module.exports = mongoose.model('usermoduleshema',userShema)
 