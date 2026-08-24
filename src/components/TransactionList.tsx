import Transaction from "./Transaction";
import type { TypeTransaction } from "../types/transaction";

export default function TransactionList({ transactions }: { transactions: TypeTransaction[] }) {
  return (
    <>
      <h2>Transactions</h2>
      <li>
        {transactions.map((tx) => (
          <ul>
            <Transaction amount={tx.amount} />
          </ul>
        ))}
      </li>
    </>
  );
}
