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
    <aside className={`${darkMode ? "w-56 xl:w-64 flex-col justify-between p-4 xl:p-6 h-screen hidden lg:flex" : "bg-white w-56 xl:w-64 flex-col justify-between p-4 xl:p-6 h-screen hidden lg:flex"}`} style={darkMode ? { backgroundColor: '#100F0F' } : {}}>
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
            className={`w-full flex items-center gap-3 px-3 xl:px-4 py-3  font-medium font-sans transition ${
              isActive("/") 
                ? (darkMode ? "text-white" : "text-white") 
                : darkMode 
                  ? "text-gray-300 hover:text-[#076DF2] hover:bg-gray-700" 
                  : "text-gray-600 hover:text-[#076DF2] hover:bg-[#076DF2]/10"
            }`}
            style={isActive("/") ? (darkMode ? { backgroundColor: '#242426', borderRadius: '12px' } : { backgroundColor: '#076DF2', borderRadius: '12px' }) : { borderRadius: '12px' }}
          >
            <FiHome className="w-5 h-5" /> Home
          </Link>
          <Link 
            to="/escrow" 
            className={`w-full flex items-center gap-3 px-3 xl:px-4 py-3  font-medium font-sans transition ${
              isActive("/escrow") 
                ? (darkMode ? "text-white" : "text-white") 
                : darkMode 
                  ? "text-gray-300 hover:text-[#076DF2] hover:bg-gray-700" 
                  : "text-gray-600 hover:text-[#076DF2] hover:bg-[#076DF2]/10"
            }`}
            style={isActive("/escrow") ? (darkMode ? { backgroundColor: '#242426', borderRadius: '12px' } : { backgroundColor: '#076DF2', borderRadius: '12px' }) : { borderRadius: '12px' }}
          >
            <FiLock className="w-5 h-5" /> Escrow
          </Link>
          <Link 
            to="/transaction" 
            className={`w-full flex items-center gap-3 px-3 xl:px-4 py-3  font-medium font-sans transition ${
              isActive("/transaction") 
                ? (darkMode ? "text-white" : "text-white") 
                : darkMode 
                  ? "text-gray-300 hover:text-[#076DF2] hover:bg-gray-700" 
                  : "text-gray-600 hover:text-[#076DF2] hover:bg-[#076DF2]/10"
            }`}
            style={isActive("/transaction") ? (darkMode ? { backgroundColor: '#242426', borderRadius: '12px' } : { backgroundColor: '#076DF2', borderRadius: '12px' }) : { borderRadius: '12px' }}
          >
            <FiCreditCard className="w-5 h-5" /> Transaction
          </Link>
          <Link 
            to="/settings" 
            className={`w-full flex items-center gap-3 px-3 xl:px-4 py-3  font-medium font-sans transition ${
              isActive("/settings") 
                ? (darkMode ? "text-white" : "text-white") 
                : darkMode 
                  ? "text-gray-300 hover:text-[#076DF2] hover:bg-gray-700" 
                  : "text-gray-600 hover:text-[#076DF2] hover:bg-[#076DF2]/10"
            }`}
            style={isActive("/settings") ? (darkMode ? { backgroundColor: '#242426', borderRadius: '12px' } : { backgroundColor: '#076DF2', borderRadius: '12px' }) : { borderRadius: '12px' }}
          >
            <FiSettings className="w-5 h-5" /> Settings
          </Link>
        </nav>

        <div className="mt-25 flex flex-col items-center">
          <div className="w-12 h-12 flex items-center justify-center mb-3" style={darkMode ? { backgroundColor: '#242426', borderRadius: '50%' } : { backgroundColor: '#076DF2', borderRadius: '50%' }}>
            <FiPlus className="w-5 h-5 text-white" />
          </div>
          <p className={`text-sm font-medium ${
            darkMode ? "text-gray-400" : "text-gray-500"
          }`}>New features</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-center">
            <div className={`relative flex items-center transition-colors duration-300 ${
              darkMode ? "bg-gray-700" : "bg-gray-200"
            }`} style={darkMode ? { width: '72px', height: '36px', padding: '2px', borderRadius: '12px', backgroundColor: '#242426' } : { width: '72px', height: '36px', padding: '2px', borderRadius: '12px' }}>
              {/* Background slider */}
              <div className={`absolute w-8 h-8 transition-transform duration-300 ease-in-out shadow-md ${
                darkMode 
                  ? "bg-[#076DF2] transform translate-x-8" 
                  : "bg-white transform translate-x-0"
              }`} style={{ top: '2px', left: '2px', borderRadius: '50%' }}></div>
              
              {/* Light mode button */}
              <button
                onClick={() => setDarkMode(false)}
                className={`relative z-10 flex items-center justify-center w-8 h-8  transition-colors duration-200 ${
                  !darkMode ? "text-gray-600" : "text-gray-400 hover:text-gray-300"
                }`}
                style={{ borderRadius: '50%' }}
              >
                <FiSun className="w-4 h-4" />
              </button>
              
              {/* Dark mode button */}
              <button
                onClick={() => setDarkMode(true)}
                className={`relative z-10 flex items-center justify-center w-8 h-8  transition-colors duration-200 ${
                  darkMode ? "text-white" : "text-gray-400 hover:text-gray-600"
                }`}
                style={{ borderRadius: '50%' }}
              >
                <FiMoon className="w-4 h-4" />
              </button>
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
