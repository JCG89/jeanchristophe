/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import menu from "./menu.svg";



export default function Navbar() {
      return (

            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                  <div className="container">
                        <a className="navbar-brand" href="#">Jean Christophe Gomis</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon"><img src={menu} style={{ width: "50px", color: "white" }} /></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                              <ul className="navbar-nav m-auto">
                                    <li className="nav-item active">
                                          <a className="nav-link" href="#">Accueil <span className="sr-only"></span></a>
                                    </li>
                                    <li className="nav-item">
                                          <a className="nav-link" href="#">Portfolio</a>
                                    </li>
                                    <li className="nav-item">
                                          <a className="nav-link" href="#">A propos</a>
                                    </li>
                                    <li className="nav-item">
                                          <a className="nav-link" href="#">Services</a>
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
