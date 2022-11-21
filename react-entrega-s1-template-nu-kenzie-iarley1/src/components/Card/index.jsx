import './index.css'
import trash from '../../asserts/img/trash.svg'

export function Card ({listTransactions, deleteTransaction}) {
    if (listTransactions.description && listTransactions.value && listTransactions.type) {

        if(listTransactions.type == 'Entrada') {
            return (
                <li className='card'>
                    <span className='span-entry'></span>
                <div className='description-type'>
                   <h2>{listTransactions.description}</h2>
                   <p>{listTransactions.type}</p>
                </div>
                <div className='value-button'>
                    <p>{Number(listTransactions.value).toLocaleString("pt-br", { style: "currency", currency: "BRL", })}</p>
                    <button onClick={() => deleteTransaction(listTransactions.description)}><img src={trash} alt="" /></button>
                </div>
            </li>
            )
        }else{
            return (
                <li className='card'>
                    <span className='span-exit'></span>
                <div className='description-type'>
                   <h2>{listTransactions.description}</h2>
                   <p>{listTransactions.type}</p>
                </div>
                <div className='value-button'>
                    <p>{Number(listTransactions.value).toLocaleString("pt-br", { style: "currency", currency: "BRL", })}</p>
                    <button onClick={() => deleteTransaction(listTransactions.description)}><img src={trash} alt="" /></button>
                </div>
            </li>
            )
        }
    }
}