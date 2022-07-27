import React, { useContext } from "react";
import './Experience.css';
import { themeContext } from "../../Context";

const Experience = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="Experience" id="Experience">
            <div className="achievment">
                <div className="circle" style={{ color: darkMode ? 'var(--orange)' : '' }}>8+</div>
                <span>Years</span>
                <span>Experience</span>
            </div>
            <div className="achievment">
                <div className="circle">20+</div>
                <span>Project</span>
                <span>Completed</span>
            </div>
            <div className="achievment">
                <div className="circle">5+</div>
                <span>Companies</span>
                <span>Works</span>

            </div>

        </div>
    )
}
export default Experience;