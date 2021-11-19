import React, { useState } from "react";
import { ResultCard } from "./ResultCard";

export const Add = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=247b6aa143f3f2c0b100c0cbdfb1ac99&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  };

  return (
    <div className="input-wrapper">
      <input
      type="text"
      placeholder="Search"
      value={query}
      onChange={onChange}
      className="search"
      />
      {results.length > 0 &&
      results.map((movie) => (
        <ResultCard movie={movie} key={movie.id}/>
        ))}
    </div>
    
  );
};
