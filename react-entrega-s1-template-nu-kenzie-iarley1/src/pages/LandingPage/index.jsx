import { FilterList } from "../../components/Filter"
import { Form } from "../../components/Form"
import { Header } from "../../components/Header"
import { List } from "../../components/List"
import { TotalMoney } from "../../components/TotalMoney"
import './index.css'

export function MainPage ({listTransactions, setPage, addTransaction, typeList, deleteTransaction, setFilter}) {
    return (
        <div className="main-page-body">
            <div className="container">
               <Header setPage={setPage}/>
               <div className="box-container">
                  <div className="form-total-money">
                     <Form addTransaction={addTransaction} typeList={typeList} />
                     <TotalMoney listTransactions={listTransactions}/>
                  </div>
                  <div className="box-list">
                    <div className="financial-summary">
                       <h3>Resumo Financeiro</h3>
                       <FilterList typeList={typeList} setFilter={setFilter}/>
                    </div>
                    <List listTransactions={listTransactions} deleteTransaction={deleteTransaction}/>
                  </div>
                </div>
            </div>
        </div>
    )
}