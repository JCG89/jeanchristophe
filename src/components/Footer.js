/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-scroll";
import {
      TwitterShareButton,
      TwitterIcon,
      LinkedinShareButton,
      LinkedinIcon,
} from "react-share";

export default function Footer() {
      return (
            <>
                  <div className="footer">
                        <div className="container">
                              <div className="row">

                                    <div className="col-lg-3 col-md-2 col-sm-6">
                                          <div className="row">
                                                <div className="col">
                                                      <Link smooth={true} to="jcg" href="" className="footer-n">Accueil</Link>
                                                      <br />
                                                      <Link smooth={true} to="experience" href="" className="footer-nav">Experience</Link>
                                                      <br />
                                                      <Link smooth={true} to="portfolio" href="" className="footer-nav">Portfolio</Link>
                                                </div>
                                                <div className="col">
                                                      <Link smooth={true} to="apropos" href="" className="footer-nav">A propos</Link>
                                                      <br />
                                                      <Link smooth={true} to="competences" href="" className="footer-nav">Competences</Link>
                                                      <br />
                                                      <Link smooth={true} to="contact" href="" className="footer-nav">Contact</Link>
                                                </div>
                                          </div>

                                    </div>
                                    <div className="col-lg5 col-md-5 col-sm-6 align-items-center">
                                          <div className="row">
                                                <div className="d-flex justify-content-center">
                                                      <TwitterShareButton
                                                            url={"https://twitter.com/JeanChr76017242"}
                                                            quote={"Développeur Fullstack"}
                                                            hashtag="#React">
                                                            <TwitterIcon className="mx-3" size={36} />
                                                      </TwitterShareButton>
                                                      <LinkedinShareButton
                                                            url={"https://www.linkedin.com/in/jean-christophe-gomis/"}
                                                            quote={"Développeur Fullstack"}
                                                            hashtag="#React">
                                                            <LinkedinIcon className="mx-3" size={36} />
                                                      </LinkedinShareButton>
                                                      <p className="pt-3 text-center">
                                                            Copyright&copy;
                                                            {new Date().getFullYear()}&nbsp;Jean Christophe Gomis | Tous droits réservés.
                                                      </p>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </>
      )
}

