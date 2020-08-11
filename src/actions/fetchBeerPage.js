import {FETCH_BEER_ERROR, FETCH_BEER_REQUEST, FETCH_BEER_SUCCESS} from "./actions-types";
import PunkbeerService from "../services/punkbeer-service";

const punkbeer = new PunkbeerService();

const fetchOneBeer = (beer_id) => dispatch => {
  dispatch(fetchBeerRequest())
  punkbeer.getBeer(beer_id)
    .then(beer => dispatch(fetchBeerSuccess(beer)))
    .catch(error => dispatch(fetchBeerFailure(error)))
};

const fetchBeerSuccess = (beer) => {
  return {
    type: FETCH_BEER_SUCCESS,
    payload: beer
  }
};
const fetchBeerRequest = () => {
  return {type: FETCH_BEER_REQUEST}
};
const fetchBeerFailure = (error) => {
  return {
    type: FETCH_BEER_ERROR,
    payload: error
  }
};

export default fetchOneBeer;