import React from 'react';
import './header.css';
import {NavLink} from "react-router-dom";

const Header = () => {
	return (
			<div className="header row bg-primary">
				<div className="col-lg-3">
					<div className="header-logo">
						<NavLink to="/">
							<h1 style={{color: "black"}}>BeanLoveBeers</h1>
						</NavLink>
					</div>
				</div>

				<div className="col-lg-5">
					<div className="input-group">
						<input type="text" className="form-control" placeholder="Enter for search"
						       aria-label="Recipient's username" aria-describedby="button-addon2"/>
						<div className="input-group-append">
							<button className="btn btn-outline-light" type="button" id="button-addon2">Search</button>
						</div>
					</div>
				</div>

				<div className="col-lg-2 mr-0">
					<span className="pr-1">Favourites</span>
					<i className="far fa-star header-cart-icon"></i>
				</div>
			</div>
	)
};

export default Header;