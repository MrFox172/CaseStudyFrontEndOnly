import React from 'react'
import { Product } from '../../interfaces/Product'

function CartItem(props:any) {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });
  return (
    <>
        {console.log(props?.product.name+ " " + props?.product.price +" "+ props?.count)}
        <li>{props?.product.name}: {formatter.format(props?.product.price)} x {props?.count}</li>
    </>
  )
}

export default CartItem