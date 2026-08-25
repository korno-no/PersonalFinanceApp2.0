import Transaction from "./Transaction";
import type { TypeTransaction } from "../types/transaction";
import Card from "./Card/Card";


export default function TransactionList({ transactions }: { transactions: TypeTransaction[] }) {
  return (
    <Card>
      <h2>Transactions</h2>
      <ul>
        {transactions.map((tx) => (
          <li key={tx.id}>
            <Transaction amount={tx.amount} />
          </li>
        ))}
      </ul>
    </Card>
  );
}
