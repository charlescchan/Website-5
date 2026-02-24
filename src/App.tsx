import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PartA from './pages/PartA';
import PartB from './pages/PartB';
import PartC from './pages/PartC';
import References from './pages/References';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/part-a" element={<PartA />} />
      <Route path="/part-b" element={<PartB />} />
      <Route path="/part-c" element={<PartC />} />
      <Route path="/references" element={<References />} />
    </Routes>
  );
};

export default App;
