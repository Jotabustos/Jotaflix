import React, { Component } from "react";
import axios from "axios";
import MovieFeed from "../showcase/movie/MovieFeed";
import { API_KEY } from "../../auth/keys";

class Upcoming extends Component {

    constructor() {
        super();
        this.state = {
            movies: [],
            errors: {}
        }
    }
    componentDidMount() {
        // Upcoming
        axios
            .get(
                `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
            )
            .then(res => this.setState({ movies: res.data.results }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="moviefeed">
                <MovieFeed movies={this.state.movies} />
            </div>
        )


    }
}

export default Upcoming;
