import React from 'react'
import {  Grid } from '@mui/material'
import NavBar from '../components/NavBar/NavBar';
import { useLocation } from "react-router-dom";
import useFetch from '../hooks/useFetch';
import HotelsRoom from '../components/HotelsRoom/HotelsRoom';

type obj  = {
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

const Rooms = () => {

  const location = useLocation();
  const id = location.pathname.split("/")[2];
  console.log(location);
  console.log(id);

  const { data, loading, error } = useFetch(`/hotels/find/${id}`);
  
  console.log("hotel fetch data" , data);

  return (
    <>
      <Grid container maxWidth="xl" style={{ color: 'black', backgroundColor: '#ffc501' }}>
        <NavBar/>
      </Grid>
      <Grid maxWidth="xl" marginX="auto" sx={{backgroundColor:"black"}}>
          <Grid maxWidth="md" marginX="auto">
            {loading?"loading please wait" 
            :
            <>
              <HotelsRoom  data={data}/>
            </>
            }
            {/* <HotelsListCard /> */}
          </Grid>
      </Grid>
      
    </>
  )
}

export default Rooms
