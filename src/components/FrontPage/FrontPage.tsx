import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Product } from '../../interfaces/Product'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import ProductCard from '../ProductCard/ProductCard';
import './FrontPage.css';

export default function FrontPage() {
  const [products, setProducts] = useState<Product[]>();
  
  const retrieveProducts = async() =>
  {
     try
     {
        const response = await axios.get("http://localhost:5000/casestudy/product/all");
        if(response.status==200)
        {
          console.log(response.data);
          setProducts(response.data);
        }
     }
     catch(error)
     {
        console.log(error);
     }
  }

  useEffect(()=>{
    retrieveProducts();
  },[])

  return (
    <div>
      <NavBar/>
        <div className = "frontPageContent">
          <div className = "frontPageTitle"><h2>Our Products</h2></div>
          <div className = "frontPageContentArea">
            {
              products?.map((prod)=>{
                  return (<ProductCard key={prod.id} product={prod}/>)
              })
            }
          </div>
        </div>
      <Footer/>  
    </div>
  )
}
