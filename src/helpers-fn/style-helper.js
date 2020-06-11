const abvColor = (abv, prop) => {
	if (abv >= 5) {
		return `${prop}-danger`;
	} else if (abv <= 1) {
		return `${prop}-success`;
	} else if (abv <= 3) {
		return `${prop}-primary`
	} else {
		return `${prop}-warning`
	}
};

const ebcColor = (ebc) => {
	if (ebc <= 4) {
		return "#f7f761";
	} else if (ebc <= 6) {
		return "#f6f53a";
	} else if (ebc <= 8) {
		return "#eae639";
	} else if (ebc <= 12) {
		return "#cebc38";
	} else if (ebc <= 16) {
		return "#b39242";
	} else if (ebc <= 20) {
		return "#b18140";
	} else if (ebc <= 26) {
		return "#a86736";
	} else if (ebc <= 33) {
		return "#7e4c33";
	} else if (ebc <= 39) {
		return "#52341b";
	} else if (ebc <= 47) {
		return "#221715";
	} else if (ebc <= 57) {
		return "#100b0a";
	} else if (ebc <= 69) {
		return "#070707";
	} else if (ebc <= 79) {
		return "#040404";
	} else if (ebc <= 138) {
		return "#000000";
	} else {
		return "#000000";
	}
};


export {
	abvColor,
	ebcColor
}