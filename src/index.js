import React from 'react';
import ReactDOM from 'react-dom/client';

import NavBar from './components/Navbar';
import MainContent from './components/MainContent';
import Experiences from './components/Experiences';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <NavBar />
    <MainContent />
    <Experiences />
    <Footer />
  </>
);