// this is the latetest version of spotify.js file
// using the spotify api for user authentication logic
export const authEndpoint = "https://accounts.spotify.com/authorize";

// after authentication it will redirect to the home page that is the local host 3000
const redirectUri = "http://localhost:3000";

// setting up some variables for later use
const client_id = "a5fb2dc08e7c4d3491f52e128625ec1d";

// these are the permissions that user of you clone app is giving you to manupilat, which will reflect in the real app.
const scopes = [
  "user-read-recently-played",
  "user-read-playback-position",
  "user-top-read",
  "user-read-currently-playing",
  "user-modify-playback-state",
];

// get the acces token from the URL and save it

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

// use all of the stuff above and make a login url using string interpilation
export const loginUrl = `${authEndpoint}?client_id=${client_id}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
