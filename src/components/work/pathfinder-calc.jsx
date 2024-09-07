import "../../styles/work-card.css";

const Pathfinder = () => {
    return (
        <>
            <div className="card-work text-part h-full">
                <div className="list-element"></div>
                <div className="informations-container lg:order-3">
                    <div className="flex flex-wrap gap-4">
                        <h2 className="card-title">Pathfinder encounter calculator</h2>
                        <img src="/angular.svg" loading="lazy" className="w-8 h-8" alt=""/>
                        <img src="/ts.svg" loading="lazy" className="w-8 h-8" alt=""/>
                        <img src="/tailwind.svg" loading="lazy" className="w-8 h-8" alt=""/>
                    </div>
                    <p className="paragraph">
                        Création d'un calculateur de difficulté de rencontre pour le jeu Pathfinder 2e
                    </p>
                </div>
                <a className="image-link" aria-label="page web de calculateur de rencontre pour Pathfinder 2e" href="https://pathfinder-tools.veras.fr/">
                    <img src="/pathfinder2.jpg" loading="lazy" className="w-full h-full rounded-2xl object-cover inside-shadow" alt=""/>
                </a>
            </div>
        </>
    )
}

export default Pathfinder;