import BalanceCard from "../BalanceCard";
import IncomeCard from "../IncomeCard";
import ExpensesCard from "../ExpensesCard";
import TransactionList from "../TransactionList/TransactionList";
import type { TypeTransaction } from "../../types/transaction";
import styles from './Dashboard.module.css';


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

  return (
    <>
    <article className={styles.cards}>
      <BalanceCard balance={balance} />
      <IncomeCard income={income} />
      <ExpensesCard expenses={expenses} />
    </article> 
    <TransactionList transactions={transactions} />
    </>
  );
}
