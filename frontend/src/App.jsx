import './App.css'

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyModelsPage from './pages/MyModelsPage';

function App() {
    return (
      <Router>
        <Routes>
          <Route path="/models" element={<MyModelsPage />} />
        </Routes>
      </Router>
    );
  }
  
  export default App;
  