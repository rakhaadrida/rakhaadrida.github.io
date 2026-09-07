import "./Contact.css";
import Button from "../../../components/Button/Button";
import GithubIcon from "../../../assets/icons/github.png";
import LinkedInIcon from "../../../assets/icons/linkedin.png";

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="contact-content">
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <span className="contact-eyebrow">
                                GET IN TOUCH
                            </span>
                            <h1>Let's Build Something Together</h1>
                            <h4>
                                Have a project in mind or looking for a
                                developer to join your team? I&apos;d love to
                                hear from you.
                            </h4>
                        </div>
                    </div>
                    <div className="contact-actions">
                        <Button
                            type="link"
                            href="mailto:rakhaab@gmail.com"
                            className="contact-button contact-button-primary"
                            aria-label="Email Me"
                            isExternal
                        >
                            Email Me
                            <span
                                aria-hidden="true"
                                className="btn-contact-icon"
                            >
                                →
                            </span>
                        </Button>
                    </div>
                    <div className="contact-socials" aria-label="Social links">
                        <a
                            href="https://www.linkedin.com/in/rakhaadrida/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={LinkedInIcon} alt="" />
                            <span>LinkedIn</span>
                        </a>
                        <a
                            href="https://github.com/rakhaadrida"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={GithubIcon} alt="" />
                            <span>GitHub</span>
                        </a>
                    </div>
                    <p className="contact-footer-note">
                        Based in Indonesia
                        <span aria-hidden="true" className="separator">
                            •
                        </span>{" "}
                        Open to Remote Opportunities
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
