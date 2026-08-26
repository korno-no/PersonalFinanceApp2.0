import Transaction from "../Transaction/Transaction";
import type { TypeTransaction } from "../../types/transaction";
import Card from "../Card/Card";
import styles from "./TrnsaktionList.module.css"


export default function TransactionList({ transactions }: { transactions: TypeTransaction[] }) {
  return (
    <Card>
      <h2>Transactions</h2>
        {transactions.map((tx) => (
            <Transaction key={tx.id} amount={tx.amount} title={tx.title} type={tx.type}/>
        ))}
    </Card>
  );
}
