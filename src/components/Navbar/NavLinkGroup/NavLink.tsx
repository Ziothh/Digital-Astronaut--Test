export interface NavLinkData {
    href: string
    isActive?: boolean
    name: string
}

interface Props {
    href: string
    isActive?: boolean
    children: string
}

const NavLink: React.FC<Props> = ({children, isActive = false, href}) => {
    return (
        <li>
            <a href={href} className={isActive ? "active" : ""}>{children}</a>
        </li>
    )
}


export default NavLink