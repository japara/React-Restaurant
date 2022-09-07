import Carousel from "react-bootstrap/Carousel";
import image1 from "./images/mexican-design-1.jpeg";
import image2 from "./images/mexican-design-2.jpeg";
import image3 from "./images/mexican-design-3.jpeg";

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={image1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
