import React, { useEffect, useState } from 'react'
import url from '../tmdb api/axios';
import "./Row.css";
import Youtube from "react-youtube";
import movieTrailer from 'movie-trailer';

const imageURL = "https://image.tmdb.org/t/p/original/" //The base url to get the images

function Row({ title, fetchUrl, largeRow }) {

    const [movies, setMovies] = useState([]); //An empty array of movies
    const [trailerUrl, setTrailerUrl] = useState(""); // state for the trailer

    //Function to fetch the movies from the API
    //We can use aysnc inside the useEffect hook but there is a different way to do it but we  did this instead
    const fetchData = async () => {

        const request = await url.get(fetchUrl); //using axios to fetch data indirectly as we have already set up everything

        setMovies(request.data.results);//Setting the movies to the results that we got
        return request;
    };


    //Fetching the data once when the rows load
    useEffect(() => {

        fetchData(); //Calling the fetchData function whenever there is a change in fetchUrl         

    }, [fetchUrl]); //fetchUrl is a dependency as it is outside the scope of the hook  but is affecting the work done inside the hook

    //Below are the options for the youtube trailer we play, basically dependencies that we provide to the API to fetch the details
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
            
        }

    };

    const clickHandler = (movie) => {

        //If a trailer url is already present then set it to empty
        if(trailerUrl){
            setTrailerUrl("")
        }
        else{

            //we use movieTrailer from the movie-trailer package we imported, it gets the trailer for the particular movie based on its name
            movieTrailer(movie?.title || movie?.name || "")
            //after getting the movie name or movie title the movie-trailer package will give us an url from which we can get the params we want
            .then((url)=>{

                //Refer https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get("v")); //setting the movie trailer id to the state so that  we can play it, as here we have put urlParams.get("v") we get everything after v in the url which is basically the youtube video id which we want to play
            })
            .catch((error)=>{
                console.log(error);
            })
        }

    };

    return (
        <div className='row'>
            {/* title */}
            <h2>{title}</h2>
            <div className='cards'>
                {/* Each card inside the Row which are the films that we see */}
                {
                    movies.map((movie) => (
                        <img onClick={() => { clickHandler(movie) }} key={movie.id} className={`card ${largeRow && "cardLarge"}`} src={`${imageURL}${largeRow ? movie.poster_path : movie.backdrop_path}`} alt='movie_image' /> //Basically we append the image url with the poster_path to get the images(we need to do this in this API every API is different)
                    ))
                }
            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />} {/* videoId and opts is something we need to pass acc to the documentation */}
        </div>
    )
}

export default Row;
