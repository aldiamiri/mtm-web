import Carousel from "react-bootstrap/Carousel";
import NavbarScroll from "../Navbar/Navbar";
import "./Caurosel.css";

function CarouselFade() {
  return (
    <>
      <NavbarScroll />
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src="https://p4.wallpaperbetter.com/wallpaper/159/600/968/white-asus-laptop-wallpaper-preview.jpg" alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="https://p4.wallpaperbetter.com/wallpaper/503/48/947/asus-notebook-wallpaper-preview.jpg" alt="Second slide" />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="https://i.pinimg.com/736x/2e/ff/d2/2effd20dff80405e62f1fa271247fe17.jpg" alt="Third slide" />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default CarouselFade;
