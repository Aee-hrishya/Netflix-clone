import React, { useEffect, useState } from 'react'
import url from '../tmdb api/axios';
import "./Row.css";

const imageURL = "https://image.tmdb.org/t/p/original/" //The base url to get the images

function Row({title, fetchUrl}) {

    const [movies, setMovies] = useState([]); //An empty array of movies

    //Function to fetch the movies from the API
    //We can use aysnc inside the useEffect hook but there is a different way to do it but we  did this instead
    const fetchData = async () => {

        const request = await url.get(fetchUrl); //using axios to fetch data indirectly as we have already set up everything

        setMovies(request.data.results);//Setting the movies to the results that we got
        console.log(request)
        return request;     
    };


    //Fetching the data once when the rows load
    useEffect(()=>{

        fetchData(); //Calling the fetchData function whenever there is a change in fetchUrl         

    },[ fetchUrl ]); //fetchUrl is a dependency as it is outside the scope of the hook  but is affecting the work done inside the hook

    return (
        <div className='row'>
            {/* title */}
            <h2>{title}</h2>
            <div className='cards'>
                {/* Each card inside the Row which are the films that we see */}
                {
                    movies.map((movie)=>(
                        <img key={movie.id} className='card' src={`${imageURL}${movie.poster_path}`} alt='movie_image'/> //Basically we append the image url with the poster_path to get the images(we need to do this in this API every API is different)
                    ))
                }
            </div>   
        </div>
    )
}

export default Row;
