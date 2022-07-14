import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";

// this is the instance of spotify inside of our app
const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);

  // we are going to use the use iffect hook, that is going to run code based on a given code
  useEffect(() => {
    // code
    const hash = getTokenFromUrl();
    // we are doing this because we do not want the access token to sit in the URL
    window.location.hash = "";
    // this is just logging the access token, returned after spotify authication
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        console.log("Show me the user", user);
      }); // this gets the user account, and returns a promise
    }

    console.log("I have a token", token);
  }, []);

  return (
    <div className="App">{token ? <h1>I am logged in </h1> : <Login />}</div>
  );
}

export default App;
