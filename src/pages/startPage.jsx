import React from "react";
import { Link } from "react-router-dom";

function StartPage() {
	return (
		<div>
			{" "}
			<h1>Welcome to My App!</h1>
			<Link to="/gamePage">Next Page</Link>
		</div>
	);
}

export default StartPage;
