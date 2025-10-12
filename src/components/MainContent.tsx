import {
  FiRotateCcw,
  FiLock,
  FiFileText,
  FiCopy,
  FiPlus,
  FiDollarSign,
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
      darkMode ? "bg-gray-900" : "bg-gray-50"
    }`}>
      <Header title="Home" onMenuClick={onMenuClick} darkMode={darkMode} />

      {/* Dashboard Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 lg:gap-6 px-4 lg:px-6 xl:px-8">
        {/* Left section - Mobile: full width, Desktop: 3 columns */}
        <div className="lg:col-span-3 space-y-6">
          {/* Account info */}
          <div className="bg-blue-600 text-white rounded-3xl p-6 relative overflow-hidden">
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
            <div className="bg-white rounded-2xl p-4 border-2 border-dashed border-blue-300">
              <button className="text-blue-600 font-medium font-sans flex items-center gap-2 text-sm">
                <FiPlus className="w-4 h-4" /> Generate Account
              </button>
            </div>
          </div>
          </div>

        {/* Quick actions */}
        <div className={`${darkMode ? "bg-gray-800" : "bg-white"} rounded-3xl p-6 mb-6`}>
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
                className={`flex flex-col items-center space-y-3 transition group ${
                  darkMode ? "hover:text-blue-400" : "hover:text-blue-600"
                }`}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition ${
                  darkMode 
                    ? "bg-gray-700 text-gray-300 group-hover:bg-blue-900 group-hover:text-blue-400" 
                    : "bg-gray-50 text-gray-600 group-hover:bg-blue-50 group-hover:text-blue-600"
                }`}>
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
        <div className="p-6 rounded-3xl flex items-center justify-between bg-gradient-to-r from-orange-100 to-orange-50">
          <div className="flex-1">
            <div className="flex items-center mb-2">
              <img 
                src={darkMode ? "/logo.png" : "/logo.png"}
                alt="Midoman Logo" 
                className="w-20 h-6 object-contain"
              />
            </div>
            <h5 className={`text-xl font-bold font-sans mb-3 ${
              darkMode ? "text-gray-800" : "text-gray-800"
            }`}>
              Fund 100%<br />Secured
            </h5>
          </div>
          <div className="w-40 h-40 rounded-2xl overflow-hidden flex-shrink-0">
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
