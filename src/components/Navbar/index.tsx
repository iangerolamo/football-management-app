import { useState } from "react";
import { MenuItems } from "../../assets/MenuItems";
import { Button } from "../Button";
import "./style.css";

export function Navbar() {

  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(!clicked);
  }


  return(
    <>
      <nav className="navbar-items">
        <h1 className="navbar-logo">Safe Bet<i className="fab fa-react"></i></h1>
        <div className="menu-icon"onClick={handleClick}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            )
          })}
        </ul>
        <Button>Sign Up</Button>
      </nav>
    </>
  )
}