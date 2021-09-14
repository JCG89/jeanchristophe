/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import nocode from "./images/nocode.jpg";
import backend from "./images/backend.jpg";




export default function Competences() {
      return (
            <div id="competences" className="competences">

                  <div className="py-5">
                        <div className="container">
                              <h1 className="titre">COMPETENCES</h1>
                              <div className="row">
                                    <div className="col-lg-6 md-12 col-sm-12">
                                          <div className="box">
                                                <h3 id="box">FRONT-END: HTML5, CSS3, JS , REACT, REDUX</h3>
                                                <p className="p-box">Je vous accompagne pour la création de vôtre site depuis la mise en place  de la maquette a vôtre goût avec des outils comme figma ou adobe xd.
                                                      Après avoir conçu la maquette nous passons à son intégration avec les langages comme HTML & CSS , JAVASCRIPT et son Framework REACT , pour le plaisir des visiteurs .
                                                      <ul>
                                                            <li><b>- Assembler les pages en HTML5 et CSS3 à partir
                                                                  de maquettes graphiques ;</b></li>
                                                            <li><b>- Intégrer des contenus textes, images, sons,
                                                                  vidéo dans le code HTML5</b></li>
                                                            <li><b>- Respecter les normes d’accessibilité et de
                                                                  référencement du W3C ;</b></li>
                                                      </ul>

                                                </p>
                                                <img className="tofs" src={backend} alt="backend" style={{ borderRadius: "5px" }} />
                                          </div>
                                    </div>
                                    {/*-*/}
                                    <div className="col-md-6 col-sm-12">
                                          <div className="box">
                                                <h3 id="box">BACK-END: PHP SYMFONY NODEJS</h3>
                                                <p className="p-box">En tant que développeur backend ,
                                                      je participe à la création et à  la gestion de votre base de données .
                                                      C’est la partie  non visible de votre site et le cœur du système.
                                                      Je conçois les éléments techniques nécessaires au fonctionnement  du site ,
                                                      avec les langages  tels que PHP et son framework Symfony ou NODEJS.
                                                      <ul>
                                                            <li><b>- Conception et évolution de l’infrastructure d’un site web</b></li>
                                                            <li><b>- Architecture et développement de la plateforme de gestion des contenus</b></li>
                                                            <li><b>- Développement de solutions et d’applications web</b></li>
                                                      </ul>
                                                </p>
                                                <img className="tofs" src={nocode} alt="nocode" style={{ borderRadius: "5px" }} />
                                          </div>
                                    </div>

                              </div>
                        </div>
                  </div>
            </div>
      )
}
