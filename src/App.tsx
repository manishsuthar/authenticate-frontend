import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import ReservationView from './components/ReservationView';
import DashboardView from './components/DashboardView';



const App = () => {

  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/reservation" element={<ReservationView />} />
          <Route path="/" element={<DashboardView />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
};

export default App;
