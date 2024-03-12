import Carousel from 'react-bootstrap/Carousel';
import profile1 from '../assets/Profile1.png';
import profile2 from '../assets/Profile2.png';
import profile3 from '../assets/Profile3.png';
import profile4 from '../assets/Profile4.png';
import profile5 from '../assets/Profile5.png';

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img src={profile1} text="First slide" />

      </Carousel.Item>
      <Carousel.Item>
        <img src={profile2} text="Second slide" />

      </Carousel.Item>
      <Carousel.Item>
        <img src={profile3} text="Third slide" />

      </Carousel.Item>
      <Carousel.Item>
        <img src={profile4} text="Third slide" />

      </Carousel.Item>
      <Carousel.Item>
        <img src={profile5} text="Third slide" />

      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;