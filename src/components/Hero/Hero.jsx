import { Link } from "react-router-dom"
import { useContext } from "react"
import Button from "../Button/Button"
import { AppContext } from "../../contexts/AppContext"
import "./Hero.css"

const Hero = () => {
    const appContext = useContext(AppContext)

    return (
        <div className="hero d-flex al-end">
            <div className="hero-text">
                <h1>{appContext.languages[appContext.language].hero.title}</h1>
                <p>{appContext.languages[appContext.language].hero.subtitle}</p>
                <Link to="/">
                    <Button buttonStyle="secondary" arrow >
                        {appContext.languages[appContext.language].hero.cta}
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default Hero