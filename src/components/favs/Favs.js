import React, { Component } from "react";
import MovieFeed from "../showcase/movie/MovieFeed";
import { connect } from "react-redux";
import {getFavs} from '../../actions/favsActions'

class Favs extends Component {

    constructor() {
        super();
        this.state = {
            movies: [],
            errors: {}
        }
    }

    componentDidMount(){
        this.props.getFavs();
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.favs.movies){
            this.setState({ movies: nextProps.favs.movies})
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
