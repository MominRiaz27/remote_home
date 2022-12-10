import React from 'react'
import { Box, Paper } from '@mui/material'
const Serena = require('../../images/serenahotel.jpg')
const PC = require('../../images/pchotel.jpg')
const Marriot = require('../../images/marriot.png')
const Ramada = require('../../images/ramada.jpg')
const Nishat = require('../../images/nishat.jpg')

const arr =[Serena,PC,Marriot,Ramada,Nishat];
const AffiliatedHotels = () => {
  return (
    <Box textAlign="center" 
            sx={{display: 'flex',flexWrap:'wrap', justifyContent:'space-between',
            width: "100%",height: 150}}>
                
                {arr.map((item,i)=>{
                    return <Paper key={i} variant="outlined" sx={{
                        width:150,
                        height:150,
                        borderRadius: '50%',
                        border:"2px solid #ffc501", backgroundImage: `url(${item})`,backgroundSize:'cover'
                    }}></Paper>
                })}
            
            
            
        </Box>
  )
}

export default AffiliatedHotels
