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
	function myStopFunction() {
		clearInterval(myInterval);
	}
	let myInterval = setInterval(function () {
		seconds++;

		const reset = () => {
			seconds = 0;
		};

		let seconds1000 = Math.floor(seconds / 1000);
		let rSeconds1000 = seconds % 1000;
		let seconds100 = Math.floor(rSeconds1000 / 100);
		let rSeconds100 = rSeconds1000 % 100;
		let seconds10 = Math.floor(rSeconds100 / 10);
		let rSeconds10 = rSeconds100 % 10;

		ReactDOM.render(
			<Home
				seconds={rSeconds10}
				decseconds={seconds10}
				centseconds={seconds100}
				deccentseconds={seconds1000}
				reset={reset}
				stop={myStopFunction}
			/>,
			document.querySelector("#app")
		);
	}, 1);
}
