import React from 'react'
import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection';
import HeroImages from '../components/HeroImages';
import Clients from '../components/Clients';
import ProductsServicesEvents from '../components/ProductsServicesEvents';
import UpcomingEvents from '../components/UpcomingEvents';

const Home = () => {
  return (
    <div>
     
      <Hero />
      <InfoSection />
      <ProductsServicesEvents/>
      <HeroImages />
      <Clients />
      <UpcomingEvents/>
      
    </div>
  )
}

export default Home
