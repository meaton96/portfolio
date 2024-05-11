import repoLinkImg from '/repo-link.png';
import buildLinkImg from '/build-link.png';
import './ProjectCard.css';

const ProjectCard = ({ largeImage, title, subtitle, content, repoLink, buildLink }) => {
    return (
        <div className={`card`}>
            <div className="card-image">
                <figure className="image is-4by3">
                    <img
                        src={largeImage}
                        alt="Project Thumbnail"
                    />
                </figure>
            </div>
            <div className="card-content">
                <div className="media">

                    <div className="media-content">
                        <p className="title is-4">{title}</p>
                        <p className="subtitle is-6">{subtitle}</p>
                    </div>
                </div>

                <div className="content">
                    {content}
                </div>
                <div className="card-footer">
                    <div className="card-footer-item">
                        <a href={repoLink} target="_blank" rel="noopener noreferrer">
                            <img src={repoLinkImg} alt="Repo Link" />
                        </a>
                    </div>
                    <div className="card-footer-item">
                        <a href={buildLink} target="_blank" rel="noopener noreferrer">
                            <img src={buildLinkImg} alt="Build Link" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProjectCard;