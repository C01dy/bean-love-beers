import React, {Component} from "react";
import {connect} from "react-redux";

import BeersList from "../components/pages/beers-list";
import ErrorIndicator from "../components/error-indicator";
import Preloader from "../components/preloader";
import {fetchBeersSuccess, fetchBeersRequest, fetchBeersError} from "../actions";
import {WithPunkbeerService} from "../components/HOC";


class BeersListContainer extends Component {

	componentDidMount() {
		const {fetchBeersSuccess, fetchBeersError, fetchBeersRequest, punkbeerService} = this.props;
		fetchBeersRequest();
		punkbeerService.getAllBeer()
			.then(beers => fetchBeersSuccess(beers))
			.catch(err => fetchBeersError(err));
	}

	render() {
		const {beers, isLoading, error} = this.props;

		if (isLoading) {
			return <Preloader/>
		}

		if (error) {
			return <ErrorIndicator/>
		}

		return (
			<BeersList beers={beers}/>
		)
	}
}

const mapStateToProps = ({beers, isLoading, error}) => {
	return {beers, isLoading, error}
};

const mapDispatchToProps = {
	fetchBeersSuccess,
	fetchBeersError,
	fetchBeersRequest
};

export default connect(mapStateToProps, mapDispatchToProps)((WithPunkbeerService(BeersListContainer)));