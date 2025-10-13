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
    <main className={`flex-1 min-h-screen lg:bg-transparent ${
      darkMode ? "" : "bg-gray-50"
    }`} style={darkMode ? { backgroundColor: '#242426' } : {}}>
      <Header title="Home" onMenuClick={onMenuClick} darkMode={darkMode} />

      {/* Dashboard Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 lg:gap-6 px-4 lg:px-6 xl:px-8">
        {/* Left section - Mobile: full width, Desktop: 3 columns */}
        <div className="lg:col-span-3 space-y-6">
          {/* Account info */}
          <div className="text-white p-6 relative overflow-hidden" style={{ backgroundColor: '#076DF2', borderRadius: '12px' }}>
          {/* Top section */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <p className="text-sm opacity-90 mb-2">Account balance</p>
              <h3 className="text-3xl font-bold font-sans">
                {account.balance.toFixed(2)}NGN
              </h3>
            </div>
            <div className="text-right">
              <p className="text-sm opacity-90 mb-2">Bank Name</p>
              <p className="text-lg font-semibold font-sans">{account.bankName}</p>
            </div>
          </div>
          
          {/* Bottom section */}
          <div className="flex justify-between items-end">
            <div>
              <p className="text-sm opacity-90 mb-1">Account Number</p>
              <div className="flex items-center gap-2">
                <p className="text-lg font-semibold font-sans">{account.accountNumber}</p>
                <FiCopy className="w-4 h-4 opacity-70 cursor-pointer hover:opacity-100" />
              </div>
            </div>
            
            {/* Generate Account Button */}
            <div className="bg-white p-4 border-2 border-dashed" style={{ borderColor: '#076DF2', borderRadius: '12px' }}>
              <button className="font-medium font-sans flex items-center gap-2 text-sm" style={{ color: '#076DF2' }}>
                <FiPlus className="w-4 h-4" /> Generate Account
              </button>
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
                onMouseEnter={(e) => e.currentTarget.style.color = '#076DF2'}
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
                    e.currentTarget.style.color = '#076DF2';
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
        <div className="p-6 flex items-center justify-between bg-gradient-to-r from-orange-100 to-orange-50" style={{ borderRadius: '12px' }}>
          <div className="flex-1">
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
              Fund 100% Secured
            </h5>
            <button 
              onClick={() => handleNavigation('/escrow')}
              className="bg-white text-gray-800 px-3 py-2 md:px-6 md:py-3 font-medium font-sans flex items-center gap-2 hover:bg-gray-50 transition-colors shadow-sm text-sm md:text-base whitespace-nowrap"
              style={{ borderRadius: '12px' }}
            >
              Create escrow <FiArrowRight className="w-3 h-3 md:w-4 md:h-4" />
            </button>
          </div>
          <div className="w-56 h-56 md:w-40 md:h-40 overflow-hidden flex-shrink-0" style={{ borderRadius: '12px' }}>
            <img 
              src="/man.png" 
              alt="Person with checkered shirt" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        </div>

        {/* Right section - Desktop: 3 columns, Mobile: below left content */}
        <div className="lg:col-span-3">
          <DepositHistory darkMode={darkMode} />
        </div>
      </div>

      <MobileBottomNav darkMode={darkMode} />
    </main>
  );
}
