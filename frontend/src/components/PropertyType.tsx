import { Box, Paper } from '@mui/material'
import React from 'react'

const Hotel = require('../images/Hotels.jpg') 
const Appartment = require('../images/appartments.jpg')
const Villa = require('../images/villas.jpg')
const Resort = require('../images/resorts.png')

const PropertyType = () => {
  return (
    <div>
      <Box textAlign="center" 
            sx={{width: "100%",height: 150,
            display:"flex", flexWrap:"wrap", justifyContent:'space-between'
            }}>
            <Paper variant="outlined" sx={{
                width:180,
                border:5, backgroundImage: `url(${Hotel})`,backgroundSize:'cover'
            }}>Hotels</Paper>
            <Paper variant="outlined" sx={{
                width: 180,
                border:5, backgroundImage: `url(${Appartment})`,backgroundSize:'cover'
            }}>Appartments</Paper>
            <Paper variant="outlined" sx={{
                width:180,
                border:5, backgroundImage: `url(${Villa})`,backgroundSize:'cover'
            }}>Villas</Paper>
            <Paper variant="outlined" sx={{
                width:180,
                border:5, backgroundImage: `url(${Resort})`,backgroundSize:'cover'
            }}>Resorts</Paper>
        </Box>
    </div>
  )
}

export default PropertyType
