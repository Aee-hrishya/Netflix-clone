import './App.css';
import Banner from './Components/Banner';
import Row from './Components/Row';
import { requests } from './tmdb api/requests';

function App() {
  return (
    <div className="App">
      
      {/* Navbar */}

      {/* Banner */}
      <Banner />

      {/* Rows */}
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} largeRow={true} /> {/*largeRow is used as the first row has large images */}
      <Row title="Trending" fetchUrl={requests.fetchTrending}/>
      <Row Top-Rated="Trending" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action-Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy-Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror-Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance-Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
