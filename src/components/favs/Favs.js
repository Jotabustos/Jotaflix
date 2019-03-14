import React, { Component } from "react";
import MovieFeedFavs from "../showcase/movie/MovieFeedFavs";
import { connect } from "react-redux";
import { getFavs } from "../../actions/favsActions";

class Favs extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      collections: [],
      errors: {}
    };
  }

  componentDidMount() {
    this.props.getFavs();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.favs.movies.length > 0) {
      let collectionsNames = [];
      // Find the different collections name
      nextProps.favs.movies.forEach(movie => {
        if (!collectionsNames.includes(movie.collection)) {
          collectionsNames.push(movie.collection);
        }
      });
      this.setState({
        movies: nextProps.favs.movies,
        collections: collectionsNames
      });
    } else{
      this.setState({
        movies: nextProps.favs.movies,
        collections: []
      });
    }
  }

  render() {
    const { collections } = this.state;

    const moviesFavContent = collections.map(collection => (
      <MovieFeedFavs
        key={collection}
        collection={collection}
        movies={this.state.movies.filter(
          movie => movie.collection === collection
        )}
      />
    ));

    return <div className="moviefeed">{moviesFavContent}</div>;
  }
}

const mapStateToProps = state => ({
  favs: state.favs
});

export default connect(
  mapStateToProps,
  { getFavs }
)(Favs);
