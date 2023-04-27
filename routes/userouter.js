const express = require('express')
const {logincontroller,registercontroller, authcontroller,applydoctorcontroller,getallnotidoctorcontroller,deleteallnotidoctorcontroller,getalldoctorctrl} =require('../controllers/userControl')
const authmiddleware = require('../middleware/authmiddleware')

const router =express.Router()


//rouet login
router.post('/login',logincontroller)

//roter register 
router.post('/register',registercontroller )
//auth ||post 
router.post('/getUerdata',authmiddleware ,authcontroller  )

//apply doctor

router.post('/apply-doctor',authmiddleware ,applydoctorcontroller  )

//notification 
router.post('/get-all-notification',authmiddleware ,getallnotidoctorcontroller  )
// delete notification
router.post('/delete-all-notification',authmiddleware ,deleteallnotidoctorcontroller  )

router.get('/getalldoctor',authmiddleware,getalldoctorctrl)










module.exports =router;