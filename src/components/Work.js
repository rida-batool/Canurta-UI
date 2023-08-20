import React from "react"
import Card from "./atoms/Card"
import Fade from "react-reveal/Fade"
import WorkShow from "./WorkShow"
import data from "../yourdata"
import pic1 from "../images/screenshot/1.png"
import pic2 from "../images/screenshot/2.png"
import pic3 from "../images/screenshot/3.png"
import pic4 from "../images/screenshot/4.png"
import pic5 from "../images/screenshot/5.png"
import pic6 from "../images/screenshot/6.png"


const Work = () => {
  return (
    <div className="section" id="work">
      <div className="container">
        <div className="work-wrapper">
          <Fade bottom>
            <h1>Projects I've Worked On</h1>
          </Fade>
          <Fade>
            <div>
              <Fade right>
                <div className = {'screen-shot'}>
                  <img className={"pic1"} src={pic1} />
                </div>
              </Fade>
              <WorkShow
                title={"Coccole Pampers"}
                points={[
                  "Hired by a software company DeepCube EU to work as a frontend React Native developer for the Pampers Italy new app.",
                  "Worked with UX/UI design teams to improve existing application designs.",
                  "Developed more than 50 reusable components and navigation flow of the app.",
                ]}
                url={
                  "https://www.pampers.it/raccolta-punti-coccole/"
                }
              />
              <Fade left>
              <div className = {'screen-shot'}>
                  <img className={"pic2"} src={pic2} />
                </div>
              </Fade>
              <WorkShow
                 title={"Efektor"}
                 points={[
                   "Hired by Mark Gyore from Hungry to work on his new social media app having similar features to the popular TikTok app.",
                   "I was responsible for developing the whole frontend of the app in React Native & Expo.",
                   "I was again hired to fix the UI issue after the integration of the backend. The backlog was managed using Trello.",
                 ]}
                 url={
                  "https://efektor.hu/"
                }
              />
              <Fade right>
              <div className = {'screen-shot'}>
                  <img className={"pic3"} src={pic3} />
                </div>
              </Fade>
              <WorkShow
                title={"Graded"}
                points={[
                  "Hired by Tim Miller (CEO of Phunnel) to work on his existing card trading app developed in React Native and Expo.",
                  "I was assigned to do UI/UX fixes, adding new screens, creating reusable components, and integrating APIs on the frontend.",
                  "Worked closely with an agile team of 5 members. The backlog was managed using Jira.",
                ]}
                url={
                  "https://www.graded.co/"
                }
              />
              <Fade left>
              <div className = {'screen-shot'}>
                  <img className={"pic4"} src={pic4} />
                </div>
              </Fade>
              <WorkShow
                title={"Gardener.ae"}
                points={[
                  "Hired by a software company in UAE to make their app UI more resposive",
                ]}
                url  = {'https://gardener.ae/'}
              />
            </div>
          </Fade>
          <div className={"many-more"}>
            <h2>and Many More </h2>
            <div class="snippet" data-title=".dot-elastic">
              <div class="stage">
                <div class="dot-elastic"></div>
              </div>
            </div>
          </div>
          <Fade bottom>
            <h1>Personal Projects</h1>
          </Fade>
          <Fade>
            <div>
            <Fade right>
              <div className = {'screen-shot'}>
                  <img className={"pic5"} src={pic5} />
                </div>
              </Fade>
              <WorkShow
                title={"WET (Water Eject Tool)"}
                points={[
                  "A simple app that helps remove water from speaker grill by playing sounds of a predefined frequencies",
                  "The purpose of the app was to get myself familiar with integrating ads and publishing app on play store. ",
                  "The app has an organic 10,000+ installs and 4.2-star reviews.",
                ]}
                url={
                  "https://play.google.com/store/apps/details?id=com.hamzasumbal.waterejecttool"
                }
              />
              <Fade left>
              <div className = {'screen-shot'}>
                  <img className={"pic6"} src={pic6} />
                </div>
              </Fade>
              <WorkShow
                title={"NOTAKTO"}
                points={[
                  "This web app was developed as a part of a one-day game development challenge hosted by a local web dev community. ",
                  "It’s an online multiplayer game similar to tic tac toe.",
                  "The web app was developed using vanilla JavaScript and the database was set up using Firebase Real-Time Database.",
                ]}
                url = {'https://notakto-play.web.app/'}
              />
            </div>
          </Fade>

          {/* <Fade bottom>
            <h1>Volunteer Work</h1>
          </Fade>
          <Fade>
            <div>
              <WorkShow
                title={"HackConordia"}
               subTitle = {"Director of Technology"}
                points={[
                  "Working with tech team to plan and prepare the technical infrastructure for ConUHack VI - Montreal’s biggest hackathon."
                ]}
              />
              <WorkShow
                title={"Community Service Project"}
                subTitle = {"Team Leader"}
                points={[
                  "Lead a team of eight students for my community service project. ",
                  "Collected, segregated and distributed leftover food from different restaurants and events among the marginalized community.",
                ]}
              />
            </div>
          </Fade> */}
        </div>
      </div>
    </div>
  )
}

export default Work
