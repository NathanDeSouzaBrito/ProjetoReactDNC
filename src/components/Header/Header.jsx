import { useContext, useState } from "react"
import { Link } from "react-router-dom"

import Logo from "../../assets/logoDNC.svg"
import "./Header.css"

import Button from "../Button/Button"
import { AppContext } from "../../contexts/AppContext"



const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    const appContext = useContext(AppContext);
    

    return (
        <header>
            <div className="container">
                <div className="al-center d-flex jc-space-between">
                    <Link to="/"><img src={Logo} alt="Logo DNC" /></Link>
                    <div className="mobile-menu">
                        <Button buttonStyle="secondary" onClick={toggleMenu}>
                            Menu
                        </Button>
                    </div>
                <nav className={isMenuOpen ? "open" : ""}>
                    <Button buttonStyle="unstyled" className="mobile-menu close-btn" onClick={() => setIsMenuOpen(false)}>
                        &times;
                    </Button>
                    <ul className="d-flex">
                        <li><Link to="/">{appContext.languages[appContext.language].menu.home}</Link></li>
                        <li><Link to="/about">{appContext.languages[appContext.language].menu.about}</Link></li>
                        <li><Link to="/projects">{appContext.languages[appContext.language].menu.projects}</Link></li>
                        <li><Link to="/contact">{appContext.languages[appContext.language].menu.contact}</Link></li>
                    </ul>
                </nav>
                </div>
            </div>
        </header>
    )
}

export default Header