import "./Footer.scss"

import type { FooterCardData } from "./components/FooterCard"
import FooterCard from "./components/FooterCard"

const index = () => {
    const fCard1Data: FooterCardData = {
        title: "F.E.E.",
        location: {
            street:"Excelsiorlaan 91",
            town:"1930 Zaventem",
            country:"België",
        },
        contact: {
            website:"feebel.be",
            email:"info@feebel.be",
            phone:"+32 2 720 40 80",
        }
    }
    const fCard2Data: FooterCardData = {
        title: "Techlink",
        location: {
            street:"J. Chantraineplantsoen 1",
            town:"3070 Kortenberg",
            country:"België",
        },
        contact: {
            website:"techlink.be",
            email:"info@techlink.be",
            phone:"+32 2 896 96 10",
        }
    }

    return (
        <footer className="bg-dark">
            {/* Top */}
            <div className="footer-container footer-top">
                <div className="footer-content padding">
                    <div className="resume">
                        <h2 className="font-primary">
                            LINK 2030
                        </h2>
                        <p className="text-ssm">
                            LINK2030 is een rapport uitgewerkt door sectorfederaties F.E.E. en Techlink. Het brengt de technologische en maatschappelijke trends in kaart die mee de energietransitie stuwen en die een enorme impact hebben op de sector van elektrotechniek, HVAC, sanitair, verlichting, batterijen, huishoudelektro en beveiliging.
                        </p>
                    </div>
                    <div className="footer-cards">
                        <FooterCard {...fCard1Data}/>
                        <FooterCard {...fCard2Data}/>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="footer-container footer-bottom bg-darker">
                <div className="footer-privacy padding">
                    <div className="footer-privacy-links">
                        <a className="text-ssm" href="#privacy">Privacybeleid</a>
                        <a className="text-ssm" href="#cookie">Cookiebeleid</a>
                    </div>
                    <p className="footer-pricacy-copyright text-ssm">© 2021 F.E.E. & Techlink</p>
                </div>
            </div>
        </footer>
    )
}


export default index