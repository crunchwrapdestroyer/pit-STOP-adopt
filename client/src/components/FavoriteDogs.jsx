import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { useState, useEffect } from 'react';

import Auth from '../utils/auth'

import { useQuery, useMutation } from '@apollo/client';

import { REMOVE_DOG } from '../utils/mutations';
import {GET_ME} from '../utils/queries'


const SavedDogs = () => {
    const {loading, data} = useQuery(GET_ME)
    const [removeDog, {error}] = useMutation(REMOVE_DOG)
    const userData = data?.me || {};
    console.log(data)
    console.log(userData)

    const handleDeleteDog = async (dogId) => {
        const token = Auth.loggedIn() ? Auth.getToken() : null;
    
        if (!token) {
          return false;
        }
    
        try {
          const {data} = await removeDog({variables: {dogId}});
    
          if (error) {
            console(error);
          }
    
          // upon success, remove book's id from localStorage
          removeDogId(dogId);
        } catch (err) {
          console.error(err);
        }
      };

    
    //  if data isn't here yet, say so
      if (loading) {
        return <h2>LOADING...</h2>;
      };


      return(

        <Col className='resultscontainer'>
        <Row>
        <h2 className='pt-5'>
          Favorite Dogs
        </h2>
         {userData.savedDogs.map((dog) => {
            return (
            <Card className='card' style={{ width: '12rem' }} key={dog.dogId}>
            <Card.Body>                   
            <Card.Img className='cardpic' src={dog.image ? dog.image : '#'} alt= 'image' />
              <Card.Title>{dog.name}</Card.Title>
              <Card.Text>
                Age Group: {dog.age} <br/>
                {dog.location}
              </Card.Text>
              <Button className='btn-block btn-danger' onClick={() => handleDeleteDog(dog.dogId)}>
                      Remove from favorites
                    </Button>
            </Card.Body>
            </Card>
            );
          })} 

        </Row>
        </Col> 

      )
}

export default SavedDogs;