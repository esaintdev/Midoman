import { FiCreditCard } from "react-icons/fi";

interface DepositHistoryProps {
  darkMode: boolean;
}

export default function DepositHistory({ darkMode }: DepositHistoryProps) {
  return (
    <div className={`${darkMode ? "bg-gray-800" : "bg-white"} rounded-2xl p-8 min-h-[600px]`}>
      <h4 className={`text-lg font-semibold font-sans mb-8 ${
        darkMode ? "text-white" : "text-gray-800"
      }`}>Deposit history</h4>

      <div className="flex flex-col items-center text-center space-y-6 py-16">
        <div className={`w-20 h-20 rounded-full flex items-center justify-center ${
          darkMode ? "bg-blue-900" : "bg-blue-50"
        }`}>
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
            darkMode ? "bg-blue-800" : "bg-blue-100"
          }`}>
            <FiCreditCard className="w-6 h-6 text-blue-600" />
          </div>
        </div>
        <div>
          <p className={`font-semibold font-sans mb-2 ${
            darkMode ? "text-white" : "text-gray-800"
          }`}>You have not deposited</p>
          <p className={`text-sm font-sans leading-relaxed ${
            darkMode ? "text-gray-400" : "text-gray-500"
          }`}>
            Send money to the account number to<br />deposit
          </p>
        </div>
      </div>
    </div>
  );
}
