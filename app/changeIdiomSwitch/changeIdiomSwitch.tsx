// General Imports
import { useTranslation } from "react-i18next"; // useTranslation hook imported to enable translations
import { useState } from "react";
import '../welcome/welcome.css';

const ChangeIdiomSwitch = () => {
  const { i18n } = useTranslation(); // Hook to access i18n instance
  const [isEnglish, setIsEnglish] = useState(i18n.language === "en"); // State to track current language

  // Function to handle language switch
  const handleSwitch = () => {
    const newLang = isEnglish ? "es" : "en"; // Toggle between English and Spanish
    i18n.changeLanguage(newLang); // Change the language using i18n
    setIsEnglish(!isEnglish); // Update the state
  };

  return (
    <div className="idiomSwitchContainer">
      {/* Display current language */}
      <span>{isEnglish ? "English" : "Español"}</span>
      <label className="idiomSwitch">
        <input
          type="checkbox"
          checked={isEnglish}
          onChange={handleSwitch}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
}

export default ChangeIdiomSwitch;