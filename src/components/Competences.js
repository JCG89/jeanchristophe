/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import nocode from "./images/nocode.jpg";
import backend from "./images/backend.jpg";




export default function Competences() {
      return (
            <div className="competences">

                  <div className="py-5">
                        <div className="container">
                              <h1>COMPETENCES</h1>
                              <div className="row">
                                    <div className="col-lg-6 md-12 col-sm-12">
                                          <div className="box">
                                                <h3>FRONT-END HTML5, CSS3, JS , REACT, REDUX</h3>
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
