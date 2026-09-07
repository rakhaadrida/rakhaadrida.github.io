import "./Footer.css";
import GithubIcon from "../../../assets/icons/github.png";
import LinkedInIcon from "../../../assets/icons/linkedin.png";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <h4>Rakha Adrida</h4>
                    <p>
                        Copyright &copy; 2026 rakhaadrida. All rights reserved.
                    </p>
                    <div className="footer-socials">
                        <a
                            href="https://github.com/rakhaadrida"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <img src={GithubIcon} alt="Github" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/rakhaadrida/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <img src={LinkedInIcon} alt="LinkedIn" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
