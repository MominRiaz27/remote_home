import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Hotels from './components/Hotels';
import Rooms from './components/Rooms';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/hotels' element={<Hotels/>}></Route>
          <Route path='/hotels:id' element={<Rooms/>}></Route>

        </Routes>
      </BrowserRouter>
      
  );
}

export default App;
