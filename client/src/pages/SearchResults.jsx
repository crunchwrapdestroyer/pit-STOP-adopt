//import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useState } from 'react';

const PitSearch = () => {
      const [results, setResults] = useState()

      function showResults(data) {
        const name =  data.animals.map((data) => (
          <table>	
                      <tr>
                      <td>Image: {data.photos.small}</td>
                      <td>Name: {data.name}</td>
                      <td>Age Group: {data.age}</td>
                      <td><a href={data.url} target="_blank">Adopt Me</a></td>
                      </tr>  
          </table>
                    ))
        setResults( name )
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
       // res.json(response.data.access_token);
      } catch (error) {
        console.log(error);
      //  res.status(500).json({ error: 'Internal Server Error' });
      }
    };


  const fetchData = async (token) => {
    try {
      const apiUrl ='https://api.petfinder.com/v2/animals?type=dog&breed=pit-bull-terrier&status=adoptable&limit=5'
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





    return (<div style={{padding: '100px'}}> <h1>Seach Page </h1>
        <button onClick={getToken}>Search Dogs</button>
         <p>See console log for all available data</p>

        <div>
      <h2>Style Me :)  </h2>
    
               {results}
          

    </div>
    </div>
            )
  };
  
  export default PitSearch;