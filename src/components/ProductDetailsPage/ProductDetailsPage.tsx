import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import fall from '../../fall.svg'
import Cart from '../Cart/Cart'
import './ProductDetail.css'
import { ProductDetail } from '../../interfaces/ProductDetail'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function ProductDetailsPage() {
  const [count, setCount] = useState<number>(1);
  const { id } = useParams();
  const [product, setProduct] = useState<ProductDetail>({
    id:-1,
    name:"Product",
    descriptionMain:"Key Features of the Product",
    price:100.00,
    pictureUrl:"../../fall.svg",
    descriptionDetails:"Additional Features of the Product"
  })
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const subtractCount = () =>{
    if(count>1)
    {
      setCount(count-1);
    }
  }

  const addCount = () =>{
    if(count < 99)
    {
      setCount(count+1);
    }
  }

  const addToCart = () =>{

  }

  const getProductDetails = async () =>
  {
    try{
      console.log("The id is:"+id);
      const response = await axios.get(`http://localhost:5000/casestudy/product/details/${id}`);
      if(response.status==200)
      {
        setProduct(response.data);
      }
    }
    catch(error)
    {
      console.log(error);
    }
  } 

  useEffect(()=>{
    getProductDetails();
  },[]);

  return (
    <div>
      <NavBar/>
      <div className = "productMain">
        <div className="productMainDisplay">
          <h2>{product.name}</h2>
          <img src={product.pictureUrl} alt={product.name + " picture"}/>
          <h3>Price</h3>
          <p>{formatter.format(product.price)}</p>
          <button onClick={subtractCount}>-</button>
          <input className="productMainDisplayCount" value={count}/>
          <button onClick={addCount}>+</button>
          <br/>
          <button onClick={addToCart}>Add to Cart</button>
        </div>
        <div className="productMainDetails">
          <h2>About {product.name}</h2>
          <h3>Description</h3>
          <p>{product.descriptionMain}</p>
          <h3>Additional Details</h3>
          <p>{product.descriptionDetails}</p>
        </div>
        <div className="productMainCart">
          <Cart/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default ProductDetailsPage