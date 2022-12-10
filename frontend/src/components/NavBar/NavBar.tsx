import React, { useEffect, useState } from 'react'
import CarRentalIcon from '@mui/icons-material/CarRental';
import HotelIcon from '@mui/icons-material/Hotel';
import { Button, Grid, Typography } from '@mui/material'
//import SignIn from './SignIn/SignIn';
import { useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import "./NavBar.css"
import { ClassNames } from '@emotion/react';
const Logo = require('../../images/logo.jpg')

const NavBar = () => {

  const {user} = useContext(AuthContext)
  const {loading ,error ,dispatch} = useContext(AuthContext)

  const [Admin,setAdmin] = useState<boolean>(false)

  useEffect(() => {
    // Update the document title using the browser API
    const activeUser= JSON.parse(localStorage.getItem('user')+'');
    console.log('local storage ',activeUser);
    
    setAdmin((activeUser != null && activeUser.isAdmin==true))
  
  },[]);
      const navigate = useNavigate();

    const navigateSignIn = () => {
        navigate('/login');
      };
    const navigateSignUp = () => {
        navigate('/signup');
    };
    const logOut =()=>{
      dispatch({type:"LOGOUT"});
      setAdmin(false)
    }
    const bookingClick =()=>{
      navigate('/checkbooking')
    }

  return (
    <div className='top'>

     <Grid className="top" item xs={10} md={5}  >
          <div >
            <Link to="/" style={{color:"inherit", textDecoration:"none"}}>
                
              <img src={Logo} alt="websiteLogo" width="200" height="140"/>
            </Link>

          </div>
          
          </Grid>

          <Grid item xs={12} md={6} sx={{alignItems:'flex-end'}}>
          <Typography variant="h6" component="div" sx={{float:'right', width:"300px"}}>
              {user ? <div className='userDiv'>
                <span >Welcome {user.username}</span>
                <Button onClick={logOut} variant="outlined" sx={{border:"1px solid black"}}>Logout</Button>
              </div> : <div className='signDiv'>
              <Button onClick={navigateSignIn} variant="outlined" sx={{border:"1px solid black",color:"black",marginRight:'10px'}} >SignIn</Button>
              <Button onClick={navigateSignUp} variant="outlined" sx={{border:"1px solid black",color:"black"}}>Register</Button>
              </div>}
              {Admin ? 
              <Button onClick={bookingClick} variant="outlined" sx={{border:"1px solid black",color:"black",marginRight:'10px', marginLeft:6}}>Check Bookings</Button>: ''}
          </Typography>
      </Grid>

                {/* <Grid item xs={12} md={12} sx={{alignItems:'flex-start'}}>
                    <Typography variant="h6" component="div" sx={{float:'left'}}>
                        <Button startIcon={<HotelIcon/>} onClick={()=>alert('Hello')} variant="outlined" color="secondary">Stays</Button>
                    </Typography>
                </Grid>  */}
    </div>
  )
}

export default NavBar
