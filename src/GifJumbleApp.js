import { useState } from "react";
import AddSearch from "./components/AddSearch";
import GifGrid from "./components/GifGrid";

const GifJumbleApp = () => {

    const [categories, setGifs] = useState(['Nezuko'])

    return (
        <>
            <div className='text-right'><h2>Gif Jumble App</h2></div>
            <hr />
            <div className=" my-5 text-right"><AddSearch setGifs={setGifs} /></div> { /* Añadir Entrada de Búsqueda */ }
            <div>
                {
                    categories.map( category => {
                        return (<GifGrid key={category} category={category}></GifGrid>)
                    })
                }
            </div>
        </>
    )
}

export default GifJumbleApp;