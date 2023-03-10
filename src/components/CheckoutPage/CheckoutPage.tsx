import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { UserResponse } from '../../interfaces/UserResponse'
import Cart from '../Cart/Cart'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import './CheckoutPage.css'

function CheckoutPage() {
  const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipCode, setZipCode] = useState<number>(0);
    const [country, setCountry] = useState("");
    const [creditCardMain, setCreditCard] = useState<number>(0);
    const [creditCardSec, setSecurity] = useState<number>(0);
    const currentUser:UserResponse = useSelector((state:any)=>state.auth.currentUser);
    

  const setField = (input:any) =>
    {
        console.log(input.target.value);
        if(input.target.id==="street")
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
        else if(input.target.id==="creditcard")
        {
          setCreditCard(input.target.value);
        }
        else if(input.target.id==="security")
        {
          setSecurity(input.target.value);
        }
        else
        {
            setCountry(input.target.value);
        }
    }

    const submitAction = async () =>
    {
        if(street==="" || city==="" || zipCode<9999 || country==="")
        {
            alert("All shipping address fields except for State are required!");
            return;
        }
        if(creditCardMain<=999999999999999||creditCardMain>9999999999999999)
        {
          alert("This is not a valid credit card.")
          return;
        }
        if(creditCardSec<100||creditCardSec>999)
        {
          alert("This is not a valid security key.")
          return;
        }

        try{
          
        }
        catch(error)
        {
          console.log(error)
        }
    }

    const loggedInDisplay = () =>
    {
      
      if(currentUser.id!=-1) //purposefully turned off for now.
      {
        return (<>
          <div className="button">
          <button onClick={submitAction}>Finalize Purchase</button>
          </div>
        </>);
      }
      else
      {
        return (<>
            <div>
              <h2>You are currently not signed in.</h2>
              <h3>To complete your order, <a href="/register">Register</a> or <a href="/login">Login</a></h3>
            </div>
            </>);
      }
    }

    const fillWithPrimary = () =>
    {
      //to be finished later
    }




  return (
    <div>
      <NavBar/>
        <div className="checkOutMain">
          <div className="checkOutMainCart">
            <Cart/>
          </div>
          <div className="checkOutMainShipping">
            <h2>Shipping Address</h2>
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
          <div className="checkOutMainConfirm">
            <h2>Purchase Options</h2>
            <label className="centerBoxLabel">Credit Card Number</label><br/>
            <input id="creditcard" placeholder="0000 0000 0000 0000" onChange={setField}></input><br/>
            <label className="centerBoxLabel">Security Code</label><br/>
            <input id="security" placeholder="000" onChange={setField}></input><br/>
            {loggedInDisplay()}
          </div>
        </div>
      <Footer/>
    </div>
  )
}

export default CheckoutPage