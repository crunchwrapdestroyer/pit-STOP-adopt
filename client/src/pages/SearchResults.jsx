//import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PitSearch = () => {
      
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
      const apiUrl ='https://api.petfinder.com/v2/types/dog/breeds'
        // TO DO: Refine api search URL to pitbull
        // TO DO: Limit search results to 10?
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

    }catch (error) {
      console.log(error)
    }
  }





    return (<div style={{padding: '100px'}}> <h1>Seach Page </h1>
        <button onClick={getToken}>Search Dogs</button>
         <p>Results on Console Log</p>

        <div>
      <h2>Style Me :)  </h2>


    </div>
    </div>
            )
  };
  
  export default PitSearch;