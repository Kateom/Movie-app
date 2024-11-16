import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <div className="banner">
        <img
          src="https://i.pinimg.com/originals/29/7d/e0/297de0761b0c756266d74ca50d03cc1d.jpg"
          alt=""
          height={"600px"}
          width={"100%"}
        />
        <div className="banner-text">Avengers Endgame</div>
      </div>
    </>
  );
};

export default Banner;
