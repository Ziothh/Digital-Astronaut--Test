import "./ThemeCard.scss"

import Icon from "./components/Icon"
// import { ReactComponent as FileDownloadIcon } from "../../assets/icons/fileDownloadIcon.svg";

import { ReactComponent as EyeIcon} from "../../assets/icons/eyeIcon.svg"

export type ThemeCardImageData = {src: string, alt: string}

interface Props {
    image: ThemeCardImageData
    accentColor?: "blue"
    title: string
    text: string
    href: string
}


const ThemeCard: React.FC<Props> = ({image, accentColor="no", title, text, href}) => {
    return (
        <div className="theme-card box-shadow">
            <div className="img-container">
                <div className="img-overlay">
                    <a href={href}>Lees Meer</a>
                </div>
                <img src={image.src} alt={image.alt} />
            </div>
            <div className="theme-card-text">
                <h2 className={`${accentColor}-accent`}>{title}</h2>
                <p className="text-ssm">{text}</p>
            </div>
            <Icon className={`bg-accent-${accentColor}`}>
                <EyeIcon/>
            </Icon>
            
        </div>
    )
}


export default ThemeCard