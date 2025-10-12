import { FiMoon, FiSun, FiUser, FiBell, FiShield, FiHelpCircle, FiMail, FiSmartphone, FiDollarSign } from "react-icons/fi";
import MobileBottomNav from "../components/MobileBottomNav";

interface SettingsProps {
  darkMode: boolean;
  onMenuClick: () => void;
  setDarkMode: (darkMode: boolean) => void;
}

export default function Settings({ darkMode, onMenuClick, setDarkMode }: SettingsProps) {
  return (
    <main className="flex-1 p-4 md:p-8">
      <div className="flex items-center justify-between mb-6 md:mb-8">
        <div className="flex items-center justify-between w-full lg:w-auto">
          <h2 className={`text-2xl md:text-3xl font-bold font-sans ${
            darkMode ? "text-white" : "text-gray-800"
          }`}>Settings</h2>
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
      
      <div className="space-y-6 mb-20">
        {/* Theme Settings */}
        <div className={`${darkMode ? "bg-gray-800" : "bg-white"} rounded-2xl p-6`}>
          <h3 className={`text-lg font-semibold mb-4 ${
            darkMode ? "text-white" : "text-gray-800"
          }`}>Appearance</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  darkMode ? "bg-gray-700" : "bg-gray-100"
                }`}>
                  {darkMode ? (
                    <FiMoon className={`w-5 h-5 ${darkMode ? "text-blue-400" : "text-gray-600"}`} />
                  ) : (
                    <FiSun className={`w-5 h-5 ${darkMode ? "text-gray-400" : "text-orange-500"}`} />
                  )}
                </div>
                <div>
                  <p className={`font-medium ${darkMode ? "text-white" : "text-gray-800"}`}>
                    {darkMode ? "Dark Mode" : "Light Mode"}
                  </p>
                  <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                    {darkMode ? "Switch to light theme" : "Switch to dark theme"}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  darkMode ? "bg-blue-600" : "bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    darkMode ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Account Settings */}
        <div className={`${darkMode ? "bg-gray-800" : "bg-white"} rounded-2xl p-6`}>
          <h3 className={`text-lg font-semibold mb-4 ${
            darkMode ? "text-white" : "text-gray-800"
          }`}>Account</h3>
          
          <div className="space-y-4">
            <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  darkMode ? "bg-gray-700" : "bg-gray-100"
                }`}>
                  <FiUser className={`w-5 h-5 ${darkMode ? "text-gray-400" : "text-gray-600"}`} />
                </div>
                <div className="text-left">
                  <p className={`font-medium ${darkMode ? "text-white" : "text-gray-800"}`}>Profile</p>
                  <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Manage your profile</p>
                </div>
              </div>
              <svg className={`w-5 h-5 ${darkMode ? "text-gray-400" : "text-gray-400"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  darkMode ? "bg-gray-700" : "bg-gray-100"
                }`}>
                  <FiShield className={`w-5 h-5 ${darkMode ? "text-gray-400" : "text-gray-600"}`} />
                </div>
                <div className="text-left">
                  <p className={`font-medium ${darkMode ? "text-white" : "text-gray-800"}`}>Security</p>
                  <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Password & authentication</p>
                </div>
              </div>
              <svg className={`w-5 h-5 ${darkMode ? "text-gray-400" : "text-gray-400"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Notifications */}
        <div className={`${darkMode ? "bg-gray-800" : "bg-white"} rounded-2xl p-6`}>
          <h3 className={`text-lg font-semibold mb-4 ${
            darkMode ? "text-white" : "text-gray-800"
          }`}>Notifications</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  darkMode ? "bg-gray-700" : "bg-gray-100"
                }`}>
                  <FiBell className={`w-5 h-5 ${darkMode ? "text-blue-400" : "text-blue-600"}`} />
                </div>
                <div>
                  <p className={`font-medium ${darkMode ? "text-white" : "text-gray-800"}`}>Push Notifications</p>
                  <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>General app notifications</p>
                </div>
              </div>
              <button
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  true ? "bg-blue-600" : "bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    true ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  darkMode ? "bg-gray-700" : "bg-gray-100"
                }`}>
                  <FiMail className={`w-5 h-5 ${darkMode ? "text-green-400" : "text-green-600"}`} />
                </div>
                <div>
                  <p className={`font-medium ${darkMode ? "text-white" : "text-gray-800"}`}>Email Notifications</p>
                  <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Account updates via email</p>
                </div>
              </div>
              <button
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  false ? "bg-blue-600" : "bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    false ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  darkMode ? "bg-gray-700" : "bg-gray-100"
                }`}>
                  <FiSmartphone className={`w-5 h-5 ${darkMode ? "text-purple-400" : "text-purple-600"}`} />
                </div>
                <div>
                  <p className={`font-medium ${darkMode ? "text-white" : "text-gray-800"}`}>SMS Notifications</p>
                  <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Important alerts via SMS</p>
                </div>
              </div>
              <button
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  true ? "bg-blue-600" : "bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    true ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  darkMode ? "bg-gray-700" : "bg-gray-100"
                }`}>
                  <FiDollarSign className={`w-5 h-5 ${darkMode ? "text-yellow-400" : "text-yellow-600"}`} />
                </div>
                <div>
                  <p className={`font-medium ${darkMode ? "text-white" : "text-gray-800"}`}>Transaction Alerts</p>
                  <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Payment and deposit notifications</p>
                </div>
              </div>
              <button
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  true ? "bg-blue-600" : "bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    true ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Support */}
        <div className={`${darkMode ? "bg-gray-800" : "bg-white"} rounded-2xl p-6`}>
          <h3 className={`text-lg font-semibold mb-4 ${
            darkMode ? "text-white" : "text-gray-800"
          }`}>Support</h3>
          
          <div className="space-y-4">
            <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  darkMode ? "bg-gray-700" : "bg-gray-100"
                }`}>
                  <FiHelpCircle className={`w-5 h-5 ${darkMode ? "text-gray-400" : "text-gray-600"}`} />
                </div>
                <div className="text-left">
                  <p className={`font-medium ${darkMode ? "text-white" : "text-gray-800"}`}>Help & Support</p>
                  <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Get help and contact support</p>
                </div>
              </div>
              <svg className={`w-5 h-5 ${darkMode ? "text-gray-400" : "text-gray-400"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <MobileBottomNav darkMode={darkMode} />
    </main>
  );
}
