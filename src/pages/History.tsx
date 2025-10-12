import { useState } from "react";
import { FiArrowLeft, FiArrowUpRight, FiArrowDownLeft, FiDownload, FiSearch } from "react-icons/fi";
import MobileBottomNav from "../components/MobileBottomNav";

interface HistoryProps {
  darkMode: boolean;
  onMenuClick: () => void;
}

interface Transaction {
  id: string;
  type: "deposit" | "withdraw" | "escrow";
  amount: number;
  status: "completed" | "pending" | "failed";
  date: string;
  description: string;
  reference: string;
}

export default function History({ darkMode, onMenuClick }: HistoryProps) {
  const [filter, setFilter] = useState<"all" | "deposit" | "withdraw" | "escrow">("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Mock transaction data
  const transactions: Transaction[] = [
    {
      id: "1",
      type: "deposit",
      amount: 50000,
      status: "completed",
      date: "2024-01-15T10:30:00Z",
      description: "Bank Transfer Deposit",
      reference: "TXN001234567"
    },
    {
      id: "2",
      type: "withdraw",
      amount: 25000,
      status: "completed",
      date: "2024-01-14T14:20:00Z",
      description: "Withdrawal to First Bank",
      reference: "TXN001234566"
    },
    {
      id: "3",
      type: "escrow",
      amount: 100000,
      status: "pending",
      date: "2024-01-13T09:15:00Z",
      description: "Escrow Payment - Property Deal",
      reference: "ESC001234565"
    },
    {
      id: "4",
      type: "deposit",
      amount: 75000,
      status: "completed",
      date: "2024-01-12T16:45:00Z",
      description: "Bank Transfer Deposit",
      reference: "TXN001234564"
    },
    {
      id: "5",
      type: "withdraw",
      amount: 30000,
      status: "failed",
      date: "2024-01-11T11:30:00Z",
      description: "Withdrawal Failed - Insufficient Funds",
      reference: "TXN001234563"
    }
  ];

  const filteredTransactions = transactions.filter(transaction => {
    const matchesFilter = filter === "all" || transaction.type === filter;
    const matchesSearch = transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         transaction.reference.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-green-600 bg-green-50 dark:bg-green-900/20 dark:text-green-400";
      case "pending":
        return "text-yellow-600 bg-yellow-50 dark:bg-yellow-900/20 dark:text-yellow-400";
      case "failed":
        return "text-red-600 bg-red-50 dark:bg-red-900/20 dark:text-red-400";
      default:
        return "text-gray-600 bg-gray-50 dark:bg-gray-900/20 dark:text-gray-400";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "deposit":
        return <FiArrowDownLeft className="w-4 h-4 text-green-600" />;
      case "withdraw":
        return <FiArrowUpRight className="w-4 h-4 text-red-600" />;
      case "escrow":
        return <div className="w-4 h-4 rounded-full bg-blue-600"></div>;
      default:
        return null;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
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
          }`}>Transaction History</h2>
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

      <div className="max-w-6xl mx-auto">
        {/* Filters and Search */}
        <div className={`${darkMode ? "bg-gray-800" : "bg-white"} rounded-2xl p-6 mb-6`}>
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {["all", "deposit", "withdraw", "escrow"].map((filterType) => (
                <button
                  key={filterType}
                  onClick={() => setFilter(filterType as any)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition capitalize ${
                    filter === filterType
                      ? "bg-blue-600 text-white"
                      : darkMode
                        ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {filterType}
                </button>
              ))}
            </div>
            
            <div className="flex gap-3 w-full md:w-auto">
              <div className="relative flex-1 md:w-64">
                <FiSearch className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
                  darkMode ? "text-gray-500" : "text-gray-400"
                }`} />
                <input
                  type="text"
                  placeholder="Search transactions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`w-full pl-10 pr-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none ${
                    darkMode 
                      ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400" 
                      : "bg-white border-gray-200 text-gray-900 placeholder-gray-500"
                  }`}
                />
              </div>
              <button
                className={`p-2 rounded-lg transition ${
                  darkMode 
                    ? "bg-gray-700 hover:bg-gray-600" 
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                <FiDownload className={`w-4 h-4 ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`} />
              </button>
            </div>
          </div>
        </div>

        {/* Transactions Table */}
        <div className={`${darkMode ? "bg-gray-800" : "bg-white"} rounded-2xl overflow-hidden mb-20`}>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className={`${darkMode ? "bg-gray-700" : "bg-gray-50"}`}>
                <tr>
                  <th className={`px-6 py-4 text-left text-xs font-medium uppercase tracking-wider ${
                    darkMode ? "text-gray-300" : "text-gray-500"
                  }`}>
                    Transaction
                  </th>
                  <th className={`px-6 py-4 text-left text-xs font-medium uppercase tracking-wider ${
                    darkMode ? "text-gray-300" : "text-gray-500"
                  }`}>
                    Amount
                  </th>
                  <th className={`px-6 py-4 text-left text-xs font-medium uppercase tracking-wider ${
                    darkMode ? "text-gray-300" : "text-gray-500"
                  }`}>
                    Status
                  </th>
                  <th className={`px-6 py-4 text-left text-xs font-medium uppercase tracking-wider ${
                    darkMode ? "text-gray-300" : "text-gray-500"
                  }`}>
                    Date
                  </th>
                  <th className={`px-6 py-4 text-left text-xs font-medium uppercase tracking-wider ${
                    darkMode ? "text-gray-300" : "text-gray-500"
                  }`}>
                    Reference
                  </th>
                </tr>
              </thead>
              <tbody className={`${darkMode ? "bg-gray-800" : "bg-white"} divide-y ${
                darkMode ? "divide-gray-700" : "divide-gray-200"
              }`}>
                {filteredTransactions.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-8 text-center">
                      <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                        No transactions found
                      </p>
                    </td>
                  </tr>
                ) : (
                  filteredTransactions.map((transaction) => (
                    <tr key={transaction.id} className={`hover:${darkMode ? "bg-gray-700" : "bg-gray-50"} transition`}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className={`flex-shrink-0 h-8 w-8 rounded-lg flex items-center justify-center ${
                            darkMode ? "bg-gray-700" : "bg-gray-100"
                          }`}>
                            {getTypeIcon(transaction.type)}
                          </div>
                          <div className="ml-4">
                            <div className={`text-sm font-medium ${
                              darkMode ? "text-white" : "text-gray-900"
                            }`}>
                              {transaction.description}
                            </div>
                            <div className={`text-sm ${
                              darkMode ? "text-gray-400" : "text-gray-500"
                            }`}>
                              {transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className={`text-sm font-medium ${
                          transaction.type === "withdraw" ? "text-red-600" : "text-green-600"
                        }`}>
                          {transaction.type === "withdraw" ? "-" : "+"}₦{transaction.amount.toLocaleString()}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          getStatusColor(transaction.status)
                        }`}>
                          {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className={`text-sm ${
                          darkMode ? "text-gray-300" : "text-gray-900"
                        }`}>
                          {formatDate(transaction.date)}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className={`text-sm font-mono ${
                          darkMode ? "text-gray-400" : "text-gray-500"
                        }`}>
                          {transaction.reference}
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      <MobileBottomNav darkMode={darkMode} />
    </main>
  );
}
