import React, { Component } from "react";
import axios from "axios";
import { API_KEY } from "../../auth/keys";
import "./Detail.css";

class Detail extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
      errors: {}
    };
  }

  componentDidMount() {
    // Detail
    const idDetail = this.props.match.params.id;

    axios
      .get(
        `https://api.themoviedb.org/3/movie/${idDetail}?api_key=${API_KEY}&language=en-US`
      )
      .then(res => this.setState({ movie: res.data }))
      .catch(err => console.log(err));
  }
  render() {
    const { movie } = this.state;
    console.log(movie);
    const backgroundStyle = {
      backgroundImage: `url(https://image.tmdb.org/t/p/original${
        movie.backdrop_path
      })`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "30vh",
      width: "100%",
      opacity: "0.8"
    };

    return (
      <div>
        <div className="container__background" style={backgroundStyle} />
        <div className="detail__container__movieitem">
          <div className="detail__container__movieitem__left">
            <img
              className="detail__container__movieitem__left__img"
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
          <div className="detail__container__movieitem__info">
            <div className="detail__container__movieitem__info__wrapper">
              <div className="detail__container__movieitem__info__wrapper_title">
                <h3>{movie.title}</h3>
                <div className="detail__container__movieitem__info__wrapper_rank_date">
                  <p>Release: {movie.release_date}</p>{" "}
                  <p>Ranking: {movie.vote_average}</p>
                </div>
              </div>
            </div>
            <div className="detail__container__movieitem__info__text">
              <div className="detail__container__movieitem__info__overview">
                {movie.overview}
              </div>
              <div
                className="detail__container__movieitem__info__moreinfo"
                onClick={this.seeDetail}
              >
                More info
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
