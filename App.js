import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomeInfoPage from './Components/HomeInfoPage';
import SelectPlanPage from './Components/SelectPlanPage';
import AddOnPage from './Components/AddOnPage';
import SummaryPage from './Components/SummaryPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomeInfoPage />} />
        <Route path='/select-plan' element={<SelectPlanPage />} />
        <Route path='/add-ons' element={<AddOnPage />} />
        <Route path='/summary' element={<SummaryPage />} />
      </Routes>
    </div>
  );
}

export default App;
