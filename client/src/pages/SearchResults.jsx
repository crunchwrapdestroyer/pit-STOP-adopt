import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import SavedDogs from '../components/FavoriteDogs';


import Auth from '../utils/auth'
import { saveDogIds, getSavedDogIds } from '../utils/localStorage';
import { useMutation } from '@apollo/client';
import { SAVE_DOG } from '../utils/mutations';


const SearchDogs = () => {
  const [searchedDogs, setSearchedDogs] = useState([])
  const [gender, setGender] = useState('')
  const [age, setAge] = useState('')
  const [children, setChildren] = useState('1')
  const [location, setLocation] = useState('')
  const [distance, setDistance] = useState('')
  const [pagination, setPagination] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [token, setToken] = useState('')


  const [savedDogIds, setSavedDogIds] = useState(getSavedDogIds());
  const [saveDog, { error }] = useMutation(SAVE_DOG);

  useEffect(() => {
    return () => saveDogIds(savedDogIds);
  });
  // Open link in new tab
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noreferrer');
  }

  // Authenticate API
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
      // console.log('Access Token:', response.data.access_token);
      const token = response.data.access_token
      setToken(token)
      // console.log(token)
      fetchData(token, currentPage)
      

    } catch (error) {
      console.log(error);

    }
  };

  // Fetch data & Handle Results

  const fetchData = async (token, page) => {
    try {
      const apiUrl = `https://api.petfinder.com/v2/animals?type=dog&breed=pit-bull-terrier&status=adoptable&gender=${gender}&age=${age}&good_with_children=${children}&location=${location}&distance=${distance}&limit=10&page=${page}`
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
      const dogData = data.animals.map((dog) => ({
        dogId: String(dog.id),
        name: dog.name,
        age: dog.age,
        location: dog.contact.address.city,
        link: dog.url,
        image: dog.photos.length > 0 ? dog.photos[0].medium : '#',
      }));
      // console.log(data)
      setSearchedDogs(dogData)
      setPagination(data.pagination)
      setCurrentPage(data.pagination.current_page)

      // console.log(apiUrl)
      //console.log(data.animals[0].name)
      // showResults(data)

    } catch (error) {
      console.log(error)
    }
  };
  const handleSaveDog = async (dogId) => {
    // find the dog in `searchedDogs` state by the matching id
    const dogToSave = searchedDogs.find((dog) => dog.dogId === dogId);

    // get token
    const tokens = Auth.loggedIn() ? Auth.getToken() : null;
    console.log(tokens)

    if (!tokens) {
      alert('Please sign in and try agian')
      return false;
    }

    try {
      const { data } = await saveDog({
        variables: { newDog: { ...dogToSave } }
      })

      // if dog successfully saves to user's account, save dog id to state
      setSavedDogIds([...savedDogIds, dogToSave.dogId]);
    } catch (err) {
      console.error(err);
    }
  };

  const handleNextPage = async () => {
    if (currentPage < pagination.total_pages ) {
      fetchData(token, currentPage + 1)
    }
  };

  const handlePreviousPage = async () => {
    if (currentPage > 1) {
     fetchData(token, currentPage - 1)
    }
  };


  // Page 
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

             {searchedDogs.map((dog) => {
                return (
                    
            <Card className='card' style={{ width: '12rem' }} key={dog.dogId}>
            <Card.Body>                   
            <Card.Img className='cardpic' src={dog.image ? dog.image : '#'} alt= 'image' />
              <Card.Title>{dog.name}</Card.Title>
              <Card.Text>
                Age Group: {dog.age} <br/>
                {dog.location}
              </Card.Text>
              <Button 
                variant="primary"  role="link"
                onClick={() => openInNewTab(`${dog.link}`)}>View Info</Button>
              <p style={{lineHeight: '2px'}}>&nbsp;</p>
              <Button
                 disabled={savedDogIds?.some((savedDogId) => savedDogId === dog.dogId)}
                 onClick={() => handleSaveDog(dog.dogId)}>
                        {savedDogIds?.some((savedDogId) => savedDogId === dog.dogId)
                          ? 'Saved in favorites'
                          : 'Add to favorites'}
                      </Button>
            </Card.Body>
            </Card>
            );
            })}

          {pagination && (
            <div className='pagination'>
              {pagination?._links?.previous && <button onClick={handlePreviousPage}>Previous</button>}
              &nbsp;
              <span>{pagination.current_page}</span>
              &nbsp;
              {pagination?._links?.next && <button onClick={handleNextPage}>Next</button>}
            </div>
          )}
        </Row>
      </Col>  
         {Auth.loggedIn() ? <SavedDogs/> : null}  
    </div>
  );
};

export default SearchDogs

