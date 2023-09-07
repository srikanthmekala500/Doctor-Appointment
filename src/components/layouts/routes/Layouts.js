import React from 'react'
import Herader from '../routes/Header'

import Footers from './Footers'
// import {Helmet} from "react-helmet";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 

const Layouts = ({children}) => {
 
  
  // //doctor minu
  // const doctormenu = [
  //   {
  //     name: "Home",
  //     path: "/",
  //     icon: "fa-solid fa-house",
  //   },
  //   {
  //     name: "Appointments",
  //     path: "/appointments",
  //     icon: "fa-solid fa-list",
  //   },
    
  //   {
  //     name: "Profile",
  //     path: `/doctor/Proflie/:${user?._id}`,
  //     icon: "fa-solid fa-user",
  //   },
  // ];

  // //patient minu
  // const Patientmenu = [
  //   {
  //     name: "Home",
  //     path: "/",
  //     icon: "fa-solid fa-house",
  //   },
  //   {
  //     name: "Appointments",
  //     path: "/appointments",
  //     icon: "fa-solid fa-list",
  //   },
    
  //   {
  //     name: "Profile",
  //     path: `/doctor/Proflie/:${user?._id}`,
  //     icon: "fa-solid fa-user",
  //   },
  // ];






  return (
    <div>       
    {/* Helmet is used for meta tags  */}
     {/* <Helmet>
               <meta charSet="utf-8" />
              <meta name="description" content={description} />
             <meta name="keywords" content={keywords} />
             <meta name="author" content={author}/>
             <title>{title}</title>

         
       </Helmet>
     */}
     
    
       <Herader  />
       <main style={{minHeight:"80vh"}}> <ToastContainer /> { children }
               
       </main>  
       {/* this is layouts componte */}
       {/* //using to Footers in dowm style={{minHeight:"80vh"}}  */}
    
        
      < Footers/>
     
     
       
        
       </div>
  )
}

export default Layouts