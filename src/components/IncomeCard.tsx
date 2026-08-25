import Card from "./Card/Card";

export default function IncomeCard({ income }: { income: number }) {
  return (
    <Card>
      <h3>Income</h3>
      <p>{income}</p>
    </Card>
  );
}
