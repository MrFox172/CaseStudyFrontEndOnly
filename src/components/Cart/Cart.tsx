import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Product } from '../../interfaces/Product'
import CartItem from '../CartItem/CartItem';
import './Cart.css'

function Cart() {
    const navigate = useNavigate();
    const tempCart:[Product,number][] = [
        [{id:0,name:"sampleProduct",price:1,pictureUrl:"placeholder"},2],
        [{id:1,name:"sampleProduct",price:2,pictureUrl:"placeholder"},3],
        [{id:2,name:"sampleProduct",price:3,pictureUrl:"placeholder"},4]
    ];

    const toCheckOut = () =>
    {
        navigate("/checkout");
    }


  return (
    <div>
        <h2>Cart</h2>
        <div className = "cartInternalListing">
            <ol className="cartOL">
                {
                    tempCart.map((prodncount) => {
                        console.log(prodncount)
                        return <CartItem key={prodncount[0]?.id} product={prodncount[0]} count={prodncount[1]} />
                    })
                }
            </ol>
        </div>
        <button className="checkoutButton" onClick={toCheckOut}>Checkout</button>
    </div>
  )
}

export default Cart