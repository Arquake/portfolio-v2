import '../../styles/aboutText.css';
import {useEffect, useState} from "react";
import TextSeparator from "./textSeparator.jsx";

const AboutText = ({showDiv}) => {

    const [showText, setShowText] = useState(false);

    showDiv !== 0 && (
    setTimeout(() => {
        setShowText(true);
    }, 0))

    return (
        <>
            <div className={"grid-container " + (showDiv === 0 ? "about-text-container-inactive" : "about-text-container-active expand-grid")}
                 id="explaination-box">
                <div className={showDiv === 0 || !showText ? 'div-text' : ''}>
                    {
                        !showText ? null :
                            showDiv === 1 ? <BackEnd/> : showDiv === 2 ? <FrontEnd/> :
                                showDiv === 3 ? <Outils/> : null
                    }
                </div>
            </div>

        </>
    )
}


const BackEnd = () => {

    const symfonyText = "Je fais du Symfony depuis 2023 et l'utilise pour sa sécurité, son évolutivité et son support des versions à long terme";
    const laravelText = "J'utilise Laravel depuis 2022 et m'en sert pour des petits projets ou des maquettes pour pouvoir recevoir un feedback rapidement";

    const [appearSymfony, setSymfonyAppear] = useState(true);
    const [symfonyCount, setSymfonyCount] = useState(0);
    const [appearLaravel, setAppearLaravel] = useState(false);
    const [laravelCount, setLaravelCount] = useState(0);
    const [symfonyTotalRender, setSymfonyTotalRender] = useState(false);
    const [laravelTotalRender, setLaravelTotalRender] = useState(false);

    const timerSymfony = () => {
        setTimeout(() => {
            setSymfonyTotalRender(true);
        }, 750);
    };

    const timerLaravel = () => {
        setTimeout(() => {
            setLaravelTotalRender(true);
        }, 750);
    };

    useEffect(() => {
        if (symfonyText.length === symfonyCount) {
            setSymfonyAppear(false);
            setAppearLaravel(true);
            timerSymfony();
        } else if (appearSymfony) {
            const timer = setTimeout(() => {
                setSymfonyCount(symfonyCount + 1);
            }, 5);
            return () => clearTimeout(timer);
        }
    }, [symfonyCount, appearSymfony, symfonyText.length]);

    useEffect(() => {
        if (laravelText.length === laravelCount) {
            setAppearLaravel(false);
            timerLaravel();
        } else if (appearLaravel) {
            const timer = setTimeout(() => {
                setLaravelCount(laravelCount + 1);
            }, 5);
            return () => clearTimeout(timer);
        }
    }, [laravelCount, appearLaravel, laravelText.length]);

    return (
        <>


            <div className="flex items-center mb-4">
                <img src="/symfony.svg" alt="symfony" className="h-8 w-8 mr-4"/>
                <TextSeparator totalRender={symfonyTotalRender} text={symfonyText} textCount={symfonyCount} />
            </div>

            <div className="flex items-center">
                <img src="/laravel.svg" alt="laravel" className="h-8 w-8 mr-4"/>
                <TextSeparator totalRender={laravelTotalRender} text={laravelText} textCount={laravelCount} />
            </div>
        </>
    )
}

