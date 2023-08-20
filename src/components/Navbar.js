import React,{useContext} from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import resume from '../resume.pdf'
import { ThemeContext } from "./ThemeContext"
const Navbar = () => {

  const {theme} = useContext(ThemeContext)

  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <div
            role="button"
            onClick={() => scrollTo("#home")}
            className="name"
            tabIndex={0}
          >
          </div>
          <div className={theme === 'dark'? "links-wrapper-dark" : "links-wrapper-light"}>
          {/* <button onClick={() => window.open('https://play.hamzasumbal.com/')}>NOTAKTO</button>  */}
            {/* <button onClick={() => scrollTo("#work")}>Work</button> */}
            {/* <button onClick={() => scrollTo("#about")}>About</button>
            <button onClick={() => scrollTo("#contact")}>Contact</button> */}
            <button onClick={() => window.open(resume)} className = 'resume'>Resume</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
