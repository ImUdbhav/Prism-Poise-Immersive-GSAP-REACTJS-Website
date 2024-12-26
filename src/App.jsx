import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import HeroImages from './components/HeroImages';
import Clients from './components/Clients';
import ProductsServicesEvents from './components/ProductsServicesEvents';
import Outro from './components/Outro';
import Footer from './components/Footer';
import UpcomingEvents from './components/UpcomingEvents';

function App() {
  return (
    <div className="font-mono text-black">
      <Nav />
      <Hero />
      <InfoSection />
      <ProductsServicesEvents/>
      <HeroImages />
      <Clients />
      <UpcomingEvents/>
      <Outro />
      <Footer />
    </div>
  );
}

export default App;