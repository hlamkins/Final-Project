import React, { useEffect, createContext, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { NavBar, Footer } from './components';
import { Profile, Home } from './pages';
import './styles/App.css';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

const AuthContext = createContext();
const petFinderKey = 'TJVybhQwk14ZUW7mrXN5QJd4gnBbsWAbsTRYX3B96ioDz0oz2C';
const petFinderSecret = 'v7SnK15B4vIsf91scgBau4jsJs7GM2KJFl4ptkuX';

const App = () => {
	const { user } = useAuth0();
	const [ accessToken, setAccessToken ] = useState(null);
	const accessTokenContextValue = { accessToken, setAccessToken };
	useEffect(() => {
		const fetchAccesToken = async () => {
			const params = new URLSearchParams();
			params.append('grant_type', 'client_credentials');
			params.append('client_id', petFinderKey);
			params.append('client_secret', petFinderSecret);
			const petfinderRes = await fetch('https://api.petfinder.com/v2/oauth2/token', {
				method: 'POST',
				body: params
			});
			const token = await petfinderRes.json();

			setAccessToken(token.access_token);
		};
		fetchAccesToken();
	}, []);

	useEffect(
		() => {
			if (user === undefined) {
				return;
			} else {
				axios.put('/api/users/doesExist', { email: user.email }).then((ourUser) => {
          if (ourUser.data === "exists") {
            return console.log("exists");
          } else if (ourUser.data === "Doesn't exist") {
						return axios
            .post('/api/users/newUser', { email: user.email, name: user.name, auth0sub: user.sub })
            .then((newUser) => {
              console.log(newUser);
            });;
					} else {
					console.log("alreadyExists")
					}
				});
			}
		},
		[ user ]
	);

	return (
		<div id="app" className="d-flex flex-column h-100">
			<NavBar />
			<div className="container flex-grow-1">
				<div className="mt-5">
					<Switch>
						<Route path="/" exact render={(props) => <Home {...props} accessToken={accessToken} />} />
						<Route path="/save" accessToken={accessToken} component={Profile} />
					</Switch>
				</div>
			</div>
			<Footer />
		</div>
	);
};
export default App;
