import React from 'react'

import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
const Booking = () => {
    
    const navigate = useNavigate()

    const handelClick = () =>{
        navigate('/');
    }
  return (
    <div>
      Your Booking is Reserved !! Succesfully...
      <Button onClick={handelClick} sx={{color:"white", backgroundColor:"#ffc501"}}
            variant="contained">Go to main 
      </Button>
    </div>
  )
}

export default Booking
