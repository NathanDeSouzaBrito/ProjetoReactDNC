import { useState } from "react"
import { Link } from "react-router-dom"

import Logo from "../../assets/logoDNC.svg"
import "./Header.css"

import Button from "../Button/Button"



const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

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
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
                </div>
            </div>
        </header>
    )
}

export default Header