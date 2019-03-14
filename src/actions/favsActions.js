import { SET_FAV, RANK_FAV, REMOVE_FAV } from "./types";

export const setFav = (movie, collection) => dispatch => {
  // Find the favourites movies stored
  const moviesFavsSaved = JSON.parse(localStorage.getItem("favs"));
  // Add the collection name to the movie object
  const movieWithCollection = { ...movie, collection: collection };
  if (moviesFavsSaved) {
    // There are favs
    // Check if the movie is already in the collection
    let alreadySaved = moviesFavsSaved.find(
      movieFav =>
        movieFav.id === movie.id && movieFav.collection === collection
    );
    if(alreadySaved){
      dispatch({
        type: SET_FAV,
        payload: moviesFavsSaved
      });
    } else{
      moviesFavsSaved.unshift(movieWithCollection);
      saveFavInLocalStorage(moviesFavsSaved);
      dispatch({
        type: SET_FAV,
        payload: moviesFavsSaved
      });
    }
  } else {
    // First Item Saved
    saveFavInLocalStorage([movieWithCollection]);
    dispatch({
      type: SET_FAV,
      payload: [movieWithCollection]
    });
  }
};

export const getFavs = () => dispatch => {
  // Find the favourites movies stored
  let moviesFav = JSON.parse(localStorage.getItem("favs"));
  if (moviesFav) {
    dispatch({
      type: SET_FAV,
      payload: moviesFav
    });
  }
};

export const evaluateMovie = (movie, user_rank) => dispatch => {
  // Find the favourites movies stored
  const moviesFav = JSON.parse(localStorage.getItem("favs"));
  // Add the user rate to the movie object
  const movieEvaluated = { ...movie, user_rank: user_rank };
  // Check if the fav list is not undefined
  if (moviesFav) {
    const indexOfmovieEvaluated = moviesFav.findIndex(
      movieFav => movieFav.id === movie.id
    );
    moviesFav[indexOfmovieEvaluated] = movieEvaluated;
    // Set localStorage with the new value
    saveFavInLocalStorage(moviesFav);
    // Create the payload
    const payload = {
      indexMovie: indexOfmovieEvaluated,
      user_rank: user_rank
    };
    dispatch({
      type: RANK_FAV,
      payload: payload
    });
  }
};

export const removeFav = movie => dispatch => {
  const moviesFav = JSON.parse(localStorage.getItem("favs"));
  if (Array.isArray(moviesFav)) {
    const indexOfmovieRemoved = moviesFav.findIndex(
      movieFav => movieFav.id === movie.id
    );
    moviesFav.splice(indexOfmovieRemoved, 1);
    // Save the new favourites
    localStorage.setItem("favs", JSON.stringify(moviesFav));
    dispatch({
      type: REMOVE_FAV,
      payload: moviesFav
    });
  } else {
    // Delete the entire item
    localStorage.removeItem("favs");
    dispatch({
      type: REMOVE_FAV,
      payload: {}
    });
  }
};


const saveFavInLocalStorage = (movies) =>{
  localStorage.removeItem("favs");
  localStorage.setItem("favs", JSON.stringify([...movies]));
}