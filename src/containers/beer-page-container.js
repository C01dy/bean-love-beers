import React, {Component} from 'react';
import {connect} from "react-redux";

import {fetchOneBeer} from "../actions";
import {BeerPage} from '../components/pages/beer-page'
import RenderComponent from "../components/render-component";


class BeerPageContainer extends Component {

	componentDidMount() {
		this.props.onGetBeer(this.props.itemId)
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
}

const mapDispatchToProps = dispatch => {
	return {
		onGetBeer: beer_id => dispatch(fetchOneBeer(beer_id))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(BeerPageContainer)