export default function ExpensesCard({ expenses }: { expenses: number }) {
  return (
    <>
      <h3>Expenses</h3>
      <p>{expenses}</p>
    </>
  );
}
