/* eslint-disable react/jsx-no-duplicate-props */
import React from "react"
import emailjs from "emailjs-com"
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function Contact() {
      const [successMessage, setSuccessMessage] = useState("");
      const { register, handleSubmit, formState: { errors } } = useForm();
      const serviceID = "service_ID";
      const templateID = "template_ID";
      const userID = "user_szmDhclEOlgh8ZZLRpHRP"

      const onSubmit = (data, r) => {
            sendEmail(
                  serviceID,
                  templateID,
                  {
                        name: data.name,
                        phone: data.phone,
                        email: data.email,
                        subject: data.subject,
                        description: data.description
                  },
                  userID
            )
            r.target.reset();
      }

      const sendEmail = (serviceID, templateID, variables, userID) => {
            emailjs.send(serviceID, templateID, variables, userID)
                  .then(() => {
                        setSuccessMessage("Votre message est envoyé! , Je reviendrai vers vous dans les meilleurs délais")
                  }).catch(err => console.error(`Une erreur s'est produite! ${err}`));
      }
      return (
            <div id="contact" className="contact">
                  <div className="text-center">
                        <h1> Contactez-moi</h1>
                        <div className="success-message">{successMessage}</div>
                  </div>
                  <div className="container">
                        <form onSubmit={handleSubmit(onSubmit)}>
                              <div className="row">
                                    <div className="col-md-6 col-xs-12">
                                          {/*Name input*/}
                                          <div className="text-center">
                                                <input
                                                      type="text"
                                                      className="form-control"
                                                      placeholder="Nom"
                                                      name="name"
                                                      aria-invalid={errors.name ? "true" : "false"}
                                                      {...register("name", {
                                                            required: "Veuillez saisir votre nom svp!",
                                                            maxLength: {
                                                                  value: 70,
                                                                  message:
                                                                        "Votre nom ne doit pas avoir plus de 20caractéres",
                                                            },
                                                      })}
                                                />
                                                <div className="line"></div>
                                          </div>

                                          <span className="error-message">
                                                {errors.name && errors.name.message}
                                          </span>
                                          {/*Phone input*/}
                                          <div className="text-center">
                                                <input
                                                      type="number"
                                                      className="form-control"
                                                      placeholder="Téléphone"
                                                      name="phone"
                                                      aria-invalid={errors.phone ? "true" : "false"}
                                                      {...register("phone", {
                                                            required: "Veuillez saisir votre numéro svp!",
                                                            maxLength: {
                                                                  value: 20,
                                                                  message:
                                                                        "Votre numéro ne dois pas dépasser 14chiffres",
                                                            },
                                                      })}
                                                />
                                                <div className="line"></div>
                                          </div>
                                          <span className="error-message">
                                                {errors.phone && errors.phone.message}
                                          </span>

                                          {/*Email input*/}
                                          <div className="text-center">
                                                <input
                                                      type="email"
                                                      className="form-control"
                                                      placeholder="E-mail"
                                                      name="email"
                                                      aria-invalid={errors.email ? "true" : "false"}
                                                      {...register("email", {
                                                            required: "Veuillez saisir votre adresse email svp!",
                                                            pattern: {
                                                                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                                  message:
                                                                        "Votre adresse email n'est pas valide!",
                                                            },
                                                      })}
                                                />
                                                <div className="line"></div>
                                          </div>
                                          <span className="error-message">
                                                {errors.email && errors.email.message}
                                          </span>
                                          {/*Objet input*/}
                                          <div className="text-center">
                                                <input
                                                      type="text"
                                                      className="form-control"
                                                      placeholder="Objet"
                                                      name="subject"
                                                      {...register("subject", {
                                                            required: "Veuillez saisir l'objet de votre message svp!",
                                                            maxLength: {
                                                                  value: 50,
                                                                  message:
                                                                        "Votre numéro ne dois pas dépasser 50 caractéres",
                                                            },
                                                      })}
                                                />
                                                <div className="line"></div>
                                          </div>
                                          <span className="error-message">
                                                {errors.subject && errors.subject.message}
                                          </span>
                                    </div>

                                    {/*Description input*/}
                                    <div className="col-md-6 xs-12">
                                          <div className="text-center">
                                                <textarea
                                                      type="textarea"
                                                      className="form-control"
                                                      placeholder="Message"
                                                      name="description"
                                                      name="description"
                                                      aria-invalid={errors.description ? "true" : "false"}
                                                      {...register("description", {
                                                            required: "Veuillez saisir votre message svp!",

                                                      })}>
                                                </textarea>
                                                <div className="line"></div>
                                          </div>
                                          <span className="error-message">
                                                {errors.description && errors.description.message}
                                          </span>
                                          <button className="bouton"
                                                type="submit">Envoyer</button>
                                    </div>
                              </div>
                        </form>
                  </div>
            </div>
      )
}
