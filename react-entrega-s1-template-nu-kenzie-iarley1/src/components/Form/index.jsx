import { useState } from "react"

export function Form ({addTransaction, typeList}) {
    const [formObj, setFormObj] = useState({
        description: '',
        value: '',
        type: typeList[0].value,
    })
    
    return (
        <form onSubmit={(event) => {
            event.preventDefault()
            addTransaction(formObj)
            setFormObj({
                description: '',
                value: '',
                type: formObj.type
            })
        }}>
            <div>
               <label htmlFor="description">Descrição</label>
               <input value={formObj.description} onChange={(event) => setFormObj({...formObj, description: event.target.value})} name="description" type="text" placeholder="Digite aqui sua descrição"/>
               <span>Ex: Compra de roupas</span>
            </div>
            <div>
               <label htmlFor="value">Valor</label>
               <input value={formObj.value} onChange={(event) => setFormObj({...formObj, value: event.target.value})} name="value" type="text" placeholder="1"/>
            </div>
            <div>
               <label htmlFor="type">Tipo de valor</label>
               <select onChange={(event) => setFormObj({...formObj, type: event.target.value})} name="type">
                {typeList.map(type => (
                    <option key={type.value} value={type.value}>{type.label}</option>
                ))}
               </select>
            </div>
            <button type="submit">Inserir valor</button>
        </form>
    )
}