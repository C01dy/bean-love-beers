import React, {useState} from "react";
import {connect} from "react-redux";
import {fetchSearchBeer} from "../../actions";

const SearchBar = (props) => {
	const [inputValue, setInputValue] = useState("");

	const onInputValueChange = e => {
		e.preventDefault();
		return setInputValue(e.currentTarget.value)
	};

	const onSearchBeer = e => {
		e.preventDefault();
		if (inputValue) {
			props.onSearchBeer(inputValue)
			setInputValue("")
		} else {
			return alert("Put beer name!")
		}
	};

	return (
		<div className="row mb-3 ml-auto mr-auto mb-3" style={{maxWidth: "540px"}}>
			<form onSubmit={onSearchBeer} className="input-group">
				<input value={inputValue} onChange={onInputValueChange} type="text" className="form-control"
				       placeholder="Type to search"
				       aria-label="Recipient's username" aria-describedby="button-addon2"/>
				<div className="input-group-append">
						<button className="btn btn-primary" id="button-addon2">Search</button>
				</div>
			</form>
		</div>
	)
};

const mapDispatchToProps = dispatch => {
	return {
		onSearchBeer: beer_name => dispatch(fetchSearchBeer(beer_name))
	}
};

export default connect(null, mapDispatchToProps)(SearchBar);