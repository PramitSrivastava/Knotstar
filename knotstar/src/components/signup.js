
import "../stylesheets/signup.css";
import React,{ useState} from 'react';
import axios from "axios"
import {useNavigate} from "react-router-dom"

const Signup = () => {
  const navigate = useNavigate()
  const [user,setUser] = useState({
    name:"",
    email:"",
    password:"",
    reEnterPassword:""

  })
  const handleChange = e => {
    
    const { name , value} = e.target
    setUser({
       ...user,   // spread operator if we enter in name field then it will not affect other fields like password email reEnterPassword
      [name]: value
    })
  }

  const signup = () => {
    const { name , email , password , reEnterPassword} = user
    if(name && email && password && (password === reEnterPassword)){
      axios.post("http://localhost:9002/signup", user)
      .then( res => console.log(res))
    }
    else{
      alert("invalid input")
    }
  }
  return (
    <div className="common">
    <div className="signup">
      {console.log("User",user)}
      <h1>Register</h1>
      <input type="text" name="name" value={user.name} placeholder="Enter your name" onChange={handleChange}></input>
      <input type="text" name="email" value={user.email} placeholder="Enter your email" onChange={handleChange}></input>
      <input type="password" name="password" value={user.password} placeholder="Enter your password" onChange={handleChange}></input>
      <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Renter your password" onChange={handleChange}></input>
      <div className="button" onClick={() => navigate("/")}>Register</div>
      <div>if already a member</div>
      <div className="button" onClick={() => navigate("/login")}>Login</div>
    </div>
    </div>
  )
}

export default Signup