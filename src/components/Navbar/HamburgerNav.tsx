import "./HamburgerNav.scss"
import type { NavLinkData } from "./NavLinkGroup/NavLink"
import NavLinkGroup from "./NavLinkGroup"
import { ReactComponent as HamburgerIcon } from "../../assets/icons/hamburgerIcon.svg"
import { useState } from "react"
 
interface Props {
    navLinks: NavLinkData[]
    languageLinks: NavLinkData[]
}


const HamburgerNav: React.FC<Props> = ({navLinks, languageLinks}) => {
    const [navOpen, setNavOpen] = useState(false)

    const toggleNavOpen = () => setNavOpen(!navOpen)

    return (
        <div id="hamburger-nav" className={`${navOpen ? "nav-open" : ""}`}>
            <button 
                className="nav-hamburger"
                onClick={toggleNavOpen}
            >
                <HamburgerIcon/>
            </button>
            <nav>
                <NavLinkGroup key="navlinks" links={navLinks}/>
                <NavLinkGroup key="languagelinks" className="languageLinks" links={languageLinks}/>
            </nav>
        </div>
    )
}


export default HamburgerNav