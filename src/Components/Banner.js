
import { useState, useEffect } from "react";
import url from "../tmdb api/axios";
import { requests } from "../tmdb api/requests";

function Banner() {
    
    const [movie, setMovie] = useState([]); //state of this component

    const fetchData = async () => {
        const response = await url.get(requests.fetchNetflixOriginals); //Grabbing netflix originals from the API

        setMovie(
            response.data.results[
                Math.floor(Math.random() * response.data.results.length - 1)
            ]
        ); //Setting the movies to any random movie grabbed from the API whenever the component loads
    }

    useEffect(()=>{

        fetchData();

    },[])

    return (

        <header className="banner" style={{
            backgroundSize: "cover",
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`, //Concatenating image url with the base url that we created
            backgroundPosition: "center center"
        }}>

        <div className="banner_contents">
            <h1>{movie?.name || movie?.title || movie?.original_name}</h1>
            <button className="banner_buttons">Play</button>
            <button className="banner_buttons">List</button>
        </div>

        <h1 className="banner_description">{movie?.overview}</h1>

        </header>
    )
}

export default Banner;
