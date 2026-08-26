
import style from "./Transaction.module.css"
import type { TypeTransaction } from "../../types/transaction";
export default function Transaction({ transaction }: { transaction: TypeTransaction }) {
  return <div className={style[transaction.type] + " " + style.transaction}>
    <div>{transaction.title}</div>
    <div>{transaction.type === 'income' ? '+':'-'} {transaction.amount}</div>
  </div>;
}
