import React from "react";

const ImageList = props => {
  const images = props.images.map(({ id, urls, desciption }) => {
    return <img key={id} src={urls.regular} alt={desciption} />;
  });
  return <div>{images}</div>;
};

export default ImageList;
