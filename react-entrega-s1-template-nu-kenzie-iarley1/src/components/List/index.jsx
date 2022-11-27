import { Card, EmptyCard } from '../Card'
import './index.css'

export function List ({listTransactions, deleteTransaction}) {
    const arrTransaction = []
    listTransactions.map(transaction => {
        if(transaction.description !== '' && transaction.value !== ''){
            arrTransaction.push(transaction)
        }
    })
    if(arrTransaction.length === 0){
        return (
            <ul className='list-transactions'>
                <h2>Você ainda não possui nenhum lançamento</h2>
                <EmptyCard listTransactions={listTransactions}/>
                <EmptyCard listTransactions={listTransactions}/>
                <EmptyCard listTransactions={listTransactions}/>
            </ul>
        )
    }else{
        let count = 0
        return (
            <ul className='list-transactions'>
                {listTransactions.map((transaction, index) => {
                    transaction.id = count
                    count ++
                    return (
                        (
                           <Card key={index} listTransactions={transaction} deleteTransaction={deleteTransaction}/>
                        )
                    )
                })}
            </ul>
        )
     }
}