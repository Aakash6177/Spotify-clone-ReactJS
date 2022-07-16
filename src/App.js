import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

// this is the instance of spotify inside of our app
const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
  const [{ user }, dispatch] = useDataLayerValue(); // this is going to pull from the data layer

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
        // this way we are retireving the user's information, using that token
        // console.log("Show me the user", user);

        dispatch({
          type: "SET_USER",
          user: user, // this is where we are pushing stuff in data layer
        });
      }); // this gets the user account, and returns a promise
    }

    console.log("I have a token", token);
  }, [dispatch, token]);

  console.log("User: ", user);

  return <div className="App">{token ? <Player /> : <Login />}</div>;
}

export default App;
