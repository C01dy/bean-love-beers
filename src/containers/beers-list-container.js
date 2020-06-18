import React, {Component} from "react";
import {connect} from "react-redux";

import BeersList from "../components/pages/beers-list";
import {fetchBeersSuccess, fetchBeersRequest, fetchBeersError} from "../actions";
import {WithPunkbeerService} from "../components/HOC";
import RenderComponent from "../components/render-component";
import SearchBar from "../components/search-bar";
import PagesButtonGroup from "../components/pages-button-group";
import {getDataHelper} from "../helpers-fn/request-helper";


class BeersListContainer extends Component {

	state = {
		pageNum: 1
	};

	onNumChange = (newNum) => {
		return this.setState({
			pageNum: newNum
		})
	};

	componentDidMount() {
		const {fetchBeersSuccess, fetchBeersError, fetchBeersRequest, punkbeerService} = this.props;
		getDataHelper(punkbeerService.getAllBeer(), fetchBeersSuccess, fetchBeersError, fetchBeersRequest)
	}

	componentDidUpdate(prevProps, prevState) {
		const {fetchBeersSuccess, fetchBeersError, fetchBeersRequest, punkbeerService} = this.props;
		if (prevState.pageNum !== this.state.pageNum) {
			getDataHelper(
				punkbeerService.getAllBeer(this.state.pageNum),
				fetchBeersSuccess,
				fetchBeersError,
				fetchBeersRequest
			)
		}
	}

	render() {
		const {beers, isLoading, error} = this.props;
		return (
			<React.Fragment>
				<SearchBar/>
				<RenderComponent isLoading={isLoading} error={error}>
					<BeersList beers={beers}/>
					<PagesButtonGroup onNumChange={this.onNumChange} pageNum={this.state.pageNum}/>
				</RenderComponent>
			</React.Fragment>
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