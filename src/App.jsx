import React from 'react';
import MatrixBackground from './components/MatrixBackground';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative min-h-screen text-white font-sans selection:bg-green-500 selection:text-black overflow-x-hidden">
      <MatrixBackground />

      <main className="relative z-10 w-full">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
