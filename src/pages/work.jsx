import "../styles/work.css";
import MarcEtSeb from "../components/work/marc-et-seb.jsx";
import Dyonisos from "../components/work/dyonisos.jsx";
import NavLayout from "../components/navLayout.jsx";
import useMetaTags from "../components/useMetaTags.jsx";
import Pathfinder from "../components/work/pathfinder-calc.jsx";

const Work = () => {

    useMetaTags("Vera Nicolas - Projets", "Page de projets")

    return (
        <>
            <div className="work min-h-dvh">
                <NavLayout color="#eff6ff"/>
                <main className="pt-12 2xl:px-16 px-2 pb-2 space-y-8">
                    <Pathfinder/>
                    <MarcEtSeb/>
                    <Dyonisos/>
                </main>
            </div>
        </>
    )
}

export default Work;