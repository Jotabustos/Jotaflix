import React, { Component } from "react";
import axios from "axios";
import { API_KEY } from "../../auth/keys";
import "./Detail.css";
import SelectCollection from "../selectcollection/SelectCollection";
import { connect } from "react-redux";
import { setFav } from "../../actions/favsActions";

class Detail extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
      showSelectCollection: false,
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

  onAcceptClick = collection => {
    this.props.setFav(this.state.movie, collection);
    this.setState({ showSelectCollection: false });
  };

  onCancelClick = () => {
    this.setState({ showSelectCollection: false });
  };

  onFavClick = () => {
    this.setState({ showSelectCollection: true });
  };

  render() {
    const { movie, showSelectCollection } = this.state;
    console.log(movie);
    const backgroundStyle = {
      backgroundImage: `url(https://image.tmdb.org/t/p/w1000_and_h563_face${
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
      <div className="detail__container">
        <div className="container__background" style={backgroundStyle} />
        <div className="detail__container__movieitem">
          <div className="detail__container__movieitem__left">
            <img
              className="detail__container__movieitem__left__img"
              onClick={this.seeDetail}
              src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2${
                movie.poster_path
              }`}
              alt={movie.title}
            />
          </div>
          <div className="detail__container__movieitem__info">
            <div className="detail__container__movieitem__info__wrapper">
              <div className="detail__container__movieitem__info__wrapper_title">
                <h2>{movie.title}</h2>
                <div className="detail__container__movieitem__info__wrapper_rank_date">
                  <p>Release: {movie.release_date}</p>{" "}
                  <p>Ranking: {movie.vote_average}</p>
                  <div onClick={this.onFavClick}>
                    <i className="fas fa-heart fa-lg favouriteButton" />
                  </div>
                </div>
              </div>
            </div>
            <div className="detail__container__movieitem__info__text">
              <div className="detail__container__movieitem__info__overview">
                <h4>Overview</h4>
                {movie.overview}
              </div>
            </div>
            {showSelectCollection && (
              <SelectCollection
                onAcceptClick={this.onAcceptClick}
                onCancelClick={this.onCancelClick}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  favs: state.favs
});

export default connect(mapStateToProps, { setFav })(Detail);
