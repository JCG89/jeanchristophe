/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import netflix from "./images/netflix.jpg";
import CityGuide from "./images/CityGuide.jpg";
import portfolio from "./images/portfolio.jpg";
import taskManager from "./images/taskManager.jpeg";
//import des icônes
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus, faEye } from '@fortawesome/free-solid-svg-icons'
//import de react popupbox 
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
      // netflix popup
      const openPopupboxNetflix = () => {
            const content = (
                  <div>
                        <img className="portfolio-image-popupbox" src={netflix} alt="projet netflix" />
                        <p>Lorem ipsum dolor sit amet.</p>
                        <b>Github:</b><a className="hyper-link"
                              onClick={() => window.open("https://github.com/christophegomis89/awara-boutique")} >
                              https://github.com/christophegomis89/awara-boutique</a>
                  </div>
            )

            PopupboxManager.open({ content })
      }
      const popupboxConfigNetflix = {
            titleBar: {
                  enable: true,
                  text: "Awara boutique projet symfony 5 (boutique e-commerce)"
            },
            fadeIn: true,
            fadeInSpeed: 1000
      }
      //POUR LA DEUXIEME IMAGE

      // portfolio popup
      const openPopupboxPortfolio = () => {
            const content = (
                  <div>

                        <img className="portfolio-image-popupbox"
                              src={portfolio} alt="projet portfolio" />
                        <p>Lorem ipsum dolor sit amet.</p>
                        <b>Github:</b><a className="hyper-link" onClick={() => window.open("https://github.com/christophegomis89/cv-jean-christophe-gomis")} > https://github.com/christophegomis89/cv-jean-christophe-gomis</a>
                  </div>
            )

            PopupboxManager.open({ content })
      }
      const popupboxConfigPortfolio = {
            titleBar: {
                  enable: true,
                  text: "Projet Portfolio React"
            },
            fadeIn: true,
            fadeInSpeed: 1000
      }
      //POUR LA TROISIEME IMAGE

      // CITYGUIDE popup
      const openPopupboxCityGuide = () => {
            const content = (
                  <div>
                        <img className="portfolio-image-popupbox" src={CityGuide} alt="projet portfolio" />
                        <p>Lorem ipsum dolor sit amet.</p>
                        <b>Github:</b><a className="hyper-link"
                              onClick={() => window.open("https://github.com/christophegomis89/projet-symfony-afpa")} > https://github.com/christophegomis89/projet-symfony-afpa</a>
                  </div>
            )

            PopupboxManager.open({ content })
      }
      const popupboxConfigCityguide = {
            titleBar: {
                  enable: true,
                  text: "Projet Bande desinée en Symfony 5"
            },
            fadeIn: true,
            fadeInSpeed: 1000
      }
      //POUR LA 4e IMAGE

      // taskmanager popup
      const openPopupboxTaskManager = () => {
            const content = (
                  <div>
                        <img className="portfolio-image-popupbox" src={taskManager} alt="sml semedo" />
                        <p>Lorem ipsum dolor sit amet.</p>
                        <b>Github:</b><a className="hyper-link" onClick={() => window.open("https://smblsemedo.com")} > https://smblsemedo.com</a>
                  </div>
            )

            PopupboxManager.open({ content })
      }
      const popupboxConfigTaskmanager = {
            titleBar: {
                  enable: true,
                  text: "Site vitrine de la société de BTP smblsemedo"
            },
            fadeIn: true,
            fadeInSpeed: 1000
      }



      return (
            <>
                  <div className="portfolio-wrapper">
                        <div className="container">
                              <h1 className="text-uppercase text-center-py-5"> portfolio</h1>
                              <div className="images-box-wrapper">
                                    <div className="portfolio-image-box" onClick={openPopupboxNetflix} >
                                          <img src={netflix} alt="netflix" className="portfolio-image" />
                                          <div className="overflow"></div>
                                          <FontAwesomeIcon className="portfolio-icon" icon={faEye} />
                                    </div>
                                    {/*-*/}
                                    <div className="portfolio-image-box" onClick={openPopupboxPortfolio}>
                                          <img src={portfolio} alt="city-guide" className="portfolio-image" />
                                          <div className="overflow"></div>
                                          <FontAwesomeIcon className="portfolio-icon" icon={faEye} />
                                    </div>
                                    {/*-*/}
                                    <div className="portfolio-image-box" onClick={openPopupboxCityGuide}>
                                          <img src={CityGuide} alt="portfolio-imag" className="portfolio-image" />
                                          <div className="overflow"></div>
                                          <FontAwesomeIcon className="portfolio-icon" icon={faEye} />
                                    </div>
                                    {/*-*/}
                                    <div className="portfolio-image-box" onClick={openPopupboxTaskManager}>
                                          <img src={taskManager} alt="taskmanager" className="portfolio-image" />
                                          <div className="overflow"></div>
                                          <FontAwesomeIcon className="portfolio-icon" icon={faEye} />
                                    </div>
                              </div>
                        </div>

                  </div>
                  <PopupboxContainer {...popupboxConfigNetflix} />
                  <PopupboxContainer {...popupboxConfigPortfolio} />
                  <PopupboxContainer {...popupboxConfigCityguide} />
                  <PopupboxContainer {...popupboxConfigTaskmanager} />
            </>
      )
}
export default Portfolio
