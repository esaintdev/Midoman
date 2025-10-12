import {
  FiRotateCcw,
  FiLock,
  FiFileText,
  FiCopy,
  FiPlus,
} from "react-icons/fi";
import DepositHistory from "./DepositHistory";
import Header from "./Header";

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
  return (
    <main className="flex-1 p-4 md:p-8">
      <Header title="Home" onMenuClick={onMenuClick} darkMode={darkMode} />

      {/* Dashboard grid */}
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 md:gap-8">
        {/* Left section */}
        <div className="lg:col-span-3 space-y-4 md:space-y-6">
          {/* Account info */}
          <div className="bg-blue-600 text-white rounded-2xl p-4 md:p-6 relative">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 md:mb-6 space-y-4 sm:space-y-0">
              <div>
                <p className="text-sm opacity-90 mb-2">Account balance</p>
                <h3 className="text-2xl md:text-4xl font-bold font-sans">
                  {account.balance.toFixed(2)}NGN
                </h3>
              </div>
              <div className="sm:text-right">
                <p className="text-sm opacity-90 mb-2">Bank Name</p>
                <p className="text-lg font-semibold font-sans">{account.bankName}</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end space-y-4 sm:space-y-0">
              <div>
                <p className="text-sm opacity-90 mb-1">Account Number</p>
                <div className="flex items-center gap-2">
                  <p className="text-lg font-semibold font-sans">{account.accountNumber}</p>
                  <FiCopy className="w-4 h-4 opacity-70 cursor-pointer hover:opacity-100" />
                </div>
              </div>
              <div className="relative">
                {/* Background button */}
                <div className="absolute inset-0 bg-gray-50 rounded-2xl transform -translate-y-3 -translate-x-3.5 w-68 h-24 px-6 md:px-8 py-4 md:py-5"></div>
                
                {/* Main button */}
                <button className="relative bg-white bg-opacity-95 border-2 border-dashed border-blue-300 text-blue-600 px-6 md:px-8 py-3 md:py-4 rounded-2xl font-medium font-sans hover:bg-opacity-100 hover:border-solid hover:border-blue-400 hover:shadow-lg transition-all flex items-center justify-center gap-2 text-sm md:text-base">
                  <FiPlus className="w-5 h-5" /> Generate Account
                </button>
              </div>
            </div>
          </div>

          {/* Quick actions */}
          <div className={`${darkMode ? "bg-gray-800" : "bg-white"} rounded-2xl p-4 md:p-6`}>
            <h4 className={`text-lg font-semibold font-sans mb-6 ${
              darkMode ? "text-white" : "text-gray-800"
            }`}>Quick actions</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                { icon: <FiRotateCcw className="w-6 h-6" />, label: "Withdraw" },
                { icon: <FiRotateCcw className="w-6 h-6" />, label: "Deposit" },
                { icon: <FiLock className="w-6 h-6" />, label: "Escrow" },
                { icon: <FiFileText className="w-6 h-6" />, label: "History" },
              ].map((action, i) => (
                <button
                  key={i}
                  className={`flex flex-col items-center space-y-3 transition group ${
                    darkMode ? "hover:text-blue-400" : "hover:text-blue-600"
                  }`}
                >
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition ${
                    darkMode 
                      ? "bg-gray-700 text-gray-300 group-hover:bg-blue-900 group-hover:text-blue-400" 
                      : "bg-gray-50 text-gray-600 group-hover:bg-blue-50 group-hover:text-blue-600"
                  }`}>
                    {action.icon}
                  </div>
                  <span className={`text-sm font-medium font-sans ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}>{action.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Promotional section */}
          <div className={`p-4 md:p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 ${
            darkMode 
              ? "bg-gradient-to-r from-orange-100 to-orange-50" 
              : "bg-gradient-to-r from-orange-100 to-orange-50"
          }`}>
            <div>
              <div className="flex items-center mb-2">
                <img 
                  src={darkMode ? "/logo.png" : "/logo.png"}
                  alt="Midoman Logo" 
                  className="w-30 h-8 object-contain"
                />
              </div>
              <h5 className={`text-xl font-bold font-sans mb-3 ${
                darkMode ? "text-gray-800" : "text-gray-800"
              }`}>
                Fund 100%<br />Secured
              </h5>
              <button className="bg-blue-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-xl font-medium font-sans hover:bg-blue-700 flex items-center gap-2 text-sm md:text-base">
                Create escrow <span>→</span>
              </button>
            </div>
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-2xl overflow-hidden flex-shrink-0">
              <img 
                src="/man.png" 
                alt="Person with checkered shirt" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 mt-4 lg:mt-0">
          <DepositHistory darkMode={darkMode} />
        </div>
      </div>
    </main>
  );
}
