import axios from "axios";

//Now we created a base url that we will be needing before making all the requests to the API so instead of typing this while thing everytime we make the request we have broken created an instance of it so that we can use by simply importing it.
const url = axios.create({
    baseURL = "https://api.themoviedb.org/3"
});

export default url;