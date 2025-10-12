import { useState } from "react";
import { FiArrowLeft, FiDollarSign, FiCreditCard, FiAlertCircle } from "react-icons/fi";
import MobileBottomNav from "../components/MobileBottomNav";

interface WithdrawProps {
  darkMode: boolean;
  onMenuClick: () => void;
}

export default function Withdraw({ darkMode, onMenuClick }: WithdrawProps) {
  const [amount, setAmount] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [bankName, setBankName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleWithdraw = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      alert("Withdrawal request submitted successfully!");
      setAmount("");
      setAccountNumber("");
      setBankName("");
    }, 2000);
  };

  return (
    <main className={`flex-1 p-4 md:p-8 min-h-screen ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}>
      <div className="flex items-center justify-between mb-6 md:mb-8 pt-4 lg:pt-6">
        <div className="flex items-center gap-4 w-full lg:w-auto">
          <button
            onClick={() => window.history.back()}
            className={`p-2 rounded-lg transition ${
              darkMode 
                ? "bg-gray-700 hover:bg-gray-600" 
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            <FiArrowLeft className={`w-5 h-5 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`} />
          </button>
          <h2 className={`text-2xl md:text-3xl font-bold font-sans ${
            darkMode ? "text-white" : "text-gray-800"
          }`}>Withdraw Funds</h2>
          <button
            onClick={onMenuClick}
            className={`lg:hidden ml-auto p-2 rounded-lg transition ${
              darkMode 
                ? "bg-gray-700 hover:bg-gray-600" 
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            <svg className={`w-6 h-6 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <div className="max-w-2xl mx-auto">
        {/* Balance Card */}
        <div className={`${darkMode ? "bg-gray-800" : "bg-white"} rounded-2xl p-6 mb-6`}>
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
              darkMode ? "bg-green-900" : "bg-green-50"
            }`}>
              <FiDollarSign className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Available Balance</p>
              <p className={`text-2xl font-bold ${darkMode ? "text-white" : "text-gray-800"}`}>₦0.00</p>
            </div>
          </div>
          <div className={`p-3 rounded-lg flex items-center gap-2 ${
            darkMode ? "bg-yellow-900/20" : "bg-yellow-50"
          }`}>
            <FiAlertCircle className="w-4 h-4 text-yellow-600" />
            <p className={`text-sm ${darkMode ? "text-yellow-400" : "text-yellow-700"}`}>
              Minimum withdrawal amount is ₦100
            </p>
          </div>
        </div>

        {/* Withdrawal Form */}
        <div className={`${darkMode ? "bg-gray-800" : "bg-white"} rounded-2xl p-6 mb-6`}>
          <h3 className={`text-lg font-semibold mb-6 ${
            darkMode ? "text-white" : "text-gray-800"
          }`}>Withdrawal Details</h3>

          <form onSubmit={handleWithdraw} className="space-y-6">
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}>
                Amount (₦)
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount to withdraw"
                min="100"
                required
                className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none ${
                  darkMode 
                    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400" 
                    : "bg-white border-gray-200 text-gray-900 placeholder-gray-500"
                }`}
              />
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}>
                Bank Name
              </label>
              <input
                type="text"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
                placeholder="Enter your bank name"
                required
                className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none ${
                  darkMode 
                    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400" 
                    : "bg-white border-gray-200 text-gray-900 placeholder-gray-500"
                }`}
              />
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}>
                Account Number
              </label>
              <input
                type="text"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                placeholder="Enter your account number"
                required
                className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none ${
                  darkMode 
                    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400" 
                    : "bg-white border-gray-200 text-gray-900 placeholder-gray-500"
                }`}
              />
            </div>

            <button
              type="submit"
              disabled={loading || !amount || !bankName || !accountNumber}
              className={`w-full py-3 px-4 rounded-lg font-medium transition flex items-center justify-center gap-2 ${
                loading || !amount || !bankName || !accountNumber
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              <FiCreditCard className="w-5 h-5" />
              {loading ? "Processing..." : "Withdraw Funds"}
            </button>
          </form>
        </div>

        {/* Transaction Fee Info */}
        <div className={`${darkMode ? "bg-gray-800" : "bg-white"} rounded-2xl p-6 mb-20`}>
          <h3 className={`text-lg font-semibold mb-4 ${
            darkMode ? "text-white" : "text-gray-800"
          }`}>Transaction Information</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>Processing Time</span>
              <span className={`${darkMode ? "text-white" : "text-gray-800"}`}>1-3 business days</span>
            </div>
            <div className="flex justify-between">
              <span className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>Transaction Fee</span>
              <span className={`${darkMode ? "text-white" : "text-gray-800"}`}>₦25</span>
            </div>
            <div className="flex justify-between">
              <span className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>Daily Limit</span>
              <span className={`${darkMode ? "text-white" : "text-gray-800"}`}>₦500,000</span>
            </div>
          </div>
        </div>
      </div>
      
      <MobileBottomNav darkMode={darkMode} />
    </main>
  );
}
