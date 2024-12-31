import React, { useState } from 'react';

//Import components
import About from '../components/About';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Header from '../components/Header';
import Skills from '../components/Skills';
import './index.css';
import Footer from '../components/Footer';

// Main App Component
const App = () => (
  <div className="font-sans antialiased bg-gray-900">
    <Header />
    <main className="max-w-7xl mx-auto p-6 space-y-16">
      <section id='about'> <About />  </section>
      <section id='education'> <Education />  </section>
      <section id='experience'> <Experience />  </section>
      <section id='skills'> <Skills />  </section>
    </main>
    <section id='contact'>  <Footer />  </section>
  </div>
);

export default App;
