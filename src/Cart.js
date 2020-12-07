import React from 'react';
import Cartitem from './Cartitem';
const Cart=(props)=> {
    // we have moved all the functionalities from here to App.js so that we make the count dynamic
    
    const{ products }=props;
    //console.log('render2');
    return(
    <div className="cart">{
    products.map((product)=>{
    //we are passig the key to make it more efficient

    // since cart is passing its props to cartitem and cart is getting it from app 
    // therefore we neet to pass it over there 
    return< Cartitem 
    product={product}
    key={product.id}
    // making onincrease quantity as a prop
    // as we are getting these functions from app.js in the form of props 
    onIncreaseQuantity = {props.onIncreaseQuantity}
    // making ondecrease quantity as a prop 
    // as we are getting these functions from app.js in the form of props 

    onDecreaseQuantity = { props.onDecreaseQuantity}
    // making ondelete as a prop
    // as we are getting these functions from app.js in the form of props 

    onDelete = {props.onDelete}
    />
    })}
               
    </div>
        );
    }
export default Cart ;