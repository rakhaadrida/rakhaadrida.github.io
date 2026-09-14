import "./Focus.css";

interface Feature {
    title: string;
    description: string;
}

interface FocusProps {
    features: Feature[];
}

const Focus = ({ features }: FocusProps) => {
    return (
        <section className="content-section-focus split-section">
            <div>
                <p className="section-kicker">01 / Focus</p>
                <h2>What needed to work</h2>
            </div>
            <div className="feature-list" id="project-features">
                {features.map((feature, index) => (
                    <article className="feature-item" key={index}>
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Focus;
