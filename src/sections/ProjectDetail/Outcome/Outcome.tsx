import "./Outcome.css";

interface OutcomeProps {
    description: string;
}

const Outcome = ({ description }: OutcomeProps) => {
    return (
        <section className="outcome-section">
            <p className="section-kicker">The outcome</p>
            <h2 id="project-outcome">{description}</h2>
        </section>
    );
};

export default Outcome;
