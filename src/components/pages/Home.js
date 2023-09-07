import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Layouts from '../layouts/routes/Layouts'
import { Link, useNavigate } from 'react-router-dom'




const Home =  () => {
    const [doctor,setDctor] = useState('')
    const navigate = useNavigate()
    
    const getalldoctor =async()=>{
      
            try {
                  const res = await axios.get('http://localhost:5000/api/v1/auth/getalldoctorctrl',
            
              
                  {
                    headers: {
                      Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                  })
                  console.log(res)
              
                if(res.data.success){
                  setDctor(res.data.data)
                }

              } catch (error) {
                console.log(error)
                  
                }
}
  
useEffect(()=>{
    getalldoctor()
},[])
 







  return (
    <Layouts>
 <h1 className='text-center'>Doctorslist</h1>
     <h3 className='text-center'>Login is Required</h3> 
 {
     doctor &&      doctor.map((e)=>{
              const {name ,id ,email,specialist,Phone}= e
            return  (
       
              <div key={id} className='card-header  'style={{width:"18rem",padding:"30px",margin:"60px",}} onClick={()=>navigate(`/doctor/book-appointment/${e._id}`)}>
                    <div className='card-header'>
          Dr.{e.name}
        </div>
        <div className='card-body'>
        <p>
            <b>Email : </b>{e.email }

          </p>
          <p>
            <b>Specializtion: </b>{e.specialist  }

          </p>
         
          <p>
            <b>Experience : </b>{e.feespercunsaltion }

          </p>
          <p>
            <b>feespercunsaltion : </b>{e.feespercunsaltion }

          </p>
          <p>
            <b> Phone : </b>{e.phone }

          </p>
           


        </div>
              
                   </div>
              
              
          
            )
                
 
            
            
            
             
       
            
          })
         }


    

     
    </Layouts>
  )
}

export default Home