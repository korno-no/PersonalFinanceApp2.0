import Card from "./Card/Card";
export default function BalanceCard({ balance }: { balance: number }) {
  return (
    <Card>
      <h3>Current Balance</h3>
      <p>{balance}</p>
    </Card>
  );
}
