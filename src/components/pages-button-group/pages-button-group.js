import React from 'react';

const PagesButtonGroup = ({onNumChange, pageNum}) => {

	const renderButtons = () => {
		const arr = new Array(13).fill(true);
		return arr.map((item, idx) => {
			return (
				<li key={idx} className={`page-item ${idx + 1 === pageNum ? "active" : ""}`} style={{cursor: "pointer"}}>
					<span onClick={e => onNumChange(e.currentTarget.innerText)}
					      className={`page-link`}>
						{idx + 1}
					</span>
				</li>
			)
		})
	};

	return (
		<div className="pages-button-group row justify-content-center">
			<ul className="pagination pagination-lg">
				{renderButtons()}
			</ul>
		</div>
	)
};


export default PagesButtonGroup;