export function Card ({listTransactions, deleteTransaction}) {
    if (listTransactions.description && listTransactions.value && listTransactions.type) {

        return (
            <li>
                <div>
                   <h2>{listTransactions.description}</h2>
                   <p>{listTransactions.type}</p>
                </div>
                <div>
                    <p>{listTransactions.value.toLocaleString("pt-br", { style: "currency", currency: "BRL", })}</p>
                    <button onClick={() => deleteTransaction(listTransactions.description)}>imagem</button>
                </div>
            </li>
        )
    }
}