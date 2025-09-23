import { ButtonCV } from "../buttonCV/buttonCV";
import "./header.scss";
import { hoverUnderline, menuHamburguer } from "./utils";
import { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    hoverUnderline();
  }, []);

  return (
    <header className="header">
      <div className="menu-hamburguer" onClick={menuHamburguer}>
        <div className="hamburguer before"></div>
        <div className="hamburguer middle"></div>
        <div className="hamburguer after"></div>
      </div>
      <nav className="navigation">
        <ul>
          <li>
            <a href="#about" className="hover-underline">
              About
            </a>
          </li>
          <li>
            <a href="#works" className="hover-underline">
              Works
            </a>
          </li>
          <li>
            <a href="#skills" className="hover-underline">
              Skills
            </a>
          </li>
          <li>
            <a href="#contacts" className="hover-underline">
              Contacts
            </a>
          </li>
          <li>
            <ButtonCV />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Header };
