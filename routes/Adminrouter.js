    const express = require('express')
const authmiddleware = require('../middleware/authmiddleware')
const { getallusercontroller, getalldoctorscontroller ,accountstatuscontroller} = require('../controllers/adminCtorl')
     const router = express.Router()


//getalluser
    router.get('/getalluser',authmiddleware,getallusercontroller)
    // getalldoctor
    router.get('/getalldoctors',authmiddleware,getalldoctorscontroller)


//post account status 
router.post('/changeaccountstatus',authmiddleware,accountstatuscontroller)


    module.exports =router;