import { Button } from '@material-ui/core';
import axios from 'axios';
import React, {useState, useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import "./CheckBooking.css"


const CheckBooking = () => {
    const [ data, setData] = useState([] as any[])
    
    useEffect(() => {
      
        const seeBookings = async()=>{
            try {
                const res = await axios.get('/booking');  
                console.log(res.data);
                setData(res.data)  
            } catch (error) {
                
            }
            
        }
        seeBookings()
      
      },[]);

      const navigate = useNavigate()
      const goToMain = ()=>{
        navigate('/')
      }
  return (
    <>
    <div className='main'>
    <h2>Bookings List</h2>
    <table id="id01" className="secondmain">
           <tr className='heading'>
             <th>Customer</th>
             <th>Hotel</th>
             <th>RoomId</th>
             <th>Dates</th>
           </tr>
      {data.map((item,i)=>(
        <>
         
           <tr className="customers">
             <td className='item'>{item.userName}</td>
             <td className='item'>{item.hotelName}</td>
             <td className='item'>{item.roomId}</td>
             <td className='item'>{item.dates}</td>
             
           </tr>
           </>
      ))}
        </table>
         
      
    </div>
    <Button variant='contained' onClick={goToMain}>Go to Main</Button>
    </>

  )
}
export default CheckBooking
