import React, { useState } from "react"
import "./ForgetPass.css"


export default function ForgetPassOTP(){



  return(
    <>
    <div className="log-container ">
      <form id="form" className="log-form">
        <div className="log-form-control form-control">
          <label for="username">Enter Email</label>
          <input name="userid" value="" onChange="" type="text" id="userid" placeholder="Enter email id to get otp" />
          <small>Error message</small>
        </div>
        {/* <button type="submit" onClick = {AdminLogin}>LOGIN</button> */}
        <div className="butotp" onClick="">SEND</div>
        <div className="backTolog" onClick=""><a href="/AdminLogin" className="back-sign" id="sign-id">BACK TO LOGIN</a></div>
      </form>
    </div>

    <div class="align-items-center ">
        <p class="mb-0">&copy; 2022 - 2023 | All Rights Reserved - Pallavi Kumari
          <a href="#" class="text-copy">Privacy Policy</a> |
          <a href="#" class="text-term">Terms of Use</a>
        </p>
      </div>
    </>
  )

}
