// General imports
import { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next'; // useTranslation hook imported to enable translations
import myLogo from '../aboutMe/My_logo_Dark.png';
import '../welcome/welcome.css';


const AboutMe = () => {
    const { t } = useTranslation(); // Translation function enabled

    // Refs and states for animation on scroll
    const aboutMeTitleRef = useRef<HTMLDivElement>(null);
    const aboutMeContentTextRef = useRef<HTMLDivElement>(null);
    const aboutMeContentImageRef = useRef<HTMLImageElement>(null);
    const [aboutMeTitleVisible, setAboutMeTitleVisible] = useState(false);
    const [aboutMeContentTextVisible, setAboutMeContentTextVisible] = useState(false);
    const [aboutMeContentImageVisible, setAboutMeContentImageVisible] = useState(false);

    // Function for fade-in effect on scroll for any element
    function useAnimationObserver(ref: React.RefObject<HTMLElement | null>, setVisible: React.Dispatch<React.SetStateAction<boolean>>) {
        useEffect(() => {
            const observer = new window.IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setVisible(true);
                    }
                },
                { threshold: 0.4 }
            );
            // Obsserver detects when an element enters the user's view
            if (ref.current) {
                observer.observe(ref.current);
            }
            return () => observer.disconnect();
        }, [ref, setVisible,]);
    }

    // Using the observer function for each necessary element
    useAnimationObserver(aboutMeTitleRef, setAboutMeTitleVisible);
    useAnimationObserver(aboutMeContentTextRef, setAboutMeContentTextVisible);
    useAnimationObserver(aboutMeContentImageRef, setAboutMeContentImageVisible);

    return (
        <section>
            {/* "About Me" section with a scrolling effect or when clicking on the label of the same name in the navbar.
                The id "aboutMe" is used for navigation from the navbar */}
            <div className={`aboutMeTitle${aboutMeTitleVisible ? ' visible' : ''}`} id="aboutMe" ref={aboutMeTitleRef}>
                {t("aboutMe.title")} {/* Translate function used */}
            </div>
            {/* Image on the right and text on the left */}
            <div className="containerContentAboutMe">
                <div className={`aboutMeContentText${aboutMeContentTextVisible ? ' visible' : ''}`} ref={aboutMeContentTextRef}>
                    <p>
                        {t("aboutMe.description")} {/* Translate function used */}
                    </p>
                </div>
                <img src={myLogo} alt="Image" className={`aboutMeContentImage${aboutMeContentImageVisible ? ' visible' : ''}`} ref={aboutMeContentImageRef} />
            </div>
        </section>
    );
}

export default AboutMe;