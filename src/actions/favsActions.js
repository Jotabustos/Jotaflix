import { SET_FAV, RANK_FAV } from "./types";

export const setFav = (movie, collection) => dispatch => {
  // Find the favourites movies stored
  const moviesFavsSaved = JSON.parse(localStorage.getItem("favs"));
  // Add the collection name to the movie object
  const movieWithCollection = { ...movie, collection: collection };
  debugger;
  if (moviesFavsSaved) {
    // There are favs
    if (moviesFavsSaved.length) {
      // moviesFavsSaved is an array
      let alreadySaved = moviesFavsSaved.filter(
        movieFav =>
          movieFav.id === movie.id && movieFav.collection === collection
      );
      if (alreadySaved.length > 0) {
        dispatch({
          type: SET_FAV,
          payload: moviesFavsSaved
        });
      } else {
        moviesFavsSaved.unshift(movieWithCollection);
        localStorage.setItem("favs", JSON.stringify(moviesFavsSaved));
        dispatch({
          type: SET_FAV,
          payload: moviesFavsSaved
        });
      }
    } else {
      // moviesFavsSaved is not an array yet
      let newFavs =
        moviesFavsSaved.id !== movie.id ||
        moviesFavsSaved.collection !== collection
          ? [movieWithCollection, moviesFavsSaved]
          : movieWithCollection;
      localStorage.setItem("favs", JSON.stringify(newFavs));
      dispatch({
        type: SET_FAV,
        payload: newFavs
      });
    }
  } else {
    // First Item Saved
    localStorage.setItem("favs", JSON.stringify(movieWithCollection));
    dispatch({
      type: SET_FAV,
      payload: movieWithCollection
    });
  }
};

export const getFavs = () => dispatch => {
  let moviesFav = JSON.parse(localStorage.getItem("favs"));
  debugger;
  if (moviesFav) {
    // More than one movie
    if (moviesFav.length) {
      dispatch({
        type: SET_FAV,
        payload: moviesFav
      });
    } else {
      // Only one movie
      dispatch({
        type: SET_FAV,
        payload: [moviesFav]
      });
    }
  }
};

export const evaluateMovie = (movie, user_rank) => dispatch => {
  const movieEvaluated = { ...movie, user_rank: user_rank };
  const moviesFav = JSON.parse(localStorage.getItem("favs"));
  const indexOfmovieEvaluated = moviesFav.findIndex(
    movieFav => movieFav.id === movie.id
  );
  const payload = {
    indexMovie: indexOfmovieEvaluated,
    user_rank: user_rank
  };
  debugger;
  dispatch({
    type: RANK_FAV,
    payload: payload
  });
};
