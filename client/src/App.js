import React, { useEffect, createContext, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { NavBar, Footer } from "./components";
import {  Profile, Home } from "./pages";
import "./styles/App.css";


const AuthContext = createContext();
const petFinderKey = "TJVybhQwk14ZUW7mrXN5QJd4gnBbsWAbsTRYX3B96ioDz0oz2C";
const petFinderSecret = "v7SnK15B4vIsf91scgBau4jsJs7GM2KJFl4ptkuX";


const App = () => {

  const [accessToken, setAccessToken] = useState(null)  
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
  
  


  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <div className="container flex-grow-1">
        <div className="mt-5">
          <Switch>
            <Route path="/" exact render={(props) => <Home {...props} accessToken={accessToken} />} />
            <Route path="/profile" accessToken={accessToken} component={Profile} />            
          </Switch>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default App;