import {
  FiHome,
  FiLock,
  FiCreditCard,
  FiSettings,
} from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";

interface MobileBottomNavProps {
  darkMode: boolean;
}

export default function MobileBottomNav({ darkMode }: MobileBottomNavProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };

  const handleQuickAction = () => {
    // Quick action - could open a modal or navigate to a specific action
    alert("Quick Action - Add functionality here!");
  };

  return (
    <div className={`fixed bottom-0 left-0 right-0 border-t px-4 py-2 lg:hidden ${
      darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
    }`}>
      <div className="flex justify-around items-center">
        <button 
          onClick={() => handleNavigation("/")}
          className="flex flex-col items-center py-2 px-3 transition-colors"
        >
          <div className={`w-6 h-6 mb-1 ${
            isActiveRoute("/") ? "text-blue-600" : (darkMode ? "text-gray-400" : "text-gray-400")
          }`}>
            <FiHome className="w-full h-full" />
          </div>
          <span className={`text-xs font-medium ${
            isActiveRoute("/") ? "text-blue-600" : (darkMode ? "text-gray-400" : "text-gray-400")
          }`}>Home</span>
        </button>
        
        <button 
          onClick={() => handleNavigation("/escrow")}
          className="flex flex-col items-center py-2 px-3 transition-colors"
        >
          <div className={`w-6 h-6 mb-1 ${
            isActiveRoute("/escrow") ? "text-blue-600" : (darkMode ? "text-gray-400" : "text-gray-400")
          }`}>
            <FiLock className="w-full h-full" />
          </div>
          <span className={`text-xs font-medium ${
            isActiveRoute("/escrow") ? "text-blue-600" : (darkMode ? "text-gray-400" : "text-gray-400")
          }`}>Escrow</span>
        </button>
        
        <button 
          onClick={handleQuickAction}
          className="flex flex-col items-center py-2 px-3 relative transition-transform hover:scale-105"
        >
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-1 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-6 h-6 text-white">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
              </svg>
            </div>
          </div>
        </button>
        
        <button 
          onClick={() => handleNavigation("/transaction")}
          className="flex flex-col items-center py-2 px-3 transition-colors"
        >
          <div className={`w-6 h-6 mb-1 ${
            isActiveRoute("/transaction") ? "text-blue-600" : (darkMode ? "text-gray-400" : "text-gray-400")
          }`}>
            <FiCreditCard className="w-full h-full" />
          </div>
          <span className={`text-xs font-medium ${
            isActiveRoute("/transaction") ? "text-blue-600" : (darkMode ? "text-gray-400" : "text-gray-400")
          }`}>Transaction</span>
        </button>
        
        <button 
          onClick={() => handleNavigation("/settings")}
          className="flex flex-col items-center py-2 px-3 transition-colors"
        >
          <div className={`w-6 h-6 mb-1 ${
            isActiveRoute("/settings") ? "text-blue-600" : (darkMode ? "text-gray-400" : "text-gray-400")
          }`}>
            <FiSettings className="w-full h-full" />
          </div>
          <span className={`text-xs font-medium ${
            isActiveRoute("/settings") ? "text-blue-600" : (darkMode ? "text-gray-400" : "text-gray-400")
          }`}>Settings</span>
        </button>
      </div>
    </div>
  );
}
