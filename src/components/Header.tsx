import { FiSearch, FiMenu, FiBell } from "react-icons/fi";

interface HeaderProps {
  title: string;
  onMenuClick?: () => void;
  darkMode?: boolean;
}

export default function Header({ title, onMenuClick, darkMode }: HeaderProps) {
  return (
    <div className={`sticky top-0 z-50 flex items-center justify-between mb-6 px-4 lg:px-0 pt-4 lg:pt-6 border-b ${darkMode ? "p-4 border-gray-700" : "bg-white border-gray-200"}`} style={darkMode ? { backgroundColor: '#100F0F' } : {}}>
      {/* Mobile Header */}
      <div className="flex items-center justify-between w-full lg:hidden">
        <button
          onClick={() => {
            console.log('Menu button clicked!');
            onMenuClick?.();
          }}
          className={`p-2 transition ${
            darkMode 
              ? "bg-gray-700 hover:bg-gray-600" 
              : "bg-gray-100 hover:bg-gray-200"
          }`}
          style={{ borderRadius: '12px' }}
        >
          <FiMenu className={`w-6 h-6 ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`} />
        </button>
        
        <div className="flex items-center">
          <img 
            src={darkMode ? "/dark.png" : "/logo.png"}
            alt="Midoman Logo" 
            className="h-8 w-auto object-contain"
          />
        </div>
        
        <button className="relative">
          <div className={`w-8 h-8 flex items-center justify-center transition-colors ${
            darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-100 hover:bg-gray-200"
          }`} style={{ borderRadius: '50%' }}>
            <FiBell className={`w-4 h-4 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`} />
          </div>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 flex items-center justify-center" style={{ borderRadius: '50%' }}>
            <span className="text-white text-xs font-bold">1</span>
          </div>
        </button>
      </div>

      {/* Desktop Header */}
      <div className="hidden lg:flex lg:items-center lg:justify-between lg:w-full pb-4">
        <h2 className={`text-2xl md:text-3xl font-bold font-sans ml-6 ${
          darkMode ? "text-white" : "text-gray-800"
        }`}>{title}</h2>
        
        <div className="flex items-center gap-3 mr-4 xl:mr-8">
          <div className="relative">
            <FiSearch className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
              darkMode ? "text-gray-500" : "text-gray-400"
            }`} />
            <input
              type="text"
              placeholder="Search"
              className={`pl-12 pr-4 py-3 w-48 lg:w-64 xl:w-80 border focus:ring-2 focus:ring-[#0660D3] focus:border-transparent outline-none text-base font-sans ${
                darkMode 
                  ? "border-gray-600 text-white placeholder-gray-400" 
                  : "bg-white border-gray-200 text-gray-900 placeholder-gray-500"
              }`}
              style={darkMode ? { backgroundColor: '#242426', borderRadius: '12px' } : { borderRadius: '12px' }}
            />
          </div>
          <button className="relative flex-shrink-0">
            <div className={`w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center transition-colors ${
              darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-100 hover:bg-gray-200"
            }`} style={{ borderRadius: '50%' }}>
              <FiBell className={`w-4 h-4 lg:w-5 lg:h-5 ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`} />
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 lg:w-4 lg:h-4 bg-red-500 flex items-center justify-center" style={{ borderRadius: '50%' }}>
              <span className="text-white text-xs font-bold">0</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
