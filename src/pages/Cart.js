import React, {useContext, useState} from "react"
import {Context} from "../appContext"
import CartItem from "../components/CartItem"

function Cart() {
    const {cartItems, total, setCartItems} = useContext(Context)
    const [buttonText, setButtonText] = useState("Place Order")
    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))
    const totalCostDisplay = total.toLocaleString("en-US", {style: "currency", currency: "USD"})
    
    function placeOrder() {
        setButtonText("Ordering...")
        setTimeout( () => {
            console.log("Order Placed")
            setButtonText("Order Placed")
            setCartItems([])
        },3000)
    }

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalCostDisplay} </p>
            {
                cartItems.length ?
                    <div className="order-button">
                        <button onClick={placeOrder}>{buttonText}</button>
                    </div>
                 :
                    <p>You have no items in your cart</p>   }
        </main>
    )
}

export default Cart