import "../../styles/work-card.css";

const Portfolio = () => {
    return (
        <>
            <div className="card-work text-part h-full">
                <div className="list-element"></div>
                <div className="informations-container lg:order-3">
                    <div className="flex flex-wrap gap-4">
                        <h2 className="card-title">Portfolio Personnel</h2>
                        <img src="/react.svg" loading="lazy" className="w-8 h-8" alt=""/>
                        <img src="/jsx.svg" loading="lazy" className="w-8 h-8" alt=""/>
                        <img src="/tailwind.svg" loading="lazy" className="w-8 h-8" alt=""/>
                    </div>
                    <p className="paragraph">
                        Création de mon portfolio personnel
                    </p>
                </div>
                <a className="image-link" aria-label="portfolio personnel" href="https://veras.fr/">
                    <img src="/portfolio.jpg" loading="lazy" className="w-full h-full rounded-2xl object-cover inside-shadow" alt=""/>
                </a>
            </div>
        </>
    )
}

export default Portfolio;