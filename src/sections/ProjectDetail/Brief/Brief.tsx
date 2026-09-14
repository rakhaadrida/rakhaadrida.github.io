import "./Brief.css";

interface BriefProps {
    title: string;
    description: string;
    url: string;
}

const Brief = ({ title, description, url }: BriefProps) => {
    return (
        <section className="intro-grid">
            <div>
                <p className="section-kicker">The brief</p>
                <h2 id="project-brief-heading">{title}</h2>
            </div>
            <div>
                <p className="lead-copy" id="project-brief">
                    {description}
                </p>
                <div className="action-row" id="project-actions">
                    <a
                        href={url}
                        className="action-link"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Live preview
                        <span aria-hidden="true"> ↗</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Brief;
