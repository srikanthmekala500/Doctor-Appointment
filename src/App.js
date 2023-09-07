 import './App.css';
 import React from 'react'
 import{  Route,Routes} from 'react-router-dom'
 import Register from './components/pages/auth/Register';
import Login from './components/pages/auth/Login';

//  import Privateroute from './components/PrivateRoute/PrivateRoute'
import Doctor from './components/Doctor/Doctor';
import Patient from './components/patient/Patient';
// import Doctorlist from './components/Doctor/Doctorlist';
import Home from './components/pages/Home';
import Booking from './components/patient/Booking';
import Notification from './components/pages/auth/Notification';
import Appointment from './components/pages/auth/Appointment';
 

function App() {
  
  return (
     <>
  
   
     
    <Routes>
     
       <Route path='/Register' element={  <Register/>}/> 
       <Route path='/login' element={  <Login/>}/> 
       <Route path='/login' element={  <Login/>}/> 
       <Route path='/doctor' element={  <Doctor/>}/> 
       <Route path='/patient' element={  <Patient/>}/> 
       <Route path='/' element={  <Home/>}/> 
       <Route path='/doctor/book-appointment/:doctorId' element={  <Booking/>}/> 
       <Route path='/notification' element={  <Notification/>}/> 
       <Route path='/getallappointment' element={  <Appointment/>}/> 
 
 
   
     </Routes>
     
    
     </>
     
      
  );
}

export default App;
