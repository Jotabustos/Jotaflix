import { SET_FAV } from './types';

export const setFav = (movie) => dispatch => {
    const moviesFavsSaved = JSON.parse(localStorage.getItem('favs'));
    if(moviesFavsSaved){
        // There are favs
        if(moviesFavsSaved.length){
            // moviesFavsSaved is an array
            let alreadySaved = moviesFavsSaved.filter(movieFav => movieFav.id === movie.id)
            if(alreadySaved){
                dispatch({
                    type: SET_FAV,
                    payload: moviesFavsSaved
                })
            } else{
                moviesFavsSaved.unshift(movie)
                localStorage.setItem('favs', JSON.stringify(moviesFavsSaved))
                dispatch({
                    type: SET_FAV,
                    payload: moviesFavsSaved
                })
            }
        } else{
            // moviesFavsSaved is not an array yet
            let newFavs = moviesFavsSaved.id !== movie.id ? [movie, moviesFavsSaved] : movie
            localStorage.setItem('favs', JSON.stringify(newFavs))
            dispatch({
                type: SET_FAV,
                payload: newFavs
            })
        }
    } else{
        // First Item Saved
        localStorage.setItem('favs', JSON.stringify(movie))
        dispatch({
            type: SET_FAV,
            payload: movie
        })
    }


}

export const getFavs = () => dispatch => {
    let moviesFav = JSON.parse(localStorage.getItem('favs'));
    if (moviesFav) {
        //movie already saved
        dispatch({
            type: SET_FAV,
            payload: moviesFav
        })
    }
}