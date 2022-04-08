import React, { useState } from "react"
import "./logStyle.css"
import axios from "axios"

export default function AdminLogin(){
  let url="../adminSignUP/AdminSignUP";

  const [ user, setUser] = useState({
         userid:"",
         password:""
     })

     const handleChange = e => {
         const { name, value } = e.target
         setUser({
             ...user,
             [name]: value
         })
     }

     const AdminLogin = () => {
         axios.post("http://localhost:9002/AdminLogin", user)
         .then(res => {
             alert(res.data.message)
             setLoginUser(res.data.user)
             history.push("/")
         })
     }

  return(
    <>
    <div className="log-container container">
    {console.log("User", user)}
      <form id="form" className="log-form">
        <a href="#" className="log-sign"><h2>SIGN UP!</h2></a>
        <a href="#" className="log-log"><h2>LOGIN!</h2></a>
        <hr className="log-center-ball" />
        <div className="log-form-control form-control">
          <label for="username">User ID</label>
          <input name="userid" value={user.userid} onChange={ handleChange } type="text" id="userid" placeholder="Enter userid" />
          <small>Error message</small>
        </div>
        <div className="log-form-control form-control">
          <label for="password">Password</label>
          <input name="password" value={user.password} onChange={ handleChange } type="password" id="password" placeholder="Enter password" />
          <small>Error message</small>
        </div>
        <button type="submit" onClick={AdminLogin}>LOGIN</button>

        <a href={url} className="log-forg-pass"><p>Forgot Password ?</p></a>
      </form>
    </div>
    </>
  )
}
