import React from 'react'
import CarRentalIcon from '@mui/icons-material/CarRental';
import HotelIcon from '@mui/icons-material/Hotel';
import { Button, Grid, Typography } from '@mui/material'
//import SignIn from './SignIn/SignIn';
import { useNavigate} from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate();

    const navigateSignIn = () => {
        navigate('/signin');
      };
    const navigateSignUp = () => {
        navigate('/signup');
    };
  return (
    <>
     <Grid item xs={12} md={6} >
                    <Typography variant='h6' component="div" >
                        RemoteHome.com
                    </Typography>
                </Grid>

                <Grid item xs={12} md={6} sx={{alignItems:'flex-end'}}>
                    <Typography variant="h6" component="div" sx={{float:'right'}}>
                        <Button onClick={navigateSignIn} variant="text" >SignIn</Button>
                        <Button onClick={navigateSignUp} variant="text">Register</Button>
                    </Typography>
                </Grid>

                <Grid item xs={12} md={12} sx={{alignItems:'flex-start'}}>
                    <Typography variant="h6" component="div" sx={{float:'left'}}>
                        <Button startIcon={<HotelIcon/>} onClick={()=>alert('Hello')} variant="outlined" color="secondary">Stays</Button>
                        <Button startIcon={<CarRentalIcon/>} variant="outlined">Car rentals</Button>
                    </Typography>
                </Grid> 
    </>
  )
}

export default NavBar
