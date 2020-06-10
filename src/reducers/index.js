import {
	FETCH_BEERS_SUCCESS, FETCH_BEERS_ERROR, FETCH_BEERS_REQUEST,
	FETCH_BEER_SUCCESS, FETCH_BEER_ERROR, FETCH_BEER_REQUEST
} from "../actions/actions-types";

const initialState = {
	beers: [],
	beer: {},
	isLoading: false,
	error: false,
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_BEERS_SUCCESS:
			return {
				...state,
				isLoading: false,
				error: false,
				beers: action.payload
			};
		case FETCH_BEERS_REQUEST:
			return {
				...state,
				isLoading: true
			};
		case FETCH_BEERS_ERROR:
			return {
				...state,
				isLoading: false,
				error: action.payload
			};
		case FETCH_BEER_SUCCESS:
			return {
				...state,
				isLoading: false,
				error: false,
				beer: action.payload
			};
		case FETCH_BEER_REQUEST:
			return {
				...state,
				isLoading: true,
			};
		case FETCH_BEER_ERROR:
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
