import { Box, Paper } from '@mui/material'
import React from 'react'
import useFetch from '../hooks/useFetch'

const Hotel = require('../images/Hotels.jpg') 
const Appartment = require('../images/appartments.jpg')
const Villa = require('../images/villas.jpg')
const Resort = require('../images/resorts.png')

const PropertyType = () => {
  
  type dataType = {
    type:string,
    count:number
  }
  
  
  const { data, loading, error } =   useFetch("/hotels/countByType")

  console.log("this is data ",data);
  console.log("this is loading ",loading);
  
  
  const data2:dataType[]=data;
  
  const images = [Hotel, Appartment, Villa, Resort]
  return (
    <div>
      {
      loading ? "loading please wait"
      :
      <Box textAlign="center" 
            sx={{width: "100%",height: 150,
            display:"flex", flexWrap:"wrap", justifyContent:'space-between'
            }}>
              {data && data.map((d,i)=>{
                return <Paper variant="outlined"  sx={{
                  width:180,color:"white",
                  border:"5px solid #ffc501", backgroundImage: `url(${images[i]})`,backgroundSize:'cover'
              }}>
                <p><strong>No of {d.type}: {d.count}</strong></p>
                
                              
              </Paper>})
              
            
              }
            
        </Box>
        }
    </div>
  )
}

export default PropertyType
//{/* {data[i].type} */}
               //{/* {data.map(d => <div>{d.type}</div>)} */}