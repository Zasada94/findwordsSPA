import { useParams } from "react-router-dom";
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

const GamePage = () => {
	const [selectedWords, setSelectedWords] = useState([]);
	const [showAnswers, setShowAnswers] = useState(false);

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

	const renderWord = (word) => {
		const isGood = API.good_words.includes(word);
		const isSelected = selectedWords.includes(word);
		const isAnswer = showAnswers;

		return (
			<span
				key={word}
				onClick={() => handleWordClick(word)}
				style={{
					display: "inline-block",
					padding: "5px",
					margin: "5px",
					backgroundColor: isSelected ? "lightblue" : "white",
					borderRadius: "5px",
					cursor: "pointer",
					color: isSelected && isAnswer ? (isGood ? "green" : "red") : "black",
				}}
			>
				{word}
			</span>
		);
	};

	return (
		<div>
			<h2>{API.question}</h2>
			<div>{API.all_words.map((word) => renderWord(word))}</div>
			<button onClick={checkAnswers}>Sprawdź odpowiedzi</button>
			{showAnswers}
		</div>
	);
};

export default GamePage;
