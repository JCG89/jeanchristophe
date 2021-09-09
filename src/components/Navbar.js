/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
      return (

            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                  <div className="container">
                        <a className="navbar-brand" href="#">J C G</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                              <FontAwesomeIcon className="icon-btn" icon={faBars} style={{ color: "#f9ab00" }} />
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                              <ul className="navbar-nav m-auto">
                                    <li className="nav-item active">
                                          <a className="nav-link" href="#">Experience <span className="sr-only"></span></a>
                                    </li>
                                    <li className="nav-item">
                                          <a className="nav-link" href="#">Portfolio</a>
                                    </li>
                                    <li className="nav-item">
                                          <a className="nav-link" href="#">A propos</a>
                                    </li>
                                    <li className="nav-item">
                                          <a className="nav-link" href="#">Competences</a>
                                    </li>
                                    <li className="nav-item">
                                          <a className="nav-link" href="#">Contact</a>
                                    </li>

                              </ul>

                        </div>
                  </div>

            </nav>


      )
}
