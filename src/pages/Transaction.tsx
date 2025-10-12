interface TransactionProps {
  darkMode: boolean;
  onMenuClick: () => void;
}

export default function Transaction({ darkMode, onMenuClick }: TransactionProps) {
  return (
    <main className="flex-1 p-4 md:p-8">
      <div className="flex items-center justify-between mb-6 md:mb-8">
        <div className="flex items-center justify-between w-full lg:w-auto">
          <h2 className="text-2xl md:text-3xl font-bold font-sans text-gray-800">Transaction</h2>
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      
      <div className={`${darkMode ? "bg-gray-800" : "bg-white"} rounded-2xl p-8 text-center`}>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Transaction History</h3>
        <p className="text-gray-600">Transaction management coming soon...</p>
      </div>
    </main>
  );
}
