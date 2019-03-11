import { SET_FAV } from "../actions/types";

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

    default:
      return state;
  }
}
