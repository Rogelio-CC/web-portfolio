import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { PiDevicesFill } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import ReactDom from "react-dom";
/* empty css                 */
const ContactModal = ({ open, onClose }) => {
  const { t } = useTranslation();
  if (!open) return null;
  return ReactDom.createPortal(
    /* @__PURE__ */ jsx("div", { className: "modalOverlay", children: /* @__PURE__ */ jsxs("div", { className: "modalContent", children: [
      /* @__PURE__ */ jsx("h2", { children: t("navbar.contactMe") }),
      /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsxs("strong", { children: [
          t("navbar.email"),
          ":"
        ] }),
        " rogelioceballos218@gmail.com"
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsxs("strong", { children: [
          t("navbar.phone"),
          ":"
        ] }),
        " (+52) 477 600 1390"
      ] }),
      /* @__PURE__ */ jsx("button", { onClick: onClose, children: "Cerrar" })
    ] }) }),
    document.body
  );
};
const myLogo = "https://Rogelio-CC.github.io/web-portfolio/assets/My_logo_light-CbnRYPAJ.png";
const Navbar = () => {
  const { t } = useTranslation();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return /* @__PURE__ */ jsxs("section", { children: [
    /* @__PURE__ */ jsxs("nav", { className: "navbarMain", children: [
      /* @__PURE__ */ jsx("button", { className: "hamburgerBtn", onClick: () => setMenuOpen(!menuOpen), children: /* @__PURE__ */ jsx(GiHamburgerMenu, {}) }),
      /* @__PURE__ */ jsxs("div", { className: `navbarLinks ${menuOpen ? "open" : ""}`, children: [
        /* @__PURE__ */ jsx("img", { src: myLogo, alt: "My logo", className: "myLogo" }),
        /* @__PURE__ */ jsxs("div", { className: "containerLabels", children: [
          /* @__PURE__ */ jsx("a", { href: "#projects", children: t("navbar.projects") }),
          /* @__PURE__ */ jsx("a", { href: "#techicalSkills", children: t("navbar.technicalSkills") }),
          /* @__PURE__ */ jsx("a", { href: "#experience", children: t("navbar.experience") }),
          /* @__PURE__ */ jsx("a", { href: "#aptitudes", children: t("navbar.softSkills") }),
          /* @__PURE__ */ jsx("a", { href: "#aboutMe", children: t("navbar.aboutMe") })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "containerIcons", children: [
          /* @__PURE__ */ jsx("a", { href: "https://github.com/Rogelio-CC", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx(FaGithub, { className: "iconsNavbar" }) }),
          /* @__PURE__ */ jsx("a", { href: "https://www.linkedin.com/in/rogelio-ceballos-castillo-a213b0281/", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx(FaLinkedin, { className: "iconsNavbar" }) }),
          /* @__PURE__ */ jsx(
            PiDevicesFill,
            {
              className: "iconsNavbar",
              onClick: () => setIsContactModalOpen(true)
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(ContactModal, { open: isContactModalOpen, onClose: () => setIsContactModalOpen(false) })
  ] });
};
export {
  Navbar as default
};
