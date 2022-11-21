import './index.css'

export function FilterList ({typeList, setFilter}) {
    return (
        <ul className="list-button-filter">
            <li onClick={() => setFilter('todos')}>
                Todos
            </li>
            {typeList.map(type => (
                <li onClick={() => setFilter(type.value)} key={type.value}>
                {type.value}
             </li>
            ))}
        </ul>
    )
}