import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { Dashboard } from './Pages/Dashboard';
import { Report } from './Pages/Report';
import { Settings } from './Pages/Settings';
import { Transactions } from './Pages/Transactions';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/report" element={<Report/>}/>
        <Route path="/setting" element={<Settings/>}/>
        <Route path="/transactions" element={<Transactions/>}/>
      </Routes>
    </Router>
  );
}

export default App;