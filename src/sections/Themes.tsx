import "./Themes.scss"

import type {ThemeCardImageData} from "../components/cards/ThemeCard"
import ThemeCard from "../components/cards/ThemeCard"

import themeCardImage1 from "../assets/images/themeCardImage1.png"
import themeCardImage2 from "../assets/images/themeCardImage2.png"

const Themes = () => {
    const themeCardImage1Data: ThemeCardImageData = {
        src: themeCardImage1,
        alt: "Girl taking picture with finger-camera of a sunny day"
    }
    const themeCardImage2Data: ThemeCardImageData = {
        src: themeCardImage2,
        alt: "Hightech toutchscreen that displays an advanced chip"
    }
    return (
        <section id="themes" className="padding">
            <div className="content">
                <div className="span-container">
                    <span className="text-fat bg-accent-green">Om mee aan de toekomst van de energietransitie te
                    bouwen en ze te installeren, moet het ecosysteem 
                    zich op verschillende domeinen versterken.</span>
                </div>

                <div className="theme-cards">
                    <ThemeCard
                        href="#leesmeer"
                        title="Holistische energieconcepten"
                        text="Alle spelers binnen het ecosysteem moeten samenwerken aan de uitwerking van een totaalconcept rond energetische renovaties. Het totaalconcept omvat een holistische benadering vanuit de gehele keten."
                        image={themeCardImage1Data}
                    />
                    <ThemeCard
                        href="#leesmeer"
                        title="Ontzorging van de consument"
                        text="Het ecosysteem wordt een totaaladviseur die zijn technische en digitale skills vertaalt naar begrijpbare oplossingen voor de klant."
                        image={themeCardImage2Data}
                    />
                    <ThemeCard
                        href="#leesmeer"
                        accentColor="blue"
                        title="Samenwerking en businessmodellen"
                        text="Totaalconcepten aanbieden betekent ook dat we moeten kijken naar nieuwe samenwerkingsverbanden binnen en buiten de sector, maar ook het exploreren van nieuwe businessmodellen zoals ‘as-a-service’."
                        image={themeCardImage1Data}
                    />
                    <ThemeCard
                        href="#leesmeer"
                        title="Versterken van skills en vaardigheden"
                        text="Het versterken van technische, digitale en communicatieskills is van fundamenteel belang om mee te blijven met innovatie en de beste service aan de klant te kunnen bieden."
                        image={themeCardImage2Data}
                    />
                    <ThemeCard
                        href="#leesmeer"
                        title="vormgeven beleid energietransitie"
                        text="F.E.E. en Techlink willen mee het beleid rond de energietransitie vormgeven, we willen zowel de sector informeren over het beleid, alsook het beleid toetsen aan de realiteit en daarvoor hebben we feedback van het hele ecosysteem nodig."
                        image={themeCardImage1Data}
                    />
                </div>
            </div>
        </section>
    )
}


export default Themes