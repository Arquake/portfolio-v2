import "../../styles/work-card.css";

const MarcEtSeb = () => {
    return (
        <>
            <div className="card-work text-part h-full">
                <div className="list-element"></div>
                <div className="informations-container lg:order-3">
                    <div className="flex flex-wrap gap-4">
                        <h2 className="card-title">Cave de Marc et Sebastien</h2>
                        <img src="/vite.svg" loading="lazy" className="w-8 h-8" alt=""/>
                        <img src="/react.svg" loading="lazy" className="w-8 h-8" alt=""/>
                        <img src="/ts.svg" loading="lazy" className="w-8 h-8" alt=""/>
                        <img src="/tailwind.svg" loading="lazy" className="w-8 h-8" alt=""/>
                    </div>
                    <p className="paragraph">
                        Refonte et mise à jour du site pour le remettre aux normes aria et légales
                    </p>
                </div>
                <a className="image-link" aria-label="page web de présentation Marc et Sebastien" href="https://exempleMarcEtSebastien.veras.fr/">
                    <img src="/marcetseb.jpg" loading="lazy" className="w-full h-full rounded-2xl object-cover" alt=""/>
                </a>
            </div>
        </>
    )
}

export default MarcEtSeb;