import React, {Component} from 'react';
import ErrorIndicator from "../error-indicator";
import Preloader from "../preloader";

export default class RenderComponent extends Component {

	render() {
		const {isLoading, error} = this.props;

		if (isLoading) {
			return <Preloader/>
		}

		if (error) {
			return <ErrorIndicator/>
		}

		return (this.props.children)
	}
}
