import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Dashboard } from './Pages/Dashboard';
import { Report } from './Pages/Report';
import { Settings } from './Pages/Settings';
import { Transactions } from './Pages/Transactions';
import './App.css'

function App() {
  const [transactions, setTransactions] = useState([
    { id: 1, title: "Salary", category: "Income", amount: 2000, type: "income", date: "2025-02-01" },
    { id: 2, title: "Rent", category: "Housing", amount: 800, type: "expense", date: "2025-02-03" },
  ]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard transactions={transactions} />} />
        <Route path="/report" element={<Report />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/transactions" element={<Transactions transactions={transactions} setTransactions={setTransactions} />} />
      </Routes>
    </Router>
  );
}

export default App;