import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Alert } from "react-bootstrap";
import "../styles/Login.css";
import { useDispatch, useSelector } from "react-redux";
import {  loginRequest } from "../redux/Auth/action";
const Login = () => {
  const navigate = useNavigate();
  const [emaillogIn, setEmaillogIn] = useState("");
  const [passwordlogIn, setPasswordlogIn] = useState("");
  const dispatch = useDispatch();
  const store = useSelector((store) => store.AuthReducer);
  
  
  
  function handleLogin(e) {
    e.preventDefault();
    var data = { email: emaillogIn.toLowerCase(), password: passwordlogIn };
    console.log(data);
      dispatch(loginRequest(data));
  }
 if(store.isAuth){
  navigate("/cart")
 }

 
  return (
    <div>
      
       
        <div id="signin_pare">
        <h3 id="sign">Login</h3>
          
          <form onSubmit={handleLogin}>
            
            <input id="mail"  type="text"
            className="formInput"
            placeholder="Email address"
            onChange={(event) => setEmaillogIn(event.target.value)}/><br/>
            <input  type="password"
            className="formInput"
            placeholder="Password"
            onChange={(event) => setPasswordlogIn(event.target.value)} /><br/>
            <input type="submit" value="SIGN IN"/><br/>
        </form>
        </div>

       

        {/* {flag && (
            //    <Alert color ="primary" variant='danger'>
            //       Please Fill Correct Info 
            //    </Alert> 
            )} */}
       
    </div>
  );
          };

export default Login;
