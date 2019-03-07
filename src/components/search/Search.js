import React, { Component } from "react";
import axios from "axios";
import MovieFeed from "../showcase/movie/MovieFeed";
import { withRouter } from "react-router";
import { API_KEY } from "../../auth/keys";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      errors: {}
    };
  }

  updateSearch(nextProp) {
    if (nextProp) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${nextProp}&page=1&include_adult=false`
        )
        .then(res => this.setState({ movies: res.data.results }))
        .catch(err => console.log(err));
    }
  }

  componentDidMount() {
    this.updateSearch(this.props.location.state.searchText);
  }

  componentWillReceiveProps(nextProps) {
    this.updateSearch(nextProps.location.state.searchText);
  }

  render() {
    return (
      <div className="moviefeed">
        <MovieFeed movies={this.state.movies} />
      </div>
    );
  }
}

export default withRouter(Search);
