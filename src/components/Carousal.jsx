import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img from "../assets/img.jpg";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";

const Carousal = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      responsive={responsive}
      autoPlay={true}
      autoPlaySpeed={3000}
      infinite={true}
      arrows={true}
      showDots={true}
    >
      <img src={img} width={"600px"} height={"400px"} />
      <img src={img2} width={"600px"} height={"400px"} />
      <img src={img1} width={"600px"} height={"400px"} />
    </Carousel>
  );
};

export default Carousal;
