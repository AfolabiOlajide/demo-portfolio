/* eslint-disable react/jsx-no-target-blank, jsx-a11y/anchor-is-valid, jsx-a11y/img-redundant-alt, no-unused-vars */
import React from "react";
import { FiExternalLink } from "react-icons/fi";

import "./Portfolio.css";
import { PROJECTS } from "../../projects";

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {PROJECTS.map((project) => (
                    <article id={project.id} className="portfolio__item">
                        <div className="portfolio__item-image">
                            <img src={project.imgSrc} alt="" />
                        </div>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="portfolio__item-cta">
                            {project.githubLink && (
                                <a
                                    href={project.githubLink}
                                    className="btn"
                                    target="_blank"
                                >
                                    GitHub
                                </a>
                            )}
                            <a
                                href={project.demoLink}
                                className="btn btn-primary"
                                target="_blank"
                            >
                                Explore
                                <FiExternalLink />
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
