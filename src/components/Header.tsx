import { FiSearch, FiMenu } from "react-icons/fi";

interface HeaderProps {
  title: string;
  onMenuClick?: () => void;
}

export default function Header({ title, onMenuClick }: HeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 md:mb-8 space-y-4 sm:space-y-0">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl md:text-3xl font-bold font-sans text-gray-800">{title}</h2>
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
        >
          <FiMenu className="w-6 h-6 text-gray-600" />
        </button>
      </div>
      <div className="flex items-center gap-3 md:gap-4">
        <div className="relative flex-1 sm:flex-none">
          <FiSearch className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 md:w-5 md:h-5" />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 md:pl-12 pr-3 md:pr-4 py-2 md:py-3 w-full sm:w-64 md:w-80 rounded-full border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white text-sm md:text-base font-sans"
          />
        </div>
        <div className="relative flex-shrink-0">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-300" />
          <div className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">1</span>
          </div>
        </div>
      </div>
    </div>
  );
}
