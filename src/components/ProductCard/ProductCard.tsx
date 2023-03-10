import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './ProductCard.css'
import placeholder from '../../placeholder.png'

function ProductCard(props:any) {
    const navigate = useNavigate();
    const [productId, setProductId] = useState(props.product.id);
    const [productName, setProductName] = useState(props.product.name);
    const [productPrice, setProductPrice] = useState(props.product.price);
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });


    const toProductDetails = () =>
    {
        navigate(`/product/${productId}`);
    }

  return (
    <div className="productPageCard" onClick={toProductDetails}>
        <h4>{productName}</h4>
        <img src={placeholder} alt={productName+" image"}/>
        <p>Starting at {formatter.format(productPrice)}</p>
    </div>
  )
}

export default ProductCard