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
                                    <p className="parag">
                                          Je m'appelle Jean Christophe Gomis, je suis  titulaire d'un DUT en développement web et web mobile classé au RNCP Niveau V . Issu d’un parcours sport-études au Sénégal, où j’ai fait mes premiers pas dans la technologie  et la physique chimie au collège d’enseignement   technique  Amilcar Cabral de Ziguinchor. Après mon brevet, j'ai intégré le lycée technique  Maurice Delafosse de Dakar. En parallèle de mes études, j'ai intégré le centre de formation de L’As Douane  avant d'embrasser une carrière de footballeur dans la LSFP (ligue sénégalaise de football professionnel) . Arrivé en France en 2017 , j’ai occupé plusieurs postes , dans un premier temps en tant que vendeur-gérant à VIVAL By CASINO 2017 - 2019 , puis en tant qu’opérateur de production à MAGIC RAMBO (sous-traitant Disneyland Paris) 2019 -2020 . Je suis un passionné de la tech  depuis toujours et particulièrement de la programmation informatique. Après plusieurs tests concluants , j’ai intégré l’Afpa de Créteil en septembre 2019 pour une formation en bureautique, avant d'enchaîner en   Février 2020  avec  le développement informatique. Je suis à l’écoute du marché  et je suis ouvert à toute collaboration ambitieuse.
                                          Je suis inscrit à l’une des meilleurs institut supérieur en ligne qu’est OpenClassrooms pour une formation en alternance dans l’optique de valider un titre de niveau six (Bac+¾) car le numérique est en constante évolution et que l’apprentissage ne s'arrête jamais .
                                          Je suis aussi auto-entrepreneur dans la tech avec quelques projets à mon actif que vous pouvez retrouver dans mon portfolio.
                                          Bonne visite de mon site à toutes et à tous et n’hésitez pas à me contacter via le formulaire  pour envisager des choses ensemble.

                                          Bien cordialement
                                          <br />
                                          <b>Jean Christophe gomis</b>
                                          <br />
                                          Développeur web et web mobile


                                    </p>
                              </div>


                        </div>

                  </div>

            </>
      )
}

