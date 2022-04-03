import React from 'react';
import "./SignUpStyle.css"
import AdminLogin from '../adminLogin/AdminLogin';

export default function AdminSignUP(){
  let url="../adminLogin/AdminLogin";

  return(
    <>
    <div className="signup-container container">
      <form id="form" className="signup-form">
        <a href="#" className="signup-sign" id="sign-id"><h2>SIGN UP!</h2></a>
        <a href={<AdminLogin />} className="signup-log" id="log-id"><h2>LOGIN!</h2></a>
        <hr className="signup-center-ball" />
        <div className="signup-form-control signup-form-control">
          <label for="Name">Name</label>
          <input type="text" id="name" placeholder="Enter your name" />
          <small>Error message</small>
        </div>
        <div className="form-control signup-form-control">
          <label for="username">Government/Official ID</label>
          <input type="text" id="userid" placeholder="Enter userid" />
          <small>Error message</small>
        </div>
        <div className="form-control signup-form-control">
          <label for="email">Email</label>
          <input type="text" id="email" placeholder="Enter email" />
          <small>Error message</small>
        </div>
        <div className="form-control signup-form-control">
          <label for="password">Password</label>
          <input type="password" id="password" placeholder="Enter password" />
          <small>Error message</small>
        </div>
        <div className="form-control signup-form-control">
          <label for="password2">Confirm password</label>
          <input
            type="password"
            id="password2"
            placeholder="Renter your password"
          />
          <small>Error message</small>
        </div>
        <button type="submit">SIGN UP</button>
      </form>
    </div>
    </>
  )
}
