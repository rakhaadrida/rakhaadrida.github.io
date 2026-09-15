import "./ProjectDetail.css";
import { useParams } from "react-router-dom";
import projectDetails from "../../data/projectDetails";
import Header from "../../sections/ProjectDetail/Header/Header";
import Brief from "../../sections/ProjectDetail/Brief/Brief";
import Focus from "../../sections/ProjectDetail/Focus/Focus";
import Build from "../../sections/ProjectDetail/Build/Build";
import Gallery from "../../sections/ProjectDetail/Gallery/Gallery";
import Challenge from "../../sections/ProjectDetail/Challenge/Challenge";
import Outcome from "../../sections/ProjectDetail/Outcome/Outcome";
import Footer from "../../sections/ProjectDetail/Footer/Footer";

const ProjectDetail = () => {
    const { id } = useParams<{ id: string }>();

    const project = projectDetails.find((project) => project.id === id);

    if (!project) {
        return <div>Project not found.</div>;
    }

    const currentIndex = projectDetails.findIndex(
        (project) => project.id === id,
    );

    const previousProject =
        projectDetails[
            (currentIndex - 1 + projectDetails.length) % projectDetails.length
        ];

    const nextProject =
        projectDetails[(currentIndex + 1) % projectDetails.length];

    const previousId = previousProject.id;
    const previousTitle = previousProject.title;

    const nextId = nextProject.id;
    const nextTitle = nextProject.title;

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
                <Challenge
                    title={project.challengeHeading}
                    description={project.solution}
                />
                <Outcome description={project.outcome} />
            </main>

            <Footer
                previousId={previousId}
                previousTitle={previousTitle}
                nextId={nextId}
                nextTitle={nextTitle}
            />
        </>
    );
};

export default ProjectDetail;
