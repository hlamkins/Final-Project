import React, { useState } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup, FormControl, Form, Card, CardGroup, Button } from 'react-bootstrap';

const HomeContent = (props) => {
	const [ searchVal, setSearchVal ] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		props.findAnimal('https://api.petfinder.com/v2/animals', searchVal, '1');
		console.log(searchVal);
	};

	const { user, isAuthenticated, isLoading } = useAuth0();

	if (isLoading) {
		return <div>Loading ...</div>;
	}

	const favs = (pets) => {
		axios.post('/api/pets/favorites', { email: user.email, ...pets });
	};

	return (
		<div className="next-steps">
			<h1 className="text-center">Welcome to Re∞ue Me</h1>
			<br />
			<div className="row">
				<div className="col-md-3 mb-4">
					<div className="col">
						<form>
							<div class="form-group">
								<label for="pet-search">Select a Dog Breed</label>

								<input
									onChange={(e) => setSearchVal(e.target.value)}
									type="search"
									class="form-control"
									placeholder="Search Pet"
								/>
							</div>
						</form>
						<Form.Group controlId="exampleForm.ControlSelect1">
							<Form.Label>Select a Dog Breed</Form.Label>
							<Form.Control as="select">
								<option>Akita</option>
								<option>American Bulldog</option>
								<option>Boxer</option>
								<option>Beagle</option>
								<option>Cane Corso</option>
                <option>Chihuahua</option>
                <option>Husky</option>
                <option>Labrador Retriever</option>
                <option>Mastiff</option>
                <option>Poodle</option>
                <option>Pug</option>
                <option>Shar-Pei</option>
                <option>Terrier</option>
                <option>Whippet</option>
							</Form.Control>
						</Form.Group>
						<br />
						<br />
						<Button onClick={handleSubmit}>Search</Button>
					</div>
				</div>

				{/* </div>
      <div className="row"> */}
				<div className="col-9">
					<h6>Dogs Available for Re∞ue</h6>
					{/* Move this to a separate component When an animal is favorited, then add to an array on the user collection.  For the favorites page we pass an array of the users favorited animals*/}
					<div className="row" style={{ width: '100%' }}>
						{props.renderAnimals
							.filter((animal) => animal.photos[0] && animal.photos[0].large)
							.map((animal) => (
								<Card className="col-4">
									{console.log(animal)}
									<Card.Img
										variant="top"
										src={animal.photos.length >= 1 ? animal.photos[0].large : ''}
										style={{ width: '90%', height: '50%', paddingTop: '10%' }}
									/>
									<Card.Body>
										<Card.Title>{animal.name}</Card.Title>
										<Card.Text>
											{' '}
											{animal.description != null ? animal.description : 'No description'}{' '}
										</Card.Text>
									</Card.Body>
									<Card.Footer>
										<Button>Learn More!</Button>{' '}
										{/* need to add a link when clicked to the url in the returned object */}
										{user && <Button onclick={() => favs(animal)}>Save Me!</Button>}
									</Card.Footer>
								</Card>
							))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeContent;
