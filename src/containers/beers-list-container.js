import React, {Component} from "react";
import {connect} from "react-redux";

import BeersList from "../components/pages/beers-list";
import {fetchBeersSuccess, fetchBeersRequest, fetchBeersError, beerAddedToFavourite} from "../actions";
import {WithPunkbeerService} from "../components/HOC";
import RenderComponent from "../components/render-component";


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
		return (
			<RenderComponent isLoading={isLoading} error={error}>
				<BeersList beers={beers}/>
			</RenderComponent>
		)
	}
}

const mapStateToProps = ({beers, isLoading, error}) => {
	return {beers, isLoading, error}
};

const mapDispatchToProps = {
	fetchBeersSuccess,
	fetchBeersError,
	fetchBeersRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)((WithPunkbeerService(BeersListContainer)));