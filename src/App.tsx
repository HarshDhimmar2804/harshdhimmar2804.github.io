import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { GlowCursor } from './components/GlowCursor';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Experience } from './sections/Experience';
import { Contact } from './sections/Contact';

function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <main className="relative min-h-screen bg-brand-primary text-slate-200 transition-colors duration-500 selection:bg-brand-accent/30">
      <GlowCursor />
      <div className="nebula-bg" />
      <Navbar />

      <div className="relative z-10">
        <section id="home" className="scroll-mt-24">
          <Hero />
        </section>
        <section id="about" className="scroll-mt-24">
          <About />
        </section>
        <section id="skills" className="scroll-mt-24">
          <Skills />
        </section>
        <section id="work" className="scroll-mt-24">
          <Projects />
          <Experience />
        </section>
        <section id="contact" className="scroll-mt-24">
          <Contact />
        </section>

        <footer className="py-4 text-center text-slate-400 dark:text-slate-500 text-sm border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors duration-300">
          <div className="max-w-6xl mx-auto px-6">
            <p className="mb-2">© {new Date().getFullYear()} Harsh Dhimmar. All rights reserved.</p>
            {/* <p className="text-xs">Professional Portfolio • 1 Year Experience</p> */}
          </div>
        </footer>
      </div>
    </main>
  );
}

export default App;
