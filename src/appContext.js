import React, {useState,useEffect} from "react"

const Context = React.createContext()

function ContextProvider (props) {
    const [allPhotos, setAllPhotos] = useState([])
    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    useEffect( () => {
        fetch(url)
            .then(response => response.json())
            .then(data => setAllPhotos(data))
    }, [])

    // Esta función asegura que una vez que envolvamos nuestra app con el
    // ContextProvider, se haga el render de los componentes internos (children)
    return (
        <Context.Provider value={{allPhotos}}>
            {props.children}
        </Context.Provider>
    )
}

export  {ContextProvider, Context}