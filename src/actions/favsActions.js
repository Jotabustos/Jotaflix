import { SET_FAV, RANK_FAV, REMOVE_FAV } from "./types";
import { dispatch } from "rxjs/internal/observable/range";

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
  // If is Array
  if (Array.isArray(moviesFav)) {
    const indexOfmovieEvaluated = moviesFav.findIndex(
      movieFav => movieFav.id === movie.id
    );
    // Set localStorage with the new value
    moviesFav[indexOfmovieEvaluated] = movieEvaluated;
    localStorage.setItem("favs", JSON.stringify(moviesFav));
    // Create the payload
    const payload = {
      indexMovie: indexOfmovieEvaluated,
      user_rank: user_rank
    };
    dispatch({
      type: RANK_FAV,
      payload: payload
    });
  } else {
    // If is not Array
    localStorage.setItem("favs", JSON.stringify(movieEvaluated));
    const payload = {
      indexMovie: 0,
      user_rank: user_rank
    };
    dispatch({
      type: RANK_FAV,
      payload: payload
    });
  }
};

export const removeFav = movie => dispatch => {
  debugger;
  const moviesFav = JSON.parse(localStorage.getItem("favs"));
  if (Array.isArray(moviesFav)) {
    const indexOfmovieRemoved = moviesFav.findIndex(
      movieFav => movieFav.id === movie.id
    );
    moviesFav.splice(indexOfmovieRemoved, 1);
    localStorage.setItem("favs", JSON.stringify(moviesFav));
    dispatch({
      type: REMOVE_FAV,
      payload: moviesFav
    });
  } else {
    localStorage.removeItem("favs");
    dispatch({
      type: REMOVE_FAV,
      payload: {}
    });
  }
};
