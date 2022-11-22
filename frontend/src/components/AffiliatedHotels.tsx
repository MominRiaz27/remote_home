import React from 'react'
import { Box, Paper } from '@mui/material'
const Serena = require('../images/serenahotel.jpg')
const PC = require('../images/pchotel.jpg')
const Marriot = require('../images/marriot.png')
const Ramada = require('../images/ramada.jpg')
const Nishat = require('../images/nishat.jpg')

const AffiliatedHotels = () => {
  return (
    <Box textAlign="center" 
            sx={{display: 'flex',flexWrap:'wrap', justifyContent:'space-evenly',
            width: "100%",height: 150,flexDirection: 'column'}}>
            <Paper variant="outlined" sx={{
                width:150,
                height:150,
                borderRadius: '50%',
                border:1, backgroundImage: `url(${Serena})`,backgroundSize:'cover'
            }}></Paper>
            <Paper variant="outlined" sx={{
                width:150,
                height:150,
                borderRadius: '50%',
                border:1, backgroundImage: `url(${PC})`,backgroundSize:'cover'
            }}></Paper>
            <Paper variant="outlined" sx={{
                width:150,
                height:150,
                borderRadius: '50%',
                border:1, backgroundImage: `url(${Marriot})`,backgroundSize:'cover'
            }}></Paper>
            <Paper variant="outlined" sx={{
                width:150,
                height:150,
                borderRadius: '50%',
                border:1, backgroundImage: `url(${Ramada})`,backgroundSize:'cover'
            }}></Paper>
            <Paper variant="outlined" sx={{
                width:150,
                height:150,
                borderRadius: '50%',
                border:1, backgroundImage: `url(${Nishat})`,backgroundSize:'cover'
            }}></Paper>
            
        </Box>
  )
}

export default AffiliatedHotels
