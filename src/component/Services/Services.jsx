import React from "react";
import './Services.css';
import Heartemoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from "../Card/Card";
import Resume from '../Services/resume.pdf';

const Services = () => {
    return (
        <div className="services" id="Services">
            <div className="awesome">
                <span>My Awesome</span>
                <span>services</span>
                <spane>
                    Lorem ispum is simpley dummy text of printing of printing Lorem
                    <br />
                    ispum is simpley dummy text of printing
                </spane>
                <a href={Resume} download>
                    <button className="button">Download CV</button>
                </a>

                <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
            </div>
            <div className="cards">
                <div style={{ left: "0px", top: "0px" }}>
                    <Card
                        emoji={Heartemoji}
                        heading={'Design'}
                        detail={'Figma,sketch, photoshop,Adobe,Adobe xd'}
                    />
                </div>
                <div style={{ right: "10rem", top: "0px" }}>
                    <Card
                        emoji={Glasses}
                        heading={'Developer'}
                        detail={"Html,Css,Javascript,React js "}
                    />
                </div>
                <div style={{ bottom: " 18rem", left: "40%" }}>
                    <Card
                        emoji={Humble}
                        heading={'UI/UX'}
                        detail={"lorem ip sum is best and usually use in section"}
                    />
                </div>
                <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
            </div>

        </div>
    )
}
export default Services;