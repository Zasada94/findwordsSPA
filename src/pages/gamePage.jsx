import { useParams, useNavigate } from "react-router-dom";
import "../css/gamePage.css";
import React, { useState } from "react";

const API = {
	question: "select animals",
	all_words: [
		"hole",
		"sofa",
		"pear",
		"tiger",
		"oatmeal",
		"square",
		"nut",
		"cub",
		"shirt",
		"tub",
		"passenger",
		"cow",
	],
	good_words: ["tiger", "cow"],
};

function GamePage() {
	const [selectedWords, setSelectedWords] = useState([]);
	const [showAnswers, setShowAnswers] = useState(false);
	const [score, setScore] = useState();
	const navigate = useNavigate();
	const { name } = useParams();

	const handleWordClick = (word) => {
		if (selectedWords.includes(word)) {
			setSelectedWords(selectedWords.filter((w) => w !== word));
		} else {
			setSelectedWords([...selectedWords, word]);
		}
	};

	const checkAnswers = () => {
		setShowAnswers(true);
	};

	const countCorrectAnswers = () => {
		return selectedWords.filter((word) => API.good_words.includes(word)).length;
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		navigate(`/finalPage/${name}/${score}`);
	};

	const renderWord = (word) => {
		const isGood = API.good_words.includes(word);
		const isSelected = selectedWords.includes(word);
		const isAnswer = showAnswers;

		return (
			<span
				className="item"
				key={word}
				onClick={() => handleWordClick(word)}
				style={{
					display: "block",
					minWidth: "5%",
					alignISelf: "center",
					backgroundColor: isSelected ? "lightblue" : "white",
					borderRadius: "5px",
					cursor: "pointer",
					color: isSelected && isAnswer ? (isGood ? "green" : "red") : "black",
				}}
			>
				<span
					style={{
						display:
							isSelected && isAnswer ? (isGood ? "block" : "none") : "none",
					}}
				>
					good
				</span>
				<span
					style={{
						display:
							isSelected && isAnswer ? (isGood ? "none" : "block") : "none",
					}}
				>
					bad
				</span>
				{word}
			</span>
		);
	};

	return (
		<div className="gameContainer">
			<h2>{API.question}</h2>
			<div className="gameWrapper">
				{API.all_words.map((word) => renderWord(word))}
			</div>
			{!showAnswers && (
				<button onClick={checkAnswers} className="checkAnswers">
					CHECK ANSWERS
				</button>
			)}
			{/* {showAnswers && (
				<p>Ilość poprawnych odpowiedzi: {countCorrectAnswers()}</p>
			)} */}
			{showAnswers && (
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						value={countCorrectAnswers()}
						onChange={(e) => setScore(e.target.value)}
					/>
					<button className="finish" type="submit">
						FINISH
					</button>
				</form>
			)}
			{name} {score}
		</div>
	);
}

export default GamePage;
