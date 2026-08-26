
import style from "./Transaction.module.css"
export default function Transaction({ amount, title, type }: { amount: number, title: string, type: "income" | "expense" }) {
  return <p className={style[type] + " " + style.transaction}>
    <div>{title}</div>
    <div>{type === 'income' ? '+':'-'} {amount}</div>
  </p>;
}
