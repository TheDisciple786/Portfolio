import React from 'react';
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Manav Singh</h1>
                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#projects" className="footer__link">Projects</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.instagram.com/not_._manav/profilecard/?igsh=MTE0c3B4eDFhc3EzcA==" className="footer__social-link" target="_blank" rel="noopener noreferrer">
                        <i class="bx bxl-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/manav-singh-661a4b308" className="footer__social-link" target="_blank" rel="noopener noreferrer">
                        <i class="bx bxl-linkedin"></i>
                    </a>
                    <a href="https://github.com/TheDisciple786" className="footer__social-link" target="_blank" rel="noopener noreferrer">
                        <i class="bx bxl-github"></i>
                    </a>
                </div>

                <span className="footer__copy">&#169; Cypticalcoder. All rights reserved</span>
            </div>
        </footer>
    );
}

export default Footer;