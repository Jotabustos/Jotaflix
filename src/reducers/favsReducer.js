import { SET_FAV, RANK_FAV } from "../actions/types";

const initialState = {
  movies: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_FAV:
      return {
        ...state,
        movies: action.payload
      };

    case RANK_FAV: {
      state.movies[action.payload.indexMovie] = {
        ...state.movies[action.payload.indexMovie],
        user_rank: action.payload.user_rank
      }; return {
        ...state
      }
    }


    default:
      return state;
  }
}
