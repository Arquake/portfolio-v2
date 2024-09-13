import "../styles/links.css";
import "../styles/contact.css"
import NavLayout from "../components/navLayout.jsx";
import useMetaTags from "../components/useMetaTags.jsx";

const Contact = () => {

    useMetaTags("Vera Nicolas - Contact", "Page de Contact");

    return (
        <>
            <div className="bg-pink-50 min-h-dvh w-full grid-container text-pink-900">
                <NavLayout color="#831843"/>
                <main className="pt-8 grid grid-cols-1 items-center justify-center">
                    <div
                        className="leading-10 col-span-full mx-auto">
                        <h2 className="text-3xl font-semibold mb-10 relative w-fit contact pr-4">
                            Me Contacter
                        </h2>
                        <p className="flex gap-1">
                            <img src="/phone.svg" alt="numéro de téléphone"
                                 className="h-5 w-5 opacity-90 justify-self-end self-center"/>
                            Téléphone : <a href="tel:0787173223" className="link">33+ 07 87 17 32 23</a>
                        </p>
                        <p className="flex gap-1">
                            <img src="/mail.svg" alt="email"
                                 className="h-5 w-5 opacity-90 justify-self-end self-center"/>
                            Email principal : <a href="mailto:nicolas-vera@orange.fr"
                                                 className="link">nicolas-vera@orange.fr</a>
                        </p>
                        <p className="flex gap-1">
                            <img src="/mail.svg" alt="email"
                                 className="h-5 w-5 opacity-90 justify-self-end self-center"/>
                            Email secondaire : <a href="mailto:nicolas@veras.fr" className="link">nicolas@veras.fr</a>
                        </p>
                        <p className="flex gap-1">
                            <img src="/linkedin.svg" alt="linkedin" className="h-5 w-5 opacity-90 justify-self-end self-center"/>
                            <a href="https://www.linkedin.com/in/nicolas-vera-935666322/" className="link">Linkedin</a>
                        </p>
                        <p className="flex gap-1">
                            <img src="/github.svg" alt="github" className="h-5 w-5 opacity-90 justify-self-end self-center"/>
                            <a href="https://github.com/Arquake" className="link">GitHub</a>
                        </p>
                    </div>
                </main>
                <footer className="pb-2">
                <p className="flex [word-spacing:1rem] mt-16 text-lg justify-center text-pink-900">
                        Orléans Loiret | France
                    </p>
                </footer>
            </div>
        </>
    )
}

export default Contact;