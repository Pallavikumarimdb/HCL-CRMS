import React from 'react';
import axios from "axios"
export default function Navbar(){
    return(
        <>
  <nav className="navbar background h-nav-resp">
  <div className="logo"><img src="/juslogo1.png" alt="logo"/><span class="crms-text">CRMS</span></div>
  <input type="checkbox" id="check" />
  <label for="check" class="checkbtn">
    <i class="fas fa-bars"></i>
  </label>
  <ul className="nav-list v-class-resp">
  <li><a href="/FIRform">Home</a></li>
  <li><a href="/FIRGuide">FIR-Guide</a></li>
  <li><a href="/FIROverviewComponent">Complaint Details</a></li>
  <li><a href="contact.html">Contact</a></li>
  </ul>
        </nav>
        </>
    )
}
