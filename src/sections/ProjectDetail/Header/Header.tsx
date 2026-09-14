import "./Header.css";
import Button from "../../../components/Button/Button";

interface HeaderProps {
    title: string;
    category: string;
    type: string;
    summary: string;
    year: string;
    image: string;
}

const Header = ({
    title,
    category,
    type,
    summary,
    year,
    image,
}: HeaderProps) => {
    return (
        <div className="case-header">
            <nav className="case-nav" aria-label="Case study navigation">
                <Button type="link" href="/#projects" className="back-link">
                    <span aria-hidden="true">←</span> Back to Projects
                </Button>
                <span className="nav-mark">RA / Project Detail</span>
            </nav>
            <div className="case-hero">
                <div className="eyebrow" id="project-category">
                    {category} / {type}
                </div>
                <h1 id="project-title">{title}</h1>
                <p className="hero-summary" id="project-summary">
                    {summary}
                </p>
                <div className="hero-meta" id="project-meta">
                    <span>{type}</span>
                    <span>{year}</span>
                    <span>{category}</span>
                </div>
            </div>
            <div className="hero-image-wrap">
                <img id="project-hero-image" src={image} alt={title} />
            </div>
        </div>
    );
};

export default Header;
