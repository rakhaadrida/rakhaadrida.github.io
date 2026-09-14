import LandingPage from "./pages/LandingPage/LandingPage";
import ProjectDetail from "./pages/ProjectDetail/ProjectDetail";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/project/:id" element={<ProjectDetail />} />
            </Routes>
        </>
    );
}

export default App;
