import styles from "./App.module.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Sidebar from "./components/Sidebar/Sidebar";
import type { TypeTransaction } from "./types/transaction";

const mockTransactionsList: TypeTransaction[] = [
  {
    id: 1,
    title: "first transaction",
    amount: 5000,
    type: "income",
    date:  new Date('2026-09-1'),
    category: "salary"
  },
  {
    id: 2,
    title: "bills",
    amount: 300,
    type: "expense",
    date:  new Date('2026-09-15'),
    category: "bills"
  },
  {
    id: 3,
    title: "ice cream",
    amount: 20,
    type: "expense",
    date:  new Date('2026-09-10'),
    category: "food"
  },
];

export default function App() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <main className={styles.mainContent}>
        <Dashboard transactions={mockTransactionsList} />
      </main>
    </div>
  );
}
