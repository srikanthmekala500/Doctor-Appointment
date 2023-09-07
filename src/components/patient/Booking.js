import axios from 'axios'
import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import Layouts from '../layouts/routes/Layouts'
import { DatePicker, TimePicker, message } from 'antd'
import moment from 'moment'
import {  useSelector } from 'react-redux'
import '../patient/book.css'
const Booking =  () => {
  const { user } =useSelector((state) => state.user )
const pharams = useParams()
const [doctorinfo,setDctorinfo] =useState([])
 
const [date ,setDate] =useState([])
const [time ,setTime] =useState([])

 const singledoctorinfo = async()=>{
            try {
                const res = await axios.post('http://localhost:5000/api/v1/auth/getsigledoctorinfo',{id:pharams._id},
                    {
                  
                        headers: {
                          Authorization: `Bearer ${localStorage.getItem("token")}`,
                        },
                       
                })
                if(res.data.success){
                    setDctorinfo(res.data.data)
                }
 console.log(user)

            } catch (error) {
                console.log(error)
            }
 }

const handleavliable =async ()=>{
          try {
            if(!date && !time){
              return alert("date and time is requried ")
            }
            const res = await axios.post('http://localhost:5000/api/v1/auth/bookappointment',
            {
              doctorId:pharams.doctorId,
              doctorInfo:doctorinfo,
              patientinfo:doctorinfo,
              date :date,
              time:time,
              
              
             },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
            )
            console.log(res)
            if(res.data.success){
              message.success(res.data.message)
            }
         
            
          } catch (error) {
            // error
            console.log(error)
          }
}
 

 useEffect(()=>{
    singledoctorinfo()
 },[])
          

  return (
    <Layouts>
          <div class="card p-3">
            <div class="card-header text-center p-3 m-2">
              <h1> Booking To Doctor</h1>
             </div>
            <div class="card-body">
 
                      <div className='book'>
                    
                            <div className='box p-1 m-1'>
                            <h2 className='text-leftside'> Doctor Info</h2>
                                 {
                                   doctorinfo  && (  
                                    <div className='text-leftside p-2'>
                                          <h5>name : {doctorinfo.name}</h5>
                                          <h5>fees : {doctorinfo.fees}</h5>
                                         
                                       
                                          <h5>councilHour:  {doctorinfo.councilHour}</h5>
                                          <div className='d-flex flex-column w-50'>
                                          <DatePicker format={"DD-MM-YYYY"}
                                                 onChange={(value)=>{
                                               
                                                  setDate(moment(value).format("DD-MM-YYYY"))
                                                   }}
                                                 className='conainer p-3 m-2'
                                             /> 

            <TimePicker  format="HH.MM"
              className='conainer p-3 m-2'
              onChange={(value)=>{
 
                setTime(moment(value).format("HH.mm"))
              }}
              />
                <button className='btn btn-primary mt-2'onClick={handleavliable}>booking Appointment  </button>
                                          </div>


                                    </div>
                                      
                                      
                                 )
                             }
                            </div>
                    </div>             



 
            </div>
          </div>
                    
        
   </Layouts>
  )
}

export default Booking