import Card from "./Card/Card";
import type { TypeTransaction } from "../types/transaction";

export default function SpendingOverview({expenses}:{ expenses: TypeTransaction[]}){
    return <Card>
        <h2>Spending Overview</h2>        
    </Card>
}