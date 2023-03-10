import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { logout } from '../../Store/authSlice';
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'

function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();

  const performLogout = async () =>
  {
    try{
      dispatch(logout());
      navigate("/");
    }
    catch(error)
    {
      console.log(error);
    }
  }

  useEffect(()=>{
    performLogout();
  },[])
  
  return (
    <div>
        <NavBar/>
          <div className="logoutMain">
            <h2>You are being logged out!</h2>
            <h3>Please wait...</h3>
          </div>
        <Footer/>
    </div>
  )
}

export default Logout