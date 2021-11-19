import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "./MovieCard";
import { ResultCard } from "./ResultCard";
import { Add } from "./Add";

export const Watchlist = (results) => {
  const { watchlist } = useContext(GlobalContext);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="movie-page-header">
          <span className="count-pill">
            {watchlist.length} {watchlist.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>
        <div className="watchlist-content-container">
          <div className="watchlist-container">
            {results.length > 0 &&
            results.map((movie) => (
              <ResultCard movie={movie} key={movie.id}/>
              ))}

              {watchlist.length > 0 ? (
                <div className="movie-grid">
                  {watchlist.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} type="watchlist" />
                  ))}
                </div>
              ) : (
                ''
              )}
          </div>
          <div className="search-container">
            <Add />
          </div>
        </div>
      </div>
    </div>
  );
};
