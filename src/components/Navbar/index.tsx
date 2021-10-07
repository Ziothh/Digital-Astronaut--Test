// import { useState } from "react"
import "./Navbar.scss"
import NavLinkGroup from "./NavLinkGroup"
import type { NavLinkData } from "./NavLinkGroup/NavLink"

const Navbar = () => {
    // * Only needed when there actually are multiple pages. Use dummy data instead.
    // const [currentLink, setCurrentLink] = useState("Home")
    // const [currentLanguage, setCurrentLanguage] = useState("NL")

    // * Dummy data
    const navLinks: NavLinkData[] = [
        {
            name: "Home",
            isActive: true,
            href: "#"
        },
        {
            name: "Onze toekomstvisie",
            isActive: false,
            href: "#toekomstvisie"
        },
        {
            name: "Thema’s",
            isActive: false,
            href: "#thema"
        },
        {
            name: "Contact",
            isActive: false,
            href: "#contact"
        },
    ]

    const languageLinks = [
        {
            name: "NL",
            isActive: true,
            href: "#nl"
        },
        {
            name: "FR",
            isActive: false,
            href: "#nl"
        },
    ]

    return (
        <nav>
            <NavLinkGroup links={navLinks}/>
            <NavLinkGroup className="languageLinks" links={languageLinks}/>
        </nav>
    )
}


export default Navbar