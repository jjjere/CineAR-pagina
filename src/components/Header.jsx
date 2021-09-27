import React from "react";
import "./styles/Header.css";

const redesSociales = [
  {
    textoAlternativo: "Icono de Facebook",
    srcDelIcono: "./assets/ifacebook.png",
  },
  {
    textoAlternativo: "Icono de Twitter",
    srcDelIcono: "./assets/itwitter.png",
  },
  {
    textoAlternativo: "Icono de Instagram",
    srcDelIcono: "./assets/iinstagram.png",
  },
];

const enlacesARedesSociales = redesSociales.map(
  ({ textoAlternativo, srcDelIcono }) => (
    <li className="li-redsocial">
      <a className="a-redsocial" href="/">
        <img
          className="img-redsocial "
          src={srcDelIcono}
          alt={textoAlternativo}
        />
      </a>
    </li>
  )
);

const Header = () => {
  return (
    <header>
      <nav>
        <div>
          <a href="/">
            <img
              id="logo-nav"
              src="http://cine.ar/img/logo-sin-bajada.svg"
              alt="LOGO"
              style={{ width: 160, height: 40 }}
            />
          </a>
          contenidos <b style={{ marginLeft: "8px" }}>argentinos</b>
          <ul id="list-redsocial">{enlacesARedesSociales}</ul>
        </div>

        <ul>
          <li className="li-cinear-ext">
            <a className="a-cinear-ext" href="/">
              cine.ar <span style={{ color: "#2a8b9b" }}>tv</span>
            </a>
          </li>
          <li className="li-cinear-ext">
            <a className="a-cinear-ext" href="/">
              cine.ar <span style={{ color: "#37aca1" }}>play</span>
            </a>
          </li>
          <li className="li-cinear-ext">
            <a className="a-cinear-ext" href="/">
              cine.ar <span style={{ color: "#206930" }}>estrenos</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
