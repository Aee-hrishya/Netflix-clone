
const apiKey = "dd18493a7fc84d23aad556491ec2ca4a"; //TMDB API key

//These are hte requests we will be using to get the different movies and perform other tasks. This step is not compulsor ywe didd this only so that we have the requests stored so that we can use them directly
export const requests = {

    fetchTrending: `/trending/all/week?api_key=${apiKey}&language=en-US`,
	fetchNetflixOriginals: `/discover/tv?api_key=${apiKey}&with_network=123`,
	fetchTopRated: `/movie/top_rated?api_key=${apiKey}&language=en-US`,
	fetchActionMovies: `/discover/movie?api_key=${apiKey}&with_genres=28`,
	fetchComedyMovies: `/discover/movie?api_key=${apiKey}&with_genres=35`,
	fetchHorrorMovies: `/discover/movie?api_key=${apiKey}&with_genres=27`,
	fetchRomanceMovies: `/discover/movie?api_key=${apiKey}&with_genres=10749`,
	fetchDocumentaries: `/discover/movie?api_key=${apiKey}&with_genres=99`

};