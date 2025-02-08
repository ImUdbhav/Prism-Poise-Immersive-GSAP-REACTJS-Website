import React from 'react';
import Nav from './components/Nav';
import ShopPage from './Pages/Shop';
import Home from './Pages/Home';
import Footer from './components/Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="font-mono text-black">
      <Nav />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
      
       
      <Footer />
      
    </div>
  );
}

export default App;