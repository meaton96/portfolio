import React, { useState, useEffect, } from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';
import { fetchJson } from './ajax';

function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const getProjects = async () => {
            try {
                const data = await fetchJson('./projects.json');
                let p = data.projects.sort((a, b) => a.order - b.order);
                setProjects(p);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        getProjects();
    }, []);

    return (
        <div className="project-wrapper">
            <section id="project_header" className="container">
                <div className="columns is-multiline">
                    {projects.
                        filter(project => project.render).
                        map(project => (
                            <div className="column is-one-third" key={project.id}>
                                <ProjectCard
                                    largeImage={project.img}
                                    title={project.title}
                                    subtitle={project.subtitle}
                                    content={project.content}
                                    repoLink={project.repoLink}
                                    buildLink={project.buildLink}
                                />
                            </div>
                        ))}
                </div>
            </section>
        </div>
    );
}

export default Projects;
