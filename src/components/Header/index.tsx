import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import "./style.css";


export function Header() {
  return (
    <>
     <header className="header">
        <Link to="/">
          <img className="logo" src={Logo} alt="Safe Bet logo"/>
        </Link>
      </header>
    </>
  )
  
}