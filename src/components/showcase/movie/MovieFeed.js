import React, { Component } from "react";
import MovieItem from "./MovieItem";

import "./Movie.css";

class MovieFeed extends Component {
  render() {
    const { movies } = this.props;
    const movieContent = movies.map(movie => (
      <MovieItem key={movie.id} movie={movie} />
    ));

    return <div className="moviefeed">{movieContent}</div>;
  }
}

export default MovieFeed;
