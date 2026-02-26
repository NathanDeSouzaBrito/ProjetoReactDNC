import { Link } from "react-router-dom"
import { useContext } from "react"

import IconFace from "../../assets/iconFacebook.svg"
import IconX from "../../assets/iconX.svg"
import IconLinkedin from "../../assets/iconLinkedin.svg"
import IconInsta from "../../assets/iconInstagram.svg"
import LogoDNC from "../../assets/logoDNC.svg"
import LogoBrasil from "../../assets/logoBrasil.svg"
import LogoUSA from "../../assets/logoUSA.svg"

import "./Footer.css"
import { AppContext } from "../../contexts/AppContext"

const Footer = () => {
    const appContext = useContext(AppContext);
    const changeLanguage = (country) => {
        appContext.setLanguage(country);
    }
    return (
        <footer>
            <div className="container">
                <div className="d-flex jc-space-between mobile-fd-column">
                    <div className="footer-logo-col">
                        <img src={LogoDNC} alt="Logo DNC" className="footer-logo"/>
                        <p className="grey-1-color">{appContext.languages[appContext.language].general.footerLogoText}</p>
                        <div className="d-flex social-links">
                            <a href="https://www.facebook.com" target="_blank">
                                <img src={IconFace} alt="Facebook" />
                            </a>
                            <a href="https://www.x.com" target="_blank">
                                <img src={IconX} alt="X" />
                            </a>
                            <a href="https://www.linkedin.com" target="_blank">
                                <img src={IconLinkedin} alt="LinkedIn" />
                            </a>
                            <a href="https://www.instagram.com" target="_blank">
                                <img src={IconInsta} alt="Instagram" />
                            </a>
                        </div>
                    </div>
                    <div className="d-flex mobile-fd-column">
                        <div className="footer-col">
                            <h3>{appContext.languages[appContext.language].general.pages}</h3>
                            <ul>
                                <li><Link to="/">{appContext.languages[appContext.language].menu.home}</Link></li>
                                <li><Link to="/about">{appContext.languages[appContext.language].menu.about}</Link></li>
                                <li><Link to="/projects">{appContext.languages[appContext.language].menu.projects}</Link></li>
                                <li><Link to="/contact">{appContext.languages[appContext.language].menu.contact}</Link></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h3>{appContext.languages[appContext.language].general.contact}</h3>
                            <p className="grey-1-color">R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP 12243-030 </p>
                            <p className="grey-1-color">suporte@escoladnc.com.br</p>
                            <p className="grey-1-color">(19) 99187-4342</p>
                        </div>
                    </div>
                </div>
                <div className="d-flex jc-space-between footer-copy">
                    <p className="grey-1-color">Copyright © DNC - 2024</p>
                    <div className="langs-area d-flex">
                        <img src={LogoBrasil} alt="Português" height="24px" onClick={() => changeLanguage("br")} />
                        <img src={LogoUSA} alt="English" height="24px" onClick={() => changeLanguage("en")} />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer