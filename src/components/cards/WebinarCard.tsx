import "./WebinarCard.scss"

import CardCTA from "./components/CardCTA"

import WebinarPicture from "../../assets/images/webinar.png"
import { ReactComponent as FileDownloadIcon } from "../../assets/icons/fileDownloadIcon.svg";
import { ReactComponent as FilmIcon } from "../../assets/icons/filmIcon.svg";

const WebinarCard = () => {
    return (
        <div className="webinar-card bg-dark padding box-shadow">
            <img src={WebinarPicture} alt="Lady smiling at her Macbook" />
            
            <div className="webinar-card-content">
                <p className="text-sm">In juni 2021 lanceerden F.E.E. en Techlink LINK2030 via een webinar. Herbekijk hier de uitzending en kom meer te weten over de impact van de energietransitie op de sector.</p>
            
                <div className="webinar-card-cta">
                    <CardCTA 
                        text="Download het rapport"
                        href="#rapport"
                        icon={<FileDownloadIcon title="Download het rapport"/>}
                    />
                    <CardCTA 
                        text="Bekijk de webinar"
                        href="#bekijk"
                        icon={<FilmIcon title="Bekijk de webinar"/>}
                    />
                </div>
            </div>
        </div>
    )
}


export default WebinarCard