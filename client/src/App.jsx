import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import GenrePage from "./pages/GenrePage";
import CarouselPage from "./pages/CarouselPage";
import NotFoundPage from "./pages/NotFoundPage";
import DashboardPage from "./pages/DashboardPage";
import MoviesPage from "./pages/MoviesPage";
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<RegisterPage />} />
				<Route path="/genres" element={<GenrePage />} />
				<Route path="/carousel" element={<CarouselPage />} />
				<Route path="/dashboard" element={<DashboardPage />} />
				<Route path="/movies" element={<MoviesPage/>} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
