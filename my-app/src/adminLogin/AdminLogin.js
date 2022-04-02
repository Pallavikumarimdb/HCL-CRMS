import React from 'react';
import "./logStyle.css"

export default function AdminLogin(){
  let url="";
  return(
    <>
    <div className="container">
      <form id="form" className="form">
        <a href="../Admin-SignUP/index.html" className="sign"><h2>SIGN UP!</h2></a>
        <a href="#" className="log"><h2>LOGIN!</h2></a>
        <hr className="center-ball" />
        <div className="form-control">
          <label for="username">UserID</label>
          <input type="text" id="userid" placeholder="Enter userid" />
          <small>Error message</small>
        </div>
        <div className="form-control">
          <label for="password">Password</label>
          <input type="password" id="password" placeholder="Enter password" />
          <small>Error message</small>
        </div>
        <button type="submit">LOGIN</button>

        <a href={url} className="forg-pass"><p>Forgot Password ?</p></a>
      </form>
    </div>
    </>
  )
}
