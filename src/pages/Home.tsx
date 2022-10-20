import {  Grid } from '@mui/material'
import React from 'react'


//import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import FirstScreen from '../components/FirstScreen';
import FamousDestinations from '../components/FamousDestinations';
import SearchBar from '../components/SearchBar';
import PropertyType from '../components/PropertyType';
import AffiliatedHotels from '../components/AffiliatedHotels';
import NavBar from '../components/NavBar';



const Home = () => {
    

    return (
        <>
            <Grid container maxWidth="md" marginX='auto'>
                 <NavBar/>

                <Grid item xs={12} md={12} sx={{backgroundSize:'cover', backgroundImage: "url('https://preview.colorlib.com/theme/marian/assets/img/hero/h1_hero.jpg.webp')", cover:'fit' }}>   
                    <Grid item xs={12} md={12} textAlign="center" sx={{paddingTop:10, paddingBottom:10, margin:'auto', border:5, background:'transparent', backgroundColor:'rgba(0,0,0,0.5)'}} >
                         <FirstScreen/> 
                    </Grid>
                </Grid>

                <Box sx={{margin:'auto',marginTop:"-30px"}}>
                    <SearchBar/>
                </Box>

                <Grid item xs={12} md={12} sx={{marginX:'auto', marginTop:"50px"}}>
                <h3>Famous Destinations</h3>

                <FamousDestinations />
                
                </Grid>
                
                <Grid item xs={12} md={12} sx={{margin:'auto', flexDirection: 'column'}}>
                <h3>Explore with property type</h3>
                <PropertyType/>
                </Grid>

                <Grid item xs={12} md={12} sx={{margin:'auto', flexDirection: 'column' }}>
                <h3>Affiliated classic hotels</h3>
                  <AffiliatedHotels/>
                </Grid>
            </Grid>
        </>
    )
}

export default Home