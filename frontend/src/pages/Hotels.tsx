import { Box, Grid } from '@mui/material'
import React from 'react'
import HotelsListCard from '../components/HotelsListCard/HotelsListCard'
import NavBar from '../components/NavBar'
import SearchBar from '../components/SearchBar'
const Hotels = () => {
  return (
    <>
      <Grid container maxWidth="md" marginX="auto" >
        <NavBar/>
      </Grid>
      <Box sx={{margin:'auto'}}>
            <SearchBar/>
      </Box>
      <Grid maxWidth="md" marginX="auto">
        <HotelsListCard/>
      </Grid>
    
    </>
  )
}

export default Hotels
