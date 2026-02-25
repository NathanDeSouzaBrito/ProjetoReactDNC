import { Link } from "react-router-dom"
import Button from "../Button/Button"
import "./Hero.css"

const Hero = () => {
    return (
        <div className="hero d-flex al-end">
            <div className="hero-text">
                <h1>Let Your Home Be Unique</h1>
                <p>There are many variations of the passages of lorem Ipsum from available, majority.</p>
                <Link to="/">
                    <Button buttonStyle="secondary" arrow >
                        Get Started
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default Hero