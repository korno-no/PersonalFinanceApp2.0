export type TypeTransaction = {
  id: number;
  title: string;
  amount: number;
  type: "income" | "expense";
};
