import React from "react";

const Picture = ({ data }) => {
  return (
    <div className="picture">
      <p className="author">Photogragher: {data.photographer}</p>
      <div className="imageContainer">
        <img src={data.src.large} alt="" />
      </div>
      <p>
        放大圖片:{" "}
        <a target="_blank" href={data.src.large}>
          Press Here
        </a>
      </p>
    </div>
  );
};

export default Picture;
