import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import avatar1 from "./images/avatar/avatar1.jpg";
import avatar2 from "./images/avatar/avatar2.jpg";
import avatar3 from "./images/avatar/avatar3.jpg";
import avatar4 from "./images/avatar/avatar4.jpeg";


const PortfolioCarousel = () => {
      return (
            <Carousel className="carousel">
                  <>
                        <div className="jc">
                        </div>
                        <img src={avatar1} alt=" projet-symfony" />
                        <h3><a href="https://github.com/christophegomis89/awara-boutique" id="jc">AWARA-BOUTIQUE</a></h3>
                        <p className="text">Site e-commerce avec le framework Symfony 5 :Préenté au jury le 10/06/2021 titre professionnel de développeur web et web mobile RNCP NIVEAU 5</p>
                  </>
                  <>
                        <img src={avatar2} alt="mon portfolio" className="portfolio-tof" />
                        <h3> <a href="https://github.com/christophegomis89/cv-jean-christophe-gomis" id="jc">MON PORTFOLIO</a> </h3>
                        <p className="text"> Mon premier portfolio ,réalisé avec le framework REACT JS </p>
                  </>
                  <>
                        <div className="jc">
                              <img src={avatar3} alt=" projet-react " className="portfolio-tof" />
                              <h3> <a href="https://gsportnews.fr" id="jc">Gsportnews.fr</a></h3>
                              <p className="text"> Projet réalisé avec REACT JS. Ce nom de domaine est dédié à mon blog  d'information sportif , mais heberge temporairement mon portfolio qui deviendra Jean Christophe.com ou .fr</p></div>

                  </>
                  <>
                        <div className="jc">
                              <img src={avatar4} alt=" smblsemedo" className="portfolio-tof" />
                              <h3> <a href="https://smblsemedo.com" id="jc">site vitrine smbl semedo</a></h3>
                              <p className="text"> Projet site vitrine  de l'entreprise du BTP SMBLSEMEDO réalisé avec le CMS WORDPRESS </p>
                        </div>

                  </>
            </Carousel>
      )
}
export default PortfolioCarousel
