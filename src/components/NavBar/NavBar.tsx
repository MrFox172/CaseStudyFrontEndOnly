import React, { Dispatch, useEffect, useState } from 'react';
import './NavBar.css';
import logo from '../../logo.svg';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AnyAction } from 'redux';
import { useSelector } from 'react-redux/es/exports';
import { UserResponse } from '../../interfaces/UserResponse';
import axios from 'axios';
import cart from '../../cart.jpg';
import { getUserFromLocal } from '../../Store/authSlice';

export default function NavBar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const currentUser:UserResponse = useSelector((state:any)=>state.auth.currentUser);
    const [flag, setFlag] = useState<any>();

    const flagPicture = async () =>
    {
      const response = await axios.get(`https://countryflagsapi.com/svg/${currentUser.country}`)
      if(response.status == 200)
      {
        console.log(response.data);
        setFlag(response.data)
        return (response.data as SVGElement);
      }
      else
      {
        return (<p>No country selected</p>)
      }
    }

    const goHome = () =>
    {
      navigate("/");
    }

    const goCart = () =>{
      navigate("/checkout");
    }
    
    function optionalDisplay()
    {
      if(currentUser.id===-1)
      {
        return(<p>Click here to <a href="/register">Register</a> or Click here to <a href="/login">Login</a></p>);
      }
      else
      {
        return(<p>Click here to <a href="/logout">Logout</a></p>)
      }
    }

    useEffect(()=>{
      flagPicture();
      dispatch(getUserFromLocal());
    },[]);

    return (
    <div className="navBar">
        <div className = "logoDiv" ><span className = "logoSpan" onClick={goHome}><img src={logo} className="App-logo" alt="logo"/></span></div>
        <div className = "rightNav">
          <div className="cartIcon" onClick={goCart}>
            <img src={cart}/>
          </div>
          <span>
          <div className = "flag" dangerouslySetInnerHTML={{__html: flag}}></div>
            <span className = "loginSpan">Hello! Welcome {currentUser.firstName} {currentUser.lastName}</span>
            {
              optionalDisplay()
            }
          </span>
        </div>
    </div>
  )
}
