import React from "react";
import MovieItem from "./MovieItem";

const MovieFeed = ({ movies }) => {
  const testItem = (
    <div className="movieitem">

              <img className="movieitem__img"
          src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/skBQQuaA60sX71uwinPfDnfALpC.jpg"
          alt="Cap"
        />
      <div className="movieitem__info">
        <div className="movieitem__info__wrapper">
          <div className="movieitem__info__wrapper_average">5.0</div>
          <div className="movieitem__info__wrapper_title">
            Capitana Marvel
            <div className="movieitem__info__wrapper_title_date">2019-01-03</div>
          </div>
        </div>
        <div className="movieitem__info__overview">
          Esta peli esta rotita Esta peli esta rotita Esta peli esta rotita Esta
          peli esta rotita Esta peli esta rotita
        </div>
        <div className="movieitem__info__moreinfo">
          More info
        </div>
      </div>
    </div>
  );
  return (
    <div className="moviecarousel">
      {testItem}
      {testItem}
      {testItem}
      {testItem}
    </div>
  );
};

export default MovieFeed;
