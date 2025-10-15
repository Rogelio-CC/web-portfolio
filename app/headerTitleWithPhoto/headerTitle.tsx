// General imports
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next'; // useTranslation hook imported to enable translations
import myPhoto from '../headerTitleWithPhoto/My_photo.jpg';
import '../welcome/welcome.css';

const HeaderTitle = () => {
    const { t } = useTranslation(); // useTranslation hook enabled
    const textHeader = t("headerTitle.title"); // Translate function used for the main title
    const [textHeaderAnimation, setTextHeaderAnimation] = useState(''); // State for typing effect

    // Typing effect for the main title
    useEffect(() => {
        let i = 0;
        setTextHeaderAnimation(''); // Reset text before starting the animation
        const interval = setInterval(() => {
            setTextHeaderAnimation(textHeader.slice(0, i + 1));
            i++;
            if (i === textHeader.length) clearInterval(interval);
        }, 80); // --> Speed of the typing effect
        return () => clearInterval(interval);
    }, [textHeader]); // Re-run effect if textHeader changes by language change

    return (
        <section>
            {/* The main title with photo */}
            <div className='containerMain'>
                <div className="photoContainer">
                    <img src={myPhoto} alt="My photo" className="myPhoto" />
                </div>
                <h1 className='textHeader'>
                    {/* Typing effect implementation */}
                    {textHeaderAnimation.length < textHeader.length ? (
                        <>
                            {textHeaderAnimation}
                            <span className="typing-cursor">|</span>
                        </>
                    ) : textHeader}
                </h1>
            </div>
        </section>
    );
}

export default HeaderTitle;