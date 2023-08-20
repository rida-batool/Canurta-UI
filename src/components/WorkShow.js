import React from "react"
import classes from "./WorkShow.module.css"

const WorkShow = ({ title, points, url, subTitle }) => {
  const openURL = () => {
    window.open(url, "_blank")
  }

  return (
    <div className={classes.workshow}>
      <h2>{title}</h2>
      {subTitle ? <h3>{subTitle}</h3> : null}
      <ul>
        {points.map((item, index) => {
          return <li key={item}>{item}</li>
        })}
      </ul>
      {url ? <a onClick={openURL}>More Information</a> : null}
    </div>
  )
}

export default WorkShow
