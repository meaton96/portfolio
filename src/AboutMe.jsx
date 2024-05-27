import React, { useState } from 'react';
import './AboutMe.css';
import headshot from '/headshot.jpg';   

function AboutMe() {
    const accordionData = {
        title: 'Career Goals',
        title2: 'Looking Ahead',
        content1: `While my academic background is rooted in game design, my true passion lies in the technical and engineering aspects of software development. 
        I excel in coding and tool engineering, making me well-suited for a variety of technical roles beyond traditional game design. 
        I am open to opportunities as a Software Engineer, Web Developer, Game Programmer, or any technical role that leverages my coding skills and problem-solving abilities.`,
        content2: `I am eager to bring my technical expertise and passion for coding to a dynamic team where I can contribute to innovative projects and continue to grow as a developer. If you are looking for a dedicated and skilled coder who thrives on technical challenges, 
        I would love to connect and explore potential opportunities.
        Thank you for visiting my portfolio. Feel free to explore my projects and get in touch if you have any questions or opportunities!`
    };
    const { title, title2, content1, content2 } = accordionData;
    const [isAccordionOpen, setIsAccordionOpen] = useState(false);

    const toggleAccordion = () => {
        setIsAccordionOpen(!isAccordionOpen);
    };

    return (
        <section className="hero">
            <div className="hero-body">
                <p className="title">Hi! I'm Mike</p>
                <div className="subtitle">
                    Hello! I'm Michael Eaton, a passionate and dedicated fourth-year Game Design and Development student at Rochester Institute of Technology (RIT).
                    I am actively seeking a second internship for Fall 2024 or Spring 2025.
                </div>
                <div className="accordion subtitle">
                    <div className="accordion-item">
                        <div className="accordion-title has-text-centered py-5" onClick={toggleAccordion}>
                            <div className='accordion-link has-text-weight-bold'>{isAccordionOpen ? 'Less Info' : 'More Info'}</div>
                        </div>
                        {isAccordionOpen && <div className='columns'>
                            <div className='column is-one-third'>
                                <img src={headshot} alt='headshot' className='headshot py-5' />
                            </div>
                            <div className='column'>
                            <div className='py-5 has-text-weight-bold'>{title}</div>
                                <div className="accordion-content has-text-left">{content1}</div>
                                <div className='py-5 has-text-weight-bold'>{title2}</div>
                                <div className="accordion-content has-text-left">{content2}</div>
                            </div>
                        </div>}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
