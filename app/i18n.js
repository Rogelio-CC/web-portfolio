// General imports for i18n configuration
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// i18n configuration with translations for Spanish and English
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
                    title: "¡Hola, mundo! Soy Rogelio",
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
                    title: "Habilidades técnicas",
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
                    title: "Hello, world! I'm Rogelio",
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
                    title: "Technical Skills",
                }
            }
        }
    },
    lng: "es", // Initial language 
    fallbackLng: "en", // Fallback language if translation is missing
    interpolation: {
        escapeValue: false // Prevents escaping of values in translation strings.
    }
});

export default i18n;