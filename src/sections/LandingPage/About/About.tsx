import "./About.css";

const About = () => {
    return (
        <section
            className="about-section"
            id="about"
            aria-labelledby="about-title"
        >
            <div className="container">
                <div className="about-layout">
                    <div className="about-copy">
                        <p className="about-eyebrow">ABOUT ME</p>
                        <h2 className="about-title" id="about-title">
                            Building Software with a Strong Backend Foundation
                        </h2>
                        <div className="about-description">
                            <p>
                                I&apos;m a software engineer with a strong
                                background in backend development, experienced
                                in building reliable APIs, business
                                applications, and scalable web systems.
                            </p>
                            <p>
                                After years of working primarily on backend
                                systems, I&apos;m expanding my expertise into
                                full-stack development with React and Next.js,
                                while continuing to explore modern AI-assisted
                                development workflows.
                            </p>
                        </div>
                    </div>
                    <div
                        className="about-highlights"
                        aria-label="Professional highlights"
                    >
                        <div className="about-highlight">
                            <strong>5+ Years</strong>
                            <span>Software Development</span>
                        </div>
                        <div className="about-highlight">
                            <strong>Backend → Full Stack</strong>
                            <span>Engineering Journey</span>
                        </div>
                        <div className="about-highlight">
                            <strong>Remote</strong>
                            <span>Open to Opportunities</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
