import "./Footer.css";
import Button from "../../../components/Button/Button";

interface FooterProps {
    previousId: string;
    previousTitle: string;
    nextId: string;
    nextTitle: string;
}

const Footer = ({
    previousId,
    previousTitle,
    nextId,
    nextTitle,
}: FooterProps) => {
    return (
        <div className="case-footer">
            <a id="previous-project" href={`/project/${previousId}`}>
                ← {previousTitle}
            </a>
            <Button type="link" href="/#projects" className="footer-home">
                All projects
            </Button>
            <a id="next-project" href={`/project/${nextId}`}>
                {nextTitle} →
            </a>
        </div>
    );
};

export default Footer;
