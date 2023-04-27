 const express = require('express')
 const app = express() // this is the rest objct , Calls the express function "express()" and puts new Express application inside the app variable
 const morgan = require('morgan')
 const dotenv = require('dotenv').config() //config.use_env_variable is not using for finding the models. This is used to identify which database configuration you want to use.
 const connectdb = require('./db/connectDb')
 const cors = require('cors')
 const path = require('path')
 const port = process.env.PORT

 
//middleware
app.use(express.json()) // It parses incoming JSON requests and puts the parsed data in req.body.  // Without `express.json()`, `req.body` is undefined.
app.use(morgan('dev'))
app.use(cors())

//route
app.use('/api/v1/user',require('./routes/userouter'))
app.use('/api/v1/admin',require('./routes/Adminrouter'))
app.use('/api/v1/doctor', require('./routes/doctorRoute'))
app.use(express.static(path.join(__dirname ,'./client/build')))

app.get('*',function(req,res){
    res.sendFile(path.join(__dirname ,'./client/build'))
})
app.listen(port,()=>{
    console.log(`server starting ${process.env.DEV_MODEL} ${port}`)
})