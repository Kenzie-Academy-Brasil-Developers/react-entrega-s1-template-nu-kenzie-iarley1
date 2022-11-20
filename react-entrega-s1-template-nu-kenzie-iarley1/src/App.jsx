import './App.css';
import { useState } from 'react'
import { HomePage } from './pages/HomePage';
import { MainPage } from './pages/MainPage';

const obj = []
const types = [
  {
    label: 'Entrada',
    value: 'Entrada'
  },
  {
    label: 'Despesa',
    value: 'Despesa'
  }
]

function App() {
  const [page, setPage] = useState(true)
  const [listTransactions, setListTransactions] = useState(obj)
  const [typeList, setTypeList] = useState(types)
  const [filter, setFilter] = useState('todos')

  const filteredTransactionsList = listTransactions.filter(transaction => filter == 'todos' ? true : transaction.type == filter)

  function addTransaction (obj, type) {
    setListTransactions([...listTransactions, obj])
  }

  function deleteTransaction (transactionDescription) {
    const list = listTransactions.filter(transaction => transaction.description !== transactionDescription)
    setListTransactions(list)
  }

  return (
    <div className="App">
      {page ? (
        <MainPage listTransactions={filteredTransactionsList} setPage={setPage} addTransaction={addTransaction} typeList={typeList} deleteTransaction={deleteTransaction} setFilter={setFilter}/>
      ) : (
        <HomePage setPage={setPage}/>
      )}
    </div>
  );
}

export default App;
