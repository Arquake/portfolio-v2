import {NavLink} from "react-router-dom";
import "../App.css"
import "../styles/navbar_underline.css"

const Navbar = ({textColor}) => {
    return (
        <>
            <nav className="w-full">
                <ul className="flex 2xl:gap-8 gap-2 2xl:text-xl xl:text-base sm:text-sm text-xs uppercase" style={{color: textColor, '--data-color': textColor}}>
                    <li>
                        <NavLink to="/about" className="underline-navbar text-nowrap">À propos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/work" className="underline-navbar">Projets</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className="underline-navbar">Contact</NavLink>
                    </li>
                </ul>
            </nav>

        </>
    )
}

export default Navbar;