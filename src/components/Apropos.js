/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import jc from "./images/jc.jpg"

export default function Apropos() {
      return (
            <>
                  <div className="container py-5">
                        <div className="row">

                              <div className="col-lg-6 col-xm-12">
                                    <div className="photo-wrap mb-5">
                                          <img className="profile-img" src={jc} alt="photo" />
                                    </div>
                              </div>
                              <div className="col-lg-6 col-xm-12">
                                    <h1 className="apropos"> A propos de moi</h1>
                                    <p>
                                          Je m'appelle Jean Christophe Gomis, je suis titulaire d'un DUT en développement web et web mobile classé au RNCP Niveau V .Issu d’un parcours sport-études au Sénégal, où j’ai fais
                                          mes premiers pas dans la technologie. J’ai ensuite
                                          embrassé une carrière de footballeur dans la LSFP (ligue
                                          sénégalaise de football professionnel) . Arrivé en France
                                          en 2017 , j’ai occupé plusieurs postes , dans un premier
                                          temps en tant que vendeur-gérant à VIVAL By CASINO
                                          2017 - 2019 , puis en tant qu’opérateur de production à
                                          MAGIC RAMBO (sous-traitant Disneyland Paris) 2019
                                          -2020 .Depuis Février 2020 , j’ai entamé une reconversion
                                          professionnelle en tant que développeur web .
                                          J'ai suivi une formation à l'AFPA de Créteil où j’ai valider
                                          un titre professionnel de développeur web et web mobile
                                          RNCP de niveau 5 (bac+ 2). J’ai ensuite décider de
                                          poursuivre avec OpenClassrooms en alternance pour
                                          concrétiser mes ambitions. Minutieux, ,sérieux ,et créatif,
                                          j’aime le travail d’équipe et apprendre de l’autre. Je
                                          cherche une entreprise ambitieuse, dans laquelle placer
                                          toute mon énergie.

                                    </p>
                              </div>


                        </div>

                  </div>

            </>
      )
}

