import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Scenario from './components/Scenario';
import Solution from './components/Solution';
import Foundation from './components/Foundation';
import Risks from './components/Risks';
import NextSteps from './components/NextSteps';
import HelenaChat from './components/HelenaChat';
import Footer from './components/Footer';

function App() {
  return (
    <div className="antialiased bg-[#FDFBF8] text-[#4A4A4A] font-inter">
      <Header />
      <main>
        <Hero />
        <Scenario />
        <Solution />
        <Foundation />
        <Risks />
        <NextSteps />
      </main>
      <HelenaChat />
      <Footer />
    </div>
  );
}

export default App;