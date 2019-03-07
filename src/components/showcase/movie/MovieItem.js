import React, { Component } from "react";
import { withRouter } from "react-router";

class MovieItem extends Component {
  constructor() {
    super();
    this.state = {
      markAsFav: "",
      overview: ""
    };
  }

  componentDidMount() {
    if (this.props.movie.overview.length > 200) {
      let newOverview = this.props.movie.overview.slice(0, 200);
      newOverview = `${newOverview}...`;
      this.setState({ overview: newOverview });
    } else {
      this.setState({ overview: this.props.movie.overview });
    }
  }
// TODOOOOOOOOOO HACER LA VISTA DETALLE Y MANDARLA ALLI
  seeDetail = () => {
    this.props.history.push(`/detail/${this.props.movie.id}`);
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.movie.overview > 200) {
      debugger;
      let newOverview = nextProps.movie.overview.slice(0, 200);
      newOverview = `${newOverview}...`;
      debugger
      this.setState({ overview: newOverview });
    } else {
      this.setState({ overview: nextProps.movie.overview });
    }
  }

  render() {
    const { movie } = this.props;

    return (
      <div className="movieitem">
        <div className="movieitem__left">
          <img
            className="movieitem__img"
            onClick={this.seeDetail}
            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${
              movie.poster_path
              }`}
            alt={movie.title}
          />
      </div>

        
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
          <div className="movieitem__info__overview">{this.state.overview}</div>
          <div className="movieitem__info__moreinfo" onClick={this.seeDetail}>
            More info
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(MovieItem);
