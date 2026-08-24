import BalanceCard from "./BalanceCard";
import IncomeCard from "./IncomeCard";
import ExpensesCard from "./ExpensesCard";
import TransactionList from "./TransactionList";
import type { TypeTransaction } from "../types/transaction";

export default function Dashboard({ transactions }: { transactions: TypeTransaction[] }) {
  const income = transactions.reduce(
    (sum, curr) => (curr.type === "income" ? sum + curr.amount : sum),
    0
  );
  const expenses = transactions.reduce(
    (sum, curr) => (curr.type !== "income" ? sum + curr.amount : sum),
    0
  );
  // current balance diff of incom and expenses
  const balance = income - expenses;

  debugger;
  return (
    <>
      <BalanceCard balance={balance} />
      <IncomeCard income={income} />
      <ExpensesCard expenses={expenses} />
      <TransactionList transactions={transactions} />
    </>
  );
}
