import BalanceCard from "../BalanceCard";
import IncomeCard from "../IncomeCard";
import ExpensesCard from "../ExpensesCard";
import TransactionList from "../TransactionList/TransactionList";
import SpendingOverview from "../SpendingOverview";
import type { TypeTransaction } from "../../types/transaction";
import styles from './Dashboard.module.css';


export default function Dashboard({ transactions }: { transactions: TypeTransaction[] }) {
  const expenseTransactions  = transactions.filter(t => t.type !== "income")
  const incomeTransactions  = transactions.filter(t => t.type === "income")
  const sumExpenses = expenseTransactions.reduce(
    (sum, curr) => (sum + curr.amount), 0
  );
   const sumIncome = incomeTransactions.reduce(
    (sum, curr) => ( sum + curr.amount ), 0
  );

  // current balance diff of incom and expenses
  const balance = sumIncome - sumExpenses;

  return (
    <>
      <article className={styles.cards3}>
        <BalanceCard balance={balance} />
        <IncomeCard income={sumIncome} />
        <ExpensesCard expenses={sumExpenses} />
      </article> 
      <article className={styles.cards2}>
        <TransactionList transactions={transactions} />
        <SpendingOverview expenses={expenseTransactions}/> 
      </article>
    </>
  );
}
