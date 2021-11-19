import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Watchlist } from "./components/Watchlist";
import Movies from "./components/Movies";
import "./App.css";
import "./lib/font-awesome/css/all.min.css";

import { GlobalProvider } from "./context/GlobalState";

export const API_KEY = 'api_key=247b6aa143f3f2c0b100c0cbdfb1ac99';
export const BASE_URL = 'https://api.themoviedb.org/3';
export const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;

function App() {
  const [movies, setMovies] = useState ([]);

  useEffect(() => {
    fetch (API_URL)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setMovies(data.results);
      });
  }, [])

  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Switch>
          <Route path ='/' exact>
            <h1 className="page-header">Featured</h1>
            <div className="movie-container">
              {movies.length > 0 && 
                movies.map((movie) => (
                  <Movies key={movie.id} {...movie} movie={movie}/>))}
            </div>
          </Route>
          <Route path="/watchlist">
            <h1 className="page-header">Watchlist</h1>
            <Watchlist />
          </Route>
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
