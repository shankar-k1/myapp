import React from 'react';
import CustomNavbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WorkExperience from './components/Experience';
import './styles.css';

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <main className="container mt-5">
        <About />
      </main>
      <section>
        <Skills />
        <WorkExperience />
        <Projects />
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;
