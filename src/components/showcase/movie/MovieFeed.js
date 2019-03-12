import React, { Component } from "react";
import MovieItem from "./MovieItem";

import "./Movie.css";

class MovieFeed extends Component {

  render() {

    const {movies, collection} = this.props;
    const movieContent = movies.map(movie => <MovieItem key={movie.id} movie={movie} />)

    return (
      <>
        {collection && <h2><b>{collection}</b></h2>}
      <div className="moviefeed">
        {movieContent}
      </div>
      </>
    )
  }
}

export default MovieFeed;
