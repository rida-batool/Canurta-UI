import React, { useContext } from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import watermelon from "../images/watermelon.png"
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
              alert("Courtesy of https://codepen.io/romulobastos/pen/XWrGodQ")
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
              <h2>Hi, I'm</h2>
              <h1>{data.name} </h1>
              <h3>Software Engineer</h3>
            </div>
          </Fade>
          <Fade bottom>
            <p>{data.headerParagraph}</p>
            <a
              href={`mailto:${
                data.contactEmail
                  ? data.contactEmail
                  : "abdullahsumbal@gmail.com"
              }`}
              className={
                theme === "dark" ? "primary-btn-dark" : "primary-btn-light"
              }
            >
              CONNECT WITH ME
            </a>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Header
