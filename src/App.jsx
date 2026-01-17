import React from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero';
import Skills from './components/Skills';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main className="pt-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>

  )
}

export default App;
// D:\Web Development\Session 5(Mini project)\react\tufail\src\App.jsx