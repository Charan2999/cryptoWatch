import "./Banner.css";
import { useState, useEffect } from "react";
import axios from "axios";
import requests from "../../request";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const randomMovie = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        randomMovie.data.results[Math.floor(Math.random() * randomMovie.data.results.length)]
      );
      return randomMovie;
    }
    fetchData();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(" https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        backgroundPosition: "center" ,
      }}
    >
      <div className="banner__items">
        <h1 className="banner__title">{movie.title}</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h2 className="banner__description">{movie.overview}</h2>
      </div>
      <div className="banner__fadeBottom" />
    </header>
  );
};

export default Banner;
