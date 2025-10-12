import { Link, useLocation } from "react-router-dom";
import {
  FiHome,
  FiLock,
  FiSettings,
  FiLogOut,
  FiMoon,
  FiSun,
  FiCreditCard,
  FiX,
  FiChevronRight,
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

  const navItems = [
    { path: "/", icon: FiHome, label: "Home", color: "bg-blue-500" },
    { path: "/escrow", icon: FiLock, label: "Escrow", color: "bg-green-500" },
    { path: "/transaction", icon: FiCreditCard, label: "Transaction", color: "bg-purple-500" },
    { path: "/settings", icon: FiSettings, label: "Settings", color: "bg-gray-500" },
  ];

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-60 z-40 lg:hidden"
        onClick={onClose}
      />
      
      {/* Mobile Navigation - Full Screen Overlay */}
      <div className="fixed inset-0 z-50 lg:hidden">
        <div className={`${darkMode ? "bg-gray-900" : "bg-white"} h-full flex flex-col`}>
          {/* Header */}
          <div className={`flex items-center justify-between p-6 border-b ${darkMode ? "border-gray-700" : "border-gray-100"}`}>
            <div className="flex items-center">
              <img 
                src={darkMode ? "/dark.png" : "/logo.png"}
                alt="Midoman Logo" 
                className="w-30 h-14 object-contain"
              />
            </div>
            <button
              onClick={onClose}
              className={`p-3 rounded-full transition-colors ${
                darkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              <FiX className={`w-6 h-6 ${darkMode ? "text-gray-300" : "text-gray-600"}`} />
            </button>
          </div>
          
          {/* Navigation Items */}
          <div className="flex-1 p-6">
            <div className="space-y-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.path);
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={onClose}
                    className={`flex items-center justify-between p-4 rounded-2xl transition-all duration-200 ${
                      active 
                        ? "bg-blue-50 border-2 border-blue-200 shadow-sm" 
                        : darkMode
                          ? "bg-gray-800 hover:bg-gray-700 border-2 border-transparent"
                          : "bg-gray-50 hover:bg-gray-100 border-2 border-transparent"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 ${active ? "bg-blue-600" : item.color} rounded-xl flex items-center justify-center shadow-sm`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className={`font-semibold font-sans ${active ? "text-blue-900" : darkMode ? "text-gray-100" : "text-gray-900"}`}>
                          {item.label}
                        </h3>
                        <p className={`text-sm font-sans ${active ? "text-blue-600" : darkMode ? "text-gray-400" : "text-gray-500"}`}>
                          {item.path === "/" && "Dashboard overview"}
                          {item.path === "/escrow" && "Secure transactions"}
                          {item.path === "/transaction" && "Payment history"}
                          {item.path === "/settings" && "App preferences"}
                        </p>
                      </div>
                    </div>
                    <FiChevronRight className={`w-5 h-5 ${active ? "text-blue-600" : darkMode ? "text-gray-500" : "text-gray-400"}`} />
                  </Link>
                );
              })}
            </div>

            {/* Quick Actions */}
            <div className="mt-8">
              <h4 className={`text-sm font-semibold font-sans uppercase tracking-wide mb-4 ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}>
                Quick Actions
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <button className="p-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl text-white font-medium font-sans shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-center">
                    <div className="text-2xl mb-1">💳</div>
                    <span className="text-sm">Add Money</span>
                  </div>
                </button>
                <button className="p-4 bg-gradient-to-r from-green-600 to-green-700 rounded-xl text-white font-medium font-sans shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-center">
                    <div className="text-2xl mb-1">📊</div>
                    <span className="text-sm">Analytics</span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Controls */}
          <div className={`p-6 border-t ${
            darkMode 
              ? "border-gray-700 bg-gray-800" 
              : "border-gray-100 bg-gray-50"
          }`}>
            <div className="flex items-center justify-between mb-4">
              <span className={`text-sm font-medium font-sans ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}>Theme</span>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                  darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-700 border border-gray-200"
                }`}
              >
                {darkMode ? <FiMoon className="w-4 h-4" /> : <FiSun className="w-4 h-4" />}
                <span className="text-sm font-sans">{darkMode ? "Dark" : "Light"}</span>
              </button>
            </div>
            
            <button 
              className={`w-full flex items-center justify-center gap-2 p-3 rounded-xl transition-colors font-medium font-sans ${
                darkMode 
                  ? "text-red-400 hover:bg-red-900/20" 
                  : "text-red-600 hover:bg-red-50"
              }`}
              onClick={onClose}
            >
              <FiLogOut className="w-5 h-5" />
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
