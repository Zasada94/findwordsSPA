import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/startPage.css";

function StartPage({ onSubmit }) {
	const [name, setName] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		onSubmit(name);
	};

	return (
		<div className="startPage">
			<h1>Wordcloud Game</h1>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Enter your nickname here:"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</form>
			<button type="submit">
				<Link to="/gamePage">PLAY</Link>
			</button>
		</div>
	);
}

export default StartPage;
