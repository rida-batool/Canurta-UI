import React, { useContext } from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import watermelon from "../images/watermelon.png"
import cozeycradle from "../images/cradle.png"
import { ThemeContext } from "./ThemeContext"

const Header = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div className="section" id="home">
      <ul id="elements">
        <li>
          <img
            className={"clickable"}
            onClick={() =>
              alert("So pick me, Choose me, love me - Grey's anatomy")
            }
            src={watermelon}
          ></img>
        </li>
        <li>
          <img src={watermelon}></img>
        </li>
        <li>
          <img src={watermelon}></img>
        </li>
        <li>
          <img src={watermelon}></img>
        </li>
        <li>
          <img src={watermelon}></img>
        </li>
        <li>
          <img src={watermelon}></img>
        </li>
        <li>
          <img src={watermelon}></img>
        </li>
        <li>
          <img src={watermelon}></img>
        </li>
        <li>
          <img src={watermelon}></img>
        </li>

        {/*         <li><img src  = {watermelon}></img></li>
        <li><img src  = {watermelon}></img></li>
        <li><img src  = {watermelon}></img></li>
        <li><img src  = {watermelon}></img></li>
        <li><img src  = {watermelon}></img></li>
        <li><img src  = {watermelon}></img></li>
        <li><img src  = {watermelon}></img></li>
        <li><img src  = {watermelon}></img></li>
        <li><img src  = {watermelon}></img></li>
        <li><img src  = {watermelon}></img></li>
        <li><img src  = {watermelon}></img></li>
        <li><img src  = {watermelon}></img></li> */}
      </ul>
      <div className="container">
        <div className="header-wrapper">
          <Fade left cascade>
            <div className="heading-wrapper">
              <h2>Hi Canurta, I'm</h2>
              <h1>{data.name} </h1>
              <h3>Software Developer</h3>
            </div>
          </Fade>
          <Fade bottom>
            <p>{data.headerParagraph}</p>
            <a
              href={`mailto:${
                data.contactEmail
                  ? data.contactEmail
                  : "ridabatool.be13@gmail.com"
              }`}
              className={
                theme === "dark" ? "primary-btn-dark" : "primary-btn-light"
              }
            >
              CONNECT WITH ME
            </a>
          </Fade>
          <br />
          <br />

          <h3>Demo : Cozey Cradle</h3>
          <p>
            Cozy Cradle is a baby car seat rental service that allows users to
            rent car seats for their infants. This web application is built
            using the MERN stack (MongoDB, Express, React, Node.js). Users can
            browse and filter through a variety of car seats, select the desired
            rental date and city, add items to the cart, and complete the
            checkout process using Stripe for payment. Each order is assigned a
            unique 5-digit confirmation code for easy reference
          </p>
          <a
            href="https://balmy-afternoon-production.up.railway.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={cozeycradle} width={800} height={400}></img>
          </a>
          <h3>
            Link to Backend{" "}
            <a
              href="https://github.com/rida-batool/cozey-cradle/tree/main/backend"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </h3>
          <h3>
            Link to FrontEnd{" "}
            <a
              href="https://github.com/rida-batool/cozey-cradle/tree/main/frontend"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Header
