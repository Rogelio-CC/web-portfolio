import { jsxs, jsx } from "react/jsx-runtime";
import { useTranslation } from "react-i18next";
import { useState } from "react";
/* empty css                 */
const ChangeIdiomSwitch = () => {
  const { i18n } = useTranslation();
  const [isEnglish, setIsEnglish] = useState(i18n.language === "en");
  const handleSwitch = () => {
    const newLang = isEnglish ? "es" : "en";
    i18n.changeLanguage(newLang);
    setIsEnglish(!isEnglish);
  };
  return /* @__PURE__ */ jsxs("div", { className: "idiomSwitchContainer", children: [
    /* @__PURE__ */ jsx("span", { children: isEnglish ? "English" : "Español" }),
    /* @__PURE__ */ jsxs("label", { className: "idiomSwitch", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "checkbox",
          checked: isEnglish,
          onChange: handleSwitch
        }
      ),
      /* @__PURE__ */ jsx("span", { className: "slider" })
    ] })
  ] });
};
export {
  ChangeIdiomSwitch as default
};
