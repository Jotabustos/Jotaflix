import React, { Component } from 'react'
import SelectCollection from "../selectcollection/SelectCollection";

class DetailItem extends Component {

    constructor() {
        super();
        this.state = {
            showSelectCollection: false
        };
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
      const { movie} = this.props;
    return (
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
                        <h1>
                            <b>{movie.title}</b>
                        </h1>
                        <div className="detail__container__movieitem__info__wrapper_rank_date">
                            <p>
                                <span className="sub_header">Release</span>{" "}
                                {movie.release_date}
                            </p>{" "}
                            <p>
                                <span className="sub_header">Ranking</span>{" "}
                                {movie.vote_average}
                            </p>
                            <div onClick={this.onFavClick}>
                                <i className="fas fa-heart fa-lg favouriteButton" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="detail__container__movieitem__info__text">
                    <div className="detail__container__movieitem__info__overview">
                        <h4>
                            <span className="sub_header">Overview</span>
                        </h4>
                        {movie.overview}
                    </div>
                </div>
                {this.state.showSelectCollection && (
                    <SelectCollection
                        onAcceptClick={this.onAcceptClick}
                        onCancelClick={this.onCancelClick}
                    />
                )}
            </div>
        </div>
    )
  }
}

export default DetailItem;