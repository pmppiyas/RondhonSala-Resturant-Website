import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from "../../../assets/home/01.jpg";
import banner2 from "../../../assets/home/02.jpg";
import banner3 from "../../../assets/home/03.png";
import banner4 from "../../../assets/home/04.jpg";
import banner5 from "../../../assets/home/05.png";
import banner6 from "../../../assets/home/06.png";


import "./Banner.css";

export default function Banner() {
  return (
    <div>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        swipeable={true}
        autoPlay={true}
        interval={5000}
        thumbWidth={100}
      >
        <div>
          <img src={banner1} alt="Banner 1" className="carousel-image" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={banner2} alt="Banner 2" className="carousel-image" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={banner3} alt="Banner 3" className="carousel-image" />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src={banner4} alt="Banner 4" className="carousel-image" />
          <p className="legend">Legend 4</p>
        </div>
        <div>
          <img src={banner5} alt="Banner 5" className="carousel-image" />
          <p className="legend">Legend 5</p>
        </div>
        <div>
          <img src={banner6} alt="Banner 6" className="carousel-image" />
          <p className="legend">Legend 6</p>
        </div>
      </Carousel>
    </div>
  );
}
