// General imports
import { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next'; // useTranslation hook imported to enable translations
import ImageProjectModal from '../relevantProjects/imageProjectModal';  // Modal component reusabled and imported to display certifications in a larger view
import '../welcome/welcome.css';
import './certifications.css';

import AWSCloudPractitioner from '../certifications/images/AWSCloudPractitioner.png';
import CiscoCertification from '../certifications/images/CiscoIntroductionToCybersecurity.png';

const Certifications = () => {
  const { t } = useTranslation(); // useTranslation hook enabled

  const AWS = AWSCloudPractitioner;
  const Cisco = CiscoCertification;

  // Refs and states for animation on scroll
  const certificationsTitleRef = useRef<HTMLDivElement>(null);
  const certificationsContainerWeb1Ref = useRef<HTMLDivElement>(null);
  const certificationsContainerWeb2Ref = useRef<HTMLDivElement>(null);
  const [certificationsTitleVisible, setCertificationsTitleVisible] = useState(false);
  const [certificationsContainerWeb1Visible, setCertificationsContainerWeb1Visible] = useState(false);
  const [certificationsContainerWeb2Visible, setCertificationsContainerWeb2Visible] = useState(false);

  // State for the modal that shows the expanded image when clicking on any image of the projects
  const [expandedImg, setExpandedImg] = useState<string | null>(null);

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

    useAnimationObserver(certificationsTitleRef, setCertificationsTitleVisible);
    useAnimationObserver(certificationsContainerWeb1Ref, setCertificationsContainerWeb1Visible);
    useAnimationObserver(certificationsContainerWeb2Ref, setCertificationsContainerWeb2Visible);

    return (
        <section>
             {/* "Certifications" title and containers with fade-in animation */}
            <div className={`certificationsTitle${certificationsTitleVisible ? ' visible' : ''}`} id="certifications" ref={certificationsTitleRef}>
                <h2>{t('certifications.title')}</h2>
            </div>
            {/* Certification: AWS Cloud Practitioner */}
            <div className={`certificationsContainerWeb${certificationsContainerWeb1Visible ? ' visible' : ''}`} ref={certificationsContainerWeb1Ref}>
                <div className="certificationContainer">
                    <img
                        src={AWS}
                        alt={`AWS Cloud Practitioner image`}
                        className="certificationsImg"
                        onClick={() => setExpandedImg(AWS)}
                    />
                </div>
                <div className="certificationInfo">
                    <h3>{t('certifications.certification1.title')}</h3>
                    <p>
                        <strong>{t('certifications.textYear1')}:</strong> {t('certifications.certification1.startYear')}
                    </p>
                    <p>
                        <strong>{t('certifications.textYear2')}:</strong> {t('certifications.certification1.endYear')}
                    </p>
                    <a
                        href="https://www.credly.com/badges/c3975298-365f-401d-9fea-c9d95622bfac/linked_in_profile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="certificationsBadgeBtn"
                    >
                        {t('certifications.badgeButtonText')}
                    </a>
                </div>
            </div>
            {/* Certification: Cisco: Introduction to Cybersecurity */}
            <div className={`certificationsContainerWeb${certificationsContainerWeb2Visible ? ' visible' : ''}`} ref={certificationsContainerWeb2Ref}>
                <div className="certificationContainer">
                    <img
                        src={Cisco}
                        alt={`Cisco: Introduction to Cybersecurity image`}
                        className="certificationsImg"
                        onClick={() => setExpandedImg(Cisco)}
                    />
                </div>
                <div className="certificationInfo">
                    <h3>{t('certifications.certification2.title')}</h3>
                    <p>
                        <strong>{t('certifications.textYear1')}:</strong> {t('certifications.certification2.startYear')}
                    </p>
                    <a
                        href="https://www.credly.com/badges/9294d31a-a9a3-4e2f-a1d0-53f70d64cdeb/linked_in_profile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="certificationsBadgeBtn"
                    >
                        {t('certifications.badgeButtonText')}
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

export default Certifications;