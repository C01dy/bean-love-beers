import React, {Component} from 'react';
import {connect} from "react-redux";

import {fetchBeerSuccess, fetchBeerRequest, fetchBeerError} from "../../../actions";
import {WithPunkbeerService} from "../../HOC";


class BeerPageContainer extends Component {

	componentDidMount() {
		const {punkbeerService, itemId, fetchBeerSuccess, fetchBeerError} = this.props;
		punkbeerService.getBeer(itemId)
			.then(beer => fetchBeerSuccess(beer))
			.catch(error => fetchBeerError(error));

		setTimeout(() => console.log(this.props), 5000)
	}

	render() {
		const {beer} = this.props;
		return (
			<BeerPage beer={beer}/>
		)
	}
}


const BeerPage = ({beer}) => {
	return (
		<div className="row justify-content-center">
			<div className="col-lg-4">
				<h1>BEER PAGE WORKING </h1>
			</div>
		</div>
	)
};

const mapStateToProps = ({beer, isLoading, error}) => {
	return {beer, isLoading, error}
};

const mapDispatchToProps = {
	fetchBeerSuccess,
	fetchBeerError,
	fetchBeerRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(WithPunkbeerService(BeerPageContainer))