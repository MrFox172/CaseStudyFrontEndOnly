import React, { useState } from 'react'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import './LoginPage.css'
import Allmart from '../../Allmart.png'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../Store/authSlice'
import { Login } from '../../interfaces/Login'

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch<any>();
    const status = useSelector((state:any)=>state.auth.status);
    const setField = (input:any) =>
    {
        console.log(input.target.value);
        if(input.target.id==="email")
        {
            setEmail(input.target.value);
        }
        else
        {
            setPassword(input.target.value);
        }
    }

    const submitAction = async () =>
    {
        if(email==="" || password==="")
        {
            alert("All fields are required!");
            return;
        }
        if(email.lastIndexOf("@")!=email.indexOf("@"))
        {
            alert("Invalid email address!")
            return;
        }
        let potentialUser:Login = {email:email,password:password};
        try{
            await dispatch(login(potentialUser));
            if(status!="Failed")
            {
                navigate("/");
            }
            else
            {
                alert("Failed to Login");
            }
        }
        catch(error)
        {
            console.log(error);
        }
    }


  return (
    <div>
        <NavBar/>
        <div className="centerBox">
            <h2>Welcome Back!</h2>
            <div className="centerBoxContentLogin">
                <div className="centerBoxInputLogin">
                    <label className="centerBoxLabelLogin">Email</label><br/>
                    <input type="email" id="email" placeholder="you@email.com" onChange={setField}></input><br/>
                    <label className="centerBoxLabelLogin">Password</label><br/>
                    <input type="password" id="password" placeholder="password" onChange={setField}></input><br/>
                    <button type="submit" className="centerBoxButtonLogin" onClick={submitAction}>Login</button>
                    <h5>Don't have an account? <a href="/register">Register Now!</a></h5>
                </div>
                <div className="centerBoxImageLogin">
                    <img src={Allmart}></img>
                </div>
            </div>
            
        </div>
        <Footer/>
    </div>
  )
}

export default LoginPage