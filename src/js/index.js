//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
let seconds = 0;

{
	setInterval(function () {
		seconds++;

		seconds < 10 ? "" : (seconds = 0);
		ReactDOM.render(
			<Home seconds={seconds} />,
			document.querySelector("#app")
		);
	}, 1000);
}
