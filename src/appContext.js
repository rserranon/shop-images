import React, {useState,useEffect} from "react"

const Context = React.createContext()

function ContextProvider (props) {
    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [total, setTotal] = useState(0)
    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

    useEffect( () => {
        fetch(url)
            .then(response => response.json())
            .then(data => setAllPhotos(data))
    }, [])

    useEffect( () => {
        setTotal( cartItems.length * 5.99)
    },[cartItems])
    console.log(total)

    function toggleFavorite (id) {
        const updatedArr = allPhotos.map ( photo => {
            if (photo.id === id) {
                return { ...photo, isFavorite: !photo.isFavorite}
            }
            return photo
        })
        setAllPhotos(updatedArr)
    }

    function addToCart(item) {

        setCartItems(prevCartItems => [...prevCartItems, item])
    }

    function removeFromCart(id) { 
        setCartItems(prevCartItems => prevCartItems.filter(item => item.id !== id))
    }

    
    // Esta función asegura que una vez que envolvamos nuestra app con el
    // ContextProvider, se haga el render de los componentes internos (children)
    return (
        <Context.Provider value={{allPhotos, cartItems, total, setCartItems, removeFromCart, toggleFavorite, addToCart }}>
            {props.children}
        </Context.Provider>
    )
}

export  {ContextProvider, Context}