import React, { useEffect, useState } from 'react'
import Layouts from '../../layouts/routes/Layouts'
import axios from 'axios'
 import { Table } from 'antd';

 import { useParams } from 'react-router-dom'
const Appointment = () => {
const [appointment,setAppointment]=useState([])
const pharams = useParams()
const getallappointment = async ()=>{
      try {
    const res = await axios.get("http://localhost:5000/api/v1/auth/appointment",
        {
          headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
      }
        
     )
     if(res.data.success){
      setAppointment(res.data.data)
     }
        
      } catch (error) {
        console.log(error)
      }
}
useEffect(()=>{
  getallappointment()
},[])

const hanldeStatus =async()=>{
    try {
      const res = await axios.post("http://localhost:5000/api/v1/auth/status",{ doctorId:pharams.doctorId,}, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
    })
    if(res.data){
      console.log(res.data)
      getallappointment()
    }
     
    } catch (error) {
      console.log(error)
    }
}



const columns =  [
  {
      title:"ID",
      dataIndex:"_id"
  },
  {
    title:"name",
    dataIndex:"name",
    render:(text,record)=>(
      <span>
        {record.name}
      </span>
    )
     
},

{
  title:"phone",
  dataIndex:"phone",
  render:(text,record)=>(
    <span>
      {record.phone}
    </span>
  )
   
},
// {
//   title:"date & time",
//   dataIndex:"date & time",
//   render:(text,record)=>(
//     <span>
//       {moment(record.date).format("DD-MM-YYYY")}
//       {moment(record.time).format("DD-MM-YYYY")}
//     </span>
//   )
   
// },
{
  title:"status",
  dataIndex:"status",
  render:(text,record)=>(
    <span>
      {record.status}
    </span>
  )
   
},

{
  title:"Action",
  dataIndex:"Action",
  render:(text,record)=>(
     <div>
      {record.status === "pending" &&(
        <div className='d-flex'>
              <button type="button" className="btn btn-primary "
                 onClick={()=>hanldeStatus(record,"approved")} >Approved</button> 
                   <button type="button" className="btn btn-danger  ms-5"
                 onClick={()=>hanldeStatus(record,"expried")} >reject</button> 
          </div>
      )
    
       }
     </div>
  )
   
},



]
console.log(appointment)

  return (
    <Layouts>
    <h3 className='text-center'>appoinmnets</h3>
     <Table dataSource={appointment}  columns={columns} />;

   











    


    </Layouts>
  )
}

export default Appointment