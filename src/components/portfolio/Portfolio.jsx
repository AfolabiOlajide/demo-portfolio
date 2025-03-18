/* eslint-disable react/jsx-no-target-blank, jsx-a11y/anchor-is-valid, jsx-a11y/img-redundant-alt, no-unused-vars */
import React from "react";

import "./Portfolio.css";
import img1 from "../../assets/projects-img/weatherinfo-shot.png";
import img2 from "../../assets/projects-img/dashboard-demo-shot.png";
import img3 from "../../assets/projects-img/sunny-cosmetics-shot.png";
import img4 from "../../assets/projects-img/color-library-shot.png";
import img5 from "../../assets/projects-img/redux-fakestore-snapshot.png";
import Darate from "../../assets/projects-img/darate_home.png";
import Youdentify from "../../assets/projects-img/youdentify_home.png";

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {/* Darate */}
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={Darate} alt="" />
                    </div>
                    <h3>Darate</h3>
                    <p>
                        A Web3 crowdfunding application, built with Next.js and
                        Tailwind css.
                    </p>
                    <div className="portfolio__item-cta">
                        <a
                            href="https://github.com/AfolabiOlajide/darate"
                            className="btn"
                            target="_blank"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://darate.vercel.app/"
                            className="btn btn-primary"
                            target="_blank"
                        >
                            Live Demo
                        </a>
                    </div>
                </article>
                {/* Youdentify */}
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={Youdentify} alt="" />
                    </div>
                    <h3>YoudentiFi</h3>
                    <p>
                        A Web3 Digital Identity Platform, built with Next.js,
                        Tailwind css, Solidity and thirdweb.
                    </p>
                    <div className="portfolio__item-cta">
                        <a
                            href="https://github.com/AfolabiOlajide/youdentify"
                            className="btn"
                            target="_blank"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://youdentify.vercel.app/"
                            className="btn btn-primary"
                            target="_blank"
                        >
                            Live Demo
                        </a>
                    </div>
                </article>
                {/* weather info */}
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={img1} alt="" />
                    </div>
                    <h3>Weather Info</h3>
                    <p>
                        A Weather application where you can get real-time
                        information on the current weather in any given area.
                    </p>
                    <div className="portfolio__item-cta">
                        <a
                            href="https://github.com/AfolabiOlajide/weatherInfo-v2"
                            className="btn"
                            target="_blank"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://weatherinfo-v2.netlify.app/"
                            className="btn btn-primary"
                            target="_blank"
                        >
                            Live Demo
                        </a>
                    </div>
                </article>
                {/* fake store */}
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={img5} alt="" />
                    </div>
                    <h3>Fake Store</h3>
                    <p>
                        This is an E-commerce application built with React,
                        Redux and Tailwind CSS. It projects major
                        functionalities of E-commerce applications.
                    </p>
                    <div className="portfolio__item-cta">
                        <a
                            href="https://github.com/AfolabiOlajide/Redux-Ecommerce-application"
                            className="btn"
                            target="_blank"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://redux-fakestore.netlify.app/"
                            className="btn btn-primary"
                            target="_blank"
                        >
                            Live Demo
                        </a>
                    </div>
                </article>

                {/* dashboard design */}
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={img2} alt="" />
                    </div>
                    <h3>Admin Dashboard Design</h3>
                    <p>
                        A Fictional admin dashboard design built for a fictional
                        E-commerce application.
                    </p>
                    <div className="portfolio__item-cta">
                        <a
                            href="https://github.com/AfolabiOlajide/dashboard-design"
                            className="btn"
                            target="_blank"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://cipherr-dashboard-demo.netlify.app/"
                            className="btn btn-primary"
                            target="_blank"
                        >
                            Live Demo
                        </a>
                    </div>
                </article>
                {/* sunny cosmetics */}
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={img3} alt="" />
                    </div>
                    <h3>Sunny Cosmetics</h3>
                    <p>
                        A landing page created for a fictional cosmetics
                        E-commerce website.
                    </p>
                    <div className="portfolio__item-cta">
                        <a
                            href="https://github.com/AfolabiOlajide/sunny-cosmetics"
                            className="btn"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://cipherr-sunny-cosmetics.netlify.app/"
                            className="btn btn-primary"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            Live Demo
                        </a>
                    </div>
                </article>
                {/* color library */}
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={img4} alt="" />
                    </div>
                    <h3>Color Library</h3>
                    <p>
                        A color palette project where you can choose, create and
                        get any color of your choice.
                    </p>
                    <div className="portfolio__item-cta">
                        <a
                            href="https://github.com/AfolabiOlajide/Color-Library"
                            className="btn"
                            target="_blank"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://color-library.netlify.app/"
                            className="btn btn-primary"
                            target="_blank"
                        >
                            Live Demo
                        </a>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Portfolio;
