import React, {useState} from "react";
import WithPunkbeerService from "../HOC/with-punkbeer-service";
import {connect} from "react-redux";
import {fetchSearchBeerSuccess, fetchSearchBeerError, fetchSearchBeerRequest} from "../../actions";

const SearchBar = (props) => {

	const {punkbeerService, fetchSearchBeerSuccess, fetchSearchBeerError, fetchSearchBeerRequest} = props;
	const [inputValue, setInputValue] = useState("");

	const onInputValueChange = e => {
		e.preventDefault();
		return setInputValue(e.currentTarget.value)
	};

	const f = e => {
		e.preventDefault();
		fetchSearchBeerRequest();
		punkbeerService.searchBeer(inputValue)
			.then(beer => fetchSearchBeerSuccess(beer))
			.catch(err => fetchSearchBeerError(err));
		setInputValue("")
	};

	return (
		<div className="row mb-3 ml-auto mr-auto mb-3" style={{maxWidth: "540px"}}>
			<form onSubmit={f} className="input-group">
				<input value={inputValue} onChange={onInputValueChange} type="text" className="form-control"
				       placeholder="Type to search"
				       aria-label="Recipient's username" aria-describedby="button-addon2"/>
				<div className="input-group-append">
					<button className="btn btn-primary" type="button" id="button-addon2">Search</button>
				</div>
			</form>
		</div>
	)
};

const mapDispatchToProps = {
	fetchSearchBeerSuccess,
	fetchSearchBeerError,
	fetchSearchBeerRequest
};

export default connect(null, mapDispatchToProps)(WithPunkbeerService(SearchBar));