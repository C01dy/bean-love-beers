import {
	FETCH_BEERS_SUCCESS,
	FETCH_BEERS_ERROR,
	FETCH_BEERS_REQUEST,
	FETCH_BEER_SUCCESS,
	FETCH_BEER_ERROR,
	FETCH_BEER_REQUEST,
	FETCH_SEARCH_BEER_SUCCESS,
	FETCH_SEARCH_BEER_REQUEST,
	FETCH_SEARCH_BEER_ERROR,
	BEER_ADDED_TO_FAVOURITE,
} from "../actions/actions-types";

const initialState = {
	beers: [],
	beer: {},
	isLoading: false,
	error: null,
	favourites: [],
};

export const reducer = (state = initialState, action) => {

	switch (action.type) {
		case FETCH_BEERS_SUCCESS:
			return {
				...state,
				isLoading: false,
				error: null,
				beers: action.payload,
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
				error: null,
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
		case FETCH_SEARCH_BEER_SUCCESS:
			console.log(state.beers);
			console.log(state.error);
			return {
				...state,
				isLoading: false,
				error: null,
				beers: action.payload
			};
		case FETCH_SEARCH_BEER_REQUEST:
			return {
				...state,
				isLoading: true,
			};
		case FETCH_SEARCH_BEER_ERROR:
			return {
				...state,
				isLoading: false,
				error: action.payload
			};
		case BEER_ADDED_TO_FAVOURITE:
			const beerId = action.payload;
			const beer = state.beers.find(beer => beer.id === beerId);

			const newFavBeer = {
				name: beer.name,
				abv: beer.abv, // Крепкость
				id: beer.id,
				image: beer.image,
				description: beer.description,
				firstBrewed: beer.firstBrewed,
			};

			return {
				...state,
				favourites: [
					...state.favourites,
					newFavBeer
				],
			};
		default:
			return state;
	}
};
