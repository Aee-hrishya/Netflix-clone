import "./Banner.css";
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

    //function to truncate the text when text gets to large, it takes a string and a number after which we want to truncate
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    useEffect(() => {

        fetchData();

    }, [])

    return (

        <header className="banner" style={{
            backgroundSize: "cover",
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`, //Concatenating image url with the base url that we created for getting the images
            backgroundPosition: "center center"
        }}>

            <div className="banner_contents">

                <h1 className="banner_title">{movie?.name || movie?.title || movie?.original_name}</h1>

                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">List</button>
                </div>

                <h1 className="banner_description">{truncate(movie?.overview,200)}</h1>

            </div>
            <div className="banner_fadebottom"/>
        </header>
    )
}

export default Banner;
