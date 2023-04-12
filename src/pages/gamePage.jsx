import React from "react";
import { useParams } from "react-router-dom";

function GamePage() {
	const { name } = useParams();
	return (
		<div>
			<h1>Next Page</h1>
			<p>Congratulations {name}, you made it to the next page!</p>
		</div>
	);
}

export default GamePage;
