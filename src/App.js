import {Route, Routes} from "react-router-dom"
import './App.css';
import MovieDetails from "./components/MovieDetails";
import Home from "./components/Home";
import MovieList from "./components/MovieList";
import TvShows from "./components/TvShows";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import TvShowDetails from "./components/TvShowDetails";

function App() {
  return (
    <div className="App">
    <NavBar />
    <Routes>
      <Route path="/" exact element={<Home />}/>
      <Route path="/movies" exact element={<MovieList />}/>
      <Route path="/tvshows" exact element={<TvShows />}/>
      <Route path="/movie/:id" exact element={<MovieDetails />}/>
      <Route path="/tv/:id" exact element={<TvShowDetails />}/>
    </Routes>
    <Footer/>
    </div>

  );
}

export default App;