const FrontEnd = () => {

    const reactText = "React et React Native me permettent une facilité de manipulation du dom et d'animer de façon intéressante les applications avec une certaine rapidité"
    const [appearReact, setReactAppear] = useState(true);
    const [reactCount, setReactCount] = useState(0);
    const [reactTotalRender, setReactTotalRender] = useState(false);

    const angularText = "Angular permet un controle simple sur le Dom et l'ecosystème mature permet un développement rapide d'applications"
    const [appearAngular, setAngularAppear] = useState(false);
    const [angularCount, setAngularCount] = useState(0);
    const [angularTotalRender, setAngularTotalRender] = useState(false);

    const twigText = "Twig est la solution que j'utilise pour le SSR avec sa simplicité et rapidité d'écriture"
    const [appearTwig, setTwigAppear] = useState(false);
    const [twigCount, setTwigCount] = useState(0);
    const [twigTotalRender, setTwigTotalRender] = useState(false);

    const scssText = "Connaitre le scss me permet de transitionner d'anciennes page écrite avec vers du css moderne"
    const [appearScss, setScssAppear] = useState(false);
    const [scssCount, setScssCount] = useState(0);
    const [scssTotalRender, setScssTotalRender] = useState(false);

    const tailwindText = "Tailwind me permet d'écrire rapidement du css et d'obtenir une interface correcte très rapidement"
    const [appearTailwind, setTailwindAppear] = useState(false);
    const [tailwindCount, setTailwindCount] = useState(0);
    const [tailwindTotalRender, setTailwindTotalRender] = useState(false);

    useEffect(() => {
        if (reactText.length === reactCount) {
            setReactAppear(false);
            setAngularAppear(true);
            setTimeout(() => {
                setReactTotalRender(true);
            }, 750); // Delay before final render
        } else if (appearReact) {
            const timer = setTimeout(() => {
                setReactCount(reactCount + 1);
            }, 5); // ms for each character
            return () => clearTimeout(timer);
        }
    }, [reactCount, appearReact, reactText.length]);

    useEffect(() => {
        if (angularText.length === angularCount) {
            setAngularAppear(false);
            setTwigAppear(true);
            setTimeout(() => {
                setAngularTotalRender(true);
            }, 750); // Delay before final render
        } else if (appearAngular) {
            const timer = setTimeout(() => {
                setAngularCount(angularCount + 1);
            }, 5); // Adjust timing as needed
            return () => clearTimeout(timer);
        }
    }, [angularCount, appearAngular, angularText.length]);

    useEffect(() => {
        if (twigText.length === twigCount) {
            setTwigAppear(false);
            setScssAppear(true);
            setTimeout(() => {
                setTwigTotalRender(true);
            }, 750); // Delay before final render
        } else if (appearTwig) {
            const timer = setTimeout(() => {
                setTwigCount(twigCount + 1);
            }, 5); // Adjust timing as needed
            return () => clearTimeout(timer);
        }
    }, [twigCount, appearTwig, twigText.length]);

    useEffect(() => {
        if (scssText.length === scssCount) {
            setScssAppear(false);
            setTailwindAppear(true);
            setTimeout(() => {
                setScssTotalRender(true);
            }, 750); // Delay before final render
        } else if (appearScss) {
            const timer = setTimeout(() => {
                setScssCount(scssCount + 1);
            }, 5); // Adjust timing as needed
            return () => clearTimeout(timer);
        }
    }, [scssCount, appearScss, scssText.length]);

    useEffect(() => {
        if (tailwindText.length === tailwindCount) {
            setTailwindAppear(false);
            setTimeout(() => {
                setTailwindTotalRender(true);
            }, 750); // Delay before final render
        } else if (appearTailwind) {
            const timer = setTimeout(() => {
                setTailwindCount(tailwindCount + 1);
            }, 5); // Adjust timing as needed
            return () => clearTimeout(timer);
        }
    }, [tailwindCount, appearTailwind, tailwindText.length]);




    return (
        <>
            <div className="flex items-center mb-4">
                <img src="/react.svg" alt="react" className="h-8 w-8 mr-4"/>
                <TextSeparator totalRender={reactTotalRender} text={reactText} textCount={reactCount}/>
            </div>

            <div className="flex items-center mb-4">
                <img src="/angular.svg" alt="angular" className="h-8 w-8 mr-4"/>
                <TextSeparator totalRender={angularTotalRender} text={angularText} textCount={angularCount}/>
            </div>

            <div className="flex items-center mb-4">
                <img src="/twig.svg" alt="twig" className="h-8 w-8 mr-4"/>
                <TextSeparator totalRender={twigTotalRender} text={twigText} textCount={twigCount}/>
            </div>

            <div className="flex items-center mb-4">
                <img src="/scss.svg" alt="scss" className="h-8 w-8 mr-4"/>
                <TextSeparator totalRender={scssTotalRender} text={scssText} textCount={scssCount}/>
            </div>

            <div className="flex items-center">
                <img src="/tailwind.svg" alt="tailwind" className="h-8 w-8 mr-4"/>
                <TextSeparator totalRender={tailwindTotalRender} text={tailwindText} textCount={tailwindCount}/>
            </div>
        </>
    )
}

