/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React,{useContext, useEffect} from "react"
import Navbar from "./Navbar"
import "../styles/mains.scss"
import { ThemeContext } from "./ThemeContext"

const Layout = ({ children }) => {

  /* const sound = new Audio("https://www.fesliyanstudios.com/soundeffects-download.php?id=5"); */
  const data = useContext(ThemeContext)
 

  if(!data){
    return null;
  }

  return (
    <div className={data.theme === 'dark'? "main-wrapper-dark" : "main-wrapper-light"} >
      <div class={'lightbulb'} onClick= {()=>{
        /* sound.play() */
        data.setTheme(prev => {
        if(prev === 'dark'){
          return 'light'
        }
        else{
          return 'dark'
        }
      })}}>
      <svg width="45" height="45" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g>
         {data.theme === 'dark'? null :
         <g class="on" id="light-on">
          <ellipse stroke="null" ry="26.40951" rx="25.4878" id="svg_9" cy="32.99487" cx="50.12195" opacity="undefined" stroke-opacity="null" stroke-dasharray="null" stroke-width="null" fill="#ffff00"></ellipse>
          <ellipse stroke="null" ry="13.90244" rx="14.39024" id="svg_10" cy="55.36585" cx="49.5122" opacity="undefined" stroke-opacity="null" stroke-dasharray="null" stroke-width="null" fill="#ffff00"></ellipse>
          <ellipse stroke="null" ry="4.39024" rx="4.51219" id="svg_11" cy="67.31707" cx="42.56098" opacity="undefined" stroke-opacity="null" stroke-dasharray="null" stroke-width="null" fill="#ffff00"></ellipse>
          <ellipse stroke="null" ry="4.39024" rx="4.51219" id="svg_12" cy="52.58175" cx="62.16039" opacity="undefined" stroke-opacity="null" stroke-dasharray="null" stroke-width="null" fill="#ffff00"></ellipse>
          <ellipse stroke="null" ry="4.39024" rx="4.51219" id="svg_13" cy="63.45441" cx="57.86855" opacity="undefined" stroke-opacity="null" stroke-dasharray="null" stroke-width="null" fill="#ffff00"></ellipse>
         </g>}
         <g class="svg-bulb" id="svg_1">
          <path id="svg_2" d="m37.565,70.315l0,1.426c0,0.454 0.206,0.883 0.559,1.168c0.269,0.217 0.602,0.332 0.941,0.332c0.106,0 0.213,-0.011 0.318,-0.034l22.097,-4.802c0.623,-0.135 1.093,-0.65 1.17,-1.283c0.69,-5.618 3.286,-11.011 7.304,-15.184c5.014,-5.18 7.775,-12.003 7.775,-19.213c0,-15.802 -13.308,-28.543 -29.267,-27.684c-14.527,0.785 -26.032,12.812 -26.191,27.38c-0.077,7.274 2.652,14.172 7.682,19.422c4.909,5.129 7.612,11.689 7.612,18.472zm11.06,-62.277c0.466,-0.025 0.926,-0.038 1.386,-0.038c13.63,0 24.719,11.092 24.719,24.726c0,6.427 -2.461,12.51 -6.934,17.129c-4.216,4.377 -7.022,9.967 -7.973,15.84l-19.262,4.186c-0.112,-7.405 -3.1,-14.531 -8.441,-20.111c-4.485,-4.681 -6.917,-10.831 -6.849,-17.315c0.143,-12.992 10.401,-23.717 23.354,-24.417z"></path>
          <path id="svg_3" d="m52.013,14.106c1.651,0.176 3.271,0.573 4.816,1.179c0.18,0.07 0.365,0.104 0.547,0.104c0.599,0 1.165,-0.361 1.397,-0.953c0.302,-0.771 -0.077,-1.642 -0.849,-1.944c-1.794,-0.704 -3.676,-1.165 -5.593,-1.37c-0.825,-0.083 -1.563,0.509 -1.651,1.333s0.509,1.564 1.333,1.651z"></path>
          <path id="svg_4" d="m68.73,32.726c0,0.829 0.671,1.5 1.5,1.5s1.5,-0.671 1.5,-1.5c0,-5.674 -2.182,-11.047 -6.143,-15.127c-0.577,-0.594 -1.527,-0.609 -2.121,-0.031c-0.594,0.577 -0.608,1.526 -0.031,2.121c3.414,3.517 5.295,8.146 5.295,13.037z"></path>
          <path id="svg_5" d="m38.95,80.466c0.105,0 0.212,-0.011 0.32,-0.035l22.101,-4.798c0.81,-0.176 1.323,-0.975 1.147,-1.784s-0.976,-1.327 -1.784,-1.147l-22.101,4.798c-0.81,0.176 -1.323,0.975 -1.147,1.784c0.152,0.702 0.773,1.182 1.464,1.182z"></path>
          <path id="svg_6" d="m62.626,81.077c-0.176,-0.81 -0.974,-1.326 -1.784,-1.147l-22.101,4.798c-0.81,0.176 -1.323,0.975 -1.147,1.784c0.152,0.702 0.774,1.182 1.464,1.182c0.105,0 0.212,-0.011 0.32,-0.035l22.101,-4.798c0.809,-0.175 1.323,-0.974 1.147,-1.784z"></path>
          <path id="svg_7" d="m55.248,87.415c-0.345,2.614 -2.603,4.585 -5.253,4.585c-1.414,0 -2.747,-0.555 -3.754,-1.562c-0.287,-0.287 -0.527,-0.59 -0.712,-0.899c-0.425,-0.71 -1.348,-0.941 -2.058,-0.515c-0.71,0.426 -0.941,1.347 -0.515,2.058c0.312,0.52 0.703,1.017 1.163,1.477c1.573,1.574 3.66,2.44 5.875,2.44c4.15,0 7.688,-3.093 8.228,-7.194c0.108,-0.821 -0.47,-1.575 -1.292,-1.683c-0.82,-0.108 -1.574,0.471 -1.682,1.293z"></path>
          <path id="svg_8" d="m45.016,56.852l0,8.218c0,0.829 0.671,1.5 1.5,1.5s1.5,-0.671 1.5,-1.5l0,-6.895l3.969,0l0,5.38c0,0.829 0.671,1.5 1.5,1.5s1.5,-0.671 1.5,-1.5l0,-6.689l3.471,-16.357c0.196,-0.923 -0.181,-1.864 -0.961,-2.396c-0.78,-0.533 -1.794,-0.542 -2.582,-0.021l-3.288,2.166c-0.986,0.649 -2.26,0.649 -3.246,0l-3.288,-2.166c-0.789,-0.52 -1.802,-0.512 -2.582,0.021c-0.78,0.532 -1.157,1.473 -0.961,2.396l3.468,16.343zm1.712,-14.089c1.988,1.311 4.559,1.311 6.547,0l1.901,-1.252l-2.899,13.664l-4.55,0l-2.899,-13.664l1.9,1.252z"></path>
         </g>
        </g>
       </svg>
    </div>
      <Navbar></Navbar>
      <main>{children}</main>
    </div>
  )
}
export default Layout
