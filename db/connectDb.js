const mongoose = require('mongoose')
const connectdb = mongoose.connect('mongodb://127.0.0.1:27017/Doctor')
.then(()=>{
    console.log("connect successful")
}).catch((err)=>{
    console.log(err)
})

module.exports = connectdb



// const mongoose = require("mongoose")
// const connectdb =  
// mongoose.connect('mongodb://127.0.0.1:27017/ecommerce')
//         .then(()=>{
//         console.log("connect successful")
//         }).catch((err)=>{
//         console.log(err)
// }) 

// module.exports = connectdb