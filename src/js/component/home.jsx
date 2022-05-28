import React from "react";
import propTypes from "prop-types";

//include images into your bundle

//create your first component
const Home = (props) => {
	return (
		<>
			<div className="d-flex">
				<div className="mx-2">{props.deccentseconds}</div>
				<div className="mx-2">{props.centseconds}</div>
				<div className="mx-2">{props.decseconds}</div>
				<div className="mx-2">{props.seconds}</div>
				<input
					type="button"
					value="Reset"
					onClick={props.reset}
					placeholder="Reset"
				/>
				<input
					type="button"
					value="Stop"
					onClick={props.stop}
					placeholder="Stop"
				/>
			</div>
		</>
	);
};

export default Home;
