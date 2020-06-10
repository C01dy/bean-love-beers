import {
	FETCH_BEERS_SUCCESS, FETCH_BEERS_REQUEST, FETCH_BEERS_ERROR,
	FETCH_BEER_SUCCESS, FETCH_BEER_REQUEST, FETCH_BEER_ERROR
} from "./actions-types";

const fetchBeersSuccess = (beers) => {
	return {
		type: FETCH_BEERS_SUCCESS,
		payload: beers
	}
};

const fetchBeersRequest = () => {
	return {
		type: FETCH_BEERS_REQUEST
	}
};

const fetchBeersError = (error) => {
	return {
		type: FETCH_BEERS_ERROR,
		payload: error
	}
};

const fetchBeerSuccess = (beer) => {
	return {
		type: FETCH_BEER_SUCCESS,
		payload: beer
	}
};

const fetchBeerRequest = () => {
	return {
		type: FETCH_BEER_REQUEST
	}
};

const fetchBeerError = (error) => {
	return {
		type: FETCH_BEER_ERROR,
		payload: error
	}
};

export {
	fetchBeersSuccess,
	fetchBeersError,
	fetchBeersRequest,

	fetchBeerSuccess,
	fetchBeerError,
	fetchBeerRequest
}