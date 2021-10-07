import type { NavLinkData } from "./NavLinkGroup/NavLink"
import { useEffect, useState } from "react"
import StandardNavbar from "./StandardNavbar"
import HamburgerNav from "./HamburgerNav"

const Navbar = () => {
    const [useHamburgerNav, setUseHamburgerNav] = useState(false)

    useEffect(() => {
        const body = document.querySelector("body") as HTMLBodyElement 

        if(body.offsetWidth < 681) {if(useHamburgerNav === false) setUseHamburgerNav(true)}
        else setUseHamburgerNav(false)

        window.addEventListener("scroll", () => {
            if(window.pageYOffset > 80) {if(useHamburgerNav === false) setUseHamburgerNav(true)}
            else if (body.offsetWidth > 680) setUseHamburgerNav(false)
        })

        window.addEventListener("resize", () => {
            if(body.offsetWidth < 681) {if(useHamburgerNav === false) setUseHamburgerNav(true)}
            else setUseHamburgerNav(false)
        })
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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

    const languageLinks: NavLinkData[] = [
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
    
    return useHamburgerNav ? <HamburgerNav {...{navLinks, languageLinks}}/> : <StandardNavbar {...{navLinks, languageLinks}}/>
}


export default Navbar