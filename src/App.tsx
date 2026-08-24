import "./styles.css";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import type { TypeTransaction } from "./types/transaction";

const mockTransactionsList: TypeTransaction[] = [
  {
    id: 1,
    title: "first transaction",
    amount: 5000,
    type: "income",
  },
  {
    id: 2,
    title: "bills",
    amount: 300,
    type: "expense",
  },
  {
    id: 3,
    title: "ice cream",
    amount: 20,
    type: "expense",
  },
];

export default function App() {
  return (
    <div className="App">
      <Sidebar />
      <Dashboard transactions={mockTransactionsList} />
    </div>
  );
}
