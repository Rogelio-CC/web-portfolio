import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
/* empty css                 */
const myPhoto = "/web-portfolio/assets/My_photo-LkSHoj30.jpg";
const HeaderTitle = () => {
  const { t } = useTranslation();
  const textHeader = t("headerTitle.title");
  const [textHeaderAnimation, setTextHeaderAnimation] = useState("");
  useEffect(() => {
    let i = 0;
    setTextHeaderAnimation("");
    const interval = setInterval(() => {
      setTextHeaderAnimation(textHeader.slice(0, i + 1));
      i++;
      if (i === textHeader.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, [textHeader]);
  return /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsxs("div", { className: "containerMain", children: [
    /* @__PURE__ */ jsx("div", { className: "photoContainer", children: /* @__PURE__ */ jsx("img", { src: myPhoto, alt: "My photo", className: "myPhoto" }) }),
    /* @__PURE__ */ jsx("h1", { className: "textHeader", children: textHeaderAnimation.length < textHeader.length ? /* @__PURE__ */ jsxs(Fragment, { children: [
      textHeaderAnimation,
      /* @__PURE__ */ jsx("span", { className: "typing-cursor", children: "|" })
    ] }) : textHeader })
  ] }) });
};
export {
  HeaderTitle as default
};
