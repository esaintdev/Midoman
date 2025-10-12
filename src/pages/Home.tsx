import { useEffect, useState } from "react";
import MainContent from "../components/MainContent";

interface Account {
  balance: number;
  bankName: string;
  accountNumber: string;
}

interface HomeProps {
  darkMode: boolean;
  onMenuClick: () => void;
}

export default function Home({ darkMode, onMenuClick }: HomeProps) {
  const [account, setAccount] = useState<Account>({
    balance: 0,
    bankName: "N/A",
    accountNumber: "N/A",
  });

  // Mock data simulation
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAccount({
        balance: 0.00,
        bankName: "N/A",
        accountNumber: "N/A",
      });
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return <MainContent darkMode={darkMode} account={account} onMenuClick={onMenuClick} />;
}
