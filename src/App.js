import React from "react";
import { useEffect, createContext, useState } from 'react';
import { Route, Switch } from "react-router-dom";
import { NavBar, Footer } from "./components";
import {  Profile, ExternalApi } from "./views";
import HomePage from "./pages/Home";
import "./style/App.css";


const AuthContext = createContext();
const petFinderKey = "TJVybhQwk14ZUW7mrXN5QJd4gnBbsWAbsTRYX3B96ioDz0oz2C";
const petFinderSecret = "v7SnK15B4vIsf91scgBau4jsJs7GM2KJFl4ptkuX";


const App = () => {

  const [accessToken, setAccessToken] = useState(null)
  const [renderAnimals, setRenderAnimals] = useState([]);
 const accessTokenContextValue = {accessToken, setAccessToken};
  useEffect(() => {
    const fetchAccesToken = async () => {
      const params = new URLSearchParams();
      params.append("grant_type", "client_credentials");
      params.append("client_id", petFinderKey);
      params.append("client_secret", petFinderSecret);
      const petfinderRes = await fetch(
        "https://api.petfinder.com/v2/oauth2/token",
        {
          method: "POST",
          body: params
        }
      )
      const token = await petfinderRes.json();
      
     
      setAccessToken(token.access_token)
      console.log(accessToken, "access token")
    };
    fetchAccesToken();
  }, []);
  
  const findAnimal = async (url, type, page) => {
    // `https://api.petfinder.com/v2/animals?type=dog&page=2`
    await fetch(`${url}?breed=${type}&page=${page}`,{
      method: "GET",
      headers: {"Authorization" : "Bearer " + accessToken}
    }).then((response) => {
      return response.json();
    }).then((data) => {
        console.log(data);
        setRenderAnimals(data.animals)
    })
  };
  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <div className="container flex-grow-1">
        <div className="mt-5">
          <Switch>
            <Route path="/" exact render={(props) => <HomePage {...props} findAnimal={findAnimal} renderAnimals={renderAnimals} />} />
            <Route path="/profile" component={Profile} />
            <Route path="/external-api" component={ExternalApi} />
          </Switch>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default App;