import { FiSearch, FiMenu } from "react-icons/fi";

interface HeaderProps {
  title: string;
  onMenuClick?: () => void;
  darkMode?: boolean;
}

export default function Header({ title, onMenuClick, darkMode }: HeaderProps) {
  return (
    <div className="flex items-center justify-between mb-6 px-4 lg:px-0">
      {/* Mobile Header */}
      <div className="flex items-center justify-between w-full lg:hidden">
        <button
          onClick={onMenuClick}
          className={`p-2 rounded-lg transition ${
            darkMode 
              ? "bg-gray-700 hover:bg-gray-600" 
              : "bg-gray-100 hover:bg-gray-200"
          }`}
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
        
        <div className="relative">
          <div className={`w-8 h-8 rounded-full ${
            darkMode ? "bg-gray-600" : "bg-gray-300"
          }`} />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">1</span>
          </div>
        </div>
      </div>

      {/* Desktop Header */}
      <div className="hidden lg:flex lg:items-center lg:justify-between lg:w-full">
        <h2 className={`text-2xl md:text-3xl font-bold font-sans ${
          darkMode ? "text-white" : "text-gray-800"
        }`}>{title}</h2>
        
        <div className="flex items-center gap-4">
          <div className="relative">
            <FiSearch className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
              darkMode ? "text-gray-500" : "text-gray-400"
            }`} />
            <input
              type="text"
              placeholder="Search"
              className={`pl-12 pr-4 py-3 w-80 rounded-full border focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-base font-sans ${
                darkMode 
                  ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400" 
                  : "bg-white border-gray-200 text-gray-900 placeholder-gray-500"
              }`}
            />
          </div>
          <div className="relative">
            <div className={`w-10 h-10 rounded-full ${
              darkMode ? "bg-gray-600" : "bg-gray-300"
            }`} />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
