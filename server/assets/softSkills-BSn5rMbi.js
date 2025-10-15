import { jsxs, jsx } from "react/jsx-runtime";
import { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { GiConversation, GiTeamIdea, GiGiftOfKnowledge } from "react-icons/gi";
import { VscLightbulbAutofix } from "react-icons/vsc";
import { MdAssignmentTurnedIn } from "react-icons/md";
/* empty css                 */
const SoftSkills = () => {
  const { t } = useTranslation();
  const aptitudesTitleRef = useRef(null);
  const aptitudesContentRef = useRef(null);
  const [aptitudesTitleVisible, setAptitudesTitleVisible] = useState(false);
  const [aptitudesContentVisible, setAptitudesContentVisible] = useState(false);
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
  useAnimationObserver(aptitudesTitleRef, setAptitudesTitleVisible);
  useAnimationObserver(aptitudesContentRef, setAptitudesContentVisible);
  return /* @__PURE__ */ jsxs("section", { children: [
    /* @__PURE__ */ jsx("div", { className: `aptitudesTitle${aptitudesTitleVisible ? " visible" : ""}`, id: "aptitudes", ref: aptitudesTitleRef, children: /* @__PURE__ */ jsx("h2", { children: t("softSkills.title") }) }),
    /* @__PURE__ */ jsx("div", { className: "containerContentSoftSkills", children: /* @__PURE__ */ jsxs("div", { className: `aptitudesCards${aptitudesContentVisible ? " visible" : ""}`, ref: aptitudesContentRef, children: [
      /* @__PURE__ */ jsxs("div", { className: "aptitudeCard", children: [
        /* @__PURE__ */ jsx("h3", { children: t("softSkills.comunication") }),
        /* @__PURE__ */ jsx(GiConversation, { className: "iconStyleSoftSkills" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "aptitudeCard", children: [
        /* @__PURE__ */ jsx("h3", { children: t("softSkills.teamWork") }),
        /* @__PURE__ */ jsx(GiTeamIdea, { className: "iconStyleSoftSkills" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "aptitudeCard", children: [
        /* @__PURE__ */ jsx("h3", { children: t("softSkills.problemSolving") }),
        /* @__PURE__ */ jsx(VscLightbulbAutofix, { className: "iconStyleSoftSkills" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "aptitudeCard", children: [
        /* @__PURE__ */ jsx("h3", { children: t("softSkills.deadlines") }),
        /* @__PURE__ */ jsx(MdAssignmentTurnedIn, { className: "iconStyleSoftSkills" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "aptitudeCard", children: [
        /* @__PURE__ */ jsx("h3", { children: t("softSkills.continuousLearning") }),
        /* @__PURE__ */ jsx(GiGiftOfKnowledge, { className: "iconStyleSoftSkills" })
      ] })
    ] }) })
  ] });
};
export {
  SoftSkills as default
};
