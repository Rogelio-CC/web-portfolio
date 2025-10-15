// General imports
import { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next'; // useTranslation hook imported to enable translations
import { GiTeamIdea, GiConversation, GiGiftOfKnowledge } from "react-icons/gi";
import { VscLightbulbAutofix } from "react-icons/vsc";
import { MdAssignmentTurnedIn } from "react-icons/md";
import '../welcome/welcome.css';

const SoftSkills = () => {
  const { t } = useTranslation(); // useTranslation hook enabled

  // Refs and states for animation on scroll
  const aptitudesTitleRef = useRef<HTMLDivElement>(null);
  const aptitudesContentRef = useRef<HTMLDivElement>(null);
  const [aptitudesTitleVisible, setAptitudesTitleVisible] = useState(false);
  const [aptitudesContentVisible, setAptitudesContentVisible] = useState(false);

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
  useAnimationObserver(aptitudesTitleRef, setAptitudesTitleVisible);
  useAnimationObserver(aptitudesContentRef, setAptitudesContentVisible);

  return (
    <section>
      {/* "Soft Skills" title with fade-in animation */}
      <div className={`aptitudesTitle${aptitudesTitleVisible ? ' visible' : ''}`} id="aptitudes" ref={aptitudesTitleRef}>
        <h2>{t('softSkills.title')}</h2>
      </div>
      <div className="containerContentSoftSkills">
        {/* Cards for each soft skill, animated with fade-in when entering the user's view */}
        <div className={`aptitudesCards${aptitudesContentVisible ? ' visible' : ''}`} ref={aptitudesContentRef}>
          <div className="aptitudeCard">
            <h3>{t('softSkills.comunication')}</h3>
            <GiConversation className='iconStyleSoftSkills' />
          </div>
          <div className="aptitudeCard">
            <h3>{t('softSkills.teamWork')}</h3>
            <GiTeamIdea className='iconStyleSoftSkills' />
          </div>
          <div className="aptitudeCard">
            <h3>{t('softSkills.problemSolving')}</h3>
            <VscLightbulbAutofix className='iconStyleSoftSkills' />
          </div>
          <div className="aptitudeCard">
            <h3>{t('softSkills.deadlines')}</h3>
            <MdAssignmentTurnedIn className='iconStyleSoftSkills' />
          </div>
          <div className="aptitudeCard">
            <h3>{t('softSkills.continuousLearning')}</h3>
            <GiGiftOfKnowledge className='iconStyleSoftSkills' />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SoftSkills;