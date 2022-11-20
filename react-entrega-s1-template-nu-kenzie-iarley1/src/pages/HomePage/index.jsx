import './index.css'

export function HomePage ({setPage}) {
    return (
        <div>
           <h1>home</h1>
           <button onClick={() => setPage(true)}>Iniciar</button>
        </div>
    )
}