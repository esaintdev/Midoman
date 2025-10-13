interface DepositHistoryProps {
  darkMode: boolean;
}

export default function DepositHistory({ darkMode }: DepositHistoryProps) {
  return (
    <div className={`${darkMode ? "p-8 min-h-[600px]" : "bg-white p-8 min-h-[600px]"}`} style={darkMode ? { backgroundColor: '#100F0F', borderRadius: '12px' } : { borderRadius: '12px' }}>
      <h4 className={`text-lg font-semibold font-sans mb-8 ${
        darkMode ? "text-white" : "text-gray-800"
      }`}>Deposit history</h4>

      <div className="flex flex-col items-center text-center space-y-6 py-16">
        <div className="w-40 h-40 rounded-full flex items-center justify-center">
          <img 
            src="/Deposit.png" 
            alt="Deposit Icon" 
            className="w-36 h-36 object-contain"
          />
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
