import './App.css';
import { useState } from 'react'
import { HomePage } from './pages/HomePage';
import { MainPage } from './pages/LandingPage';

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
  const [page, setPage] = useState(false)
  const [listTransactions, setListTransactions] = useState(obj)
  const [typeList, setTypeList] = useState(types)
  const [filter, setFilter] = useState('todos')

  const filteredTransactionsList = listTransactions.filter(transaction => filter == 'todos' ? true : transaction.type == filter)

  function sumTransactionValue (listTransactions) {
    setListTransactions(listTransactions)
  }


  function addTransaction (obj) {
    setListTransactions([...listTransactions, obj])
  }

  function deleteTransaction (transactionId) {
    const list = listTransactions.filter(transaction => transaction.id !== transactionId)
    setListTransactions(list)
  }

  return (
    <div className="App">
      {page ? (
        <MainPage listTransactions={filteredTransactionsList} setPage={setPage} addTransaction={addTransaction} typeList={typeList} deleteTransaction={deleteTransaction} setFilter={setFilter} sumTransactionValue={listTransactions}/>
      ) : (
        <HomePage setPage={setPage}/>
      )}
    </div>
  );
}

export default App;