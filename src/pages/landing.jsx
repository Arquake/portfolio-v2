import Navbar from "../components/navbar.jsx";
import "../styles/landing.css";
import useMetaTags from "../components/useMetaTags.jsx";

const Landing = () => {

    useMetaTags("Vera Nicolas - Portfolio", "Page d'accueil du Portfolio de Vera Nicolas");

    return (
        <>
            <main className="h-dvh landing bg-center name-nav-container">
                <h1 className="font-semibold text-white uppercase name-place">
                    Vera Nicolas
                </h1>
                <div className="nav-place">
                    <div className="w-min">
                        <Navbar textColor="#ffffff"/>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Landing;