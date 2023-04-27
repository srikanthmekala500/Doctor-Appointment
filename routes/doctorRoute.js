const express = require('express')
const authmiddleware = require('../middleware/authmiddleware')
const {getsingledoctorinfoctrl,updatedoctorinfoctrl,getdocotorByidctrl,} = require('../controllers/doctorctrl')
const { appointmentctrl ,bookaavilablectrl} = require('../controllers/userControl')
const router = express.Router()

///single doc info
router.post('/getsingledoctorinfo',authmiddleware,getsingledoctorinfoctrl)
//update profile
router.post('/updatedoctorinfo',authmiddleware,updatedoctorinfoctrl)
//
router.post('/getdocotorByid',authmiddleware,getdocotorByidctrl)

router.post('/bookappointment',authmiddleware,appointmentctrl)
router.post('/bookaavilable',authmiddleware,bookaavilablectrl)




module.exports =router;