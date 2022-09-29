import React from 'react';
import {Routes, Route} from 'react-router-dom';
import HomePage from "./home/HomePage";
import AboutPage from "./about/About";
import './app.scss';
import ErrorBoundary from "./error/ErrorBoundaries";

function App() {
  return (
    <div className="app">
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
