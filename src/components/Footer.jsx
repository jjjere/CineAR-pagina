import React from "react";
import "./styles/Footer.css";
const Footer = () => {
  return (
    <footer>
      <h6>Todos los derechos reservados 2003-2021. República Argentina. INCAA<br/>
      Lima 319; Código Postal: C1073AAG, CABA; República Argentina.</h6>
     <div className="Footer">
      <ul>
        <li>
          <a href="http://cine.ar/">
            <img src="http://cine.ar/img/logo-cinear.svg" alt="" />
          </a>
        </li>

        <li>
          <a href="https://www.arsat.com.ar/">
            <img src="http://cine.ar/img/logo-arsat.svg" alt="" />
          </a>
        </li>

        <li>
          <a href="http://www.incaa.gob.ar/">
            <img src="http://cine.ar/img/logo-incaa.svg" alt="" />
          </a>
        </li>
      </ul>
      </div>
    </footer>
  );
};

export default Footer;
