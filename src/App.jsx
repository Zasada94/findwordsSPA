import React, { useState } from "react";
import "./App.css";
import { MemoryRouter as Router, Routes, Route, Link } from "react-router-dom";
import StartPage from "./pages/startPage";
import GamePage from "./pages/gamePage";
// import finalPage from './Contact';

function App() {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path="/" element={<StartPage />}></Route>
					<Route path="/gamePage" element={<GamePage />}></Route>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
