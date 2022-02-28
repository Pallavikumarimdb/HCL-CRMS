import React from 'react';

export default function Navbar(){
    return(
        <>
  <nav className="navbar background h-nav-resp">
  <ul className="nav-list v-class-resp">
  <div className="logo"><img src="/juslogo1.png" alt="logo"/></div>
  <li><a href="index.html">Home</a></li>
  <li><a href="About.html">About</a></li>
  <li><a href="#services">Services</a></li>
  <li><a href="contact.html">Contact</a></li>
  </ul>
  <div className="rightnav v-class-resp">
  <input type="text" name="search" id="search" placeholder="Search" />
  <button className="btn btn-sm" >Search</button>
  </div>
  <div className="burger">
  <div className="line"></div>
  <div className="line"></div>
  <div className="line"></div>
  </div>
        </nav>
        </>
    )
}
