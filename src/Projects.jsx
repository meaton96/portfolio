import ProjectCard from './ProjectCard';
import avThumb from '/av-thumb.png';
function Projects() {
    return (
        <section id="project_header" className="container">
            <ProjectCard
                largeImage={avThumb}
                title="AUDIO VISUALIZER"
                subtitle="Javascript WebAudio API"
                content="An Audio Visualizer that uses web audio api and canvas to create a visual representation of the audio.
        Academic Project. Uses beat detection, frequency analysis, and amplitude analysis to create a unique visual experience."
            />
        </section>
    );
}
export default Projects;