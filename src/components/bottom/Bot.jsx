import React from 'react'
import './bot.css'
import { CiLinkedin } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io5";
import { SiGeeksforgeeks } from "react-icons/si";
import { TbBrandLeetcode } from "react-icons/tb";
import { FaCopyright } from "react-icons/fa6";
const bot = () => {
    return (
        <>

            <div className="bottom">
                <div className="bot-1">
                    <div className="logo">
                        <a id='log1' href="https://www.linkedin.com/in/sanni-kumar-gupta-10792b290" target="_blank" rel="noopener noreferrer"> <CiLinkedin /> </a>

                        <a id='log2' href="https://twitter.com/" target="_blank" rel="noopener noreferrer">  <CiTwitter /> </a>

                        <a id='log3' href="https://github.com/sannikumar85" target="_blank" rel="noopener noreferrer"><FaGithubSquare /></a>


                        <a id='log4'
                            href="https://www.facebook.com/share/1A8y4zXWYs/" target="_blank" rel="noopener noreferrer"><CiFacebook /> </a>

                        <a id='log5' href="https://www.instagram.com/itz__sanni" target="_blank" rel="noopener noreferrer"><IoLogoInstagram />  </a>
                        <a id='log6' href="https://www.geeksforgeeks.org/user/sannikumaav1s/" target="_blank" rel="noopener noreferrer"><SiGeeksforgeeks /></a>
                        <a id='log7' href="https://leetcode.com/u/sanni_gupta8579/" target="_blank" rel="noopener noreferrer"><TbBrandLeetcode /></a>

                    </div>
                    <div className="app">
                        <a href="https://www.fiverr.com/sannikumargu870/buying?source=avatar_menu_profile" target="_blank" rel="noopener noreferrer">Fiverr</a>
                        <a href="https://www.kittl.com/profile" target="_blank" rel="noopener noreferrer">Kittle</a>
                        <a href="https://www.freelancer.in/u/Sannikumargupta7" target="_blank" rel="noopener noreferrer">Freelancer</a>
                        <a href="https://themeforest.net/user/sannikumargupta43" target="_blank" rel="noopener noreferrer">Themeforest</a>
                        <a href=""></a>
                    </div>

                </div>
              
                <div className="copy">
                    <p><FaCopyright /> Copyright ALL Rights Reserved 2024</p>
                   <p> Developed by:-Sanni kumar gupta</p>
                </div>
            </div>
        </>
    )
}

export default bot
