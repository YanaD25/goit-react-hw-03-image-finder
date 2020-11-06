import React from "react";
import ImageGalleryItem from "./ImageGalleryItem";

const ImageGallery = ({ images }) => {
  return <ul className="ImageGallery">
      {images.map(image => 
          <ImageGalleryItem
          key ={image.id}
          src ={image.webformatURL}
          alt ={image.tags}
          largeImageURL ={image.largeImageURL}
          />
      )}</ul>;
};
export default ImageGallery;
