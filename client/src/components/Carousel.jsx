import Carousel from 'react-bootstrap/Carousel';
import Profile1 from '../../public/assets/profile2.png';
import Profile2 from '../../public/assets/profile2.png';
import Profile3 from '../../public/assets/profile3.png';
import Profile4 from '../../public/assets/profile4.png';
import Profile5 from '../../public/assets/profile5.png';

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img src={Profile1} text="First slide" />

      </Carousel.Item>
      <Carousel.Item>
        <img src={Profile2} text="Second slide" />

      </Carousel.Item>
      <Carousel.Item>
        <img src={Profile3} text="Third slide" />

      </Carousel.Item>
      <Carousel.Item>
        <img src={Profile4} text="Third slide" />

      </Carousel.Item>
      <Carousel.Item>
        <img src={Profile5} text="Third slide" />

      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;