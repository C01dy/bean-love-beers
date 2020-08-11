import React, {Component} from "react";
import {connect} from "react-redux";

import BeersList from "../components/pages/beers-list";
import {fetchBeers} from "../actions";
import RenderComponent from "../components/render-component";
import SearchBar from "../components/search-bar";
import PagesButtonGroup from "../components/pages-button-group";

class BeersListContainer extends Component {


	state = {
		pageNum: 1
	}

	onNumChange = (newNum) => {
		return this.setState({
			pageNum: newNum
		})
	}

	componentDidMount() {
		this.props.onGetBeers()
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.pageNum !== this.state.pageNum) {
		  this.props.onGetBeers(this.state.pageNum)
		}
	}

	render() {
		const {beers, favourites, isLoading, error} = this.props;
		return (
			<React.Fragment>
				<SearchBar/>
				<RenderComponent isLoading={isLoading} error={error}>
					<BeersList beers={beers} favourites={favourites}/>
					<PagesButtonGroup onNumChange={this.onNumChange} pageNum={this.state.pageNum}/>
				</RenderComponent>
			</React.Fragment>
		)
	}
}

const mapStateToProps = ({beers, isLoading, error, favourites}) => {
	return {beers, isLoading, error, favourites}
}

const mapDispatchToProps = dispatch => {
	return {
		onGetBeers: (page_num = 1) => dispatch(fetchBeers(page_num))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(BeersListContainer);