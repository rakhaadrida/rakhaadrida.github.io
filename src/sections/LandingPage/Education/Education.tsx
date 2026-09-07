import "./Education.css";
import educations from "../../../data/educations";
import EducationCard from "../../../components/EducationCard/EducationCard";

const Education = () => {
    return (
        <section className="education-section" id="education">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-10 mx-auto">
                        <h2 className="education-title">Education</h2>
                        {educations.map((education) => (
                            <EducationCard key={education.id} {...education} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
