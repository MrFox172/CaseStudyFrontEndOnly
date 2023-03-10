import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import fall from '../../fall.svg';

import './FallThroughPage.css'
import { useNavigate } from 'react-router-dom';

function FallThroughPage() {
    const navigate = useNavigate();
    useEffect(()=>
    {
        setTimeout(()=>{
            navigate("/");
        },5000);
    },[])

  return (
    <div>
        <NavBar/>
            <div className="mainBody">
                <div className="fallThroughImage">
                    <img src={fall}/>
                </div>
                <div className="fallThroughContent">
                    <h2>Uh oh!</h2>
                    <h4>It looks like you took a wrong turn!</h4> 
                    <h4>Let's take you back to safety!</h4>
                    <h4>You'll be redirected in 5 seconds</h4>
                    <p>Image by <a href="https://www.freepik.com/free-vector/flat-illustration-person-shrugging_24014019.htm#query=confused%20cartoon&position=8&from_view=keyword&track=ais">Freepik</a></p>
                </div>
            </div>
        <Footer/>  
    </div>
  )
}

export default FallThroughPage