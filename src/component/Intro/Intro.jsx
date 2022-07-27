import React from "react";
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { motion } from "framer-motion";
//import { type } from "@testing-library/user-event/dist/type";

const Intro = () => {

   const transition = { duration: 2, type: "spring" }

   return (
      <div className="intro">
         {/* left side of info-page */}
         <div className="i-left">
            <div className="i-name">
               <span>Hy! I Am</span>
               <span>Andrew Thomas</span>
               <span> FrontEnd Developer with High level of experience in web design and development , Producting the Quality work</span>
            </div>
            <button className=" button i-button">Hire Me</button>
            <div className="i-icons">
               <img src={Github} alt=" " />
               <img src={LinkedIn} alt=" " />
               <img src={Instagram} alt=" " />
            </div>
         </div>
         {/* right side of info-page */}
         <div className="i-right">
            <img src={Vector1} alt=" " />
            <img src={Vector2} alt=" " />
            <img src={boy} alt=" " />

            <motion.img
               initial={{ left: '-36%' }}
               whileInView={{ left: '-24%' }}
               transition={transition}
               src={glassesimoji} alt=" " />


            <motion.div
               initial={{ top: '4%', left: '74%' }}
               whileInView={{ left: '68%' }}
               transition={transition}
               style={{ top: '-4%', left: '68%' }}>
               <FloatingDiv image={Crown} text1="Web" text2='Developer' />
            </motion.div>

            <motion.div
               initial={{ top: '18rem', left: '9rem' }}
               whileInView={{ left: '0rem' }}
               transition={transition}
               style={{ top: '18rem', left: '0rem' }}>
               <FloatingDiv image={thumbup} text1='Best Design' text2='Award' />
            </motion.div>

            <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
            <div
               className="blur"
               style={{
                  background: "#C1F5FF",
                  top: "17rem",
                  width: "21rem",
                  height: "11rem",
                  left: "-9rem",
               }}
            ></div>

         </div>
      </div>
   )
}
export default Intro;