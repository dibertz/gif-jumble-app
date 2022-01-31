import React from "react";

const GifGridItem = ({ id, title, url }) => {

    return (
        <>
        {title}
          <img src={url} alt="" />
        
        </>
    )

}

export default GifGridItem