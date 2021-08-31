import React from "react";
import Typed from "react-typed"

export default function Header() {
      return (
            <div className="header-wrapper">
                  <div className="main-info">
                        <h1> Jean Christophe Gomis </h1>
                        <Typed
                              className="typed-text"
                              strings={["Développeur web &web mobile",
                                    "HTML5 CSS3 JS PHP", "REACT SYMFONY 5 WORDPRESS"]}
                              typeSpeed={40}
                              backSpeed={60}
                              loop
                        />
                  </div>
            </div>
      )
}
