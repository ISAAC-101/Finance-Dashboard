import { useState, useEffect } from 'react'
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

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true" ? true : false;
});

  const [currency, setCurrency] = useState(
    localStorage.getItem("currency") || "GHS"
  );

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    localStorage.setItem("currency", currency);

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode, currency]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard transactions={transactions} currency={currency} />} />
        <Route path="/report" element={<Report transactions={transactions} currency={currency}/>} />
        <Route path="/settings" element={<Settings darkMode={darkMode} setDarkMode={setDarkMode} currency={currency} setCurrency={setCurrency}  />}  />
        <Route path="/transactions" element={<Transactions transactions={transactions} setTransactions={setTransactions} currency={currency}/>} />
      </Routes>
    </Router>
  );
}

export default App;