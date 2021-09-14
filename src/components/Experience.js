import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck, faAddressCard } from '@fortawesome/free-solid-svg-icons'

export default function Experience() {
      return (
            <>

                  <div id="experience" className="experience">
                        <div className="container">
                              <div className="white-divider"></div>
                              <div className="heading">
                                    <h2>Expérience professionelle</h2>
                              </div>
                              <ul className="timeline">
                                    <li>
                                          <div className="timeline-badge"><span className="iconify" data-icon="octicon:briefcase" data-inline="false"><FontAwesomeIcon icon={faAddressCard} size="xs" /> </span></div>
                                          <div className="timeline-panel-container">
                                                <div className="timeline-panel">
                                                      <div className="timeline-heading">
                                                            <h5>FSF</h5>
                                                            <h6>FOOTBALLEUR</h6>
                                                      </div>
                                                      <div className="timeline-body">
                                                            <p><small className="far fa-calendar-check"><FontAwesomeIcon icon={faCalendarCheck} size="xs" /></small><b>   - 2006</b>  As douanes </p>
                                                            <p><small className="far fa-calendar-check"><FontAwesomeIcon icon={faCalendarCheck} size="xs" /></small> <b>  - 2006-2007</b> As Cambérène</p>
                                                            <p><small className="far fa-calendar-check"><FontAwesomeIcon icon={faCalendarCheck} size="xs" /></small> <b>  - 2007-2008</b> Linguère de St-Louis
                                                            </p>
                                                            <p><small className="far fa-calendar-check"><FontAwesomeIcon icon={faCalendarCheck} size="xs" /></small> <b> - 2008-2014 </b> As douanes</p>
                                                      </div>
                                                </div>
                                          </div>
                                    </li>
                                    {/*-*/}
                                    <li>
                                          <div className="timeline-badge"><span className="iconify" data-icon="octicon:briefcase" data-inline="false"><FontAwesomeIcon icon={faAddressCard} size="xs" /></span></div>
                                          <div className="timeline-panel-container-inverted">
                                                <div className="timeline-panel">
                                                      <div className="timeline-heading">
                                                            <h5>COMMERCANT A MON COMPTE</h5>
                                                            <h6>PRÊT A PORTER</h6>
                                                            <p className="text-muted"><small className="far fa-calendar-alt"><FontAwesomeIcon icon={faCalendarCheck} size="xs" /></small> <b> - 2014-2017</b></p>
                                                      </div>
                                                      <div className="timeline-body">
                                                            <p><small className="far fa-calendar-check"><FontAwesomeIcon icon={faCalendarCheck} size="xs" /></small> - Vente de sac à main et montres au détail </p>
                                                            <p><small className="far fa-calendar-check"><FontAwesomeIcon icon={faCalendarCheck} size="xs" /></small> - Export prêt à porter pour Homme & Femme </p>
                                                            <p><small className="far fa-calendar-check"><FontAwesomeIcon icon={faCalendarCheck} size="xs" /></small> - interpréte pour commerçants étrangers à Istanbul</p>
                                                      </div>
                                                </div>
                                          </div>
                                    </li>
                                    {/*-*/}
                                    <li>
                                          <div className="timeline-badge"><span className="iconify" data-icon="octicon:briefcase" data-inline="false"><FontAwesomeIcon icon={faAddressCard} size="xs" /></span></div>
                                          <div className="timeline-panel-container">
                                                <div className="timeline-panel">
                                                      <div className="timeline-heading">
                                                            <h5>VENDEUR GERANT</h5>
                                                            <h6>VIVAL BY CASINO</h6>
                                                            <p className="text-muted"><small className="far fa-calendar-alt"><FontAwesomeIcon icon={faCalendarCheck} size="xs" /></small><b> - 2017-2019</b></p>
                                                      </div>
                                                      <div className="timeline-body">
                                                            <p><small className="far fa-calendar-check"><FontAwesomeIcon icon={faCalendarCheck} size="xs" /></small> - Gestion de stock et de la logistique</p>
                                                            <p><small className="far fa-calendar-check"><FontAwesomeIcon icon={faCalendarCheck} size="xs" /></small> - Reception et vérication des marchandises</p>
                                                            <p><small className="far fa-calendar-check"><FontAwesomeIcon icon={faCalendarCheck} size="xs" /></small> - Conseil, orientation de la clientéle et encaissement</p>
                                                      </div>
                                                </div>
                                          </div>
                                    </li>
                                    {/*-*/}
                                    <li>

                                          <div className="timeline-badge"><span className="iconify" data-icon="octicon:briefcase" data-inline="false"></span><FontAwesomeIcon icon={faAddressCard} size="xs" /></div>
                                          <div className="timeline-panel-container-inverted">
                                                <div className="timeline-panel">
                                                      <div className="timeline-heading">
                                                            <h5>MAGIC RAMBO DISNEYLAND PARIS</h5>
                                                            <h6>OPERATEUR DE PRODUCTION</h6>
                                                            <p className="text-muted"><small className="far fa-calendar-alt"><FontAwesomeIcon icon={faCalendarCheck} size="xs" /></small> <b> 2019-2020 </b></p>
                                                      </div>
                                                      <div className="timeline-body">
                                                            <p><small className="far fa-calendar-check"><FontAwesomeIcon icon={faCalendarCheck} size="xs" /></small> - Préparation et distribution du matériel </p>
                                                            <p><small className="far fa-calendar-check"><FontAwesomeIcon icon={faCalendarCheck} size="xs" /></small> - Réception, entretient et gestion du stock </p>
                                                            <p><small className="far fa-calendar-check"><FontAwesomeIcon icon={faCalendarCheck} size="xs" /></small> -Conseil de la clientéle intervention en cas d'urgence logistique</p>
                                                      </div>
                                                </div>
                                          </div>
                                    </li>

                              </ul>
                        </div>

                  </div>


            </>
      )
}
