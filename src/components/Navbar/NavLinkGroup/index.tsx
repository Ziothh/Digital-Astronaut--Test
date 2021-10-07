import "./NavLinkGroup.scss"
import NavLink from "./NavLink"



interface Props {
    links: {
        name: string,
        href: string,
        isActive?: boolean
    }[]
    className?: string
}


const NavLinkGroup: React.FC<Props> = ({links, className}) => {
    return (
        <ul {...{className}}>
            {links.map(({name, href, isActive}) => <NavLink {...{href, isActive}}>{name}</NavLink>)}
        </ul>
    )
}


export default NavLinkGroup