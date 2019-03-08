import React, { Component } from "react";
import { withRouter } from "react-router";
import "./MovieItem.css";

class MovieItem extends Component {
  constructor() {
    super();
    this.state = {
      markAsFav: "",
      overview: ""
    };
  }

  componentDidMount() {
    // if (this.props.movie.overview.length > 300) {
    //   let newOverview = this.props.movie.overview.slice(0, 200);
    //   newOverview = `${newOverview}...`;
    //   this.setState({ overview: newOverview });
    // } else {
    //   this.setState({ overview: this.props.movie.overview });
    // }
  }
  // TODOOOOOOOOOO HACER LA VISTA DETALLE Y MANDARLA ALLI
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
  };

  render() {
    const { movie } = this.props;

    return (
      <div className="container__movieitem">
        <div className="container__movieitem__left">
          <img
            className="container__movieitem__left__img"
            onClick={this.seeDetail}
            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${
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
            <div className="container__movieitem__info__overview">{movie.overview}</div>
            <div className="container__movieitem__info__moreinfo" onClick={this.seeDetail}>
              More info
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(MovieItem);
