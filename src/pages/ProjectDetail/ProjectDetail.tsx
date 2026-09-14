import "./ProjectDetail.css";
import { useParams } from "react-router-dom";
import projectDetails from "../../data/projectDetails";
import Header from "../../sections/ProjectDetail/Header/Header";
import Brief from "../../sections/ProjectDetail/Brief/Brief";
import Focus from "../../sections/ProjectDetail/Focus/Focus";
import Build from "../../sections/ProjectDetail/Build/Build";
import Gallery from "../../sections/ProjectDetail/Gallery/Gallery";

const ProjectDetail = () => {
    const { id } = useParams<{ id: string }>();

    const project = projectDetails.find((project) => project.id === id);

    if (!project) {
        return <div>Project not found.</div>;
    }

    return (
        <>
            <Header
                title={project.title}
                category={project.category}
                type={project.type}
                summary={project.summary}
                year={project.year}
                image={project.image}
            />
            <main className="case-main">
                <Brief
                    title={project.briefHeading}
                    description={project.brief}
                    url={project.live}
                />
                <Focus features={project.features} />
                <Build technologies={project.technologies} />
                <Gallery galleries={project.galleries} />
            </main>
        </>
    );
};

export default ProjectDetail;
