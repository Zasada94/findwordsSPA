import React from "react";
import "./App.css";
import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import StartPage from "./pages/startPage";
import GamePage from "./pages/gamePage";
import FinalPage from "./pages/finalPage";

function App() {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path="/" element={<StartPage />}></Route>
					<Route path="/gamePage/:name" element={<GamePage />}></Route>
					<Route path="/finalPage/:name/:score" element={<FinalPage />}></Route>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
