import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { DevOps } from './components/DevOps';
import { Skills } from './components/Skills';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 relative overflow-hidden selection:bg-[#cc73f8]/30 selection:text-[#cc73f8]">
      {/* Background organic blurred glowing blobs */}
      <div className="absolute top-[20%] left-[-10%] w-[35rem] h-[35rem] rounded-full bg-[#cc73f8]/10 blur-[130px] animate-float-slow pointer-events-none z-0" />
      <div className="absolute top-[60%] right-[-10%] w-[40rem] h-[40rem] rounded-full bg-[#3b82f6]/10 blur-[150px] animate-float-medium pointer-events-none z-0" />
      <div className="absolute bottom-[10%] left-[15%] w-[30rem] h-[30rem] rounded-full bg-purple-600/5 blur-[120px] animate-float-slow pointer-events-none z-0" />

      {/* Main Content */}
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Experience />
          <Services />
          <Projects />
          <DevOps />
          <Testimonials />
          <Skills />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
}

export default App;
