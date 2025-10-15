import {
  FiLock,
  FiFileText,
  FiCopy,
  FiPlus,
  FiDollarSign,
  FiArrowRight,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import DepositHistory from "./DepositHistory";
import MobileBottomNav from "./MobileBottomNav";

interface Account {
  balance: number;
  bankName: string;
  accountNumber: string;
}

interface MainContentProps {
  darkMode: boolean;
  account: Account;
  onMenuClick?: () => void;
}

export default function MainContent({ darkMode, account, onMenuClick }: MainContentProps) {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <>
      <style>{`
        .main-content-scroll {
          scrollbar-width: thin;
          scrollbar-color: white transparent;
        }
        .main-content-scroll::-webkit-scrollbar {
          width: 12px !important;
        }
        .main-content-scroll::-webkit-scrollbar-track {
          background: transparent !important;
        }
        .main-content-scroll::-webkit-scrollbar-thumb {
          background: white !important;
          border-radius: 6px !important;
          min-height: 20px !important;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(0, 0, 0, 0.1) !important;
        }
        .main-content-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.95) !important;
          box-shadow: 0 3px 12px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(0, 0, 0, 0.2) !important;
        }
        .main-content-scroll::-webkit-scrollbar-corner {
          background: transparent !important;
        }
      `}</style>
      <main className={`flex-1 min-h-screen lg:h-screen lg:overflow-hidden lg:bg-transparent ${
        darkMode ? "" : ""
      }`} style={darkMode ? { backgroundColor: '#242426' } : { backgroundColor: '#F8F8F8' }}>
      <Header title="Home" onMenuClick={onMenuClick} darkMode={darkMode} />
      {/* Dashboard Layout */}
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 px-4 lg:px-6 xl:px-8 lg:h-full">
        {/* Left section - Mobile: full width, Desktop: flex-1 */}
        <div className="w-full lg:flex-1 lg:max-w-[50%] space-y-6 lg:overflow-y-auto lg:overflow-x-hidden lg:h-full lg:pr-3 main-content-scroll">
          {/* Account info */}
          <div className="relative text-white overflow-hidden w-full max-w-[450px] h-[200px] sm:h-[220px] md:h-[240px] lg:h-[259px]" style={{ borderRadius: '12px' }}>
            <img 
              src="/account info.png" 
              alt="Account Info" 
              className="w-full h-full object-cover"
            />

            {/* Content area overlay */}
            <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-between">
              {/* Top section */}
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs sm:text-sm opacity-90 mb-1 sm:mb-2">Account balance</p>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-sans">
                    {account.balance.toFixed(2)}NGN
                  </h3>
                </div>
                <div className="text-right">
                  <p className="text-xs sm:text-sm opacity-90 mb-1 sm:mb-2">Bank Name</p>
                  <p className="text-sm sm:text-base lg:text-lg font-semibold font-sans">{account.bankName}</p>
                </div>
              </div>

              {/* Bottom section */}
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-xs sm:text-sm opacity-90 mb-1">Account Number</p>
                  <div className="flex items-center gap-2">
                    <p className="text-sm sm:text-base lg:text-lg font-semibold font-sans">{account.accountNumber}</p>
                    <FiCopy className="w-3 h-3 sm:w-4 sm:h-4 opacity-70 cursor-pointer hover:opacity-100" />
                  </div>
                </div>
                
                {/* Generate Account Button */}
                <div className="bg-white p-2 sm:p-3 lg:p-4 border-2 border-dashed absolute bottom-2 right-2 sm:bottom-4 sm:right-4 z-10" style={{ borderColor: '#0660D3', borderRadius: '12px' }}>
                  <button className="font-medium font-sans flex items-center gap-1 sm:gap-2 text-xs sm:text-sm" style={{ color: '#0660D3' }}>
                    <FiPlus className="w-3 h-3 sm:w-4 sm:h-4" /> 
                    <span className="hidden sm:inline">Generate Account</span>
                    <span className="sm:hidden">Generate</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

        {/* Quick actions */}
        <div className={`${darkMode ? "p-6 mb-6" : "bg-white p-6 mb-6"}`} style={darkMode ? { backgroundColor: '#100F0F', borderRadius: '12px' } : { borderRadius: '12px' }}>
          <h4 className={`text-lg font-semibold font-sans mb-6 ${
            darkMode ? "text-white" : "text-gray-800"
          }`}>Quick actions</h4>
          <div className="grid grid-cols-4 gap-4">
            {[
              { icon: <FiDollarSign className="w-6 h-6" />, label: "Withdraw", path: "/withdraw" },
              { icon: <FiDollarSign className="w-6 h-6" />, label: "Deposit", path: "/deposit" },
              { icon: <FiLock className="w-6 h-6" />, label: "Escrow", path: "/escrow" },
              { icon: <FiFileText className="w-6 h-6" />, label: "History", path: "/history" },
            ].map((action, i) => (
              <button
                key={i}
                onClick={() => handleNavigation(action.path)}
                className="flex flex-col items-center space-y-3 transition group"
                onMouseEnter={(e) => e.currentTarget.style.color = '#0660D3'}
                onMouseLeave={(e) => e.currentTarget.style.color = darkMode ? '#d1d5db' : '#374151'}
              >
                <div 
                  className={`w-12 h-12 flex items-center justify-center transition ${
                    darkMode 
                      ? "bg-gray-700 text-gray-300" 
                      : "bg-gray-50 text-gray-600"
                  }`}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = darkMode ? '#1e3a8a' : '#eff6ff';
                    e.currentTarget.style.color = '#0660D3';
                    e.currentTarget.style.borderRadius = '50%';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = darkMode ? '#374151' : '#f9fafb';
                    e.currentTarget.style.color = darkMode ? '#d1d5db' : '#4b5563';
                    e.currentTarget.style.borderRadius = '50%';
                  }}
                  style={{ borderRadius: '50%' }}
                >
                  {action.icon}
                </div>
                <span className={`text-xs font-medium font-sans ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}>{action.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Promotional section */}
        <div className="relative p-6 bg-gradient-to-r from-orange-100 to-orange-50 overflow-visible mt-24" style={{ borderRadius: '12px' }}>
          <div className="flex-1 pr-20 md:pr-24 lg:pr-32">
            <div className="flex items-center mb-2">
              <img 
                src={darkMode ? "/logo.png" : "/logo.png"}
                alt="Midoman Logo" 
                className="w-20 h-6 object-contain"
              />
            </div>
            <h5 className={`text-lg md:text-xl font-bold font-sans mb-4 ${
              darkMode ? "text-gray-800" : "text-gray-800"
            }`}>
              Fund 100%<br />Secured
            </h5>
            <button 
              onClick={() => handleNavigation('/escrow')}
              className="bg-white px-3 py-2 md:px-6 md:py-3 font-medium font-sans flex items-center gap-2 hover:bg-gray-50 transition-colors shadow-sm text-sm md:text-base whitespace-nowrap"
              style={{ borderRadius: '12px', color: '#444152' }}
            >
              Create escrow <FiArrowRight className="w-3 h-3 md:w-4 md:h-4" />
            </button>
          </div>
          <div className="absolute -right-4 bottom-0 w-56 h-56 md:w-48 md:h-48 lg:w-56 lg:h-56 overflow-visible" style={{ borderRadius: '12px' }}>
            <img 
              src="/man.png" 
              alt="Person with checkered shirt" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Active transaction */}
        <div className={`${darkMode ? "p-6" : "bg-white p-6"}`} style={darkMode ? { backgroundColor: '#100F0F', borderRadius: '12px' } : { borderRadius: '12px' }}>
          <div className="flex items-center justify-between mb-4">
            <h4 className={`text-lg font-semibold font-sans ${
              darkMode ? "text-white" : "text-gray-800"
            }`}>Active transaction</h4>
            <button className={`text-sm font-medium ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}>See all</button>
          </div>
          
          <div className={`flex items-center justify-between p-4 rounded-lg ${
            darkMode ? "bg-gray-800" : "bg-gray-50"
          }`}>
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                darkMode ? "bg-gray-700" : "bg-white"
              }`}>
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <div>
                <p className={`font-medium ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}>Deposit</p>
                <p className={`text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}>50 min ago</p>
              </div>
            </div>
            <div className="text-green-600 font-semibold">
              +20,000NGN
            </div>
          </div>
        </div>
        </div>

        {/* Right section - Desktop: flex-1, Mobile: below left content */}
        <div className="w-full lg:flex-1 lg:max-w-[50%]">
          <DepositHistory darkMode={darkMode} />
        </div>
      </div>

      <MobileBottomNav darkMode={darkMode} />
    </main>
    </>
  );
}
