import { Card } from '../Card'
import './index.css'

export function List ({listTransactions, deleteTransaction}) {
    return (
        <ul className='list-transactions'>
            {listTransactions.map((transaction, index) => (
                <Card key={index} listTransactions={transaction} deleteTransaction={deleteTransaction}/>
            ))}
        </ul>
    )
}