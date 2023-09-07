import React, { useState } from 'react'
import {Photos} from '../../../utils/Photos'
import { useForm } from "react-hook-form";
import Icon from "react-icons-kit";
import { ic_done } from "react-icons-kit/md"
import jwt_decode from "jwt-decode";
 import { useNavigate  } from 'react-router-dom';
import axios from 'axios';
import Layouts from '../../layouts/routes/Layouts';
 import { message } from 'antd';
 

const Login = () => {
  const navigate = useNavigate();
   const  {
    register,
    handleSubmit,
    formState: { errors },
  } =useForm()

  const [accounttype,setAccounttype  ] = useState("patient")
  const token =  localStorage.getItem("token")
  
  const checktherole = (token)=>{
    const decode = jwt_decode(token)
    const role = decode.role
    const id = decode.id
    localStorage.setItem("id", id);
    if(role ==="super-admin "|| role ==="admin"){
      return navigate('/home/super-admin')
    }
    if(role ==="patient"){
      message.success("login successful")
       
       return navigate('/patient')  
    }
    if(role === "doctor"){
      
      message.success("login successful")
      
      return  navigate('/doctor')
     
    }
    

  }
  if (token) {
    checktherole(token);
  } 
   
const onSubmit =async(data)=>{
     try {
      const newobject ={
        role :accounttype,
        email:data.email,
        password :data.password
      
      }
      console.log(newobject)
 const res = await axios.post('http://localhost:5000/api/v1/auth/login',newobject)
  
      if(res.status === 200){
        localStorage.setItem("token", res.data.token);
        checktherole(res.data.token)

       
       
        
      }else{
        message.error(res.data.message)
      }

    } catch (error) {
      if(error){
       
       message.error("Email & Password Wrong")
      }

    }
}

  return (
   <Layouts>
    <div className="h-100 d-flex align-items-center justify-content-center  "     style={{width: "10rem; " ,padding:"10px",margin:"30px", }}  > 
    <div className="flex-center flex-column ">
              <div className='container '    style={{width: "18rem; " ,padding:"30px",margin:"60px", }}  >
              <div className='login text-center'   >
                   <div className='card text-center 'style={{width: "10rem; " ,padding:"30px",margin:"60px", }}>
                    <div className='account-type-container d-flex'>
                        <div className=' flex-fill p-2'>
                              <div 
                                  className={ accounttype === "patient"}
                                  onClick={()=>setAccounttype("patient")}
                                  >
                                  <img src={Photos.patient}
                                    className="img-fluid "
                                    width="100" height="90"
                                    alt="..."
                                    />
                                    <p>Patient</p>
                                    {accounttype === "patient" ?
                                    
                                    (<Icon
                                        icon={ic_done}
                                        size={26}
                                        className="done-icon shadow"
                                      />
                                    ):null}

                              </div>
                        </div>
                        <div className='flex-fill p-2'>
                              <div 
                                  className={accounttype === "doctor"}
                                  onClick={()=>setAccounttype("doctor")}
                                  >
                                  <img src={Photos.doctor}
                                    className="img-fluid "
                                    width="120" height="200"
                                    alt="..."
                                    />
                                    <p>doctor</p>
                                    {accounttype === "doctor" ?
                                    
                                    (<Icon
                                        icon={ic_done}
                                        size={26}
                                        className="done-icon shadow"
                                      />
                                    ):null}

                              </div>
                              </div>
                        </div>
                              <div className='register-login' >
                                  <form onSubmit={handleSubmit(onSubmit)}>
                                  <label  htmlFor="exampleInputEmail1"> <h4>login From</h4>
                                  </label>
                                      <div className="from group text-center mb-3 ">
                                          <input
                                            type="email"
                                            name="email"
                                            {...register("email" )}
                                            className={
                                              errors.email
                                                ? "form-control shadow-none danger-border"
                                                : "form-control shadow-none"
                                            }
                                            placeholder="Enter your email"
                                          />
                                    </div>
                                    <div className="from group text-center mb-3 ">
                                          <input
                                            type="password"
                                            name="password"
                                            {...register("password")}
                                            className={
                                              errors.password
                                                ? "form-control shadow-none danger-border"
                                                : "form-control shadow-none"
                                            }
                                            placeholder="password"
                                          />
                                    </div>
                                    <div className='text-center mb-3'>
                                      <button type="submit" className="btn btn-primary">login</button>
                              </div>
                                </form>
                              </div>
                    </div>  
                  </div>
                </div> 
                </div>
                </div>
    </Layouts>
  )
}

export default Login