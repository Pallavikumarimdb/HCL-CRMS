import React from 'react';
import Navbar  from './Navbar';
import MainComponent from './MainHomePage';
import Footer from './Footer';

import AdminLogin from './adminLogin/AdminLogin';

export default function App(){
    return (
        <>
      {/*<Navbar />
        <MainComponent />
        <Footer />*/}
        <AdminLogin/>
        </>
    )
}
