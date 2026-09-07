import "./Skill.css";
import skillItems from "../../../data/skills";
import SkillCard from "../../../components/SkillCard/SkillCard";

const Skill = () => {
    return (
        <>
            <section id="skills" className="skills-section">
                <div className="skills-container">
                    <div className="skills-heading">
                        <h2 className="section-title section-title-skills">
                            Skills
                        </h2>
                        <p className="section-subtitle">
                            Tools and technologies I use to build dependable
                            digital products.
                        </p>
                    </div>
                    <div className="skills-grid">
                        {skillItems.map((skill) => (
                            <SkillCard key={skill.id} {...skill} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Skill;
