 
import React, { useEffect, useState } from 'react'
import '../Doctor/Doctor.css'
import Layouts from '../layouts/routes/Layouts'
import { useForm } from "react-hook-form";
import axios from 'axios';
 import { useParams } from 'react-router-dom'
import {toast} from 'react-toastify'
import {useSelector,useDispatch} from 'react-redux'
 import { setUser } from '../../redux/slice/userslice';
 
 const Doctor = ( ) => {
  const { user } =useSelector((state) => state.user )
   const pharams =useParams()
   const dispatch = useDispatch()
   const[doctor,setDoctor] =useState()
const {
  register,
  handleSubmit,
 } =useForm()

 const onSubmit =async(data)=>{
        try {
          
          
          const res = await axios.post("http://localhost:5000/api/v1/auth/profile",
          {...data,userId:pharams._id},
          // {  ...data , userId:user._id},
          // {userId:pharams._id},
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        
          
           )
       


          if(res.data){
            setDoctor(res.data)
            toast.success(res.data.message)
         }else{
          toast.error(res.data.error)
        }
        
        } catch (error) {
          console.log(error) 
          toast.error(error)
        }
 }
 const itsme = async()=>{
  try {
 
    const res = await axios.post('http://localhost:5000/api/v1/auth/itsme',
    {userId:pharams._id},
 
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
   
  
   if(res.data){
  dispatch(setUser(res.data.data))
  
    toast.success(res.data.message)
 }else{
  toast.error(res.data.error)
} 
   
  
  } catch (error) {
      console.log(error)
      
  }
 }
 
 useEffect(()=>{
   
  if(!user)  {
    itsme()
  }
  
 },[user,itsme])
  return (
    <Layouts>

 
   <div class="container p-1 mb-3 ">
      <div class="row ">
    <div class="col-sm  mx-3 shadow-lg p-3 mb-5 bg-white rounded ">
        <h5 className='text-dark'>Personal Details :</h5> 
               <div className='formcontaner  '>
                        {   <form className='frombox'onSubmit={handleSubmit(onSubmit)}nitialValues={{
                                      ...doctor,
                                  }} >  
                        <div class="form-group ">
                            <label for="exampleInputEmail1">Full Name</label>
                            <input 
                            type="text" 
                            className="form-control" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp" 
                            placeholder="Enter email"
                            {
                              ...register("name",{
                                required :[true, "password is required"]
                              })
                            }
                            />
                          </div>
                          {/* ll */}
                          <div className="form-group college">
                            <label for="exampleInputEmail1">college</label>
                            <input 
                            type="text" 
                            className="form-control" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp" 
                            placeholder="Enter college"
                            {
                              ...register("college",{
                                required :[true, "password is required"]
                              })
                            }
                            />
                            </div>

                            <div className="form-group passingYear">
                            <label for="exampleInputEmail1">passingYear</label>
                            <input 
                            type="text" 
                            className="form-control" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp" 
                            placeholder="Enter email"
                            {
                              ...register("passingYear",{
                                required :[true, "password is required"]
                              })
                            }
                            />
                            </div>

                            <div className="form-group passingYear">
                            <label for="exampleInputEmail1">specialist</label>
                            <input 
                            type="text" 
                            className="form-control" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp" 
                            placeholder="Enter specialist"
                            {
                              ...register("specialist",{
                                required :[true, "specialist is required"]
                              })
                            }
                            />
                            </div>


                            <div className="form-group currentHospital">
                            <label for="exampleInputEmail1">currentHospital</label>
                            <input 
                            type="text" 
                            className="form-control" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp" 
                            placeholder="Enter currentHospital"
                            {
                              ...register("currentHospital",{
                                required :[true, "specialist is required"]
                              })
                            }
                            />
                            </div>

                            <div className="form-group currentHospital">
                            <label for="exampleInputEmail1">country</label>
                            <input 
                            type="text" 
                            className="form-control" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp" 
                            placeholder="Enter country"
                            {
                              ...register("country",{
                                required :[true, "specialist is required"]
                              })
                            }
                            />
                            </div>


                            <div className="form-group currentHospital">
                            <label for="exampleInputEmail1">country</label>
                            <input 
                            type="text" 
                            className="form-control" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp" 
                            placeholder="Enter city"
                            {
                              ...register("city",{
                                required :[true, "specialist is required"]
                              })
                            }
                            />
                            </div>

                            <div className="form-group currentHospital">
                            <label for="exampleInputEmail1">currentAddress</label>
                            <input 
                            type="text" 
                            className="form-control" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp" 
                            placeholder="Enter currentAddress"
                            {
                              ...register("currentAddress",{
                                required :[true, "specialist is required"]
                              })
                            }
                            />
                            </div>

                            <div className="form-group currentHospital">
                            <label for="exampleInputEmail1">day</label>
                                      <select
                                name="day"
                                {...register("day", {
                                  required: "Day is required",
                                })}
                                className="form-control shadow-none"
                              >
                                <option value="saturday">Saturday</option>
                                <option value="sunday">Sunday</option>
                                <option value="monday">Monday</option>
                                <option value="tuesday">Tuesday</option>
                                <option value="wednesday">Wednesday</option>
                                <option value="thursday">Thursday</option>
                                <option value="friday">Friday</option>
                              </select>
                            </div>


                            <div className="form-group currentHospital">
                            <label for="exampleInputEmail1">startTime</label>
                                        <input
                                  type="time"
                                  name="startTime"
                                  {...register("startTime", {
                                    required: "Start time is required",
                                  })}
                                  className="form-control shadow-none"
                                />
                            </div>
                            <div className="form-group currentHospital">
                            <label for="exampleInputEmail1">endTime</label>
                            <input
                        type="time"
                        name="endTime"
                        {...register("endTime", {
                        required: "End time is required",
                        })}
                        className="form-control shadow-none"
                        />
                     </div>



    
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
}
</div>
      
    </div>
    <div class="col-sm shadow-lg p-3 mb-5 bg-white rounded ">
      One of three columns
    </div>
     
  </div>
  </div>

    </Layouts>
  )
}

export default Doctor