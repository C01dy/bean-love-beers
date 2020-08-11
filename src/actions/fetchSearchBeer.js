import {FETCH_SEARCH_BEER_ERROR, FETCH_SEARCH_BEER_REQUEST, FETCH_SEARCH_BEER_SUCCESS} from "./actions-types";
import PunkbeerService from "../services/punkbeer-service";

const punkbeer = new PunkbeerService();

const fetchSearchBeer = (beer_name) => dispatch => {
  dispatch(fetchSearchBeerRequest())

  punkbeer.searchBeer(beer_name)
    .then(beer => dispatch(fetchSearchBeerSuccess(beer)))
    .catch(error => dispatch(fetchSearchBeerFailure(error)))
}

const fetchSearchBeerSuccess = (beer) => {
  return {
    type: FETCH_SEARCH_BEER_SUCCESS,
    payload: beer
  }
};
const fetchSearchBeerRequest = () => {
  return {type: FETCH_SEARCH_BEER_REQUEST}
};
const fetchSearchBeerFailure = (error) => {
  return {
    type: FETCH_SEARCH_BEER_ERROR,
    payload: error
  }
};

export default fetchSearchBeer;