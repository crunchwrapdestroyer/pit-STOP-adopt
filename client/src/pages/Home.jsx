import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CarouselFadeExample from '../components/Carousel'

export default function Home() {
    return (
        <Container>
              <img src='./src/assets/hero1.jpg' alt='Hero1' id='hero1' />
              <Container className='background-container1'>
                <Container id='welcomecontainer'>
                  <CarouselFadeExample />
                  <p id='welcomemessage'>&emsp;Welcome to Pit STOP Adopt, where you can find your new furry best friend and make a meaningful difference in the life of a pit bull! Adopting a pit bull comes with a plethora of benefits beyond just gaining a loving companion. These resilient and affectionate dogs are known for their loyalty, intelligence, and boundless energy. By opening your heart and home to a pit bull, you're not only providing a second chance to a deserving animal but also promoting compassion and responsible pet ownership within your community.<br/><br/>&emsp;Furthermore, adopting a pit bull can be a rewarding experience on a personal level. These dogs often form strong bonds with their owners, offering unwavering loyalty and endless affection. With proper training and socialization, pit bulls can excel as family pets, therapy animals, and even service dogs. By choosing adoption, you're not only enriching your own life but also helping to dispel myths and stereotypes surrounding pit bulls, showcasing their true nature as loving and devoted companions. Join us in our mission to find loving homes for pit bulls in need and experience the joy that comes with rescuing a remarkable canine friend.</p>
                </Container>              
              </Container>
              <img src='./src/assets/hero2.jpg' alt='Hero2' id='hero2' />
              <Container className='background-container2'>

              </Container>
            <Container id='processcontainer'>
              <h1 id='processheader'>Pit STOP Adoption Process</h1>
            <p id='processsteps'>1. Submit Inquiry Letter<br/><br/>2. Submit application to local organization<br/><br/>3. Meet the pet<br/><br/>4. Pay fee and sign adoption contract<br/><br/>5. Take your new friend home!</p>
            <img id='childpic'src='./src/assets/child.jpg' alt='dog and child' />
            </Container>
            <Container className='about'>
              <h1 id='about'>About this Page</h1>
              <p>This is a full stack javscript application was created using React library, Petfinder API, Stripe API payment platform, MongoDB, Express.js and Node.js. The Github repository can be found at https://github.com/elsie-d/pit-STOP-adopt. For inquiries and contributions contact Matt Hill at hillmatt58@gmail.com. </p>
            </Container>
            <Container className='aspcacontainer'>
            <img src='./src/assets/aspca.jpg' alt='ASPCA' id='aspca' />
            <p id='consider'>
            Consider supporting the American Society for the Prevention of Cruelty to Animals (ASPCA). The ASPCA is dedicated to rescuing animals from various forms of cruelty, including dogfighting, puppy mills, hoarding, and other abusive situations. Each year, they offer medical treatment and behavioral rehabilitation to thousands of animals in need, ensuring they receive the care and support necessary for a better life. Your donation can make a significant difference in the lives of these vulnerable creatures and contribute to the ASPCA's vital mission of compassion and protection.</p>
            <a href='https://secure.aspca.org/donate/donate' target="_blank"><button className='aspcabutton'>Donate Now</button></a>            
            </Container>
        </Container>
    );
}