//import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';


const PitSearch = () => {
      const [results, setResults] = useState()
      const [location, setLocation]= useState()

      const openInNewTab = (url) => {
        window.open(url, '_blank', 'noreferrer');
      };

      function showResults(data) {
        const pitResults =  data.animals.map((data) => (

          <Card className='card' style={{ width: '12rem' }} key={data.id}>
            <Card.Body>                   
            <Card.Img id='cardpic' src={data.photos[0] ? data.photos[0].small : '#'} alt= 'image' />
              <Card.Title>{data.name}</Card.Title>
              <Card.Text>
                <p>Age Group: {data.age}</p>
                <p>{data.contact.address.city}, {data.contact.address.state} </p>
              </Card.Text>
              <Button variant="primary"  role="link"
        onClick={() => openInNewTab(`${data.url}`)}>View Info</Button>
              <p style={{lineHeight: '2px'}}>&nbsp;</p>
              <Button variant="primary" >Save </Button>
            </Card.Body>
          </Card>




                    ))
        setResults( pitResults )
      }

  const getToken = async () => {
      try {
        const tokenUrl = 'https://api.petfinder.com/v2/oauth2/token';
        const clientId = 'SBP0qZNplAGq7qoUskfBmlUeq3UpDZDRB5WoboBiEvDcfC3Ns1';
        const clientSecret = 'fE3NAgsE2F4WyC4hZPBOswObCd62UxQdKqF8ABX0';
    
        const response = await axios.post(tokenUrl, {
          grant_type: 'client_credentials',
          client_id: clientId,
          client_secret: clientSecret,
        });
        console.log('Access Token:', response.data.access_token);
        const token = response.data.access_token
        console.log(token)
        fetchData(token)
       
      } catch (error) {
        console.log(error);
     
      }
    };


  const fetchData = async (token) => {
    try {
      const apiUrl =`https://api.petfinder.com/v2/animals?type=dog&breed=pit-bull-terrier&status=adoptable&location=95023&limit=12`
        // TO DO: Limit search results to 10? --
        // TO DO: Update key, secret, move to .env file, move to server side 
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
  
      const data = await response.json();
      console.log(data);
      console.log(data.animals[0].name)
      showResults(data)
      

    }catch (error) {
      console.log(error)
    }

    
  }

  return (
    <div className='searchpage'>
      <div className='searchcontainer'> 
        <h1>Search Page</h1>
        {/* <Row>
          <Col>
            <p>Search for a City</p>
            <input type="text" value={setLocation}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>Miles from Location</p>
            <input type="number" />
          </Col>
        </Row> */}
        <Row>
          <Col>
            <button className='searchbutton' onClick={getToken}>Search Dogs</button>
          </Col>
        </Row>
      </div>
      <Col className='resultscontainer'>
        <Row>
          {results}
        </Row>
      </Col>
    </div>
  );
}
  
  export default PitSearch;