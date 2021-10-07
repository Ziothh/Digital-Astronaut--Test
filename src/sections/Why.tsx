import "./Why.scss"
import TechlinkLogo from "../assets/logos/TechlinkLogo.png"
import { ReactComponent as FEELogo } from "../assets/logos/FEELogo.svg"
import Button from "../components/base/Button"
import WebinarCard from "../components/cards/WebinarCard"

const Why = () => {
    return (
        <section id="why" className="bg-light padding">
            <div className="why-info">
                <div className="why-logos">
                    <FEELogo/>
                    <img src={TechlinkLogo} alt="Techlink logo" />
                </div>
                <p>LINK2030 is een rapport uitgewerkt door sectorfederaties F.E.E. en Techlink. Het brengt de technologische en maatschappelijke trends in kaart die mee de energietransitie stuwen en die een enorme impact hebben op de sector van elektrotechniek, HVAC, sanitair, verlichting, batterijen, huishoudelektro en beveiliging.</p>
                <Button>lees meer</Button>
            </div>
            <WebinarCard/>
        </section>
    )
}


export default Why