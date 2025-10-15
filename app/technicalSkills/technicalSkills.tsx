// General imports
import { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next'; // useTranslation hook imported to enable translations
import { FaGithub, FaHtml5, FaCss3Alt, FaReact, FaFigma, FaNodeJs, FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiBlazor, SiMysql, SiExpo } from "react-icons/si";
import '../welcome/welcome.css';

const TechnicalSkills = () => {
  const { t } = useTranslation(); // useTranslation hook enabled

  // Refs and states for animation on scroll
  const technicalSkillsTitleRef = useRef<HTMLDivElement>(null);
  const technicalSkillsContentRef = useRef<HTMLDivElement>(null);
  const [technicalSkillsTitleVisible, setTechnicalSkillsTitleVisible] = useState(false);
  const [technicalSkillsContentVisible, setTechnicalSkillsContentVisible] = useState(false);

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
  useAnimationObserver(technicalSkillsTitleRef, setTechnicalSkillsTitleVisible);
  useAnimationObserver(technicalSkillsContentRef, setTechnicalSkillsContentVisible);

  return (
    <section>
      {/* "Technical Skills" title with fade-in animation */}
      <div className={`technicalSkillsTitle${technicalSkillsTitleVisible ? ' visible' : ''}`} id="techicalSkills" ref={technicalSkillsTitleRef}>
        <h2>{t('technicalSkills.title')}</h2>
      </div>
      <div className="containerContentTechnicalSkills">
        {/* Cards for each technical skill, with fade-in when entering the user's view */}
        <div className={`technicalSkillsCards${technicalSkillsContentVisible ? ' visible' : ''}`} ref={technicalSkillsContentRef}>
          <div className="technicalSkillsCard">
            <IoLogoJavascript className="iconStyleTechnicalSkills" />
            <h3>JavaScript</h3>
          </div>
          <div className="technicalSkillsCard">
            <FaPython className="iconStyleTechnicalSkills" />
            <h3>Python</h3>
          </div>
          <div className="technicalSkillsCard">
            <FaHtml5 className="iconStyleTechnicalSkills" />
            <h3>HTML</h3>
          </div>
          <div className="technicalSkillsCard">
            <FaCss3Alt className="iconStyleTechnicalSkills" />
            <h3>CSS</h3>
          </div>
          <div className="technicalSkillsCard">
            <SiExpo className="iconStyleTechnicalSkills" />
            <h3>Expo</h3>
          </div>
          <div className="technicalSkillsCard">
            <FaReact className="iconStyleTechnicalSkills" />
            <h3>React</h3>
          </div>
          <div className="technicalSkillsCard">
            <SiBlazor className="iconStyleTechnicalSkills" />
            <h3>Blazor</h3>
          </div>
          <div className="technicalSkillsCard">
            <FaNodeJs className="iconStyleTechnicalSkills" />
            <h3>Node js</h3>
          </div>
          <div className="technicalSkillsCard">
            <SiMysql className="iconStyleTechnicalSkills" />
            <h3>MySQL</h3>
          </div>
          <div className="technicalSkillsCard">
            <FaGithub className="iconStyleTechnicalSkills" />
            <h3>GitHub</h3>
          </div>
          <div className="technicalSkillsCard">
            <FaFigma className="iconStyleTechnicalSkills" />
            <h3>Figma</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechnicalSkills;