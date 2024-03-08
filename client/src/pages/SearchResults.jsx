//import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';


const PitSearch = () => {
      const [results, setResults] = useState()
      const [gender, setGender] = useState('')
      const [age, setAge] = useState('')
      const [children, setChildren] = useState('')
      const [location, setLocation]= useState('')
      const [distance, setDistance] = useState('')

      const openInNewTab = (url) => {
        window.open(url, '_blank', 'noreferrer');
      };

      function showResults(data) {
        const pitResults =  data.animals.map((data) => (

          <Card className='card' style={{ width: '12rem' }} key={data.id}>
            <Card.Body>                   
            <Card.Img className='cardpic' src={data.photos[0] ? data.photos[0].medium : '#'} alt= 'image' />
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
      const apiUrl =`https://api.petfinder.com/v2/animals?type=dog&breed=pit-bull-terrier&status=adoptable&gender=${gender}&age=${age}&good_with_children=${children}&location=${location}&distance=${distance}`
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
      console.log(apiUrl)
      console.log(data);
      //console.log(data.animals[0].name)
      showResults(data)
      

    }catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='searchpage'>
      <div className='searchcontainer'> 
        <h1>Search Page</h1>


        <Form>
        <Form.Label htmlFor="inputPassword5">Select Gender</Form.Label>
        <Form.Select aria-label="Default select example" value={gender} onChange={(e) => setGender(e.target.value)}>
      <option value="">No preference</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
    </Form.Select>
    <Form.Label htmlFor="inputPassword5">Age Group</Form.Label>
        <Form.Select aria-label="Default select example" value={age} onChange={(e) => setAge(e.target.value)}>
      <option value="">No preference</option>
      <option value="baby">Puppy</option>
      <option value="young">Young</option>
      <option value="adult">Adult</option>
      <option value="senior">Senior</option>
    </Form.Select>
    <Form.Label htmlFor="inputPassword5">Good with children?</Form.Label>
        <Form.Select aria-label="Default select example" value={children} onChange={(e) => setChildren(e.target.value)}>
      <option value="0">No preference</option>
      <option value="1">Yes please</option>
    </Form.Select>
    <Form.Label htmlFor="inputPassword5">Search location with zip cole</Form.Label>
      <Form.Control
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        value={location} onChange={(e) => setLocation(e.target.value)}
      />
      <Form.Label htmlFor="inputPassword5">Max distance radius</Form.Label>
        <Form.Select aria-label="Default select example" value={distance} onChange={(e) => setDistance(e.target.value)}>
      <option value="">No preference</option>
      <option value="25">25 mi</option>
      <option value="50">50 mi</option>
      <option value="75">75 mi</option>
      <option value="100">100 mi</option>
    </Form.Select>
      
        </Form>

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