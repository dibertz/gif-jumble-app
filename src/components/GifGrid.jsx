import React from "react";
import useFetchGifs from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {


    const { data, loading } = useFetchGifs(category); // Objects -> { data: array, loading: bool }

    return (
        <>
            <h3 className="animate__animated animate__fadeInLeft animate__slow">{category}</h3>
            {loading && <p className="text-center">{loading && 'Cargando...'}</p>}
            {/* <p className="text-center">{loading && 'Cargando...'}</p> */}
            <div id="content">

                {
                    /* Contenedor de imágenes */
                    data.map(img => (
                        <div id="card" className="animate__animated animate__zoomIn animate__slower" key={img.id}><GifGridItem {...img}></GifGridItem></div>
                        
                    ))
                }
            </div>


        </>
    )
}

export default GifGrid