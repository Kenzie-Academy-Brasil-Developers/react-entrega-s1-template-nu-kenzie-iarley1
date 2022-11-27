import './index.css'
import trash from '../../asserts/img/trash.svg'


export function Card ({listTransactions, deleteTransaction}) {
    if (listTransactions.description !== '' && listTransactions.value !== '' && listTransactions.type !== '') {
        if(listTransactions.type == 'Entrada') {
            return (
                <li className='card'>
                    <span className='span-entry'></span>
                    <div className='card-box'>
                       <div className='description-type'>
                          <h4>{listTransactions.description}</h4>
                          <p>{listTransactions.type}</p>
                       </div>
                       <div className='value-button'>
                           <p>{Number(listTransactions.value).toLocaleString("pt-br", { style: "currency", currency: "BRL", })}</p>
                           <button onClick={() => deleteTransaction(listTransactions.id)}><img src={trash} alt="" /></button>
                       </div>
                    </div>
                </li>
            )
        }else{
            
            return (
                <li className='card'>
                    <span className='span-exit'></span>
                    <div className='card-box'>
                        <div className='description-type'>
                           <h4>{listTransactions.description}</h4>
                           <p>{listTransactions.type}</p>
                        </div>
                        <div className='value-button'>
                            <p>{Number(listTransactions.value).toLocaleString("pt-br", { style: "currency", currency: "BRL", })}</p>
                            <button onClick={() => deleteTransaction(listTransactions.id)}><img src={trash} alt="" /></button>
                        </div>
                    </div>
                </li>
            )
        }
    }
}

export function EmptyCard ({listTransactions}) {
    return (
        <li className='empty-card'>
            <span className='span-exit'></span>
            <div className='empty-div'>
               <div className='div-1'></div>
               <div className='div-2'></div>
            </div>
        </li>
    )
}