import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Greeting from './component/Greeting';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </BrowserRouter>
  );
}
