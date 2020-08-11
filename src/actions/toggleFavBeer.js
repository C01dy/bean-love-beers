import {BEER_TOGGLE_FAVOURITE} from "./actions-types";

const toggleFavBeer = (itemId) => {
  return {
    type: BEER_TOGGLE_FAVOURITE,
    payload: itemId
  }
};

export default toggleFavBeer;