const Outils = () => {

    const pgsqlText = "Postgresql et PgAdmin permettent une rapidité de lecture et d'écriture certaine, une sécurité robuste et ses diverses fonctionnalités uniques";
    const mysqlText = "Mysql permet de stocker et lire rapidement les données et est rapide à mettre en place";
    const jetBrainsText = "Les IDE PhpStorm et WebStorm permettent un développement rapide et une auto-complétion de qualité";
    const vscodeText = "VsCode me permet une personnalisation total de mon environnement de travail et l'utilisation d'outils de visualisation et de test";
    const figmaText = "Figma est l'application la plus éfficace et rapide pour prévisualiser le style d'une page et concevoir son design à l'aide de ses plugins";

    // State hooks for text rendering
    const [appearPgsql, setPgsqlAppear] = useState(true);
    const [pgsqlCount, setPgsqlCount] = useState(0);
    const [pgsqlTotalRender, setPgsqlTotalRender] = useState(false);

    const [appearMysql, setMysqlAppear] = useState(false);
    const [mysqlCount, setMysqlCount] = useState(0);
    const [mysqlTotalRender, setMysqlTotalRender] = useState(false);

    const [appearJetBrains, setJetBrainsAppear] = useState(false);
    const [jetBrainsCount, setJetBrainsCount] = useState(0);
    const [jetBrainsTotalRender, setJetBrainsTotalRender] = useState(false);

    const [appearVscode, setVscodeAppear] = useState(false);
    const [vscodeCount, setVscodeCount] = useState(0);
    const [vscodeTotalRender, setVscodeTotalRender] = useState(false);

    const [appearFigma, setFigmaAppear] = useState(false);
    const [figmaCount, setFigmaCount] = useState(0);
    const [figmaTotalRender, setFigmaTotalRender] = useState(false);

    // Text rendering logic
    useEffect(() => {
        if (pgsqlText.length === pgsqlCount) {
            setPgsqlAppear(false);
            setMysqlAppear(true);
            setTimeout(() => {
                setPgsqlTotalRender(true);
            }, 750);
        } else if (appearPgsql) {
            const timer = setTimeout(() => setPgsqlCount(pgsqlCount + 1), 5);
            return () => clearTimeout(timer);
        }
    }, [pgsqlCount, appearPgsql, pgsqlText.length]);

    useEffect(() => {
        if (mysqlText.length === mysqlCount) {
            setMysqlAppear(false);
            setJetBrainsAppear(true);
            setTimeout(() => {
                setMysqlTotalRender(true);
            }, 750);
        } else if (appearMysql) {
            const timer = setTimeout(() => setMysqlCount(mysqlCount + 1), 5);
            return () => clearTimeout(timer);
        }
    }, [mysqlCount, appearMysql, mysqlText.length]);

    useEffect(() => {
        if (jetBrainsText.length === jetBrainsCount) {
            setJetBrainsAppear(false);
            setVscodeAppear(true);
            setTimeout(() => {
                setJetBrainsTotalRender(true);
            }, 750);
        } else if (appearJetBrains) {
            const timer = setTimeout(() => setJetBrainsCount(jetBrainsCount + 1), 5);
            return () => clearTimeout(timer);
        }
    }, [jetBrainsCount, appearJetBrains, jetBrainsText.length]);

    useEffect(() => {
        if (vscodeText.length === vscodeCount) {
            setVscodeAppear(false);
            setFigmaAppear(true);
            setTimeout(() => {
                setVscodeTotalRender(true);
            }, 750);
        } else if (appearVscode) {
            const timer = setTimeout(() => setVscodeCount(vscodeCount + 1), 5);
            return () => clearTimeout(timer);
        }
    }, [vscodeCount, appearVscode, vscodeText.length]);

    useEffect(() => {
        if (figmaText.length === figmaCount) {
            setFigmaAppear(false);
            setTimeout(() => {
                setFigmaTotalRender(true);
            }, 750);
        } else if (appearFigma) {
            const timer = setTimeout(() => setFigmaCount(figmaCount + 1), 5);
            return () => clearTimeout(timer);
        }
    }, [figmaCount, appearFigma, figmaText.length]);

    return (
        <>
            <div className="flex items-center mb-4">
                <img src="/pgsql.svg" alt="symfony" className="h-8 w-8 mr-4"/>
                <TextSeparator totalRender={pgsqlTotalRender} text={pgsqlText} textCount={pgsqlCount} />
            </div>

            <div className="flex items-center mb-4">
                <img src="/mysql.svg" alt="symfony" className="h-8 w-8 mr-4"/>
                <TextSeparator totalRender={mysqlTotalRender} text={mysqlText} textCount={mysqlCount} />
            </div>

            <div className="flex items-center mb-4">
                <img src="/jetbrain.svg" alt="symfony" className="h-8 w-8 mr-4"/>
                <TextSeparator totalRender={jetBrainsTotalRender} text={jetBrainsText} textCount={jetBrainsCount} />
            </div>

            <div className="flex items-center mb-4">
                <img src="/vscode.svg" alt="symfony" className="h-8 w-8 mr-4"/>
                <TextSeparator totalRender={vscodeTotalRender} text={vscodeText} textCount={vscodeCount} />
            </div>

            <div className="flex items-center">
                <img src="/figma.svg" alt="symfony" className="h-8 w-8 mr-4"/>
                <TextSeparator totalRender={figmaTotalRender} text={figmaText} textCount={figmaCount} />
            </div>
        </>
    )
}


export default AboutText;