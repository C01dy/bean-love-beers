import React from 'react';

import './header.css';
import {NavLink} from "react-router-dom";

const Header = () => {
	return (
		<div className="header">
			<div className="container">
				<div className="row header-row">

					<div className="col-lg-3">
						<div className="header-logo">
							<NavLink to="/">
								<h1 className="header-title">BeanLoveBeers</h1>
							</NavLink>
						</div>
					</div>

					<div className="col-lg-2 mr-0">
						<NavLink to="/favourites">
							<span className="pr-1">Favourites</span>
							<i className="far fa-star header-cart-icon"></i>
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	)
};

export default Header;