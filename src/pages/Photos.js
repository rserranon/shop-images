import React, { useContext } from "react"
import { Context } from "../appContext"
import Image from "../components/Image"
import { getClass } from "../utils"
import PropTypes from 'prop-types'

function Photos() {
    const {allPhotos} = useContext(Context)
    const photos = allPhotos.map((img, i) => (
            <Image key={img.id} img={img} className={getClass(i)} />
    ))
    return (
        <main className="photos">
            {photos}
   
        </main>
    )
}

Photos.propTypes = {
    className : PropTypes.string,
    img : PropTypes.shape({
            id          : PropTypes.string.isRequired,
            url         : PropTypes.string.isRequired,
            isFavorite  : PropTypes.bool
    })
}

export default Photos