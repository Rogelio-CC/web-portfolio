import { jsxs, jsx } from "react/jsx-runtime";
import { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaPython, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGithub, FaFigma } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpo, SiBlazor, SiMysql } from "react-icons/si";
/* empty css                 */
const TechnicalSkills = () => {
  const { t } = useTranslation();
  const technicalSkillsTitleRef = useRef(null);
  const technicalSkillsContentRef = useRef(null);
  const [technicalSkillsTitleVisible, setTechnicalSkillsTitleVisible] = useState(false);
  const [technicalSkillsContentVisible, setTechnicalSkillsContentVisible] = useState(false);
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
  useAnimationObserver(technicalSkillsTitleRef, setTechnicalSkillsTitleVisible);
  useAnimationObserver(technicalSkillsContentRef, setTechnicalSkillsContentVisible);
  return /* @__PURE__ */ jsxs("section", { children: [
    /* @__PURE__ */ jsx("div", { className: `technicalSkillsTitle${technicalSkillsTitleVisible ? " visible" : ""}`, id: "techicalSkills", ref: technicalSkillsTitleRef, children: /* @__PURE__ */ jsx("h2", { children: t("technicalSkills.title") }) }),
    /* @__PURE__ */ jsx("div", { className: "containerContentTechnicalSkills", children: /* @__PURE__ */ jsxs("div", { className: `technicalSkillsCards${technicalSkillsContentVisible ? " visible" : ""}`, ref: technicalSkillsContentRef, children: [
      /* @__PURE__ */ jsxs("div", { className: "technicalSkillsCard", children: [
        /* @__PURE__ */ jsx(IoLogoJavascript, { className: "iconStyleTechnicalSkills" }),
        /* @__PURE__ */ jsx("h3", { children: "JavaScript" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "technicalSkillsCard", children: [
        /* @__PURE__ */ jsx(FaPython, { className: "iconStyleTechnicalSkills" }),
        /* @__PURE__ */ jsx("h3", { children: "Python" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "technicalSkillsCard", children: [
        /* @__PURE__ */ jsx(FaHtml5, { className: "iconStyleTechnicalSkills" }),
        /* @__PURE__ */ jsx("h3", { children: "HTML" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "technicalSkillsCard", children: [
        /* @__PURE__ */ jsx(FaCss3Alt, { className: "iconStyleTechnicalSkills" }),
        /* @__PURE__ */ jsx("h3", { children: "CSS" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "technicalSkillsCard", children: [
        /* @__PURE__ */ jsx(SiExpo, { className: "iconStyleTechnicalSkills" }),
        /* @__PURE__ */ jsx("h3", { children: "Expo" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "technicalSkillsCard", children: [
        /* @__PURE__ */ jsx(FaReact, { className: "iconStyleTechnicalSkills" }),
        /* @__PURE__ */ jsx("h3", { children: "React" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "technicalSkillsCard", children: [
        /* @__PURE__ */ jsx(SiBlazor, { className: "iconStyleTechnicalSkills" }),
        /* @__PURE__ */ jsx("h3", { children: "Blazor" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "technicalSkillsCard", children: [
        /* @__PURE__ */ jsx(FaNodeJs, { className: "iconStyleTechnicalSkills" }),
        /* @__PURE__ */ jsx("h3", { children: "Node js" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "technicalSkillsCard", children: [
        /* @__PURE__ */ jsx(SiMysql, { className: "iconStyleTechnicalSkills" }),
        /* @__PURE__ */ jsx("h3", { children: "MySQL" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "technicalSkillsCard", children: [
        /* @__PURE__ */ jsx(FaGithub, { className: "iconStyleTechnicalSkills" }),
        /* @__PURE__ */ jsx("h3", { children: "GitHub" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "technicalSkillsCard", children: [
        /* @__PURE__ */ jsx(FaFigma, { className: "iconStyleTechnicalSkills" }),
        /* @__PURE__ */ jsx("h3", { children: "Figma" })
      ] })
    ] }) })
  ] });
};
export {
  TechnicalSkills as default
};
