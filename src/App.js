import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPage } from "./pages/LandingPage";
import { NavBar } from "./components/NavBar";

export function App() {
  return (
    <Router>
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </main>
    </Router>
  );
}
