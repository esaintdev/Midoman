import { Link, useLocation } from "react-router-dom";
import {
  FiHome,
  FiLock,
  FiSettings,
  FiLogOut,
  FiMoon,
  FiSun,
  FiRotateCcw,
  FiPlus,
  FiCreditCard,
} from "react-icons/fi";

interface SidebarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export default function Sidebar({ darkMode, setDarkMode }: SidebarProps) {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className={`${darkMode ? "bg-gray-800" : "bg-white"} w-56 xl:w-64 flex-col justify-between p-4 xl:p-6 h-screen hidden lg:flex`}>
      <div>
        <div className="flex items-center mb-12">
          <img 
            src={darkMode ? "/dark.png" : "/logo.png"}
            alt="Midoman Logo" 
            className="w-30 h-12 object-contain"
          />
        </div>
        
        <nav className="space-y-2">
          <Link 
            to="/" 
            className={`w-full flex items-center gap-3 px-3 xl:px-4 py-3 rounded-lg font-medium font-sans transition ${
              isActive("/") 
                ? "bg-blue-600 text-white" 
                : darkMode 
                  ? "text-gray-300 hover:text-blue-400 hover:bg-gray-700" 
                  : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
            }`}
          >
            <FiHome className="w-5 h-5" /> Home
          </Link>
          <Link 
            to="/escrow" 
            className={`w-full flex items-center gap-3 px-3 xl:px-4 py-3 rounded-lg font-medium font-sans transition ${
              isActive("/escrow") 
                ? "bg-blue-600 text-white" 
                : darkMode 
                  ? "text-gray-300 hover:text-blue-400 hover:bg-gray-700" 
                  : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
            }`}
          >
            <FiLock className="w-5 h-5" /> Escrow
          </Link>
          <Link 
            to="/transaction" 
            className={`w-full flex items-center gap-3 px-3 xl:px-4 py-3 rounded-lg font-medium font-sans transition ${
              isActive("/transaction") 
                ? "bg-blue-600 text-white" 
                : darkMode 
                  ? "text-gray-300 hover:text-blue-400 hover:bg-gray-700" 
                  : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
            }`}
          >
            <FiCreditCard className="w-5 h-5" /> Transaction
          </Link>
          <Link 
            to="/settings" 
            className={`w-full flex items-center gap-3 px-3 xl:px-4 py-3 rounded-lg font-medium font-sans transition ${
              isActive("/settings") 
                ? "bg-blue-600 text-white" 
                : darkMode 
                  ? "text-gray-300 hover:text-blue-400 hover:bg-gray-700" 
                  : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
            }`}
          >
            <FiSettings className="w-5 h-5" /> Settings
          </Link>
        </nav>

        <div className="mt-25">
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium font-sans hover:bg-blue-700 flex items-center justify-center gap-2">
            <FiPlus className="w-4 h-4" /> New features
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-lg ${darkMode ? "bg-gray-700" : "bg-gray-100"}`}
          >
            {darkMode ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
          </button>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-lg ${darkMode ? "bg-gray-700" : "bg-gray-100"}`}
          >
            <FiRotateCcw className="w-5 h-5" />
          </button>
        </div>
        <button className={`w-full flex items-center gap-2 px-3 xl:px-4 py-2 font-medium font-sans transition ${
          darkMode 
            ? "text-red-400 hover:text-red-300" 
            : "text-red-500 hover:text-red-600"
        }`}>
          <FiLogOut className="w-5 h-5" /> Log out
        </button>
      </div>
    </aside>
  );
}
