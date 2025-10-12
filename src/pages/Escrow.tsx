interface EscrowProps {
  darkMode: boolean;
  onMenuClick: () => void;
}

export default function Escrow({ darkMode, onMenuClick }: EscrowProps) {
  return (
    <main className="flex-1 p-4 md:p-8">
      <div className="flex items-center justify-between mb-6 md:mb-8">
        <div className="flex items-center justify-between w-full lg:w-auto">
          <h2 className={`text-2xl md:text-3xl font-bold font-sans ${
            darkMode ? "text-white" : "text-gray-800"
          }`}>Escrow</h2>
          <button
            onClick={onMenuClick}
            className={`lg:hidden p-2 rounded-lg transition ${
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
      
      <div className={`${darkMode ? "bg-gray-800" : "bg-white"} rounded-2xl p-8 text-center`}>
        <h3 className={`text-xl font-semibold mb-4 ${
          darkMode ? "text-white" : "text-gray-800"
        }`}>Escrow Services</h3>
        <p className={`${
          darkMode ? "text-gray-400" : "text-gray-600"
        }`}>Secure escrow functionality coming soon...</p>
      </div>
    </main>
  );
}
