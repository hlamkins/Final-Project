import React, { useState } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Card, Button } from 'react-bootstrap';
import { findAnimal } from '../utils/API';
import { useToasts } from 'react-toast-notifications';
import { Loading } from '../components';

const Home = (props) => {
	const [ searchVal, setSearchVal ] = useState('');
	const [ renderAnimals, setRenderAnimals ] = useState([]);
	const { addToast } = useToasts();
	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = await findAnimal(
			'https://api.petfinder.com/v2/animals',
			searchVal,
			'1',
			props.accessToken,
			addToast
		);
		if (data) {
			setRenderAnimals(data.animals);
		}
	};

	const { user, isAuthenticated, isLoading } = useAuth0();

	if (isLoading) {
		return <Loading />;
	}

	const favs = (pets) => {
		axios.post('/api/pets/favorites', { email: user.email, ...pets });
	};

	return (
		<div className="next-steps">
			<h1 className="text-center">Welcome to Re∞ue Me</h1>

			<div className="row">
				<div className="col-md-3 mb-4">
					<div className="col">
						<form>
							<div className="form-group">
								<label htmlFor="pet-search">Search</label>

								<input
									onChange={(e) => setSearchVal(e.target.value)}
									type="search"
									className="form-control"
									placeholder="Search Pet"
								/>
							</div>
						</form>

						<Button onClick={handleSubmit}>Search</Button>
					</div>
					<div className="col" />
				</div>

				{/* </div>
      <div className="row"> */}
				<div className="col-9">
          <br></br>
					<h6>Dogs available for re∞ce</h6>
					{/* Move this to a separate component When an animal is favorited, then add to an array on the user collection.  For the favorites page we pass an array of the users favorited animals*/}
					<div className="row" style={{ width: '100%' }}>
						{renderAnimals.filter((animal) => animal.photos[0] && animal.photos[0].large).map((animal) => (
							<Card key={animal.id} className="col-4">
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
									<Button>Adopt</Button>
									{user && <Button onClick={() => favs(animal)}>favorite</Button>}
								</Card.Footer>
							</Card>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
