import { Box, Grid } from '@mui/material'
import React from 'react'
import { useLocation } from 'react-router-dom'
import HotelsListCard from '../components/HotelsListCard/HotelsListCard'
import NavBar from '../components/NavBar/NavBar'
import SearchBar from '../components/SearchBar/SearchBar'
import { useState } from 'react';
import useFetch from '../hooks/useFetch'

interface obj {
  name: String,
  type: String,
  city: String,
  address: String,
  distance: String,
  photos:[String]
  title: String,
  desc: String,
  rooms: [String],
  cheapestPrice:Number,
  featured: Boolean,
    
}


const Hotels = () => {
  
  const location = useLocation()
  console.log(location)

  const [destination, setDestinations] = useState(location.state.destination);
  const [checkinvalue, setcheckinValue] = React.useState<Date | null>(location.state.checkinvalue);
  const [checkoutvalue, setcheckoutValue] = React.useState<Date | null>(location.state.checkoutvalue);
  const [options, setOptions]= useState(location.state.option)
 console.log("des ye a rai ha",destination)
  const { data, loading, error } =   useFetch(`/hotels?city=${location.state.destination}`)
  console.log("data that we're getting ", data)


  return (
    <>
      <Grid container maxWidth="xl" style={{ color: 'black', backgroundColor: '#ffc501' }}>
            <NavBar/>
      </Grid>
      <Grid container maxWidth="xl" style={{ color: 'black', backgroundColor: '#000000' }}>
          <Box sx={{margin:'auto',padding:"20px"}}>
                <SearchBar des={destination} inDate={checkinvalue} outDate={checkoutvalue}/>
          </Box>
          <Grid maxWidth="lg" marginX="auto">
            {loading?"loading please wait" 
            :
            <>{data.map((value,i)=>(
              <HotelsListCard  {...value} i={i} />
            ))}</>
            }
        </Grid>
        {/* <HotelsListCard /> */}
      </Grid>
    
    </>
  )
}

export default Hotels
