import "../styles/about.css"
import NavLayout from "../components/navLayout.jsx";
import { useState} from "react";
import AboutText from "../components/about/aboutText.jsx";
import useMetaTags from "../components/useMetaTags.jsx";

const About = () => {

    const [showDiv, setShowDiv] = useState(0);

    useMetaTags("Vera Nicolas - A propos", "Page A propos");

    return (
        <>
            <div className="layout min-h-dvh bg-neutral-800 pb-2">
                <NavLayout color="#eef2ff"/>
                <main className="pt-8 2xl:px-16 px-4">

                    {/* Cards */}
                    <div className="flex flex-wrap 2xl:gap-20 lg:gap-12 text-neutral-50 text-lg">
                        {/* Backend */}
                        <a href="#explaination-box" className="lg:flex-1 w-full h-min mb-12">
                            <div className="card backend" onClick={() => setShowDiv(1)}>
                                <div className="2xl:h-48 h-32 border-b border-neutral-700 rounded-t-xl overflow-hidden relative">
                                    <img src="/back-end.jpg" alt="image back-end" className="rounded-t-xl object-cover object-center w-full h-full blur-sm absolute"/>
                                    <div className="absolute grid grid-cols-2 2xl:gap-32 gap-16 w-full h-full">
                                        <img src="/symfony.svg" alt="symfony" className="h-1/3 w-1/3 opacity-90 justify-self-end self-center symfony"/>
                                        <img src="/laravel.svg" alt="laravel" className="h-1/3 w-1/3 opacity-90 self-center laravel"/>
                                    </div>
                                </div>
                                <h1 className="text-center my-1">Back-end</h1>
                            </div>
                        </a>

                        {/* Frontend */}
                        <a href="#explaination-box" className="lg:flex-1 w-full h-min mb-12">
                            <div className="card frontend" onClick={() => setShowDiv(2)}>
                                <div className="2xl:h-48 h-32 border-b border-neutral-700 rounded-t-xl overflow-hidden relative">
                                    <img src="/front-end.jpg" alt="image front-end" className="rounded-t-xl object-cover object-center w-full h-full blur-sm absolute"/>
                                    <div className="absolute grid grid-cols-5 gap-4 w-full h-full">
                                        <img src="/react.svg" alt="react" className="component-img react"/>
                                        <img src="/angular.svg" alt="angular" className="component-img angular"/>
                                        <img src="/twig.svg" alt="twig" className="component-img twig"/>
                                        <img src="/scss.svg" alt="scss" className="component-img scss"/>
                                        <img src="/tailwind.svg" alt="tailwind" className="component-img tailwind"/>
                                    </div>
                                </div>
                                <h1 className="text-center my-1">Front-end</h1>
                            </div>
                        </a>

                        {/* Autre */}
                        <a href="#explaination-box" className="lg:flex-1 w-full h-min mb-12">
                            <div className="card outils" onClick={() => setShowDiv(3)}>
                                <div className="2xl:h-48 h-32 border-b border-neutral-700 rounded-t-xl overflow-hidden relative">
                                    <img src="/autres-outils.jpg" alt="image autres outils" className="rounded-t-xl object-cover object-center w-full h-full blur-sm absolute"/>
                                    <div className="absolute grid grid-cols-5 gap-4 w-full h-full">
                                        <img src="/pgsql.svg" alt="Postgres" className="component-img pgsql"/>
                                        <img src="/mysql.svg" alt="mysql" className="component-img mysql"/>
                                        <img src="/jetbrain.svg" alt="jetbrain" className="component-img jetbrain"/>
                                        <img src="/vscode.svg" alt="vscode" className="component-img vscode"/>
                                        <img src="/figma.svg" alt="figma" className="component-img figma"/>
                                    </div>
                                </div>
                                <h1 className="text-center my-1">autres outils</h1>
                            </div>
                        </a>
                    </div>

                    <div className="container">
                        <div className="w-min bg-blue-200">

                        </div>
                    </div>

                </main>
            </div>
        </>
    )
}

export default About;