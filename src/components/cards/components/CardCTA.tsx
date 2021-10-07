import Icon from "./Icon"

interface Props {
    text: string
    href: string
    icon: any
}


const CardCTA: React.FC<Props> = ({text, href, icon}) => {
    return (
        <div className="webinar-card-cta-row">
            <Icon>{icon}</Icon>
            <a href={href}>{text}</a>
        </div>
    )
}


export default CardCTA