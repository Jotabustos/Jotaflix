import React, { Component } from "react";
import MovieItem from "./MovieItem";

import "./Movie.css";

class MovieFeed extends Component {

  render() {

    const {movies} = this.props;

    return movies.map(movie => <MovieItem key={movie.id} movie={movie} />)
  }
}

export default MovieFeed;
