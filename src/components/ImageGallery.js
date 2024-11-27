import React from "react";

// Load globally into all modules.
require("require-context/register");

// Load locally as a function.
var requireContext = require("require-context");

const images = requireContext("../../images", true);
const imageList = images.keys().map((image) => images(image));

function ImageGallery() {
  return (
    <div>
      {imageList.map((image, index) => (
        <img key={index} src={image.default} alt={`image-${index}`} />
      ))}
    </div>
  );
}

export default ImageGallery;
