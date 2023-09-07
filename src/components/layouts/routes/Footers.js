import React from 'react'
import { Link } from 'react-router-dom'

const Footers = () => {
  return (
    <div className='bg-light text-dark p-3'>
    <h4 className='text-center'>all Right reserved  &copy; srikanthmekala</h4>
    <p className=' footer'>
      <Link to='/about'>About</Link>
      |
      <Link to='/contact'>Contact</Link>
      |
      <Link to='/policy'>Privacy policy</Link>



    </p>
      </div>
  )
}

export default Footers