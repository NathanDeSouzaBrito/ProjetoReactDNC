import { Link } from "react-router-dom"

import IconFace from "../../assets/iconFacebook.svg"
import IconX from "../../assets/iconX.svg"
import IconLinkedin from "../../assets/iconLinkedin.svg"
import IconInsta from "../../assets/iconInstagram.svg"
import LogoDNC from "../../assets/logoDNC.svg"
import LogoBrasil from "../../assets/logoBrasil.svg"
import LogoUSA from "../../assets/logoUSA.svg"

import "./Footer.css"


const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="d-flex jc-space-between mobile-fd-column">
                    <div className="footer-logo-col">
                        <img src={LogoDNC} alt="Logo DNC" className="footer-logo"/>
                        <p className="grey-1-color">A escola que prepara você para as profissões em alta no mercado de trabalho.</p>
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
                            <h3>Pages</h3>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/services">Services</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h3>Contact</h3>
                            <p className="grey-1-color">R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP 12243-030 </p>
                            <p className="grey-1-color">suporte@escoladnc.com.br</p>
                            <p className="grey-1-color">(19) 99187-4342</p>
                        </div>
                    </div>
                </div>
                <div className="d-flex jc-space-between footer-copy">
                    <p className="grey-1-color">Copyright © DNC - 2024</p>
                    <div className="langs-area d-flex">
                        <img src={LogoBrasil} alt="Português" height="24px" />
                        <img src={LogoUSA} alt="English" height="24px" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer