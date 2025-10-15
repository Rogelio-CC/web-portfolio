import { jsxs, jsx } from "react/jsx-runtime";
import { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
/* empty css                 */
const myLogo = "https://Rogelio-CC.github.io/web-portfolio/assets/My_logo_Dark-B7wWsqo1.png";
const AboutMe = () => {
  const { t } = useTranslation();
  const aboutMeTitleRef = useRef(null);
  const aboutMeContentTextRef = useRef(null);
  const aboutMeContentImageRef = useRef(null);
  const [aboutMeTitleVisible, setAboutMeTitleVisible] = useState(false);
  const [aboutMeContentTextVisible, setAboutMeContentTextVisible] = useState(false);
  const [aboutMeContentImageVisible, setAboutMeContentImageVisible] = useState(false);
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
  useAnimationObserver(aboutMeTitleRef, setAboutMeTitleVisible);
  useAnimationObserver(aboutMeContentTextRef, setAboutMeContentTextVisible);
  useAnimationObserver(aboutMeContentImageRef, setAboutMeContentImageVisible);
  return /* @__PURE__ */ jsxs("section", { children: [
    /* @__PURE__ */ jsxs("div", { className: `aboutMeTitle${aboutMeTitleVisible ? " visible" : ""}`, id: "aboutMe", ref: aboutMeTitleRef, children: [
      t("aboutMe.title"),
      " "
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "containerContentAboutMe", children: [
      /* @__PURE__ */ jsx("div", { className: `aboutMeContentText${aboutMeContentTextVisible ? " visible" : ""}`, ref: aboutMeContentTextRef, children: /* @__PURE__ */ jsxs("p", { children: [
        t("aboutMe.description"),
        " "
      ] }) }),
      /* @__PURE__ */ jsx("img", { src: myLogo, alt: "Image", className: `aboutMeContentImage${aboutMeContentImageVisible ? " visible" : ""}`, ref: aboutMeContentImageRef })
    ] })
  ] });
};
export {
  AboutMe as default
};
