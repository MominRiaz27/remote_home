import { Button, Grid, Typography } from '@mui/material'
import React from 'react'

const Home = () => {
    return (
        <>
            <Grid container maxWidth="md" marginX='auto'>
                <Grid item xs={12} md={6} >
                    <Typography variant='h6' component="div" >
                        RemoteHome.com
                    </Typography>
                </Grid>

                <Grid item xs={12} md={6} sx={{alignItems:'flex-end'}}>
                    <Typography variant="h6" component="div" sx={{float:'right'}}>
                        <Button variant="text" >SignUp</Button>
                        <Button variant="text">Register</Button>
                    </Typography>
                </Grid>

                <Grid item xs={12} md={12} sx={{alignItems:'flex-start'}}>
                    <Typography variant="h6" component="div" sx={{float:'left'}}>
                        <Button variant="contained" >Stays</Button>
                        <Button variant="contained">Car rentals</Button>
                    </Typography>
                </Grid>
                <Grid item xs={12} md={8} textAlign="center" sx={{marginX:'auto',border:5, backgroundImage: "url('https://cdn.pixabay.com/photo/2017/01/08/21/11/wood-1963988__340.jpg')" }} >
                    <Typography variant="h2" component="h1" >
                        Book your Stay
                    </Typography>
                    <p>
                    <p>The most memorable rest time starts here</p>
                    <p>We give you a legendary welcome, every time you come back.</p>
                    <p>We give you more of what you want and less of what you don't need.</p>

                    </p>
                </Grid>
            </Grid>
        </>
    )
}

export default Home