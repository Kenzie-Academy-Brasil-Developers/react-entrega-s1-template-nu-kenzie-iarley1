import { FilterList } from "../../components/Filter"
import { Form } from "../../components/Form"
import { List } from "../../components/List"

export function MainPage ({listTransactions, setPage, addTransaction, typeList, deleteTransaction, setFilter}) {
    return (
        <div>
            <h1>Pagina de usuario</h1>
            <button onClick={() => setPage(false)}>Inicio</button>
            <Form addTransaction={addTransaction} typeList={typeList} setFilter={setFilter}/>
            <List listTransactions={listTransactions} deleteTransaction={deleteTransaction}/>
            <FilterList typeList={typeList} setFilter={setFilter}/>
        </div>
    )
}