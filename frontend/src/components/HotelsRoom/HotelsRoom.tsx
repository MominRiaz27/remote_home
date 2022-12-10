import React, { useContext, useState } from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { SearchContext } from '../../context/searchContext';
import { AuthContext } from '../../context/authContext';
import {  useNavigate } from 'react-router-dom';
import ReserveModel from '../ReserveModel/ReserveModel';
import "./HotelsRoom.css"
const room1 = require('../../images/room1.jpg')
const room2 = require('../../images/room2.jpg')
const room3 = require('../../images/room3.jpg')
//const room4 = require('../../images/room4.jpg')
const room5 = require('../../images/room5.jpg')
const room6 = require('../../images/room6.jpg')


// interface obj {
//     name: String,
//     type: String,
//     city: String,
//     address: String,
//     distance: String,
//     photos:[String]
//     title: String,
//     desc: String,
//     rooms: [String],
//     cheapestPrice:Number,
//     featured: Boolean,
// }

const HotelsRoom = (props :any) => {
  console.log(props.data.title);
  
  const {checkinvalue, checkoutvalue, destination} = useContext(SearchContext);
  const {user} = useContext(AuthContext)

  const [openModel, setOpenModel] = useState<boolean>(false)


  console.log("dates values are ",checkinvalue,checkoutvalue);
  console.log("city is ", destination);

  const navigate=useNavigate()
  

  const handelClick = ()=>{
    if (user) {
      setOpenModel(true)
    } else {
      navigate("/login")
    }
  }

    return (
    <Box  sx={{
        width: 1,
        height: '150vh',
        backgroundColor: '#ffc501',
      }}>
        <Box sx={{width:1, display:'flex',flexDirection:'row', justifyContent:'space-between'}}>
           <Stack 
            direction="column"
            justifyContent="space-between "
            alignItems="flex-start"
            spacing={2}
            sx={{padding:2,backgroundColor: 'white', width:'50%',}}
            >

            <h3>Luxurious {props.data.type}</h3>
            <p>{props.data.address}</p>
            <h4>Excellent Location {props.data.distance}m - from center</h4>
            <h4>{props.data.title}</h4>

           </Stack>
           <Stack
            direction="column"
            
            alignItems="flex-end"
            
            sx={{paddingBottom:2 , backgroundColor: 'white', width:'50%', padding:'28px'}}
            >
            <Button onClick={handelClick} sx={{color:"white", backgroundColor:"#ffc501"}}
            variant="contained">Book or Reserve 
            </Button>
            </Stack>
        </Box>

        <ImageList sx={{ width: 1, height: 380 , paddingLeft:1}} cols={3} rowHeight={164}>
          {imgdata.map((item,i) => (
            <ImageListItem key={i} sx={{height:'10px', width:'280px', overflow:'hidden'}}
            >
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt="img"
                loading="lazy"
                height='100%'
                width="100%"
                className='imgClass'
              />
            </ImageListItem>
          ))}
        </ImageList>
        
        <Box sx={{width:1, display:'flex',flexDirection:'row', justifyContent:'space-between'}}>
          <Stack
          direction="column"
          justifyContent="space-between "
          alignItems="center"
          spacing={1}
          
          sx={{paddingBottom:2,backgroundColor: 'white', width:'100%',textAlign:'center'}}
          >

          <h3>{props.data.name}</h3>
          <h3>{props.data.address}</h3>
          <p>{props.data.desc}</p>
                    
          </Stack>
          
          <Stack>

          </Stack>
        </Box>
        {openModel && <ReserveModel setOpenModel={setOpenModel} hotelId={props.data._id} hotelname={props.data.name}/>}

    </Box>
  )
}
const imgdata = [
  {img:room1},
  {img:room2},
  {img:room3},
  {img:room3},
  {img:room5},
  {img:room6},
]

export default HotelsRoom
