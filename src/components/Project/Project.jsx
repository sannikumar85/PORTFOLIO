import React from 'react'
import './Project.css'
import bg1 from './p1.png'
import bg2 from './p2.png'
import bg3 from './p3.png'
import bg4 from './p4.png'
import bg5 from './p5.png'
import bg6 from './p6.png'


const Project = () => {
  return (
    <>
      <h1>My <span> Project </span> </h1>
      <hr />
      <div className="project">
        <div className="box-3 bx1">
          <img src={bg1} alt="" />
        </div>
        <div className="box-3">
          <img src={bg2} alt="" />
        </div>
        <div className="box-3">
          <img src={bg3} alt="" />
        </div>

        <div className="box-3">
          <img src={bg4} alt="" />
        </div>

        <div className="box-3">
          <img src={bg5} alt="" />
        </div>
        <div className="box-3">
          <img src={bg6} alt="" />
        </div>
      </div>
      
    </>
  )
}

export default Project
