import React, {useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Portfolio from './Pages/Portfolio/Portfolio';
import HistoryTable from './Pages/Portfolio/HistoryTable';

import './App.css';

function App() { 
  return (

    <Router>
        <div className="App">
          <Routes>
              <Route path="/*" element={<Portfolio />} >
                
              </Route>
          </Routes>
        </div>
    </Router>
  );
}

export default App;
