// General imports
import { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next'; // useTranslation hook imported to enable translations
import ImageProjectModal from './imageProjectModal';
import '../welcome/welcome.css';

// Importing images from Mobile Calculator project 
import imageCal1 from '../relevantProjects/images/ImagesCalculator/Image_Calculator1.jpeg';
import imageCal2 from '../relevantProjects/images/ImagesCalculator/Image_Calculator2.jpeg';
import imageCal3 from '../relevantProjects/images/ImagesCalculator/Image_Calculator3.jpeg';
import imageCal4 from '../relevantProjects/images/ImagesCalculator/Image_Calculator4.jpeg';
import imageCal5 from '../relevantProjects/images/ImagesCalculator/Image_Calculator5.jpeg';

// Importing images from FakeBuster project
import imageFB1 from '../relevantProjects/images/ImageFakeBuster/FirstImage_FakeBister.png';
import imageFB2 from '../relevantProjects/images/ImageFakeBuster/SecondImage_FakeBister.png';
import imageFB3 from '../relevantProjects/images/ImageFakeBuster/ThirdImage_FakeBister.png';

// Importing images from the MyBookShelf project
import imageMBS1 from '../relevantProjects/images/ImagesMyBookShelf/ImageMyBookShelf1.jpeg';
import imageMBS2 from '../relevantProjects/images/ImagesMyBookShelf/ImageMyBookShelf2.jpeg';
import imageMBS3 from '../relevantProjects/images/ImagesMyBookShelf/ImageMyBookShelf3.jpeg';
import imageMBS4 from '../relevantProjects/images/ImagesMyBookShelf/ImageMyBookShelf4.jpeg';
import imageMBS5 from '../relevantProjects/images/ImagesMyBookShelf/ImageMyBookShelf5.jpeg';

// Importing videos from O'Clock Store project
import imageOCS1 from '../relevantProjects/videos/VideosOClockStore/FirstVideo_OClockStore.mp4';
import imageOCS2 from '../relevantProjects/videos/VideosOClockStore/SecondVideo_OClockStore.mp4';
import imageOCS3 from '../relevantProjects/videos/VideosOClockStore/ThirdVideo_OClockStore.mp4';

// Importing images from the from the internship project "Indicator System for La Salle Bajío University (in development)"
import imageIP1 from '../relevantProjects/images/ImageIntershipProject/ImageIntershipProject1.png';
import imageIP2 from '../relevantProjects/images/ImageIntershipProject/ImageIntershipProject2.png';
import imageIP3 from '../relevantProjects/images/ImageIntershipProject/ImageIntershipProject3.png';
import imageIP4 from '../relevantProjects/images/ImageIntershipProject/ImageIntershipProject4.png';
import imageIP5 from '../relevantProjects/images/ImageIntershipProject/ImageIntershipProject5.png';



const RelevantProjects = () => {
    const { t } = useTranslation(); // useTranslation hook enabled
    // Array that contains the images and video of each project
    const calculatorImages = [imageCal1, imageCal2, imageCal3, imageCal4, imageCal5];
    const fakeBusterImages = [imageFB1, imageFB2, imageFB3];
    const myBookShelfImages = [imageMBS1, imageMBS2, imageMBS3, imageMBS4, imageMBS5];
    const oClockStoreVideos = [imageOCS1, imageOCS2, imageOCS3];
    const intershipProjectImages = [imageIP1, imageIP2, imageIP3, imageIP4, imageIP5];

    // Refs and states for animation on scroll
    const projectsTitleRef = useRef<HTMLDivElement>(null);
    const projectContainerWeb1Ref = useRef<HTMLDivElement>(null);
    const projectContainerWeb2Ref = useRef<HTMLDivElement>(null);
    const projectContainerWeb3Ref = useRef<HTMLDivElement>(null);
    const projectContainerMobile1Ref = useRef<HTMLDivElement>(null);
    const projectContainerMobile2Ref = useRef<HTMLDivElement>(null);
    const [projectsTitleVisible, setProjectsTitleVisible] = useState(false);
    const [projectContainerWeb1Visible, setProjectContainerWeb1Visible] = useState(false);
    const [projectContainerWeb2Visible, setProjectContainerWeb2Visible] = useState(false);
    const [projectContainerWeb3Visible, setProjectContainerWeb3Visible] = useState(false);
    const [projectContainerMobile1Visible, setProjectContainerMobile1Visible] = useState(false);
    const [projectContainerMobile2Visible, setProjectContainerMobile2Visible] = useState(false);

    // State for the modal that shows the expanded image when clicking on any image of the projects
    const [expandedImg, setExpandedImg] = useState<string | null>(null);

    // State declarations for project images and videos
    const [currentCalcImg, setCurrentCalcImg] = useState(0);
    const [currentFBImg, setCurrentFBImg] = useState(0);
    const [currentMBSImg, setCurrentMBSImg] = useState(0);
    const [currentOCSVideo, setCurrentOCSVideo] = useState(0);
    const [currentIPImg, setCurrentIPImg] = useState(0);


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

    // Functions for the image carousel of the projects
    function handlePrevImg(images: string[], setChangeImg: React.Dispatch<React.SetStateAction<number>>) {
        setChangeImg((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }
    function handleNextImg(images: string[], setChangeImg: React.Dispatch<React.SetStateAction<number>>) {
        setChangeImg((next) => (next === images.length - 1 ? 0 : next + 1));
    }

    // Using the observer function for each necessary element
    useAnimationObserver(projectsTitleRef, setProjectsTitleVisible);
    useAnimationObserver(projectContainerWeb1Ref, setProjectContainerWeb1Visible);
    useAnimationObserver(projectContainerWeb2Ref, setProjectContainerWeb2Visible);
    useAnimationObserver(projectContainerWeb3Ref, setProjectContainerWeb3Visible);
    useAnimationObserver(projectContainerMobile1Ref, setProjectContainerMobile1Visible);
    useAnimationObserver(projectContainerMobile2Ref, setProjectContainerMobile2Visible);

    return (
        <section>
            {/* "Relevant Projects" title and containers with fade-in animation */}
            <div className={`projectsTitle${projectsTitleVisible ? ' visible' : ''}`} id="projects" ref={projectsTitleRef}>
                <h2>{t('relevantProjects.title')}</h2>
            </div>
            {/* Project: Strategy and indicator System */}
            <div className={`projectsContainerWeb${projectContainerWeb1Visible ? ' visible' : ''}`} ref={projectContainerWeb1Ref}>
                {/* Image carousel for project screenshots */}
                <div className="projectImagesCarouselWeb">
                    <button className="carouselBtn" onClick={() => handlePrevImg(intershipProjectImages, setCurrentIPImg)} aria-label="Imagen anterior">{'<'}</button>
                    <img
                        src={intershipProjectImages[currentIPImg]}
                        alt={`Strategy and indicator System image ${currentIPImg + 1}`}
                        className="webProjectsImg"
                        onClick={() => setExpandedImg(intershipProjectImages[currentIPImg])}
                    />
                    <button className="carouselBtn" onClick={() => handleNextImg(intershipProjectImages, setCurrentIPImg)} aria-label="Imagen siguiente">{'>'}</button>
                </div>
                {/* Project information */}
                <div className="projectInfo">
                    <h3>{t('relevantProjects.project1.title')}</h3>
                    <p>
                        {t('relevantProjects.project1.description')}
                    </p>
                    <p>
                        <strong>{t('relevantProjects.technologyUsed')}:</strong> Blazor, Blazorise.
                    </p>
                    <p>
                        <strong>{t('relevantProjects.project1.warningText')}</strong>
                    </p>
                </div>
            </div>
            {/* Project: FakeBuster */}
            <div className={`projectsContainerWeb${projectContainerWeb2Visible ? ' visible' : ''}`} ref={projectContainerWeb2Ref}>
                <div className="projectImagesCarouselWeb">
                    <button className="carouselBtn" onClick={() => handlePrevImg(fakeBusterImages, setCurrentFBImg)} aria-label="Imagen anterior">{'<'}</button>
                    <img
                        src={fakeBusterImages[currentFBImg]}
                        alt={`FakeBuster image ${currentFBImg + 1}`}
                        className="webProjectsImg"
                        onClick={() => setExpandedImg(fakeBusterImages[currentFBImg])}
                    />
                    <button className="carouselBtn" onClick={() => handleNextImg(fakeBusterImages, setCurrentFBImg)} aria-label="Imagen siguiente">{'>'}</button>
                </div>
                <div className="projectInfo">
                    <h3>{t('relevantProjects.project2.title')}</h3>
                    <p>
                        {t('relevantProjects.project2.description')}
                    </p>
                    <p>
                        <strong>{t('relevantProjects.technologyUsed')}:</strong> HTML, CSS, Python.
                    </p>
                    <a
                        href="https://github.com/Rogelio-CC/FakeBuster-Django-Python"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="projectRepoBtn"
                    >
                        {t('relevantProjects.buttonText')}
                    </a>
                </div>
            </div>
            {/* Project: O'Clock Store */}
            <div className={`projectsContainerWeb${projectContainerWeb3Visible ? ' visible' : ''}`} ref={projectContainerWeb3Ref}>
                <div className="projectImagesCarouselWeb">
                    <button className="carouselBtn" onClick={() => handlePrevImg(oClockStoreVideos, setCurrentOCSVideo)} aria-label="Imagen anterior">{'<'}</button>
                    <video
                        src={oClockStoreVideos[currentOCSVideo]}
                        controls
                        className="webProjectsImg"
                    />
                    <button className="carouselBtn" onClick={() => handleNextImg(oClockStoreVideos, setCurrentOCSVideo)} aria-label="Imagen siguiente">{'>'}</button>
                </div>
                <div className="projectInfo">
                    <h3>{t('relevantProjects.project3.title')}</h3>
                    <p>
                        {t('relevantProjects.project3.description')}
                    </p>
                    <p>
                        <strong>{t('relevantProjects.technologyUsed')}:</strong> HTML y CSS.
                    </p>
                    <a
                        href="https://github.com/Rogelio-CC/O_Clock_Store"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="projectRepoBtn"
                    >
                        {t('relevantProjects.buttonText')}
                    </a>
                </div>
            </div>
            {/* Project: MyBookShelf */}
            <div className={`projectsContainerMobile${projectContainerMobile1Visible ? ' visible' : ''}`} ref={projectContainerMobile1Ref}>
                <div className="projectImagesCarouselMobile">
                    <button className="carouselBtn" onClick={() => handlePrevImg(myBookShelfImages, setCurrentMBSImg)} aria-label="Imagen anterior">{'<'}</button>
                    <img
                        src={myBookShelfImages[currentMBSImg]}
                        alt={`MyBookShelf image ${currentMBSImg + 1}`}
                        className="mobileProjectsImg"
                        onClick={() => setExpandedImg(myBookShelfImages[currentMBSImg])}
                    />
                    <button className="carouselBtn" onClick={() => handleNextImg(myBookShelfImages, setCurrentMBSImg)} aria-label="Imagen siguiente">{'>'}</button>
                </div>
                <div className="projectInfo">
                    <h3>{t('relevantProjects.project4.title')}</h3>
                    <p>
                        {t('relevantProjects.project4.description')}
                    </p>
                    <p>
                        <strong>{t('relevantProjects.technologyUsed')}:</strong> Expo, JavaScript, CSS, Node js, MySQL.
                    </p>
                    <a
                        href="https://github.com/Rogelio-CC/My-book-shelf-expo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="projectRepoBtn"
                    >
                        {t('relevantProjects.buttonText')}
                    </a>
                </div>
            </div>
            {/* Project: Mobile Calculator */}
            <div className={`projectsContainerMobile${projectContainerMobile2Visible ? ' visible' : ''}`} ref={projectContainerMobile2Ref}>
                <div className="projectImagesCarouselMobile">
                    <button className="carouselBtn" onClick={() => handlePrevImg(calculatorImages, setCurrentCalcImg)} aria-label="Imagen anterior">{'<'}</button>
                    <img
                        src={calculatorImages[currentCalcImg]}
                        alt={`Mobile Calculator image ${currentCalcImg + 1}`}
                        className="mobileProjectsImg"
                        onClick={() => setExpandedImg(calculatorImages[currentCalcImg])}

                    />
                    <button className="carouselBtn" onClick={() => handleNextImg(calculatorImages, setCurrentCalcImg)} aria-label="Imagen siguiente">{'>'}</button>
                </div>
                <div className="projectInfo">
                    <h3>{t('relevantProjects.project5.title')}</h3>
                    <p>
                        {t('relevantProjects.project5.description')}
                    </p>
                    <p>
                        <strong>{t('relevantProjects.technologyUsed')}:</strong> Expo, JavaScript, CSS.
                    </p>
                    <a
                        href="https://github.com/Rogelio-CC/Expo-React-Native-Basic-Calculator"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="projectRepoBtn"
                    >
                        {t('relevantProjects.buttonText')}
                    </a>
                </div>
            </div>
            {/* Modal for displaying the expanded image */}
            <ImageProjectModal
                open={expandedImg !== null}
                imgSrc={expandedImg ?? ''}
                onClose={() => setExpandedImg(null)}
            />
        </section>
    );
}

export default RelevantProjects;