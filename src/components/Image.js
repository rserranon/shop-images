import React, {useState, useContext} from "react"
import { Context } from "../appContext"

function Image({ className, img}) {
    const [hovered, setHovered] = useState(false)
    const {toggleFavorite} = useContext(Context)
    function enter() {
        setHovered(true)
    }
    function leave(){
        setHovered(false)
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
        onMouseEnter={enter}
        onMouseLeave={leave}>
            <img src={  img.url} 
                        alt="" 
                        className="image-grid"
            />
            {heartIcon()} 
            {hovered && <i className="ri-add-circle-line cart"></i>}
        </div>
    )
}

export default Image