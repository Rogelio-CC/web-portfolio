import { jsxs, jsx } from "react/jsx-runtime";
import { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import ReactDom from "react-dom";
import { IoMdClose } from "react-icons/io";
/* empty css                 */
const ImageProjectModal = ({ open, onClose, imgSrc }) => {
  if (!open) return null;
  return ReactDom.createPortal(
    /* @__PURE__ */ jsxs("div", { className: "imageModal", children: [
      /* @__PURE__ */ jsx(IoMdClose, { className: "closeIcon", onClick: onClose }),
      /* @__PURE__ */ jsx("img", { src: imgSrc, alt: "Image expanded", className: "imageModalImg" })
    ] }),
    document.body
  );
};
const imageCal1 = "https://rogelio-cc.github.io/web-portfolio/assets/Image_Calculator1-C1kpHREf.jpeg";
const imageCal2 = "https://rogelio-cc.github.io/web-portfolio/assets/Image_Calculator2-Ca-G1Zc0.jpeg";
const imageCal3 = "https://rogelio-cc.github.io/web-portfolio/assets/Image_Calculator3-DbZnTn7d.jpeg";
const imageCal4 = "https://rogelio-cc.github.io/web-portfolio/assets/Image_Calculator4-ka3xKSxo.jpeg";
const imageCal5 = "https://rogelio-cc.github.io/web-portfolio/assets/Image_Calculator5-BDUdrJ0E.jpeg";
const imageFB1 = "https://rogelio-cc.github.io/web-portfolio/assets/FirstImage_FakeBister-Cqbl-0A4.png";
const imageFB2 = "https://rogelio-cc.github.io/web-portfolio/assets/SecondImage_FakeBister-BERfqNs8.png";
const imageFB3 = "https://rogelio-cc.github.io/web-portfolio/assets/ThirdImage_FakeBister-DeikAU8G.png";
const imageMBS1 = "https://rogelio-cc.github.io/web-portfolio/assets/ImageMyBookShelf1-DyySDIKS.jpeg";
const imageMBS2 = "https://rogelio-cc.github.io/web-portfolio/assets/ImageMyBookShelf2-g8YFRb0C.jpeg";
const imageMBS3 = "https://rogelio-cc.github.io/web-portfolio/assets/ImageMyBookShelf3-D8RRB1_K.jpeg";
const imageMBS4 = "https://rogelio-cc.github.io/web-portfolio/assets/ImageMyBookShelf4-CFbEH7x-.jpeg";
const imageMBS5 = "https://rogelio-cc.github.io/web-portfolio/assets/ImageMyBookShelf5-BLsj8jgK.jpeg";
const imageOCS1 = "https://rogelio-cc.github.io/web-portfolio/assets/FirstVideo_OClockStore-DXsFIfzk.mp4";
const imageOCS2 = "https://rogelio-cc.github.io/web-portfolio/assets/SecondVideo_OClockStore-fWgGkFTj.mp4";
const imageOCS3 = "https://rogelio-cc.github.io/web-portfolio/assets/ThirdVideo_OClockStore-C5nL3QhW.mp4";
const imageIP1 = "https://rogelio-cc.github.io/web-portfolio/assets/ImageIntershipProject1-BcTceYjT.png";
const imageIP2 = "https://rogelio-cc.github.io/web-portfolio/assets/ImageIntershipProject2-akZ42kbe.png";
const imageIP3 = "https://rogelio-cc.github.io/web-portfolio/assets/ImageIntershipProject3-Y4GQ83ZX.png";
const imageIP4 = "https://rogelio-cc.github.io/web-portfolio/assets/ImageIntershipProject4-B042-UuB.png";
const imageIP5 = "https://rogelio-cc.github.io/web-portfolio/assets/ImageIntershipProject5-B_0Hmhy7.png";
const RelevantProjects = () => {
  const { t } = useTranslation();
  const calculatorImages = [imageCal1, imageCal2, imageCal3, imageCal4, imageCal5];
  const fakeBusterImages = [imageFB1, imageFB2, imageFB3];
  const myBookShelfImages = [imageMBS1, imageMBS2, imageMBS3, imageMBS4, imageMBS5];
  const oClockStoreVideos = [imageOCS1, imageOCS2, imageOCS3];
  const intershipProjectImages = [imageIP1, imageIP2, imageIP3, imageIP4, imageIP5];
  const projectsTitleRef = useRef(null);
  const projectContainerWeb1Ref = useRef(null);
  const projectContainerWeb2Ref = useRef(null);
  const projectContainerWeb3Ref = useRef(null);
  const projectContainerMobile1Ref = useRef(null);
  const projectContainerMobile2Ref = useRef(null);
  const [projectsTitleVisible, setProjectsTitleVisible] = useState(false);
  const [projectContainerWeb1Visible, setProjectContainerWeb1Visible] = useState(false);
  const [projectContainerWeb2Visible, setProjectContainerWeb2Visible] = useState(false);
  const [projectContainerWeb3Visible, setProjectContainerWeb3Visible] = useState(false);
  const [projectContainerMobile1Visible, setProjectContainerMobile1Visible] = useState(false);
  const [projectContainerMobile2Visible, setProjectContainerMobile2Visible] = useState(false);
  const [expandedImg, setExpandedImg] = useState(null);
  const [currentCalcImg, setCurrentCalcImg] = useState(0);
  const [currentFBImg, setCurrentFBImg] = useState(0);
  const [currentMBSImg, setCurrentMBSImg] = useState(0);
  const [currentOCSVideo, setCurrentOCSVideo] = useState(0);
  const [currentIPImg, setCurrentIPImg] = useState(0);
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
  function handlePrevImg(images, setChangeImg) {
    setChangeImg((prev) => prev === 0 ? images.length - 1 : prev - 1);
  }
  function handleNextImg(images, setChangeImg) {
    setChangeImg((next) => next === images.length - 1 ? 0 : next + 1);
  }
  useAnimationObserver(projectsTitleRef, setProjectsTitleVisible);
  useAnimationObserver(projectContainerWeb1Ref, setProjectContainerWeb1Visible);
  useAnimationObserver(projectContainerWeb2Ref, setProjectContainerWeb2Visible);
  useAnimationObserver(projectContainerWeb3Ref, setProjectContainerWeb3Visible);
  useAnimationObserver(projectContainerMobile1Ref, setProjectContainerMobile1Visible);
  useAnimationObserver(projectContainerMobile2Ref, setProjectContainerMobile2Visible);
  return /* @__PURE__ */ jsxs("section", { children: [
    /* @__PURE__ */ jsx("div", { className: `projectsTitle${projectsTitleVisible ? " visible" : ""}`, id: "projects", ref: projectsTitleRef, children: /* @__PURE__ */ jsx("h2", { children: t("relevantProjects.title") }) }),
    /* @__PURE__ */ jsxs("div", { className: `projectsContainerWeb${projectContainerWeb1Visible ? " visible" : ""}`, ref: projectContainerWeb1Ref, children: [
      /* @__PURE__ */ jsxs("div", { className: "projectImagesCarouselWeb", children: [
        /* @__PURE__ */ jsx("button", { className: "carouselBtn", onClick: () => handlePrevImg(intershipProjectImages, setCurrentIPImg), "aria-label": "Imagen anterior", children: "<" }),
        /* @__PURE__ */ jsx(
          "img",
          {
            src: intershipProjectImages[currentIPImg],
            alt: `Strategy and indicator System image ${currentIPImg + 1}`,
            className: "webProjectsImg",
            onClick: () => setExpandedImg(intershipProjectImages[currentIPImg])
          }
        ),
        /* @__PURE__ */ jsx("button", { className: "carouselBtn", onClick: () => handleNextImg(intershipProjectImages, setCurrentIPImg), "aria-label": "Imagen siguiente", children: ">" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "projectInfo", children: [
        /* @__PURE__ */ jsx("h3", { children: t("relevantProjects.project1.title") }),
        /* @__PURE__ */ jsx("p", { children: t("relevantProjects.project1.description") }),
        /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsxs("strong", { children: [
            t("relevantProjects.technologyUsed"),
            ":"
          ] }),
          " Blazor, Blazorise."
        ] }),
        /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("strong", { children: t("relevantProjects.project1.warningText") }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: `projectsContainerWeb${projectContainerWeb2Visible ? " visible" : ""}`, ref: projectContainerWeb2Ref, children: [
      /* @__PURE__ */ jsxs("div", { className: "projectImagesCarouselWeb", children: [
        /* @__PURE__ */ jsx("button", { className: "carouselBtn", onClick: () => handlePrevImg(fakeBusterImages, setCurrentFBImg), "aria-label": "Imagen anterior", children: "<" }),
        /* @__PURE__ */ jsx(
          "img",
          {
            src: fakeBusterImages[currentFBImg],
            alt: `FakeBuster image ${currentFBImg + 1}`,
            className: "webProjectsImg",
            onClick: () => setExpandedImg(fakeBusterImages[currentFBImg])
          }
        ),
        /* @__PURE__ */ jsx("button", { className: "carouselBtn", onClick: () => handleNextImg(fakeBusterImages, setCurrentFBImg), "aria-label": "Imagen siguiente", children: ">" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "projectInfo", children: [
        /* @__PURE__ */ jsx("h3", { children: t("relevantProjects.project2.title") }),
        /* @__PURE__ */ jsx("p", { children: t("relevantProjects.project2.description") }),
        /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsxs("strong", { children: [
            t("relevantProjects.technologyUsed"),
            ":"
          ] }),
          " HTML, CSS, Python."
        ] }),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://github.com/Rogelio-CC/FakeBuster-Django-Python",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "projectRepoBtn",
            children: t("relevantProjects.buttonText")
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: `projectsContainerWeb${projectContainerWeb3Visible ? " visible" : ""}`, ref: projectContainerWeb3Ref, children: [
      /* @__PURE__ */ jsxs("div", { className: "projectImagesCarouselWeb", children: [
        /* @__PURE__ */ jsx("button", { className: "carouselBtn", onClick: () => handlePrevImg(oClockStoreVideos, setCurrentOCSVideo), "aria-label": "Imagen anterior", children: "<" }),
        /* @__PURE__ */ jsx(
          "video",
          {
            src: oClockStoreVideos[currentOCSVideo],
            controls: true,
            className: "webProjectsImg"
          }
        ),
        /* @__PURE__ */ jsx("button", { className: "carouselBtn", onClick: () => handleNextImg(oClockStoreVideos, setCurrentOCSVideo), "aria-label": "Imagen siguiente", children: ">" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "projectInfo", children: [
        /* @__PURE__ */ jsx("h3", { children: t("relevantProjects.project3.title") }),
        /* @__PURE__ */ jsx("p", { children: t("relevantProjects.project3.description") }),
        /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsxs("strong", { children: [
            t("relevantProjects.technologyUsed"),
            ":"
          ] }),
          " HTML y CSS."
        ] }),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://github.com/Rogelio-CC/O_Clock_Store",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "projectRepoBtn",
            children: t("relevantProjects.buttonText")
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: `projectsContainerMobile${projectContainerMobile1Visible ? " visible" : ""}`, ref: projectContainerMobile1Ref, children: [
      /* @__PURE__ */ jsxs("div", { className: "projectImagesCarouselMobile", children: [
        /* @__PURE__ */ jsx("button", { className: "carouselBtn", onClick: () => handlePrevImg(myBookShelfImages, setCurrentMBSImg), "aria-label": "Imagen anterior", children: "<" }),
        /* @__PURE__ */ jsx(
          "img",
          {
            src: myBookShelfImages[currentMBSImg],
            alt: `MyBookShelf image ${currentMBSImg + 1}`,
            className: "mobileProjectsImg",
            onClick: () => setExpandedImg(myBookShelfImages[currentMBSImg])
          }
        ),
        /* @__PURE__ */ jsx("button", { className: "carouselBtn", onClick: () => handleNextImg(myBookShelfImages, setCurrentMBSImg), "aria-label": "Imagen siguiente", children: ">" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "projectInfo", children: [
        /* @__PURE__ */ jsx("h3", { children: t("relevantProjects.project4.title") }),
        /* @__PURE__ */ jsx("p", { children: t("relevantProjects.project4.description") }),
        /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsxs("strong", { children: [
            t("relevantProjects.technologyUsed"),
            ":"
          ] }),
          " Expo, JavaScript, CSS, Node js, MySQL."
        ] }),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://github.com/Rogelio-CC/My-book-shelf-expo",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "projectRepoBtn",
            children: t("relevantProjects.buttonText")
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: `projectsContainerMobile${projectContainerMobile2Visible ? " visible" : ""}`, ref: projectContainerMobile2Ref, children: [
      /* @__PURE__ */ jsxs("div", { className: "projectImagesCarouselMobile", children: [
        /* @__PURE__ */ jsx("button", { className: "carouselBtn", onClick: () => handlePrevImg(calculatorImages, setCurrentCalcImg), "aria-label": "Imagen anterior", children: "<" }),
        /* @__PURE__ */ jsx(
          "img",
          {
            src: calculatorImages[currentCalcImg],
            alt: `Mobile Calculator image ${currentCalcImg + 1}`,
            className: "mobileProjectsImg",
            onClick: () => setExpandedImg(calculatorImages[currentCalcImg])
          }
        ),
        /* @__PURE__ */ jsx("button", { className: "carouselBtn", onClick: () => handleNextImg(calculatorImages, setCurrentCalcImg), "aria-label": "Imagen siguiente", children: ">" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "projectInfo", children: [
        /* @__PURE__ */ jsx("h3", { children: t("relevantProjects.project5.title") }),
        /* @__PURE__ */ jsx("p", { children: t("relevantProjects.project5.description") }),
        /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsxs("strong", { children: [
            t("relevantProjects.technologyUsed"),
            ":"
          ] }),
          " Expo, JavaScript, CSS."
        ] }),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://github.com/Rogelio-CC/Expo-React-Native-Basic-Calculator",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "projectRepoBtn",
            children: t("relevantProjects.buttonText")
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      ImageProjectModal,
      {
        open: expandedImg !== null,
        imgSrc: expandedImg ?? "",
        onClose: () => setExpandedImg(null)
      }
    )
  ] });
};
export {
  RelevantProjects as default
};
