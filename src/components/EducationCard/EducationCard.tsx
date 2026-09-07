import "./EducationCard.css";

interface EducationProps {
    title: string;
    university: string;
    period: string;
    informations: string[];
    summaryTitle: string;
    summary: string;
}

const EducationCard = ({
    title,
    university,
    period,
    informations,
    summaryTitle,
    summary,
}: EducationProps) => {
    return (
        <>
            <div className="education-card">
                <div className="education-header">
                    <h3 className="degree">{title}</h3>
                    <span className="university">{university}</span>
                </div>
                <div className="education-meta">
                    <span className="graduation-year">{period}</span>
                </div>
                <div className="education-highlights">
                    {informations.map((item) => (
                        <span className="information">{item}</span>
                    ))}
                    <h4>{summaryTitle}</h4>
                    <p>{summary}</p>
                </div>
            </div>
        </>
    );
};

export default EducationCard;
