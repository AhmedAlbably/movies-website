import { useEffect, useState } from "react";
import "./add.css";
import axios from "axios";
import Card from "./Card";
function Add() {
  const [inputValue, setInputValue] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?s=${inputValue}&apikey=c8f734c2`)
      .then((response) => {
        if (response.data.Search) {
          setMovies(response.data.Search);
        }
      })
      .catch((err) => console.log(err));
  }, [inputValue]);
  return (
    <div className="add-page">
      <div className="container">
        <div className="add-input">
          <input
            type="text"
            placeholder="Search about your movie"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>

        {movies.length > 0 && (
          <ul className="result">
            {movies.map((movie) => (
              <li key={movie.imdbID}>{<Card movie={movie}/>}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Add;


 