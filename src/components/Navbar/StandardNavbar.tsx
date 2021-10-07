// import { useState } from "react"
import "./StandardNavbar.scss"
import NavLinkGroup from "./NavLinkGroup"
import type { NavLinkData } from "./NavLinkGroup/NavLink"

interface Props {
    navLinks: NavLinkData[]
    languageLinks: NavLinkData[]
}


const StandardNavbar: React.FC<Props> = ({languageLinks, navLinks}) => {
    return (
        <nav id="standard-navbar">
            <NavLinkGroup key="navlinks" links={navLinks}/>
            <NavLinkGroup key="languagelinks" className="languageLinks" links={languageLinks}/>
        </nav>
    )
}


export default StandardNavbar