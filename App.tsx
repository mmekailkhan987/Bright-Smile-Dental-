import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Insurance from './components/Insurance';
import Services from './components/Services';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased bg-slate-50 text-slate-900 selection:bg-teal-200 selection:text-teal-900 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Insurance />
        <Services />
        <Process />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;