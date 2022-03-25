import React, { useContext } from "react"
import { Context } from "../appContext"
import Image from "../components/Image"
import { getClass } from "../utils"

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

export default Photos