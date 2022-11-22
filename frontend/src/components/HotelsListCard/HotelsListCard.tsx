import { Box} from '@mui/material'
import React from 'react'
import "./HotelsListCard.css"
import Card from './paper'
//const Islamabad = require('../../images/islamabad.jpg')


const HotelsListCard = () => {
    var array = [1,2,3,4,5,6,7,8,9]
  return (
    <Box sx={{ display: 'flex', width: '100%', flexDirection:'column'}}>
         {array.map( (array, i) => <Card key={i} /> )}
    </Box>
  )
}


export default HotelsListCard


