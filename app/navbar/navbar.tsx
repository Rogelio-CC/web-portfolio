// General imports
import { useState } from 'react';
import { useTranslation } from 'react-i18next'; // useTranslation hook imported to enable translations
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { PiDevicesFill } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import ContactModal from './contactModal';
import myLogo from '../navbar/My_logo_light.png';
import '../welcome/welcome.css';

const Navbar = () => {
    const { t } = useTranslation(); // useTranslation hook enabled
    const [isContactModalOpen, setIsContactModalOpen] = useState(false); // State to control the visibility of the contact modal
    const [menuOpen, setMenuOpen] = useState(false); // State to control the visibility of the mobile menu

    return (
        <section>
            {/* Navbar with logo and GitHub and LinkedIn icons */}
            <nav className="navbarMain">
                {/* Hamburger menu button for mobile view */}
                <button className="hamburgerBtn" onClick={() => setMenuOpen(!menuOpen)}>
                    <GiHamburgerMenu />
                </button>
                {/* Navbar links, icons and photo, toggled by menuOpen state */}
                <div className={`navbarLinks ${menuOpen ? 'open' : ''}`}>
                    <img src={myLogo} alt="My logo" className="myLogo" />
                    <div className='containerLabels'>
                        <a href="#projects">{t("navbar.projects")}</a>
                        <a href="#techicalSkills">{t("navbar.technicalSkills")}</a>
                        <a href="#experience">{t("navbar.experience")}</a>
                        <a href="#aptitudes">{t("navbar.softSkills")}</a>
                        <a href="#aboutMe">{t("navbar.aboutMe")}</a>
                    </div>
                    <div className='containerIcons'>
                        <a href="https://github.com/Rogelio-CC" target="_blank" rel="noopener noreferrer">
                            <FaGithub className='iconsNavbar' />
                        </a>
                        <a href="https://www.linkedin.com/in/rogelio-ceballos-castillo-a213b0281/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className='iconsNavbar' />
                        </a>
                        <PiDevicesFill
                            className='iconsNavbar'
                            onClick={() => setIsContactModalOpen(true)}
                        />
                    </div>
                </div>
            </nav>
            {/* Contact modal shows when isContactModalOpen is true */}
            <ContactModal open={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
        </section>
    );
};

export default Navbar;