import Hero from "../sections/LandingPage/Hero/Hero";
import Project from "../sections/LandingPage/Project/Project";
import Experience from "../sections/LandingPage/Experience/Experience";
import Skill from "../sections/LandingPage/Skill/Skill";
import About from "../sections/LandingPage/About/About";
import Education from "../sections/LandingPage/Education/Education";
import Contact from "../sections/LandingPage/Contact/Contact";

const LandingPage = () => {
    return (
        <>
            <Hero />
            <Project />
            <Experience />
            <Skill />
            <About />
            <Education />
            <Contact />
        </>
    );
};

export default LandingPage;
