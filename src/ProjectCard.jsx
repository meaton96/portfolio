const ProjectCard = ({largeImage, title, subtitle, content}) => {
    return (
        <div className="card">
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
            </div>
        </div>
    );
}
export default ProjectCard;