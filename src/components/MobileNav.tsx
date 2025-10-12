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
  FiX,
} from "react-icons/fi";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export default function MobileNav({ isOpen, onClose, darkMode, setDarkMode }: MobileNavProps) {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
        onClick={onClose}
      />
      
      {/* Mobile Navigation */}
      <div className="fixed top-0 left-0 h-full w-80 bg-white z-50 lg:hidden transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <h1 className="text-xl font-bold font-sans text-gray-800">Midoman</h1>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
            >
              <FiX className="w-6 h-6 text-gray-600" />
            </button>
          </div>
          
          {/* Navigation */}
          <nav className="space-y-2 flex-1">
            <Link 
              to="/" 
              onClick={onClose}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium font-sans transition ${
                isActive("/") 
                  ? "bg-blue-600 text-white" 
                  : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
              }`}
            >
              <FiHome className="w-5 h-5" /> Home
            </Link>
            <Link 
              to="/escrow" 
              onClick={onClose}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium font-sans transition ${
                isActive("/escrow") 
                  ? "bg-blue-600 text-white" 
                  : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
              }`}
            >
              <FiLock className="w-5 h-5" /> Escrow
            </Link>
            <Link 
              to="/transaction" 
              onClick={onClose}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium font-sans transition ${
                isActive("/transaction") 
                  ? "bg-blue-600 text-white" 
                  : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
              }`}
            >
              <FiCreditCard className="w-5 h-5" /> Transaction
            </Link>
            <Link 
              to="/settings" 
              onClick={onClose}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium font-sans transition ${
                isActive("/settings") 
                  ? "bg-blue-600 text-white" 
                  : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
              }`}
            >
              <FiSettings className="w-5 h-5" /> Settings
            </Link>

            <div className="mt-6">
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium font-sans hover:bg-blue-700 flex items-center justify-center gap-2">
                <FiPlus className="w-4 h-4" /> New features
              </button>
            </div>
          </nav>

          {/* Bottom Controls */}
          <div className="space-y-4 border-t pt-4">
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
            <button className="w-full text-red-500 flex items-center gap-2 hover:text-red-600 px-4 py-2 font-medium font-sans">
              <FiLogOut className="w-5 h-5" /> Log out
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
