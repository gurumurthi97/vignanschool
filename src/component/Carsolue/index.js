import React from "react";
import "./style.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import kids from "../assets/kids.png";
import { Carousel } from "react-responsive-carousel";
// import Carsolue from "../component/Carsolue";
import child1 from "../assets/child1.jpg";
function Carsolue() {
  return (
    <div>
      <Carousel autoPlay infiniteLoop showThumbs={false} interval={3000}>
        <div>
          <img alt="" src={kids} className="gallery" />
          <p>Image1</p>
        </div>
        <div>
          <img alt="" src={child1} className="gallery" />
        </div>
        <div>
          <img alt="" src={child1} className="gallery" />
        </div>
        <div>
          <img alt="" src={child1} className="gallery" />
        </div>
        <div>
          <img alt="" src={child1} className="gallery" />
        </div>
        <div>
          <img alt="" src={child1} className="gallery" />
        </div>
        <div>
          <img alt="" src={child1} className="gallery" />
        </div>
        <div>
          <img alt="" src={child1} className="gallery" />
        </div>
        <div>
          <img alt="" src={child1} className="gallery" />
        </div>
        <div>
          <img alt="" src={child1} className="gallery" />
        </div>
        <div>
          <img alt="" src={child1} className="gallery" />
        </div>
        <div>
          <img alt="" src={child1} className="gallery" />
        </div>
        <div>
          <img alt="" src={child1} className="gallery" />
        </div>
        <div>
          <img alt="" src={child1} className="gallery" />
        </div>
      </Carousel>
    </div>
  );
}

export default Carsolue;
