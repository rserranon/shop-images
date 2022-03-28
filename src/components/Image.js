import React, {useState, useContext} from "react"
import { Context } from "../appContext"

function Image({ className, img}) {
    const [hovered, setHovered] = useState(false)
    const { cartItems, removeFromCart, toggleFavorite, addToCart} = useContext(Context)

  
    function cartIcon(id) {
        if (cartItems.some(i => i.id === id)) {
            return <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(img.id) }></i>           
        } else if (hovered)
            return <i className="ri-add-circle-line cart" onClick={()=> {addToCart(img)}}></i>
    }

    function heartIcon () {
        if (img.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
        }
        else if (hovered) {
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
        }
    }
    return (
        <div className={`${className} image-container`}
            onMouseEnter={() => {setHovered(true)}}
            onMouseLeave={() => {setHovered(false)}}>
            <img src={  img.url} 
                        alt="" 
                        className="image-grid"
            />
            {heartIcon()} 
            {cartIcon(img.id)}
        </div>
    )
}

export default Image