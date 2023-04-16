import React from "react";
import { useParams } from "react-router-dom";
import "../css/finalPage.css";

function FinalPage() {
	const { name, score } = useParams();
	return (
		<div className="finalWrapper">
			<span> Congratulations, {name}!</span> <span> Your score: </span>
			<span> {score} points </span>
		</div>
	);
}

export default FinalPage;
