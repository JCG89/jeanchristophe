import React from "react";
import Typed from "react-typed"

export default function Header() {
      return (
            <div id="jcg" className="header-wrapper">
                  <div className="main-info">
                        <h1 clas> Jean Christophe Gomis </h1>
                        <Typed
                              className="typed-text"
                              strings={["Développeur Web & Web Mobile",
                                    "Html5 Css3 Js Php", "React Symfony Redux  WordPress"]}
                              typeSpeed={40}
                              backSpeed={60}
                              loop
                        />
                  </div>
            </div>
      )
}
