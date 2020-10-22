import React, {useState} from "react";
import axios from "axios"
import qs from "qs"
import Cookies from "js-cookie"

import { Icon, InlineIcon } from '@iconify/react';
import lockCombination from '@iconify/icons-ion/lock-combination';
import "./style.css"

export default function SignIn(props) {
 
  // console.log(classes)

  document.title = "Authentication"
  const [authenticated,setAuthenticated] = useState(false)
  const [formState, setFormState] = useState({
    email:"",
    password:"",
    role:"",
  })

  function handleRedirect(value){
    const value= formState.role;
       if (value==="admin"){
         return("/admin")
   
     
     }
     else if (value==="organiser"){
       return("/organiser")
   
     }
     else if (value==="user"){
       return("/user")
       
     }
    }
  
  
  

  function handleFormInputChange(event){
    // console.log(formState)
        const name = event.target.name
        const value = event.target.value
        if (name==="email"){
          setFormState(prevState=>{
            return {
              email:value,
              password: prevState.password,
              role:prevState.role
            }
          })
        } else if (name==="password"){
          setFormState(prevState=>{
            return {
              email:prevState.email,
              password:value,
              role:prevState.role
            }
          })
        }
      }

  function handleSubmit(event){
    event.preventDefault()
    if(formState.email.length && formState.password.length) {
      console.log("Form Not Empty")
      const payload={
          "email":String(formState.email),
          "password":String(formState.password)
      }
    axios.post("http://localhost:3001/auth/login",qs.stringify(payload), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
    .then(res=>{
      
      setAuthenticated(true)
      Cookies.set("name", res.data.name)
      console.log(res.data.name)
      Cookies.set("auth", res.data.token)
      Cookies.set("role", res.data.role)
      //console.log(res.data.token)
      const role_v = res.data.role
      setFormState(prevState=>{
        return {
          role:role_v,
        }
      })  
      
    })
    .then(role_v =>{
      handleRedirect(role_v)
    })
    .catch(err=>{
      console.log(err)
      setAuthenticated(false)
    })

  }
}


return (
  <div>
  <div className="login-dark">
  <form method="post" className="signIn-form">
      
      <div className="illustration">
         
      <Icon className="illustration-lock" icon={lockCombination} />
      </div>
      <div className="form-group">
          <input 
              id="email"
              label="Email Address"
              autoComplete="email"
              class="form-control"
              type="email" 
              name="email" 
              placeholder="Email"
              value={formState.email}
              onChange={handleFormInputChange}></input>
      </div>
      <div className="form-group">
          <input name="password"
              class="form-control" 
              placeholder="Password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formState.password}
              onChange={handleFormInputChange}></input>
      </div>
      <div className="form-group">
          
          <button className="btn btn-primary btn-block" formAction="event.html" onClick={handleSubmit} type="submit">

              Log In
          </button>
          <br/><br/>
      </div>
      <a className="forgot" href="#">Forgot your email or password?</a>
      <a className="forgot" href="signup.html">New user? Create an account</a><br/><br/>
  </form>
</div>
</div>
)}
