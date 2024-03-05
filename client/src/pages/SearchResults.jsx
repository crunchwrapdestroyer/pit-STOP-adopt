//import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';


const PitSearch = () => {
  const [location, setLocation] = useState(''); // State for location
  const [distance, setDistance] = useState(''); // State for distance

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'location') {
      setLocation(value);
    } else if (name === 'distance') {
      setDistance(value);
    }
  };

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
       // res.json(response.data.access_token);
      } catch (error) {
        console.log(error);
      //  res.status(500).json({ error: 'Internal Server Error' });
      }
    };


  const fetchData = async (token) => {
    try {
      const apiUrl =`https://api.petfinder.com/v2/animals?type=dog&breed=pit-bull-terrier&status=adoptable&location=${location}&distance=${distance}&limit=5`
        // TO DO: Refine api search URL to pitbull --
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
        <Row>
          <Col>
            <p>Search for a City</p>
            <input type="text" name="location" value={location} onChange={handleChange} /> 
          </Col>
        </Row>
        <Row>
          <Col>
            <p>Miles from Location</p>
            <input type="number" name="distance" value={distance} onChange={handleChange} /> 
          </Col>
        </Row>
        <Row>
          <Col>
            <button className='searchbutton' onClick={() => getToken(location, distance)}>Search Dogs</button> 
          </Col>
        </Row>
      </div>
    </div>
  );
}
  
  export default PitSearch;