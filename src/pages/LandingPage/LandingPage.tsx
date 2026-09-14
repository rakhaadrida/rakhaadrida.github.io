import "./LandingPage.css";
import Hero from "../../sections/LandingPage/Hero/Hero";
import Project from "../../sections/LandingPage/Project/Project";
import Experience from "../../sections/LandingPage/Experience/Experience";
import Skill from "../../sections/LandingPage/Skill/Skill";
import About from "../../sections/LandingPage/About/About";
import Education from "../../sections/LandingPage/Education/Education";
import Contact from "../../sections/LandingPage/Contact/Contact";
import Footer from "../../sections/LandingPage/Footer/Footer";
import { useEffect, useRef } from "react";

const LandingPage = () => {
    const refProjects = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (window.location.hash === "#projects") {
            refProjects.current?.scrollIntoView({
                behavior: "smooth",
            });
        }
    }, []);

    return (
        <>
            <Hero refProjects={refProjects} />
            <Project ref={refProjects} />
            <Experience />
            <Skill />
            <About />
            <Education />
            <Contact />
            <Footer />
        </>
    );
};

export default LandingPage;
