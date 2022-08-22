import Carousel from "react-bootstrap/Carousel";
import React, { SyntheticEvent, useRef, useState, render } from "react";
import "./slide.css";
import s1 from "./slide1.gif";
import s2 from "./slide3.gif";
import s3 from "./slide2.gif";
function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Carousel variant="dark" className="Carousel11">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={s1}
            alt="First slide"
            width="10"
            height="500"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={s2}
            alt="Second slide"
            width="10"
            height="510"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={s3}
            alt="Third slide"
            width="10"
            height="510"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ControlledCarousel;
