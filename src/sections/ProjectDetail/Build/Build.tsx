import "./Build.css";

interface Technology {
    title: string;
    description: string;
}

interface BuildProps {
    technologies: Technology[];
}

const Build = ({ technologies }: BuildProps) => {
    return (
        <section className="content-section tech-section-case">
            <div>
                <p className="section-kicker">02 / Build</p>
                <h2>Technical overview</h2>
            </div>
            <div className="tech-grid" id="project-tech">
                {technologies.map((technology, index) => (
                    <div className="tech-item" key={index}>
                        <small>{technology.title}</small>
                        <strong>{technology.description}</strong>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Build;
