import './index.css'

export function Header ({setPage}) {
    return (
        <header>
           <div>
              <h1><span>Nu</span> Kenzie</h1>
              <button onClick={() => setPage(false)}>Inicio</button> 
           </div>
        </header>
    )
}