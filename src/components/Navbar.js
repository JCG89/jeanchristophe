/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

export default function Navbar() {
      return (

            <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
                  <div className="container">
                        <Link smooth={true} to="jcg" className="navbar-brand" href="#">J C G</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                              <FontAwesomeIcon className="icon-btn" icon={faBars} style={{ color: "#f9ab00" }} />
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                              <ul className="navbar-nav m-auto">
                                    <li className="nav-item active">
                                          <Link smooth={true} to="experience" offset={-110} className="nav-link" href="#">Experience <span className="sr-only"></span></Link>
                                    </li>
                                    <li className="nav-item">
                                          <Link smooth={true} to="portfolio" offset={-110} className="nav-link" href="#">Portfolio</Link>
                                    </li>
                                    <li className="nav-item">
                                          <Link smooth={true} to="apropos" offset={-250} className="nav-link" href="#">A propos</Link>
                                    </li>
                                    <li className="nav-item">
                                          <Link smooth={true} to="competences" offset={-122} className="nav-link" href="#">Competences</Link>
                                    </li>
                                    <li className="nav-item">
                                          <Link smooth={true} to="contact" offset={-110} className="nav-link" href="#">Contact</Link>
                                    </li>

                              </ul>

                        </div>
                  </div>

            </nav>


      )
}
