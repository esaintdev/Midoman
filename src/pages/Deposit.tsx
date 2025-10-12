import { useState } from "react";
import { FiArrowLeft, FiCopy, FiCheck, FiCreditCard, FiInfo } from "react-icons/fi";
import MobileBottomNav from "../components/MobileBottomNav";

interface DepositProps {
  darkMode: boolean;
  onMenuClick: () => void;
}

export default function Deposit({ darkMode, onMenuClick }: DepositProps) {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const accountDetails = {
    bankName: "First Bank of Nigeria",
    accountNumber: "1234567890",
    accountName: "Midoman Escrow Services"
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
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
          }`}>Deposit Funds</h2>
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
        {/* Instructions */}
        <div className={`${darkMode ? "bg-blue-900/20" : "bg-blue-50"} rounded-2xl p-6 mb-6`}>
          <div className="flex items-start gap-3">
            <FiInfo className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className={`text-lg font-semibold mb-2 ${
                darkMode ? "text-blue-400" : "text-blue-800"
              }`}>How to Deposit</h3>
              <p className={`text-sm leading-relaxed ${
                darkMode ? "text-blue-300" : "text-blue-700"
              }`}>
                Transfer money to the account details below. Your deposit will be credited automatically within 5-10 minutes after confirmation.
              </p>
            </div>
          </div>
        </div>

        {/* Account Details */}
        <div className={`${darkMode ? "bg-gray-800" : "bg-white"} rounded-2xl p-6 mb-6`}>
          <h3 className={`text-lg font-semibold mb-6 ${
            darkMode ? "text-white" : "text-gray-800"
          }`}>Account Details</h3>

          <div className="space-y-4">
            {/* Bank Name */}
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}>
                Bank Name
              </label>
              <div className={`flex items-center justify-between p-4 rounded-lg border ${
                darkMode ? "bg-gray-700 border-gray-600" : "bg-gray-50 border-gray-200"
              }`}>
                <span className={`font-medium ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}>{accountDetails.bankName}</span>
                <button
                  onClick={() => copyToClipboard(accountDetails.bankName, "bankName")}
                  className={`p-2 rounded-lg transition ${
                    darkMode ? "hover:bg-gray-600" : "hover:bg-gray-200"
                  }`}
                >
                  {copiedField === "bankName" ? (
                    <FiCheck className="w-4 h-4 text-green-600" />
                  ) : (
                    <FiCopy className={`w-4 h-4 ${darkMode ? "text-gray-400" : "text-gray-600"}`} />
                  )}
                </button>
              </div>
            </div>

            {/* Account Number */}
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}>
                Account Number
              </label>
              <div className={`flex items-center justify-between p-4 rounded-lg border ${
                darkMode ? "bg-gray-700 border-gray-600" : "bg-gray-50 border-gray-200"
              }`}>
                <span className={`font-medium text-xl ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}>{accountDetails.accountNumber}</span>
                <button
                  onClick={() => copyToClipboard(accountDetails.accountNumber, "accountNumber")}
                  className={`p-2 rounded-lg transition ${
                    darkMode ? "hover:bg-gray-600" : "hover:bg-gray-200"
                  }`}
                >
                  {copiedField === "accountNumber" ? (
                    <FiCheck className="w-4 h-4 text-green-600" />
                  ) : (
                    <FiCopy className={`w-4 h-4 ${darkMode ? "text-gray-400" : "text-gray-600"}`} />
                  )}
                </button>
              </div>
            </div>

            {/* Account Name */}
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}>
                Account Name
              </label>
              <div className={`flex items-center justify-between p-4 rounded-lg border ${
                darkMode ? "bg-gray-700 border-gray-600" : "bg-gray-50 border-gray-200"
              }`}>
                <span className={`font-medium ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}>{accountDetails.accountName}</span>
                <button
                  onClick={() => copyToClipboard(accountDetails.accountName, "accountName")}
                  className={`p-2 rounded-lg transition ${
                    darkMode ? "hover:bg-gray-600" : "hover:bg-gray-200"
                  }`}
                >
                  {copiedField === "accountName" ? (
                    <FiCheck className="w-4 h-4 text-green-600" />
                  ) : (
                    <FiCopy className={`w-4 h-4 ${darkMode ? "text-gray-400" : "text-gray-600"}`} />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Deposit Methods */}
        <div className={`${darkMode ? "bg-gray-800" : "bg-white"} rounded-2xl p-6 mb-6`}>
          <h3 className={`text-lg font-semibold mb-4 ${
            darkMode ? "text-white" : "text-gray-800"
          }`}>Deposit Methods</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className={`p-4 rounded-lg border ${
              darkMode ? "border-gray-600" : "border-gray-200"
            }`}>
              <div className="flex items-center gap-3 mb-2">
                <FiCreditCard className="w-5 h-5 text-blue-600" />
                <h4 className={`font-medium ${darkMode ? "text-white" : "text-gray-800"}`}>
                  Bank Transfer
                </h4>
              </div>
              <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                Transfer directly from your bank app or visit any branch
              </p>
            </div>

            <div className={`p-4 rounded-lg border ${
              darkMode ? "border-gray-600" : "border-gray-200"
            }`}>
              <div className="flex items-center gap-3 mb-2">
                <FiCreditCard className="w-5 h-5 text-green-600" />
                <h4 className={`font-medium ${darkMode ? "text-white" : "text-gray-800"}`}>
                  USSD Code
                </h4>
              </div>
              <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                Use your bank's USSD code to transfer funds
              </p>
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div className={`${darkMode ? "bg-gray-800" : "bg-white"} rounded-2xl p-6 mb-20`}>
          <h3 className={`text-lg font-semibold mb-4 ${
            darkMode ? "text-white" : "text-gray-800"
          }`}>Important Notes</h3>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
              <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                Minimum deposit amount is ₦100
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
              <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                Deposits are processed automatically within 5-10 minutes
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
              <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                No deposit fees charged
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
              <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                Contact support if your deposit is not credited within 30 minutes
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <MobileBottomNav darkMode={darkMode} />
    </main>
  );
}
