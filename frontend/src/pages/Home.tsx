import {  Grid } from '@mui/material'
import React from 'react'

//import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import FirstScreen from '../components/FirstScreen/FirstScreen';
import FamousDestinations from '../components/FamousDestinations';
import SearchBar from '../components/SearchBar/SearchBar';
import PropertyType from '../components/PropertyType';
import AffiliatedHotels from '../components/AffiliatedHotels/AffiliatedHotels';
import NavBar from '../components/NavBar/NavBar';


const Home = () => {
    
    return (
        <>
            <Grid container maxWidth="xl" style={{ color: 'black', backgroundColor: '#ffc501' }}>
            <NavBar/>
              <Grid container maxWidth="lg" marginX='auto' style={{ color: 'black', backgroundColor: 'black' }}>
                 

                <Grid item xs={12} md={12} sx={{backgroundSize:'cover', backgroundImage: "url('https://preview.colorlib.com/theme/marian/assets/img/hero/h1_hero.jpg.webp')", cover:'fit' }}>   
                    <Grid item xs={12} md={12} textAlign="center" sx={{paddingTop:10, paddingBottom:10, margin:'auto', borderBottom:"5px solid #ffc501",borderTop:"15px solid black", background:'transparent', backgroundColor:'rgba(0,0,0,0.5)'}} >
                         <FirstScreen/> 
                    </Grid>
                </Grid>

                <Box sx={{margin:'auto',marginTop:"-30px"}}>
                    <SearchBar/>
                </Box>

                <Grid item xs={12} md={12} sx={{padding:"30px", marginX:'auto', marginTop:"50px", color:" #ffc501"}}>
                <h2>Famous Destinations</h2>

                <FamousDestinations />
                
                </Grid>
                
                <Grid item xs={12} md={12} sx={{padding:"30px", margin:'auto', flexDirection: 'column' , color:"#ffc501"}}>
                <h3>Explore with property type</h3>
                <PropertyType/>
                </Grid>

                <Grid item xs={12} md={12} sx={{padding:"30px", margin:'auto', flexDirection: 'column', color:"#ffc501" }}>
                <h3>Affiliated classic hotels</h3>
                  <AffiliatedHotels/>
                </Grid>
              </Grid>
            </Grid>
        </>
    )
}

export default Home