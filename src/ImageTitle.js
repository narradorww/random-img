import React from 'react'

function ImageTitle(props) {
    return(
        <div className="image-title">
        <h3>{props.imageData.title}</h3>
      </div>
    )
}

export default ImageTitle;