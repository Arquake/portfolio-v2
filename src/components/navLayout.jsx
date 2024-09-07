import Navbar from "./navbar.jsx";

export default function navLayout ({color}) {
    return (
        <>
            <header className="sm:p-4 py-4 px-2 flex">
                <a href="/">
                    <h1 className="2xl:text-xl xl:text-base sm:text-sm text-xs font-semibold uppercase self-justify-start" style={{color: color}}>Vera Nicolas</h1>
                </a>
                <div className="w-min ml-auto mr-2 self-justify-end">
                    <Navbar textColor={color}/>
                </div>
            </header>
        </>
    )
}