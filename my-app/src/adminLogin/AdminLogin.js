import React from 'react';
import "./logStyle.css"

export default function AdminLogin(){
  let url="../adminSignUP/AdminSignUP";
  return(
    <>
    <div className="log-container container">
      <form id="form" className="log-form">
        <a href="../Admin-SignUP/index.html" className="log-sign"><h2>SIGN UP!</h2></a>
        <a href="#" className="log-log"><h2>LOGIN!</h2></a>
        <hr className="log-center-ball" />
        <div className="log-form-control form-control">
          <label for="username">UserID</label>
          <input type="text" id="userid" placeholder="Enter userid" />
          <small>Error message</small>
        </div>
        <div className="log-form-control form-control">
          <label for="password">Password</label>
          <input type="password" id="password" placeholder="Enter password" />
          <small>Error message</small>
        </div>
        <button type="submit">LOGIN</button>

        <a href={url} className="log-forg-pass"><p>Forgot Password ?</p></a>
      </form>
    </div>
    </>
  )
}
