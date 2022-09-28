import React, {lazy, Suspense} from 'react';
import {Routes, Route} from 'react-router-dom';
import './app.scss';

function App() {
  const HomePage = lazy(() => import('./home/HomePage'));
  const AboutPage = lazy(() => import('./about/About'));
  const ContactUsPage = lazy(() => import('./contactUs/ContactUs'));

  return (
    <div className="app">
      <Suspense fallback={<div>...Loading</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
