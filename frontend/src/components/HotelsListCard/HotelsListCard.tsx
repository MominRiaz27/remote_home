import { Box} from '@mui/material'
import React, { useContext } from 'react'
import { Button, Paper, Typography } from '@mui/material'

import "./HotelsListCard.css"

import { Link } from 'react-router-dom'
import { SearchContext } from '../../context/searchContext'
const Islamabad = require('../../images/islamabad.jpg')
const Serena = require('../../images/Sarenaa.jpg')
const PC = require("../../images/PCC.jpg")
const Ramada = require('../../images/Ramadaa.jpg')
const Nishat = require('../../images/Nishatt.jpg')

const arr = [Serena,PC,Nishat,Ramada];

interface obj {
  _id:string,
  name: String,
  type: String,
  city: String,
  address: String,
  distance: String,
  photos:[String]
  title: String,
  desc: String,
  rooms: [String],
  cheapestPrice:number,
  featured: Boolean,
  i:number,
    
}

const HotelsListCard = (props:obj) => {
console.log("props i: ", props.i)
  console.log("this is first props ", props);
  const { checkinvalue, checkoutvalue } = useContext(SearchContext);

  const getDatesInRange = (checkinvalue:string, checkoutvalue:string) => {
    const start = new Date(checkinvalue);
    console.log("this is start date ", start)
    const end = new Date(checkoutvalue);
    console.log("this is end date ", end)

    const date = new Date(start.getTime());
    console.log("this is start time ",((start.getTime())));
    const dates = [];

    while (date <= end) {
      dates.push((date.getMonth()+1)+'/'+date.getDate()+'/'+date.getFullYear());
      date.setDate(date.getDate() + 1);
    }
    
    return dates;
  };
  // var photo = props.photos[0] as string
  // console.log('this is prop',props.photos[0])

  const allDates = getDatesInRange(checkinvalue, checkoutvalue);
  console.log("all dates array : ", allDates.length)
    //var array = [1,2,3,4,5,6,7,8,9]
  return (
    <Box sx={{ display: 'flex', width: '100%', flexDirection:'column'}}>
      <Paper 
      sx={{width:'100%',display:'flex',flexWrap: 'wrap', flexDirection:'row',justifyContent: 'space-between', border: "3px solid #ffc501", margin:'0 auto', marginBottom: 3}}>
          <div className='imgdiv'>
            <img className="theimage" src={arr[props.i]} alt="" height="250px"/>
          </div>
          <div className='detailsdiv'>
            <Typography variant='h6'>{props.name} - {props.type}</Typography>
            <Typography variant='subtitle1'>{props.distance}m from center </Typography>
            <Typography variant='subtitle2'>In the Beautiful City Of {props.city} </Typography>
            <Typography variant='subtitle2' sx={{backgroundColor:"#ffc501", color:'white', width:'150px', borderRadius:2}}>Free Basic Necessities</Typography>
            <Typography variant='subtitle2' sx={{backgroundColor:"#ffc501", color:'white', width:'150px', borderRadius:2}}>Air Conditioning</Typography>
            
            <Typography variant='subtitle2'>{props.title}</Typography>
            {/* <Typography variant='subtitle2'>{props.desc}</Typography> */}
          </div>

          <div className='actionsdiv'>
            <h3>Price and availibility</h3>
            <Typography variant='h6'>$ {allDates.length ? props.cheapestPrice*allDates.length: props.cheapestPrice*1}</Typography>
            <Typography variant='subtitle1'>Includes tax and fee</Typography>
            
            <Link to={`/hotels/${props._id}`} style={{textDecoration: 'none'}}>
            <Button variant="contained" sx={{textDecoration:"none", color:"white", backgroundColor:"#ffc501"}}>See Avalibility</Button>
            </Link>
            
          
          </div>
           
      </Paper>
         {/* {props.map( (prop, i) => <Card key={i} {...prop} /> )} */}
    </Box>
  )
}


export default HotelsListCard


