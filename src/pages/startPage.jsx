import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/startPage.css";

function StartPage() {
	const [name, setName] = useState("");
	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();
		navigate(`/gamePage/${name}`);
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
				<button type="submit">PLAY</button>
			</form>
		</div>
	);
}

export default StartPage;
