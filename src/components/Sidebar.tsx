import { Link, useLocation } from "react-router-dom";
import {
  FiHome,
  FiLock,
  FiCreditCard,
  FiSettings,
  FiLogOut,
  FiPlus,
  FiSun,
  FiMoon,
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

        <div className="mt-25 flex flex-col items-center">
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-3">
            <FiPlus className="w-5 h-5 text-white" />
          </div>
          <p className={`text-sm font-medium ${
            darkMode ? "text-gray-400" : "text-gray-500"
          }`}>New features</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className={`p-3 rounded-xl ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}>
          <div className="flex items-center justify-center">
            <div className={`relative flex items-center rounded-full transition-colors duration-300 ${
              darkMode ? "bg-gray-700" : "bg-gray-200"
            }`} style={{ width: '72px', height: '36px', padding: '2px' }}>
              {/* Background slider */}
              <div className={`absolute w-8 h-8 rounded-full transition-transform duration-300 ease-in-out shadow-md ${
                darkMode 
                  ? "bg-blue-600 transform translate-x-8" 
                  : "bg-white transform translate-x-0"
              }`} style={{ top: '2px', left: '2px' }}></div>
              
              {/* Light mode button */}
              <button
                onClick={() => setDarkMode(false)}
                className={`relative z-10 flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-200 ${
                  !darkMode ? "text-gray-600" : "text-gray-400 hover:text-gray-300"
                }`}
              >
                <FiSun className="w-4 h-4" />
              </button>
              
              {/* Dark mode button */}
              <button
                onClick={() => setDarkMode(true)}
                className={`relative z-10 flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-200 ${
                  darkMode ? "text-white" : "text-gray-400 hover:text-gray-600"
                }`}
              >
                <FiMoon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        <button className={`w-full flex items-center justify-center gap-2 px-3 xl:px-4 py-2 font-medium font-sans transition ${
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
