import React from "react";
import { useParams } from "react-router-dom";

function FinalPage() {
	const { name, score } = useParams();
	return (
		<div>
			Congrats, {name} your score: {score}
		</div>
	);
}

export default FinalPage;
