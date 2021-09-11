import React from 'react'

export default function Contact() {
      return (
            <div className="contact">
                  <div className="text-center">
                        <h1> Contactez-moi</h1>
                  </div>
                  <div className="container">
                        <div className="row">
                              <div className="col-md-6 col-xs-12">
                                    {/*Name input*/}
                                    <input
                                          type="text"
                                          className="form-control"
                                          placeholder="Nom"
                                          name="name"
                                    />
                                    <div className="line"></div>
                                    {/*Phone input*/}
                                    <input
                                          type="number"
                                          className="form-control"
                                          placeholder="Téléphone"
                                          phone="phone"
                                    />
                                    <div className="line"></div>
                                    {/*Email input*/}
                                    <input
                                          type="email"
                                          className="form-control"
                                          placeholder="E-mail"
                                          email="email"
                                    />
                                    <div className="line"></div>
                                    {/*Objet input*/}
                                    <input
                                          type="text"
                                          className="form-control"
                                          placeholder="Objet"
                                          subject="Objet"
                                    />
                                    <div className="line"></div>
                              </div>

                              {/*Description input*/}
                              <div className="col-md-6 xs-12">
                                    <textarea
                                          type="textarea"
                                          className="form-control"
                                          placeholder="Message"
                                          subject="email">
                                    </textarea>
                                    <div className="line"></div>
                                    <button className="bouton"
                                          type="submit">Envoyer</button>
                              </div>
                        </div>
                  </div>
            </div>
      )
}
