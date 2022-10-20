import React from 'react'
import "./FirstScreen.css"

import Paper from '@mui/material/Paper'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


const FirstScreen = () => {
  var items = [
    {
        name: "Book your stay",
        description: "The most memorable rest time starts here"
    },
    {
        name: "Luxurious comfort",
        description: "We give you a legendary welcome, every time you come back"
    },
    {
        name:"Amaziing Staff",
        description:"We give you more of what you want and less of what you don't need"
    }
]    
  return (
    
    <Carousel autoPlay infiniteLoop>
         {items.map( (item, i) => <Item key={i} item={item} /> )}
    </Carousel>    
    
    
  )
}
function Item(props:any)
{
    return (
        <Paper sx={{backgroundColor:'none', height:"100%", background:'transparent', color:"#fff"}}>
          
            <h1>{props.item.name}</h1>
            <h1 >{props.item.description}</h1>
        </Paper>
    )
}

export default FirstScreen
    