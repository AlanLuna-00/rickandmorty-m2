import { ADD_FAV, REMOVE_FAV, FILTER_CARDS, ORDER_CARDS } from "./actions";

const initialState = {
  allCharacters: [],
  myFavorites: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        allCharacters: [...state.allCharacters, action.payload],
        myFavorites: [...state.myFavorites, action.payload],
      };
    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: [
          ...state.myFavorites.filter((char) => char.id !== action.payload),
        ],
      };
    case FILTER_CARDS:
      const allCharactersCopy = [...state.allCharacters];
      const filteredCharacters = allCharactersCopy.filter((char) => char.gender === action.payload);
      return {
        ...state,
        myFavorites:
          action.payload === 'alls'
            ? [...state.allCharacters]
            : filteredCharacters
      };
    case ORDER_CARDS:
      let sortedFavorites = [...state.myFavorites];
      sortedFavorites.sort((a, b) => {
        if (action.payload === 'A') {
          return a.id - b.id;
        } else if (action.payload === 'D') {
          return b.id - a.id;
        }
        return null
      });
      return {
        ...state,
        myFavorites: sortedFavorites
      }
    default:
      return { ...state };
  }
};

export default rootReducer;
