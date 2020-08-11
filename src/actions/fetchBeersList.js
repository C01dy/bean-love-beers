import {FETCH_BEERS_ERROR, FETCH_BEERS_REQUEST, FETCH_BEERS_SUCCESS} from "./actions-types";
import PunkbeerService from "../services/punkbeer-service";

const punkbeer = new PunkbeerService();

const fetchBeers = (page_num = 1) => dispatch => {
  dispatch(fetchBeersRequest())
  punkbeer.getAllBeer(page_num)
    .then(beers => dispatch(fetchBeersSuccess(beers)))
    .catch(error => dispatch(fetchBeersFailure(error)))
};

const fetchBeersSuccess = (beers) => {
  return {
    type: FETCH_BEERS_SUCCESS,
    payload: beers
  }
};
const fetchBeersRequest = () => {
  return {type: FETCH_BEERS_REQUEST}
};
const fetchBeersFailure = (error) => {
  return {
    type: FETCH_BEERS_ERROR,
    payload: error
  }
};

export default fetchBeers;