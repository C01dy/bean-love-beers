import React from 'react';

const DescriptionListItem = ({label, className, value, style}) => {
	return (
			<li>{label}
				<span className={`beer-page-description-value ml-2 ${className}`} style={style}> {value} </span>
			</li>
	)
};

export default DescriptionListItem;