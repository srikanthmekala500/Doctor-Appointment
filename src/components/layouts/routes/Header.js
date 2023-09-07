import React from 'react'
import {  NavLink, useNavigate  } from 'react-router-dom'
import {Photos} from '../../../utils/Photos'
import { useSelector } from 'react-redux';
import  { Badge, message   } from 'antd';
 
const Header = () => {
  const { user } =useSelector((state) => state.user )
 const navigate =useNavigate()
  const handleLogout = () => {
    localStorage.clear();
    message.success("Logout successful")
    navigate("/login");
  };
  return (
<>
<div>
        
  <nav className="navbar navbar-expand-sm bg-light ">
  <NavLink className="nav-link" to="/">
    <img src={Photos.logo} width="40" height="40" className="d-inline-block align-top" alt=""/>
     <strong> Health </strong> 
    
    </NavLink>
   

         <div className='navbar-nav ml-auto'>
         <ul className="navbar-nav ms-auto">
            <li className="nav-item">
             <NavLink  to='/Register' className="nav-link"  >Register</NavLink>
            </li>
            <li className="nav-item">
              <NavLink  to='/Login' className="nav-link"  >Login</NavLink>
            </li>
            <li className="nav-item">
              <NavLink  to='/login' className="nav-link" onClick={handleLogout} >Logout</NavLink>
            </li>
            <hr/> 
            <li className='text-center nav-item md-10'>
           
            <Badge count={user?.notifcation.length} 
                       onClick={()=>{
                        navigate('/notification')
                       }} >
                       <i className ="fa-solid fa-bell"></i>
                       </Badge>
              <NavLink to='/profile'>Name <h5>{user?.name}
              
              
              </h5>  </NavLink>  
             
            </li>

            
            </ul>
         </div>
            
    </nav>
     
    </div>
    </>
  )
}

export default Header