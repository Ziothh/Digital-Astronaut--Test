interface Props {
    text: string
    href: string
    icon: any
}


const CardCTA: React.FC<Props> = ({text, href, icon}) => {
    return (
        <div className="webinar-card-cta-row">
            <div className="icon bg-accent-green">{icon}</div>
            <a href={href}>{text}</a>
        </div>
    )
}


export default CardCTA