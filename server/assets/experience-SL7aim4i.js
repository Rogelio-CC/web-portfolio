import { jsxs, jsx } from "react/jsx-runtime";
import { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
/* empty css                 */
const salleLogo = "https://Rogelio-CC.github.io/web-portfolio/assets/Salle_Logo-BXb1e3hM.png";
const Experience = () => {
  const { t } = useTranslation();
  const experiencieTitleRef = useRef(null);
  const experiencieContentTextRef = useRef(null);
  const experiencieContentImageRef = useRef(null);
  const [experiencieTitleVisible, setExperiencieTitleVisible] = useState(false);
  const [experiencieContentTextVisible, setExperiencieContentTextVisible] = useState(false);
  const [experiencieContentImageVisible, setExperiencieContentImageVisible] = useState(false);
  function useAnimationObserver(ref, setVisible) {
    useEffect(() => {
      const observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        },
        { threshold: 0.4 }
      );
      if (ref.current) {
        observer.observe(ref.current);
      }
      return () => observer.disconnect();
    }, [ref, setVisible]);
  }
  useAnimationObserver(experiencieTitleRef, setExperiencieTitleVisible);
  useAnimationObserver(experiencieContentTextRef, setExperiencieContentTextVisible);
  useAnimationObserver(experiencieContentImageRef, setExperiencieContentImageVisible);
  return /* @__PURE__ */ jsxs("section", { children: [
    /* @__PURE__ */ jsxs("div", { className: `experienceTitle${experiencieTitleVisible ? " visible" : ""}`, id: "experience", ref: experiencieTitleRef, children: [
      t("experience.title"),
      " "
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "containerContentExperience", children: [
      /* @__PURE__ */ jsx("img", { src: salleLogo, alt: "My image", className: `experienceContentImage${experiencieContentImageVisible ? " visible" : ""}`, ref: experiencieContentImageRef }),
      /* @__PURE__ */ jsx("div", { className: `experienceContentText${experiencieContentTextVisible ? " visible" : ""}`, ref: experiencieContentTextRef, children: /* @__PURE__ */ jsxs("p", { children: [
        t("experience.description"),
        " "
      ] }) })
    ] })
  ] });
};
export {
  Experience as default
};
