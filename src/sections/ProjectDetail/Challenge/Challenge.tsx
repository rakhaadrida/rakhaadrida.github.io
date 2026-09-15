import "./Challenge.css";

interface ChallengeProps {
    title: string;
    description: string;
}

const Challenge = ({ title, description }: ChallengeProps) => {
    return (
        <section className="content-section-challenge challenge-grid">
            <article>
                <p className="section-kicker">The challenge</p>
                <h2 id="project-challenge-heading">{title}</h2>
            </article>
            <article className="solution-card">
                <p id="project-solution">{description}</p>
            </article>
        </section>
    );
};

export default Challenge;
