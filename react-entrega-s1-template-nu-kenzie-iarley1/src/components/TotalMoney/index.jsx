import './index.css'

export function TotalMoney ({listTransactions}) {
    
    const arrTransactions = []

    listTransactions.map(transaction => {
        if(transaction.description !== "" && transaction.value !== ""){
            arrTransactions.push(transaction)
        }
    })

    const sum = arrTransactions.reduce((acc, currentValue) => {
        let num = Number(currentValue.value)
        if(currentValue.type == 'Despesa'){
            num = num * -1
        }
        return acc + Number(num)
    }, 0)

    if(arrTransactions.length !== 0){
        return (
            <div className='total-money'>
                <div>
                    <h4>Valor total:</h4>
                    <span>{sum.toLocaleString("pt-br", { style: "currency", currency: "BRL", })}</span>
                </div>
                <p>O valor se refere ao saldo</p>
            </div>
        )
    }

    // const sum = listTransactions.reduce((acc, currentValue) => {
    //     if(currentValue.description !== "" && currentValue.value !== ""){
    //         arrSum.push(currentValue)
    //         arrSum.map(transaction => {
                
    //         }) 
    //     }
    // }, 0)

    
    
}
