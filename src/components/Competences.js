/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import nocode from "./nocode.jpg";
import backend from "./backend.jpg";




export default function Competences() {
      return (
            <div className="services">

                  <div className="py-5">
                        <div className="container">
                              <h1>COMPETENCES</h1>
                              <div className="row">
                                    <div className="col-md-6 col-sm-12">
                                          <div className="box">
                                                <h3>Front-end HTML5, CSS3, JS , REACT</h3>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, impedit.</p>
                                                <img className="tofs" src={backend} alt="backend" style={{ width: "600px", borderRadius: "5px" }} />
                                          </div>
                                    </div>
                                    {/*-*/}
                                    <div className="col-md-6 col-sm-12">
                                          <div className="box">
                                                <h3>BACK-END, PHP SYMFONY NODEJS</h3>
                                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, mollitia?</p>
                                                <img src={nocode} alt="nocode" style={{ width: "600px", borderRadius: "5px" }} />
                                          </div>
                                    </div>

                              </div>
                        </div>
                  </div>
            </div>
      )
}
