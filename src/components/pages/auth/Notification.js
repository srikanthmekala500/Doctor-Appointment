import React from 'react'
 import Layouts from '../../layouts/routes/Layouts';
import { Tabs, message } from 'antd'
 import {useSelector} from 'react-redux'
 import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
 
const Notification = () => {
  const pharams =useParams()
    const navigate =useNavigate()
    const { user } =useSelector((state) => state.user )
    
    const handlemarked = async()=>{
      try {
         
          const res = await axios.post("http://localhost:5000/api/v1/auth/get-all-notification",{userId:pharams._id},{
              headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
          })
         console.log(res)
          if(res.data.success){
              message.success(res.data.message)   
          }else{
              message.error(res.data.message)
          }
           

      } catch (error) {
       
        console.log(error)
        message.error("something went worng")
          
      }
}

const handledelete =async()=>{
  try {
     
      const res = await axios.post("http://localhost:5000/api/v1/auth/get-all-notification",{userId:pharams._id},{
          headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
      })
    console.log(res)
      if(res.data.success){
          message.success(res.data.message)   
      }else{
          message.error(res.data.message)
      }

  } catch (error) {
    
        console.log(error)
        message.error("something went worng")
  }
}
  return (
      <Layouts> 
    <h4 className='p-10 m-10 text-center'>Notifications</h4>
    <Tabs>
        <Tabs.TabPane tab='unRead' key={0}>
            <div className='d-flex justify-content-end'>
                    <h4 className='p-3' onClick={handlemarked}>marked</h4>
            </div>
            {
                user?.notifcation.map((notificationMsg)=>(
                    <div className='card'
                   
                    style={{cursor:"pointer"}}>

                        <div className='card-text' 
                         onClick={() =>navigate(notificationMsg.onClickpath)}>
                            {notificationMsg.message}
                        </div>

                    </div>
                ))


            }
        </Tabs.TabPane>
        <Tabs.TabPane tab='Read' key={1}>
            <div className='d-flex justify-content-end'>
                    <h4 className='p-3' onClick={handledelete}>delete</h4>
                    
            </div>

            {
                user?.seennotification.map((notificationMsg)=>(
                    <div className='card'
                   
                    style={{cursor:"pointer"}}>

                        <div className='card-text' 
                         onClick={() =>navigate(notificationMsg.onClickpath)}>
                            {notificationMsg.message}
                        </div>

                    </div>
                ))


            }
        </Tabs.TabPane>
    
    
    </Tabs>
 </Layouts>
   
  )
}

export default Notification