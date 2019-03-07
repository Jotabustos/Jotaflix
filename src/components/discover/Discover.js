import React, { Component } from "react";
import axios from "axios";
import MovieFeed from "../showcase/movie/MovieFeed";
import { API_KEY } from "../../auth/keys";

class Discover extends Component {

constructor(){
    super();
    this.state = {
        movies: [],
        errors: {}
    }
}
  componentDidMount() {
    // Discover
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=2018`
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

export default Discover;
