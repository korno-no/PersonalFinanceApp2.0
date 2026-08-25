import Card from "./Card/Card";
export default function ExpensesCard({ expenses }: { expenses: number }) {
  return (
    <Card>
      <h3>Expenses</h3>
      <p>{expenses}</p>
    </Card>
  );
}
