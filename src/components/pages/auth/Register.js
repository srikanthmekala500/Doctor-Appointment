import  React, { useState } from 'react';
import {Photos} from '../../../utils/Photos'

import { useForm } from "react-hook-form";
import {toast} from 'react-toastify'
import Icon from "react-icons-kit";
import { ic_done } from "react-icons-kit/md";
import axios from 'axios';
import Layouts from '../../layouts/routes/Layouts';
 const Register = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } =useForm()


  const [accounttype ,setAccounttype] = useState('patient')
  const onSubmit = async(data)=>{
          try {
              const newdata = {
                  role :accounttype,
                  name :data.name,
                  email : data.email,
                  password :data.password
              }

              const res = await axios.post('http://localhost:5000/api/v1/auth/register',newdata)
              
              if(res.status === 200){
                toast.success(res.data.message)
              }
              if (res.status === 208) {
                toast.warn(res.data.message);
              }
              // console.log(res)
          } catch (error) {
            if(error){
              toast.error(error.message);
            }
          }
  }
 
   
  return (
 
   <Layouts>
 
  <div className='h-100 d-flex align-items-center justify-content-center' > 
    {/* account Type */}
    <div className='card text-center 'style={{width: "10rem; " ,padding:"30px",margin:"60px", }}>
      
       <div className="account-type-container d-flex">
       <div className='flex-fill p-2'>
                  <div 
                      className={ accounttype === "patient"? "active account p-2":"account p-2"}
                      onClick={()=>setAccounttype("patient")}
                      >
                      <img src={Photos.patient}
                        className="img-fluid "
                        width="100" height="100"
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
                      className={ accounttype === "doctor"? "active account p-2":"account p-2"}
                      onClick={()=>setAccounttype("doctor")}
                      >
                      <img src={Photos.doctor}
                        className="img-fluid "
                        width="100" height="100"
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
{/* </div>      */}

 {/* from datils   */}
            <div className='registe-eco '>
                <form className='from' onSubmit={handleSubmit(onSubmit)}>
                    <div className='from group text-center mb-3 '>
                    <label  htmlFor="exampleInputEmail1"> 
                    <h4>Register From</h4></label>
                    <input type="Name" 
                        className="form-control  mb-2" 
                        {
                          ...register("name",{
                            required :[true, "password is required"]
                          })
                        }
                        id="exampleInputregistere" 
                        aria-describedby="emailHelp" 
                        placeholder="Enter name" 
                      
                        />
                    
                    </div>
                    <div className='from group text-center mb-3 '>
                    <input type="email" 
                          {
                            ...register("email",{
                              required :[true, "password is required"]
                            })
                          }
                        className="form-control mb-2" 
                        id="exampleInputregisters" 
                        aria-describedby="emailHelp" 
                        placeholder="Enter email" 
                        
                        />
                    </div>
                    <div className='from group text-center mb-3 '>
                    <input type="password" 
                      {
                        ...register("password",{
                          required:" password is required",
                        })
                      }
                        className="form-control mb-2" 
                        id="exampleInputregisteree" 
                        aria-describedby="emailHelp" 
                        placeholder="Enter password" 
                     
                        />
                    </div>
                  <div className='text-center mb-3'>
                  <button type="submit" className="btn btn-primary">Submit</button>
                  </div>
              </form>
            </div>
            </div>

           </div>
            </Layouts>
       
  )
}

export default Register