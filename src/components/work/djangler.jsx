import "../../styles/work-card.css";

const Djangler = () => {
    return (
        <>
            <div className="card-work text-part h-full">
                <div className="list-element"></div>
                <div className="informations-container lg:order-3">
                    <div className="flex flex-wrap gap-4">
                        <h2 className="card-title">Djangler</h2>
                        <img src="/node.svg" loading="lazy" className="w-8 h-8" alt=""/>
                        <img src="/js.svg" loading="lazy" className="w-8 h-8" alt=""/>
                        <img src="/django.svg" loading="lazy" className="w-8 h-8" alt=""/>
                    </div>
                    <p className="paragraph">
                        Création et maintient d'un CLI pour le Framework Django qui étend les commandes disponible du CLI de base pour permettre la création de composant prêt à l'emploi plus rapidement avec un routing automatique à la création d'applications
                    </p>
                </div>
                <a className="image-link" aria-label="CLI djangler pour django" href="https://github.com/Arquake/Djangler">
                    <img src="/djangler.jpg" loading="lazy" className="w-full h-full rounded-2xl object-cover inside-shadow" alt=""/>
                </a>
            </div>
        </>
    )
}

export default Djangler;