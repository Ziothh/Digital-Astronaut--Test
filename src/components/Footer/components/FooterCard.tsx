import "./FooterCard.scss"

type FooterCardLocationData = {
    street: string,
    town: string,
    country: string,
}
type FooterCardContactData = {
    website: string,
    email: string,
    phone: string,
}

export interface FooterCardData {
    title: string
    location: FooterCardLocationData
    contact: FooterCardContactData
}


const FooterCard: React.FC<FooterCardData> = ({contact, location, title}) => {
    return (
        <div className="footer-card bg-lighten">
            <h2 className="font-primary">{title}</h2>
            <div className="footer-card-info">
                <p className="text-ssm">{location.street}</p>
                <p className="text-ssm">{location.town}</p>
                <p className="text-ssm">{location.country}</p>
            </div>
            <div className="footer-card-info">
                <a className="text-ssm" href={contact.website}>{contact.website}</a>
                <a className="text-ssm" href={contact.email}>{contact.email}</a>
                <p className="text-ssm">{contact.phone}</p>
            </div>
        </div>
    )
}


export default FooterCard