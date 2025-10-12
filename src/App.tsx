import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import MobileNav from "./components/MobileNav";
import Home from "./pages/Home";
import Escrow from "./pages/Escrow";
import Transaction from "./pages/Transaction";
import Settings from "./pages/Settings";

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
  };

  return (
    <Router>
      <div className={`${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-800"} min-h-screen flex`}>
        <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} />
        <MobileNav 
          isOpen={isMobileNavOpen}
          onClose={closeMobileNav}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} onMenuClick={toggleMobileNav} />} />
          <Route path="/escrow" element={<Escrow darkMode={darkMode} onMenuClick={toggleMobileNav} />} />
          <Route path="/transaction" element={<Transaction darkMode={darkMode} onMenuClick={toggleMobileNav} />} />
          <Route path="/settings" element={<Settings darkMode={darkMode} onMenuClick={toggleMobileNav} />} />
        </Routes>
      </div>
    </Router>
  );
}
