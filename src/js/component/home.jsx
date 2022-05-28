import React from "react";
import propTypes from "prop-types";

//include images into your bundle

//create your first component
const Home = (props) => {
	return (
		<>
			<div>{props.seconds}</div>
			<div>{props.minutes}</div>
		</>
	);
};

export default Home;
