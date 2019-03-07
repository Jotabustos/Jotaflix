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
      backgroundImage: `url(https://image.tmdb.org/t/p/w342${
        movie.backdrop_path
      })`,
      margin: "40px",
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain"
    };

    return (
      <div className="movieitem" style={backgroundStyle}>
        <img
          className="movieitem__img"
          onClick={this.seeDetail}
          src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movieitem__info">
          <div className="movieitem__info__wrapper">
            <div className="movieitem__info__wrapper_average">
              {movie.vote_average}
            </div>
            <div className="movieitem__info__wrapper_title">
              {movie.title}
              <div className="movieitem__info__wrapper_title_date">
                {movie.release_date}
              </div>
            </div>
          </div>
          <div className="movieitem__info__overview">{movie.overview}</div>
        </div>
      </div>
    );
  }
}

export default Detail;
