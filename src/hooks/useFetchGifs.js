import { useEffect, useState } from "react"
import GetGifs from "../helpers/GetGifs"

const useFetchGifs = (search) => {

    const [state, setState] = useState({
        // initState Object
        data: [], // Arrays de  ID, URL e Imágenes
        loading: true // Loading state
    })

    // Execute after that Dom Render has been updated : Effect
    useEffect(() => {
        GetGifs(search)
            .then(gifs => {
                    setState({
                        data: gifs,
                        loading: false
                    })

            })
    }, [])

    return state; // Return object
}

export default useFetchGifs
