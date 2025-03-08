import React from 'react'
import './Home3.css'
import bg1 from './p1.png'
import bg2 from './p2.png'
import bg3 from './p3.png'

const Home3 = () => {
    return (
        <>
            <div >
                <h1>My <span> Project </span></h1>
            </div>
            

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
            </div>

        </>
    )
}

export default Home3
