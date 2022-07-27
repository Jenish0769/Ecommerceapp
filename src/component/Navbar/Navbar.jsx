
import React from "react";
import './Navbar.css';
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";


const Navbar = () => {
    return (
        <div className="n-wrapper">
            {/* left side of navbar */}
            <div className="n-left">
                <div className="n-name"> Andrew </div>
                <Toggle />
            </div>
            {/* right side of navbar */}
            <div className="n-right">
                <div className="n-list">
                    <ul style={{ listStyleType: 'none' }}>
                        <Link spy={true} to='Navbar'>
                            <li>Home</li>
                        </Link>
                        <Link spy={true} to='Services' smooth={true}>
                            <li>Services</li>
                        </Link>
                        <Link spy={true} to='Experience' smooth={true}>
                            <li>Experience</li>
                        </Link>
                        <Link spy={true} to='Portfolio' smooth={true}>
                            <li>Portfolio</li>
                        </Link>
                        <Link spy={true} to='Testimonial' smooth={true}>
                            <li>Testimonial</li>
                        </Link>
                    </ul>
                </div>

                <button className="button">Contact</button>

            </div>
        </div>
    )
}
export default Navbar