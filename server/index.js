import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, UNSAFE_withComponentProps, Outlet, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, Meta, Links, ScrollRestoration, Scripts } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { lazy, useState, useEffect, Suspense } from "react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    let timeoutId = setTimeout(
      () => abort(),
      streamTimeout + 1e3
    );
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough({
            final(callback) {
              clearTimeout(timeoutId);
              timeoutId = void 0;
              callback();
            }
          });
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          pipe(body);
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = UNSAFE_withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
const Navbar = lazy(() => import("./assets/navbar-C9AaHMUS.js"));
const HeaderTitle = lazy(() => import("./assets/headerTitle-Fneo28kk.js"));
const AboutMe = lazy(() => import("./assets/aboutMe-CmBwL3AS.js"));
const Experience = lazy(() => import("./assets/experience-DyfcW3eC.js"));
const TechnicalSkills = lazy(() => import("./assets/technicalSkills-DdkoUKph.js"));
const SoftSkills = lazy(() => import("./assets/softSkills-BSn5rMbi.js"));
const RelevantProjects = lazy(() => import("./assets/relevantProjects-CmEsc_yI.js"));
const ChangeIdiomSwitch = lazy(() => import("./assets/changeIdiomSwitch-DYdRexKC.js"));
function Welcome() {
  const loadingScreen = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    fontSize: "4.5rem",
    color: "oklch(28.2% 0.091 267.935)"
  };
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => setReady(true), 100);
    return () => clearTimeout(timeout);
  }, []);
  if (!ready) {
    return /* @__PURE__ */ jsx("div", { style: loadingScreen, children: "Cargando..." });
  }
  return /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx("div", { style: loadingScreen, children: "Cargando..." }), children: /* @__PURE__ */ jsxs("section", { children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx(ChangeIdiomSwitch, {}),
    /* @__PURE__ */ jsx(HeaderTitle, {}),
    /* @__PURE__ */ jsx(RelevantProjects, {}),
    /* @__PURE__ */ jsx(TechnicalSkills, {}),
    /* @__PURE__ */ jsx(Experience, {}),
    /* @__PURE__ */ jsx(SoftSkills, {}),
    /* @__PURE__ */ jsx(AboutMe, {})
  ] }) });
}
i18n.use(initReactI18next).init({
  // Definition of translation resources
  resources: {
    // Spanish translations
    es: {
      translation: {
        // First section: About Me
        aboutMe: {
          title: "Sobre mí",
          description: "Soy Rogelio Ceballos Castillo, recién egresado de la carrera de la Ingeniería de Software y Sistemas Computacionales en la Universidad La Salle Bajío. Me apasiona poder crear interfaces para proporcionarle al usuario la mejor experiencia posible y aplicar mis conocimientos en proyectos de software para aportar soluciones a problemas en el mundo de la tecnología."
        },
        // Second section: Experience
        experience: {
          title: "Experiencia",
          description: "He adquirido experiencia práctica en el diseño y desarrollo de software por medio de proyectos universitarios y personales (1–2 años), con enfoque en aplicaciones web y móvil. Además, actualmente participo en la creación de una plataforma web para la Universidad La Salle Bajío."
        },
        // Third section: Header Title
        headerTitle: {
          title: "¡Hola, mundo! Soy Rogelio"
        },
        // Fourth section: Navbar
        navbar: {
          projects: "Proyectos destacados",
          technicalSkills: "Habilidades técnicas",
          experience: "Experiencia",
          softSkills: "Habilidades blandas",
          aboutMe: "Sobre mí",
          phone: "Teléfono",
          email: "Correo electrónico",
          contactMe: "¡Contáctame!"
        },
        // Fifth section: Relevant Projects
        relevantProjects: {
          title: "Proyectos relevantes",
          technologyUsed: "Tecnologías usadas",
          buttonText: "Consultar repositorio público de github",
          project1: {
            title: "Sistema de indicadores y estrategias (en desarrollo)",
            description: "Proyecto de plataforma web para gestionar diferentes elementos como indicadores, estrategias, facultades, carreras, usuarios, entre otros.",
            warningText: "Este proyecto cuenta con un repositorio privado."
          },
          project2: {
            title: "FakeBuster",
            description: "Proyecto de plataforma web para la detección de noticias falsas con uso de Gemini, permitiendo verificar la veracidad de las noticias."
          },
          project3: {
            title: "O'Clock Store",
            description: "Plantillas web de una tienda en línea de relojes, con diseño responsivo. Incluye páginas para catálogo de relojes, detalles del reloj y carrito de compras."
          },
          project4: {
            title: "MyBookShelf",
            description: "Proyecto de aplicación móvil para administrar, visualizar y puntuar libros. Permite ver algunos libros y crear listas personalizadas, agregando o eliminando libros."
          },
          project5: {
            title: "Calculadora móvil",
            description: "Proyecto de calculadora para dispositivos móviles, con interfaz intuitiva. Permite realizar operaciones básicas, pensado para usabilidad en pantallas táctiles."
          }
        },
        // Sixth section: Soft Skills
        softSkills: {
          title: "Habilidades blandas",
          comunication: "Comunicación efectiva",
          teamWork: "Trabajo en equipo",
          problemSolving: "Resolución de problemas",
          deadlines: "Cumplimiento de plazos de entrega",
          continuousLearning: "Capacidad de aprendizaje continuo"
        },
        // Seventh section: Technical Skills
        technicalSkills: {
          title: "Habilidades técnicas"
        }
      }
    },
    // English translations (same structure as Spanish)
    en: {
      translation: {
        aboutMe: {
          title: "About Me",
          description: "I am Rogelio Ceballos Castillo, a recent graduate in Software and Computer Systems Engineering from La Salle Bajío University. I am passionate about creating interfaces to provide the best possible user experience and applying my knowledge in software projects to contribute solutions to problems in the technology world."
        },
        experience: {
          title: "Experience",
          description: "I have gained practical experience in software design and development through university and personal projects (1–2 years), focusing on web and mobile applications. Additionally, I am currently involved in creating a web platform for La Salle Bajío University."
        },
        headerTitle: {
          title: "Hello, world! I'm Rogelio"
        },
        navbar: {
          projects: "Relevant Projects",
          technicalSkills: "Technical Skills",
          experience: "Experience",
          softSkills: "Soft Skills",
          aboutMe: "About Me",
          phone: "Phone",
          email: "Email",
          contactMe: "Contact Me!"
        },
        relevantProjects: {
          title: "Relevant Projects",
          technologyUsed: "Technologies used",
          buttonText: "View public github repository",
          project1: {
            title: "System of indicators and strategies (in development)",
            description: "Web platform project to manage different elements such as indicators, strategies, faculties, careers, users, among others.",
            warningText: "This project has a private repository."
          },
          project2: {
            title: "FakeBuster",
            description: "Web platform project for fake news detection using Gemini, allowing verification of news authenticity."
          },
          project3: {
            title: "O'Clock Store",
            description: "Web templates for an online watch store, with responsive design. Includes pages for watch catalog, watch details, and shopping cart."
          },
          project4: {
            title: "MyBookShelf",
            description: "Mobile application project to manage, view, and rate books. Allows viewing some books and creating personalized lists by adding or removing books."
          },
          project5: {
            title: "Mobile Calculator",
            description: "Calculator project for mobile devices, with an intuitive interface. Allows performing basic operations, designed for usability on touch screens."
          }
        },
        softSkills: {
          title: "Soft Skills",
          comunication: "Effective Communication",
          teamWork: "Teamwork",
          problemSolving: "Problem Solving",
          deadlines: "Meeting delivery deadlines",
          continuousLearning: "Continuous Learning Ability"
        },
        technicalSkills: {
          title: "Technical Skills"
        }
      }
    }
  },
  lng: "es",
  // Initial language 
  fallbackLng: "en",
  // Fallback language if translation is missing
  interpolation: {
    escapeValue: false
    // Prevents escaping of values in translation strings.
  }
});
function meta({}) {
  return [{
    title: "Portafolio web"
  }];
}
const home = UNSAFE_withComponentProps(function Home() {
  return /* @__PURE__ */ jsx(Welcome, {});
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "https://rogelio-cc.github.io/web-portfolioassets/entry.client-hoX_j7we.js", "imports": ["https://rogelio-cc.github.io/web-portfolioassets/chunk-PVWAREVJ-DMgj7qrf.js", "https://rogelio-cc.github.io/web-portfolioassets/index-CXfQQoB0.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "https://rogelio-cc.github.io/web-portfolioassets/root-CZi-rwNd.js", "imports": ["https://rogelio-cc.github.io/web-portfolioassets/chunk-PVWAREVJ-DMgj7qrf.js", "https://rogelio-cc.github.io/web-portfolioassets/index-CXfQQoB0.js"], "css": ["https://rogelio-cc.github.io/web-portfolioassets/root-DzG5AUd3.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "https://rogelio-cc.github.io/web-portfolioassets/home-CqWv1N5B.js", "imports": ["https://rogelio-cc.github.io/web-portfolioassets/home-DqLrsftr.js", "https://rogelio-cc.github.io/web-portfolioassets/chunk-PVWAREVJ-DMgj7qrf.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "https://rogelio-cc.github.io/web-portfolioassets/manifest-e8c8b621.js", "version": "e8c8b621", "sri": void 0 };
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "unstable_middleware": false, "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_subResourceIntegrity": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "https://rogelio-cc.github.io/web-portfolio";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};
