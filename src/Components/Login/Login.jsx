import React, {useState} from "react";

import axios from "axios"
import qs from "qs"
import {Redirect} from "react-router-dom"
import Cookies from "js-cookie"
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

// import "../style.css"

export default function SignIn(props) {
 
  // console.log(classes)

  document.title = "Authentication"
  const [authenticated,setAuthenticated] = useState(false)
  const [formState, setFormState] = useState({
    email:"",
    password:"",
    role:"",
  })

  function handleRedirect(){
 const value = formState.role;
    if (value==="admin"){
      return ("/admin")

  
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
              password: prevState.password
            }
          })
        } else if (name==="password"){
          setFormState(prevState=>{
            return {
              email:prevState.email,
              password:value
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
      handleRedirect() 
    })

    .catch(err=>{
      console.log(err)
      setAuthenticated(false)
    })

  }
}


  return (
    <div>

    <div className="SignIn">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div>
          
          <form  noValidate>
            <TextField
              
              
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              
              value={formState.email}
              onChange={handleFormInputChange}
            /><br/>
            <TextField
              
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formState.password}
              onChange={handleFormInputChange}
            /><br/>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /><br/><br/>
            <Button
              onClick={handleSubmit}
              type="submit"
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
  
        </Box>
      </Container>
    </div>
    {authenticated && <Redirect to= {handleRedirect}></Redirect>}
   
    </div>
  );
}
