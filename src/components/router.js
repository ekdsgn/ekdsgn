import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Contact from '../pages/contact';
import Home from '../pages/home';

const RouterComponent = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<Contact />} />
          {/* Add other routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default RouterComponent;