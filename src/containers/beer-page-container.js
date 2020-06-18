import React, {Component} from 'react';
import {connect} from "react-redux";

import {fetchBeerSuccess, fetchBeerRequest, fetchBeerError} from "../actions";
import {WithPunkbeerService} from '../components/HOC';
import {BeerPage} from '../components/pages/beer-page'
import RenderComponent from "../components/render-component";
import {getDataHelper} from "../helpers-fn/request-helper";


class BeerPageContainer extends Component {

	componentDidMount() {
		const {punkbeerService, itemId, fetchBeerSuccess, fetchBeerError, fetchBeerRequest} = this.props;
		getDataHelper(punkbeerService.getBeer(itemId), fetchBeerSuccess, fetchBeerError, fetchBeerRequest)
	}

	render() {
		const {beer, isLoading, error} = this.props;
		return (
			<RenderComponent isLoading={isLoading} error={error}>
				<BeerPage beer={beer}/>
			</RenderComponent>
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