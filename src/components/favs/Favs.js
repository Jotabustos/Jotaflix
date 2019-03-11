import React, { Component } from "react";
import MovieFeed from "../showcase/movie/MovieFeed";
import { connect } from "react-redux";

class Favs extends Component {

    constructor() {
        super();
        this.state = {
            movies: [],
            errors: {}
        }
    }


    render() {
        return (
            <div className="moviefeed">
                <MovieFeed movies={this.state.movies} />
            </div>
        )


    }
}

const mapStateToProps = state => ({
    favs: state.favs
})

export default connect(mapStateToProps, {getFavs})(Favs);
