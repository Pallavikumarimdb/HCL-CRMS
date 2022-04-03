import React from 'react';
import Navbar  from './Navbar';
import MainComponent from './MainHomePage';
import Footer from './Footer';
import AdminSignUP from './adminSignUP/AdminSignUP';
import AdminLogin from './adminLogin/AdminLogin';
import FIRform from './FIRform/FIRform';

export default function App(){
    return (
        <>
      <Navbar />
      {/*  <MainComponent />
        <AdminSignUP/>*/}
        <FIRform/>
        <Footer />
        </>
    )
}
