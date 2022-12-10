import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Booking from './components/Booking/booking';
import CheckBooking from './components/CheckBooking/CheckBooking';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Home from './pages/Home';
import Hotels from './pages/Hotels';
import Rooms from './pages/Rooms';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<SignIn/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route path='/hotels' element={<Hotels/>}></Route>
          <Route path='/hotels/:id' element={<Rooms/>}></Route>
          <Route path='/bookings' element={<Booking/>}></Route>
          <Route path='/checkbooking' element={<CheckBooking/>}></Route>



        </Routes>
      </BrowserRouter>
      
  );
}

export default App;
