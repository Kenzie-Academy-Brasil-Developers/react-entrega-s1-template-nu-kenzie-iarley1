import './index.css'
import   illustration  from '../../asserts/img/illustration.svg'

export function HomePage ({setPage}) {
    return (
        <div className='home-page-body'>
            <div className='box'>
               <div className='info'>
                   <h1><span>Nu</span> Kenzie</h1>
                   <h2>Centralize o controle das suas finanças</h2>
                   <p>de forma rápida e segura</p>
                   <button onClick={() => setPage(true)}>Iniciar</button>
               </div>
            <img src={illustration} alt="" />
            </div>
        </div>
    )
}