// General imports
import { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next'; // useTranslation hook imported to enable translations
import salleLogo from '../experience/Salle_Logo.png';
import '../welcome/welcome.css';

const Experience = () => {
    const { t } = useTranslation(); // useTranslation hook enabled

    // Refs and states for animation on scroll
    const experiencieTitleRef = useRef<HTMLDivElement>(null);
    const experiencieContentTextRef = useRef<HTMLDivElement>(null);
    const experiencieContentImageRef = useRef<HTMLImageElement>(null);
    const [experiencieTitleVisible, setExperiencieTitleVisible] = useState(false);
    const [experiencieContentTextVisible, setExperiencieContentTextVisible] = useState(false);
    const [experiencieContentImageVisible, setExperiencieContentImageVisible] = useState(false);

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
    useAnimationObserver(experiencieTitleRef, setExperiencieTitleVisible);
    useAnimationObserver(experiencieContentTextRef, setExperiencieContentTextVisible);
    useAnimationObserver(experiencieContentImageRef, setExperiencieContentImageVisible);

    return (
        <section>
            {/* "Experience" section with a scrolling effect or when clicking on the label of the same name in the navbar.
            The id "experience" is used for navigation from the navbar */}
            <div className={`experienceTitle${experiencieTitleVisible ? ' visible' : ''}`} id="experience" ref={experiencieTitleRef}>
                {t("experience.title")} {/* Translate function used */}
            </div>
            <div className="containerContentExperience">
                {/* Image on the left and text on the right */}
                <img src={salleLogo} alt="My image" className={`experienceContentImage${experiencieContentImageVisible ? ' visible' : ''}`} ref={experiencieContentImageRef} />
                <div className={`experienceContentText${experiencieContentTextVisible ? ' visible' : ''}`} ref={experiencieContentTextRef}>
                    <p>
                        {t("experience.description")} {/* Translate function used */}
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Experience;