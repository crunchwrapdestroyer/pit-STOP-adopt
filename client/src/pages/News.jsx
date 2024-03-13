import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";

function News() {
    return (
        <Container className='news-container' fluid="md">
            <Row className='news-row'>
                <Col className='news-col'>
                    <h1>News and Community</h1>
                    <p>
                        Pitbulls, unfortunately, often suffer from negative reputation in society, largely due to misconceptions and media portrayal. 
                        Media coverage tends to focus on isolated incidents involving putbulls, exaggerating their aggressiveness and associating them with violent behavior. 
                        Rare cases of attacks are often sensationalized, overshadowing the countless pitbulls that live peacefully as beloved family pets.
                        Despite these challenges, many advocates and organizations work tirelessly to challenge stereotypes and promote responsible pitbull ownership. 
                    </p>
                    <h2>Articles</h2>
                    <h5>March 8, 2023</h5>
                    <p><a href="https://pethelpful.com/dogs/Pit-Bull-Dog-Heros">Positive Stories About Pit Bull Dog Heroes</a></p>
                    <h5>June 20, 2017</h5>
                    <p><a href="https://lasvegassun.com/news/2017/jun/20/blame-owners-not-pit-bulls/">Blame owners, not pit bulls</a></p>
                    <h5>October 29, 2009</h5>
                    <p><a href="https://www.newsweek.com/owners-not-pit-bulls-are-problem-81383">Owners, Not Pit Bulls, Are the Problem</a></p>
                </Col>
                <Col className='share-col'>
                    <h2>Share News</h2>
                    <div className='icons'>
                        <p><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a></p>
                        <p><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><ImInstagram /></a></p>
                        <p><a href="https://twitter.com/?lang=en" target="_blank" rel="noopener noreferrer"><FaSquareXTwitter /></a></p>
                    </div>
                    <h2>Resources</h2>
                    <div className='books'>
                        <a href="https://shorturl.at/rszI5" target="_blank" rel="noopener noreferrer"> <img src="./assets/pitbullBook1.jpg" alt="" /></a>
                        <a href="https://shorturl.at/djnxU" target="_blank" rel="noopener noreferrer"> <img src="./assets/pitbullBook2.jpg" alt="" /></a>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}


export default News;