import React, {Component} from 'react';
import {connect} from "react-redux";

import {fetchBeerSuccess, fetchBeerRequest, fetchBeerError} from "../actions";
import {WithPunkbeerService} from '../components/HOC';
import BeerPage from "../components/pages/beer-page";
import Preloader from "../components/preloader";
import ErrorIndicator from "../components/error-indicator";


class BeerPageContainer extends Component {

	componentDidMount() {
		const {punkbeerService, itemId, fetchBeerSuccess, fetchBeerError, fetchBeerRequest} = this.props;
		fetchBeerRequest();
		punkbeerService.getBeer(itemId)
			.then(beer => fetchBeerSuccess(beer))
			.catch(error => fetchBeerError(error));

		setTimeout(() => console.log(this.props), 5000)
	}

	render() {
		const {beer, isLoading, error} = this.props;

		if (isLoading) {
			return <Preloader/>
		}

		if (error) {
			return <ErrorIndicator/>
		}

		return (
			<BeerPage beer={beer}/>
		)
	}
}

const mapStateToProps = ({beer, isLoading, error}) => {
	return {beer, isLoading, error}
};

const mapDispatchToProps = {
	fetchBeerSuccess,
	fetchBeerError,
	fetchBeerRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(WithPunkbeerService(BeerPageContainer))