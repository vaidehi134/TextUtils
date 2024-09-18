//whole Navbar is in lec-6

// //rfc+  (function will creared with the name of file name..in this case Navbar)

// import React from "react";

// export default function Navbar() {
//   return <div>Hello I am a navbar</div>;
// }

// //and then add <Navbar></Navbar> or <Navbar/> in App.js... App.js will automaticly import Navbar.js file in App.js

import React , {useState}from "react";
import PropTypes from "prop-types"; //impt
//import {  Link, link } from "react-router-dom";

export default function Navbar(props) {
  //here props will ftetch detaile in Navbar tag from App.js  ....for more details visit->react v17.0.2->docs->components and pops

  
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        {/* <Link className="navbar-brand" href="/"> */}
        <a className="navbar-brand" href="#">
          {props.title} {/*from Navbar tag from App.js*/}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link> */}
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              {/* <Link className="nav-link" to="/About">
                {props.aboutText}
              </Link> */}
              <a className="nav-link" href="/About">
                {props.aboutText} {/* from App.js>Navbar*/}
              </a>
            </li>
          </ul>

          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            {" "}
            {/* here {`...`} is called template letral concept of javascript*/}
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              {props.text}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

//we can't chaange props here because props are only read only ->

/*pts*/

Navbar.propTypes = {
  //title :PropTypes.string.isRequired,  // 22:04 lec-6//here defaultProps is not set and title is also not passed in App.js then this line will thhrow error because we have set title as isRequired

  title: PropTypes.string,
  aboutText: PropTypes.string,
}; //n lakhye to chale pan title ma koi string ni jagyae number pass kare to pan error n ave

Navbar.defaultProps = {
  title: "set title here",
  aboutText: "about text here",
}; // if title and aboutText is not passed in Navbar in App.js then this title and aboutText will appear...mtlb khali <Navbar/> hoy to

// ...................................................................................................................


