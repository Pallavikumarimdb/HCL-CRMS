import React, { useState } from "react"
import "./SignUpStyle.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Navbar  from '../Navbar';

export default function AdminSignUP(){

  const history = useNavigate()

  const [ user, setUser] = useState({
          name: "",
          userid: "",
          email:"",
          password:"",
          reEnterPassword: ""
      })


  const handleChange = e => {
    const { name, value } = e.target
    setUser({
        ...user,
        [name]: value
    })
}

const AdminSignUP = () => {
    const { name, userid, email, password, reEnterPassword } = user
    if( name && userid && email && password && (password === reEnterPassword)){
        axios.post("http://localhost:9002/AdminSignUP", user)
        .then( res => {
            alert(res.data.message)
            history.push("/AdminLogin")
        })
    } else {
        alert("invalid input")
    }

}

  let url="../adminLogin/AdminLogin";

  return(
    <>
    <Navbar />
    <div className="signup-container">
    {console.log("User", user)}
      <form id="form" className="signup-form">
        <a href="/AdminSignUP" className="signup-sign" id="sign-id"><h2>SIGN UP!</h2></a>
        <a href="/AdminLogin" className="signup-log" id="log-id"><h2>LOGIN!</h2></a>
        <hr className="signup-center-ball" />
        <div className="signup-form-control signup-form-control">
          <label for="Name">Name</label>
          <input name="name" value={user.name} onChange={ handleChange } type="text" id="name" placeholder="Enter your name" />
          <small>Error message</small>
        </div>
        <div className="form-control signup-form-control">
          <label for="username">Government/Official ID</label>
          <input name="userid" value={user.userid} onChange={ handleChange } type="text" id="userid" placeholder="Enter userid" />
          <small>Error message</small>
        </div>
        <div className="form-control signup-form-control">
          <label for="email">Email</label>
          <input name="email" value={user.email} onChange={ handleChange } type="text" id="email" placeholder="Enter email" />
          <small>Error message</small>
        </div>
        <div className="form-control signup-form-control">
          <label for="password">Password</label>
          <input name="password" value={user.password} onChange={ handleChange } type="password" id="password" placeholder="Enter password" />
          <small>Error message</small>
        </div>
        <div className="form-control signup-form-control">
          <label for="password2">Confirm password</label>
          <input name="reEnterPassword" value={user.reEnterPassword} onChange={ handleChange } type="password" id="password2" placeholder="Renter your password"  />
          <small>Error message</small>
        </div>
      {/*  <button type="submit" onClick={AdminSignUP}>SIGN UP</button>*/}
        <div className="button" onClick={AdminSignUP}>SIGN UP</div>
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
