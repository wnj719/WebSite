import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Partners from './components/Partners';
import CI from './components/CI';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Portfolio />
      <Partners />
      <CI />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
