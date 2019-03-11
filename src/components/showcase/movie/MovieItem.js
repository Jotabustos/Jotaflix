import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { setFav } from '../../../actions/favsActions';
import "./MovieItem.css";


class MovieItem extends Component {
  constructor() {
    super();
    this.state = {
      markAsFav: "",
      overview: ""
    };
  }

  seeDetail = () => {
    this.props.history.push(`/detail/${this.props.movie.id}`);
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.movie.overview > 300) {
      debugger;
      let newOverview = nextProps.movie.overview.slice(0, 200);
      newOverview = `${newOverview}...`;
      debugger;
      this.setState({ overview: newOverview });
    } else {
      this.setState({ overview: nextProps.movie.overview });
    }
  }

  setFavourite = () => {
    // setMovieFavourite action
    console.log("favved");
    this.props.setFav(this.props.movie)
  };

  render() {
    const { movie } = this.props;

    return (
      <div className="container__movieitem">
        <div className="container__movieitem__left">
          <img
            className="container__movieitem__left__img"
            onClick={this.seeDetail}
            src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2${
              movie.poster_path
            }`}
            alt={movie.title}
          />
          <div onClick={this.setFavourite}>
            <i className="fas fa-heart fa-lg favouriteButton" />
          </div>
        </div>
        <div className="container__movieitem__info">
          <div className="container__movieitem__info__wrapper">
            <div className="container__movieitem__info__wrapper_title">
              <h3>{movie.title}</h3>
              <div className="container__movieitem__info__wrapper_rank_date">
                <p>Release: {movie.release_date}</p>{" "}
                <p>Ranking: {movie.vote_average}</p>
              </div>
            </div>
          </div>
          <div className="container__movieitem__info__text">
            <div className="container__movieitem__info__overview">
              {movie.overview}
            </div>
            <div
              className="container__movieitem__info__moreinfo"
              onClick={this.seeDetail}
            >
              More info
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  favs: state.favs
})

export default connect(mapStateToProps, {setFav})(withRouter(MovieItem));
