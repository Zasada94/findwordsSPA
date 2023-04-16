import { useParams, useNavigate } from "react-router-dom";
import "../css/gamePage.css";
import React, { useState } from "react";

const API1 = {
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

const API2 = {
	question: "select colors",
	all_words: [
		"jeans",
		"existence",
		"ink",
		"red",
		"blue",
		"yellow",
		"laugh",
		"behavior",
		"expansion",
		"white",
		"black",
		"cakes",
	],
	good_words: ["red", "blue", "yellow", "white", "black"],
};

const API3 = {
	question: "select vehicles",
	all_words: [
		"belief",
		"wire",
		"car",
		"bus",
		"star",
		"river",
		"hat",
		"skirt",
		"train",
	],
	good_words: ["car", "bus", "train"],
};

const APIs = [API1, API2, API3];

function GamePage() {
	const [api, setApi] = useState(APIs[Math.floor(Math.random() * APIs.length)]);
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
		setScore(
			countCorrectAnswers() * 2 - countBadAnswers() - countNotSelectedCorrect()
		);
		setShowAnswers(true);
	};

	const countCorrectAnswers = () => {
		return selectedWords.filter((word) => api.good_words.includes(word)).length;
	};

	const countBadAnswers = () => {
		return selectedWords.length - countCorrectAnswers();
	};

	const countNotSelectedCorrect = () => {
		return api.good_words.filter((word) => !selectedWords.includes(word))
			.length;
	};

	const handleClick = () => {
		navigate(`/finalPage/${name}/${score}`);
	};

	const renderWord = (word) => {
		const isGood = api.good_words.includes(word);
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
			<h2>{api.question}</h2>
			<div className="gameWrapper">
				{api.all_words.map((word) => renderWord(word))}
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
				<button className="checkAnswers" onClick={handleClick}>
					FINISH
				</button>
			)}
		</div>
	);
}

export default GamePage;
