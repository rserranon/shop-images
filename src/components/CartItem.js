import React, {useState, useContext} from "react"
import { Context } from "../appContext"

function CartItem({item}) {
    const {removeFromCart} = useContext(Context)
    const [hovered, setHovered] = useState(false)
    return (
        <div className="cart-item">
            <i 
                onClick={() => removeFromCart(item.id) } 
                className=
                    { hovered ? 
                        "ri-delete-bin-fill"
                        :
                        "ri-delete-bin-line"
                    }
                onMouseEnter={() => {setHovered(true)}}
                onMouseLeave={() => {setHovered(false)}}
            ></i>
            <img src={item.url} alt="" width="130px" />
            <p>$5.99</p>
        </div>
    )
}

export default CartItem