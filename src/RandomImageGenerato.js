import React from "react";
import Image from './Image';
import ImageTitle from "./ImageTitle";
import ImageDescription from "./ImageDescription";


function RandomImageGenerator(props) {
  return (
    <div className="imageInfo">
        <Image imageData={data} />
        <ImageTitle imageData={data} />
        <ImageDescription imageData={data} />
    
      
      
    </div>
  );
}

const data = {
    url:'https://placeimg.com/400/400/any',
    title:'Random Image',
    description:'Get a new image eachtime you refresh your browser.'
}

export default RandomImageGenerator;