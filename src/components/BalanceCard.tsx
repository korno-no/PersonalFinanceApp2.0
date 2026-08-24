export default function BalanceCard({ balance }: { balance: number }) {
  return (
    <>
      <h3>Current Balance</h3>
      <p>{balance}</p>
    </>
  );
}
