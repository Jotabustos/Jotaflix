import React, { Component } from "react";
import MovieItemFav from "./MovieItemFav";
import "./Movie.css";


class MovieFeedFavs extends Component {

    render() {

        const { movies, collection } = this.props;
        const movieContent = movies.map(movie => <MovieItemFav key={movie.id} movie={movie} />)

        return (
            <>
                {collection && <h2><b>{collection}</b></h2>}
                <div className="moviefeedfavs">
                    {movieContent}
                </div>
            </>
        )
    }
}

export default MovieFeedFavs;
