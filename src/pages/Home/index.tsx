import { Link } from 'react-router-dom';
import './style.css'; 
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export function Home() {
  return(
    <>
      <Header />
      <div className="container">
        <div className="item">
        <Link to="addTeam">
          <button className='button'>
            Adicionar um time
          </button>
        </Link>
        <Link to="deleteTeam">
          <button className="button">
            Deletar time
          </button>
        </Link>
        <Link to="showStatistics">
          <button className="button">
            Mostrar estatistica
          </button>
        </Link>
        <Link to="">
          <button className="button">
            Mostrar tabela
          </button>
        </Link>
        <Link to="">
          <button className="button">
            Adicionar Partida
          </button>
        </Link>
        <Link to="">
          <button className="button">
            Mostrar calendário
          </button>
        </Link>  
          
        </div>
      </div>
      <Footer />
    </>
  )
}

