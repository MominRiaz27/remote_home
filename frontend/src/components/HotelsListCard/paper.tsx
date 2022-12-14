import React from 'react'
import { Button, Paper, Typography } from '@mui/material'
const Islamabad = require('../../images/islamabad.jpg')

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


const paper = (prop : obj) => {
  console.log("this is one ",prop)
  return (
    <>
     <Paper sx={{width:'100%',display:'flex',flexWrap: 'wrap', flexDirection:'row',justifyContent: 'space-between', border: "3px solid #dca73a", margin:2}}>
          <div className='imgdiv'>
            <img className="theimage" src={Islamabad} alt="" />
          </div>
          <div className='detailsdiv'>
            <Typography variant='h6'>{prop.name}</Typography>
            <Typography variant='subtitle1'>500m from center </Typography>
            <Typography variant='subtitle2'>Studio Appartment with air conditioning</Typography>
            <Typography variant='subtitle2'>Entire Studio 1 bathroom 21m 1 full bed</Typography>
          </div>

          <div className='actionsdiv'>
            <span>Ratings</span>
            <Typography variant='h6'>$ 112 </Typography>
            <Typography variant='h6'>Includes tax and fee</Typography>
            <Button>See Avalibility</Button>
          </div>
           
      </Paper> 
    </>
  )
}

export default paper
