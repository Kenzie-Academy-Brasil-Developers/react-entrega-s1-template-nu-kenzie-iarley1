import { Card } from '../Card'

export function List ({listTransactions, deleteTransaction}) {
    return (
        <ul>
            {listTransactions.map((transaction, index) => (
                <Card key={index} listTransactions={transaction} deleteTransaction={deleteTransaction}/>
            ))}
        </ul>
    )
}