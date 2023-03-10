import React, { useState } from 'react'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import './RegistrationPage.css'
import registration from '../../registration.png'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { register } from '../../Store/authSlice'
import { Register } from '../../interfaces/Register'

function RegistrationPage() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipCode, setZipCode] = useState(0);
    const [country, setCountry] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch<any>();

    const setField = (input:any) =>
    {
        console.log(input.target.value);
        if(input.target.id==="firstName")
        {
            setFirstName(input.target.value);
        }
        else if(input.target.id==="lastName")
        {
            setLastName(input.target.value);
        }
        else if(input.target.id==="email")
        {
            setEmail(input.target.value);
        }
        else if(input.target.id==="password")
        {
            setPassword(input.target.value);
        }
        else if(input.target.id==="confirmPassword")
        {
            setConfirmPassword(input.target.value);
        }
        else if(input.target.id==="street")
        {
            setStreet(input.target.value);
        }
        else if(input.target.id==="city")
        {
            setCity(input.target.value);
        }
        else if(input.target.id==="state")
        {
            setState(input.target.value);
        }
        else if(input.target.id==="zipcode")
        {
            setZipCode(input.target.value);
        }
        else
        {
            setCountry(input.target.value);
        }
    }

    const submitAction = async () =>
    {
        if(firstName==="" || lastName==="" || email==="" || password==="" || confirmPassword===""||street==="" || city==="" || zipCode<9999 || country==="")
        {
            alert("All fields are required!");
            return;
        }
        if(password!==confirmPassword)
        {
            alert("Password fields do not match!");
            return;
        }
        if(email.lastIndexOf("@")!=email.indexOf("@"))
        {
            alert("Invalid email address!")
            return;
        }
        try{
            const potentialRegistration:Register = {
                firstName:firstName,
                lastName:lastName,
                email:email,
                password:password,
                street:street,
                city:city,
                state:state,
                zipCode:zipCode,
                country:country
            }
            console.log(potentialRegistration);
            await dispatch(register(potentialRegistration));
            navigate("/");
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
            <h2>Welcome to Registration!</h2>
            <div>
                <div className="centerBoxInput">
                    <div className="centerBoxInputUser">
                        <label className="centerBoxLabel">First Name</label>
                        <input id="firstName" placeholder="First Name" onChange={setField}></input><br/>
                        <label className="centerBoxLabel">Last Name</label><br/>
                        <input id="lastName" placeholder="Last Name" onChange={setField}></input><br/>
                        <label className="centerBoxLabel">Email</label><br/>
                        <input type="email" id="email" placeholder="you@email.com" onChange={setField}></input><br/>
                        <label className="centerBoxLabel">Password</label><br/>
                        <input type="password" id="password" placeholder="Password" onChange={setField}></input><br/>
                        <label className="centerBoxLabel">Confirm Password</label><br/>
                        <input type="password" id="confirmPassword" placeholder="Confirm Password" onChange={setField}></input><br/>
                        <button type="submit" className="centerBoxButton" onClick={submitAction}>Register</button>
                    </div>
                    <div className="centerBoxInputAddress">
                        <label className="centerBoxLabel">Street</label><br/>
                        <input id="street" placeholder="Street Address" onChange={setField}></input><br/>
                        <label className="centerBoxLabel">City</label><br/>
                        <input id="city" placeholder="City" onChange={setField}></input><br/>
                        <label className="centerBoxLabel">State</label><br/>
                        <input id="state" placeholder="State" onChange={setField}></input><br/>
                        <label className="centerBoxLabel">ZIP Code</label><br/>
                        <input id="zipcode" placeholder="ZIP Code" onChange={setField}></input><br/>
                        <label className="centerBoxLabel">Country</label><br/>
                        <input id="country" placeholder="Country" onChange={setField}></input><br/>
                    </div>
                    <div className="centerBoxImage">
                        <img src={registration}/>
                    </div>
                </div> 
                <h5>Have an Account? <a href="/login">Login Now!</a></h5>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default RegistrationPage