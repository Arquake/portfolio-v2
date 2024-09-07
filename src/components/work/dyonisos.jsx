import "../../styles/work-card.css";

const Dyonisos = () => {
    return (
        <>
            <div className="card-work text-part h-full">
                <div className="list-element"></div>
                <div className="informations-container lg:order-3">
                    <div className="flex flex-wrap gap-4">
                        <h2 className="card-title">Dyonisos</h2>
                        <img src="/symfony.svg" loading="lazy" className="w-8 h-8" alt=""/>
                        <img src="/twig.svg" loading="lazy" className="w-8 h-8" alt=""/>
                        <img src="/js.svg" loading="lazy" className="w-8 h-8" alt=""/>
                        <img src="/tailwind.svg" loading="lazy" className="w-8 h-8" alt=""/>
                    </div>
                    <p className="paragraph">
                        Refonte et mise à jour du site, ajout d'une gestion de la carte, de réservations coté client
                        et magasin, panel de statistiques sur l'année pour le restaurant, gestion d'encaissement
                    </p>
                </div>
                <a className="image-link" aria-label="page github Chez Dyonisos" href="https://github.com/Arquake/dionysos">
                    <img src="/dyonisos_test.jpg" loading="lazy" className="w-full h-full rounded-2xl object-cover" alt=""/>
                </a>
            </div>
        </>
    )
}

export default Dyonisos;