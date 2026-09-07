import "./SkillCard.css";

interface SkillItems {
    icon: string;
    name: string;
    type: string;
}

interface SkillProps {
    id: string;
    title: string;
    items: SkillItems[];
}

const SkillCard = ({ id, title, items }: SkillProps) => {
    return (
        <article className="skill-group">
            <div className="skill-group-heading">
                <span className="skill-group-index">{id}</span>
                <h3>{title}</h3>
            </div>
            <div className="skill-badges">
                {items.map((item) => (
                    <div key={item.name} className="skill-row">
                        <span>
                            <img src={item.icon} className="skill-icon" />
                            {item.name}
                        </span>
                        <span className="skill-badge">{item.type}</span>
                    </div>
                ))}
            </div>
        </article>
    );
};

export default SkillCard;
