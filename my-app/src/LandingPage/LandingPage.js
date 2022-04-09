import React, { useState } from "react"
import "./LandingPage.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function LandingPage(){
  var alphaNum = Math.random().toString(12).slice(2);
  const navigate = useNavigate()
          setTimeout(() => {
              navigate('/AdminLogin');
          }, 5000)

  return(
    <>
    <div className="loader-wrapper">

      <div className="load-logo">
        <p className="text-load-head">Checking your browser before accessing </p>
        <div className="loader">

          <div className="cube-grid">
            <div className="sk-cube sk-cube1"></div>
            <div className="sk-cube sk-cube2"></div>
            <div className="sk-cube sk-cube3"></div>
            <div className="sk-cube sk-cube4"></div>
            <div className="sk-cube sk-cube5"></div>
            <div className="sk-cube sk-cube6"></div>
            <div className="sk-cube sk-cube7"></div>
            <div className="sk-cube sk-cube8"></div>
            <div className="sk-cube sk-cube9"></div>
          </div>
        </div>

        <p className="long-text1">This process is automatic. Your browser will redirect to <span className="ncb">CRMS</span> shortly.</p>
        <p className="long-text2">Please allow up to 5 seconds...</p>

        <p className="long-text3">DDoS protection enabled by <span className="team-name">CRMS Team</span></p>
        <p className="long-text4">Ray ID : {alphaNum}
        </p>
      </div>
    </div>

    </>
  )

}
