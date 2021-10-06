import "./Hero.scss"

interface Props {
    title: string
    subtitle: string
    backgroundImage: string
}


const Hero: React.FC<Props> = ({title, subtitle, backgroundImage}) => {
    return (
        <header id="hero">
            <img src={backgroundImage} alt="" />
            <div className="hero-text">
                <h1>{title}</h1>
                <hr className="accent"/>
                <h2 className="font-primary">{subtitle}</h2>
            </div>
        </header>
    )
}

export default Hero