/* eslint-disable react/jsx-no-target-blank, jsx-a11y/anchor-is-valid, jsx-a11y/img-redundant-alt, no-unused-vars */
import React from "react";
// import { BsPatchCheckFill } from "react-icons/bs";

import html from "../../assets/skills-icon/html.png";
import css from "../../assets/skills-icon/css.png";
import js from "../../assets/skills-icon/js.png";
import react from "../../assets/skills-icon/react.png";
import python from "../../assets/skills-icon/python.png";
import Next from "../../assets/skills-icon/next-js.svg";
import Tailwind from "../../assets/skills-icon/tailwind-css.svg";
import typescript from "../../assets/skills-icon/typescript-icon.svg";
import Solidity from "../../assets/skills-icon/solidity.png";

import "./Skills.css";

const Skills = () => {
    return (
        <section id="skills">
            <h5>What Skills i have</h5>
            <h2>My Experience</h2>
            {/* html */}
            <div className="container experience__container">
                <div className="skill">
                    <div className="skill-img">
                        <img src={html} alt="" />
                    </div>
                    <div className="skill-text">HTML</div>
                </div>
                {/* css */}
                <div className="skill">
                    <div className="skill-img">
                        <img src={css} alt="" />
                    </div>
                    <div className="skill-text">CSS</div>
                </div>
                {/* tailwind */}
                <div className="skill">
                    <div className="skill-img">
                        <img src={Tailwind} alt="" />
                    </div>
                    <div className="skill-text">Tailwind</div>
                </div>
                {/* javascript */}
                <div className="skill">
                    <div className="skill-img">
                        <img src={js} alt="" />
                    </div>
                    <div className="skill-text">Javascript</div>
                </div>
                {/* typescript */}
                <div className="skill">
                    <div className="skill-img">
                        <img src={typescript} alt="" />
                    </div>
                    <div className="skill-text">TypeScript</div>
                </div>
                {/* react */}
                <div className="skill">
                    <div className="skill-img">
                        <img src={react} alt="" />
                    </div>
                    <div className="skill-text">React</div>
                </div>
                {/* next */}
                <div className="skill">
                    <div className="skill-img">
                        <img src={Next} alt="" />
                    </div>
                    <div className="skill-text">Next.js</div>
                </div>
                {/* solidity */}
                <div className="skill">
                    <div className="skill-img">
                        <img src={Solidity} alt="" />
                    </div>
                    <div className="skill-text">Solidity</div>
                </div>
                {/* python */}
                <div className="skill">
                    <div className="skill-img">
                        <img src={python} alt="" />
                    </div>
                    <div className="skill-text">python</div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
