export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';

export const addFav = (char) => ({ type: ADD_FAV, payload: char })

export const removeFav = (id) => ({ type: REMOVE_FAV, payload: id })