export function FilterList ({typeList, setFilter}) {
    console.log(typeList)
    return (
        <ul>
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