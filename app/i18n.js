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
                    description: "Mi nombre es Rogelio Ceballos Castillo y soy recién graduado de la carrera de Ingeniería de Software y Sistemas Computacionales en la universidad La Salle Bajío. Me interesa aplicar mis conocimientos en proyectos de software para aportar soluciones a problemas en el mundo de la tecnología y me apasiona el desarrollo web, en especial el diseño web, donde las interfaces son primordiales para asegurar que el usuario tenga la mejor experiencia posible y sea orientado adecuadamente en el sitio web o aplicación."
                },
                // Second section: Experience
                experience: {
                    title: "Experiencia",
                    description: "He adquirido 3 años de experiencia práctica en el desarrollo de software con proyectos universitarios y personales (en especial el proyecto web realizado en la misma universidad como parte de mi servicio profesional), con enfoque en aplicaciones web y móvil."
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
                    certifications: "Certificaciones",
                    phone: "Teléfono",
                    email: "Correo electrónico",
                    contactMe: "¡Contáctame!"
                },
                // Fifth section: Relevant Projects
                relevantProjects: {
                    title: "Proyectos relevantes",
                    technologyUsed: "Tecnologías usadas",
                    buttonText: "Consultar repositorio público de github",
                    ContributeQuestionText: "¿Qué aporté en este proyecto?",
                    project1: {
                        title: "Sistema de indicadores y estrategias",
                        description: "Proyecto de plataforma web para gestionar diferentes elementos como indicadores, estrategias, facultades, carreras, usuarios, entre otros.",
                        contributionText: "Mi contribución principal fue el desarrollo del frontend utilizando Blazor Server, donde implementé la interfaz de usuario y la lógica de interacción. Además, participé en la creación y modificación de los endpoints y asisití en las migraciones con PostgreSQL y SQL Server con el uso de Entity Framework Core. También apoye y contribuí a la configuración de imágenes personalizadas del Front-end y Back-end de Docker y despliegue de esas imágenes en Azure y Render; utilicé Ngrok para la comunicación entre la base de datos en SQL Server y la imagen del Back-end desplegada en Render. En el diseño visual, aporté ideas y colaboré en la creación de prototipos utilizando Figma.",
                        buttonTextFrontendRepository: "Consultar repositorio frontend en github",
                        buttonTextBackendRepository: "Consultar repositorio backend en github",
                    },
                    project2: {
                        title: "FakeBuster",
                        description: "Proyecto de plataforma web para la detección de noticias falsas con uso de Gemini, permitiendo verificar la veracidad de las noticias.",
                        contributionText: "Mi contribución principal fue el cambio de uso de la API de Palm (actualmente descontinuado) a la API de Gemini. Además, cree la versión inicial de la interfaz de usuario utilizando React; posteriormente se modificó a una versión final pero manteniendo la funcionalidad principal. También resolví un problema que surgió por la instalación de algunas librerías innecesarias de Python, permitiendo que la aplicación funcionará correctamente para su exposición en la universidad.",
                    },
                    project3: {
                        title: "O'Clock Store",
                        description: "Plantillas web de una tienda en línea de relojes, con diseño responsivo. Incluye páginas para catálogo de relojes, detalles del reloj y carrito de compras.",
                        contributionText: "Mi contribución principal fue el dsarrollo de las diferentes interfaces únicamente con HTML y CSS, donde implementé el diseño responsivo de las páginas del catálogo de relojes, detalles del reloj y carrito de compras."
                    },
                    project4: {
                        title: "MyBookShelf",
                        description: "Proyecto de aplicación móvil para administrar, visualizar y puntuar libros. Permite ver algunos libros y crear listas personalizadas, agregando o eliminando libros.",
                        contributionText: "Mi contribución principal fue el desarrollo de la aplicación móvil utilizando React Native con Expo, donde implementé la interfaces de usuario y la lógica de interacción. Además, participé en la creación de la API REST con Node.js y Express para gestionar los datos de los libros, utilizando MySQL como base de datos. También porté ideas y colaboré en la creación de prototipos utilizando Figma. Como dato extra, esta aplicación móvil originalmente estaba planeada para ser desarrollada con Swift y Java, pero tiempo de después se cambió por un entorno con React Native con Expo para facilitar el desarrollo multiplataforma."
                    },
                    project5: {
                        title: "Calculadora móvil",
                        description: "Proyecto de calculadora para dispositivos móviles, con interfaz intuitiva. Permite realizar operaciones básicas, pensado para usabilidad en pantallas táctiles.",
                        contributionText: "Mi contribución principal fue el desarrollo de la aplicación móvil utilizando React Native con Expo, donde implementé la interfaz de usuario y la lógica de interacción."
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
                },
                // Eighth section: Certifications
                certifications: {
                    title: "Certificaciones",
                    textYear1: "Año de inicio",
                    textYear2: "Año de finalización",
                    badgeButtonText: "Ver insignia",
                    certification1: {
                        title: "AWS Cloud Practitioner",
                        startYear: "2024",
                        endYear: "2027",
                    },
                    certification2: {
                        title: "Cisco: Introduction to Cybersecurity",
                        startYear: "2023",
                    }
                }
            }
        },
        // English translations (same structure as Spanish)
        en: {
            translation: {
                aboutMe: {
                    title: "About Me",
                    description: "My name is Rogelio Ceballos Castillo and I recently graduated with a degree in Software and Computer Systems Engineering from La Salle Bajío university. I am interested in applying my knowledge to software project to provide solutions to problems in the tech industry, and I am passionate about web development—specially web design—where user interfaces are essential to ensuring that user has the best experience and is guided effectively through the website or application."
                },
                experience: {
                    title: "Experience",
                    description: "I have gained three years of practical experience in software development through university and personal projects (particularly the web project I completed at the same university as part of my professional internship), with a focus on web and mobile applications."
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
                    certifications: "Certifications",
                    phone: "Phone",
                    email: "Email",
                    contactMe: "Contact Me!"
                },
                relevantProjects: {
                    title: "Relevant Projects",
                    technologyUsed: "Technologies used",
                    buttonText: "View public github repository",
                    ContributeQuestionText: "What did I contribute to this project?",
                    project1: {
                        title: "System of indicators and strategies (in development)",
                        description: "Web platform project to manage different elements such as indicators, strategies, faculties, careers, users, among others.",
                        contributionText: "My main contribution was the development of the frontend using Blazor Server, where I implemented the user interface and interaction logic. Additionally, I participated in the creation and modification of endpoints and assisted in migrations with PostgreSQL and SQL Server using Entity Framework Core. I also supported and contributed to the configuration of custom images for both the Front-end and Back-end of Docker, as well as the deployment of those images on Azure and Render; I used Ngrok for communication between the SQL Server database and the Back-end image deployed on Render. In terms of visual design, I contributed ideas and collaborated in creating prototypes using Figma.",
                        buttonTextFrontendRepository: "View frontend repository on github",
                        buttonTextBackendRepository: "View backend repository on github",
                    },
                    project2: {
                        title: "FakeBuster",
                        description: "Web platform project for fake news detection using Gemini, allowing verification of news authenticity.",
                        contributionText: "My main contribution was switching the use of the Palm API (currently discontinued) to the Gemini API. Additionally, I created the initial version of the user interface using React; it was later modified to a final version while maintaining the main functionality. I also resolved an issue that arose from installing some unnecessary Python libraries, allowing the application to function correctly for its presentation at the university."
                    },
                    project3: {
                        title: "O'Clock Store",
                        description: "Web templates for an online watch store, with responsive design. Includes pages for watch catalog, watch details, and shopping cart.",
                        contributionText: "My main contribution was the development of the different interfaces solely with HTML and CSS, where I implemented the responsive design of the watch catalog pages, watch details, and shopping cart."
                    },
                    project4: {
                        title: "MyBookShelf",
                        description: "Mobile application project to manage, view, and rate books. Allows viewing some books and creating personalized lists by adding or removing books.",
                        contributionText: "My main contribution was developing the mobile app using React Native with Expo, where I implemented the user interfaces and interaction logic. In addition, I participated in the creation of the REST API using Node.js and Express to manage book data, using MySQL as the database. I also contributed ideas and collaborated on prototyping using Figma. As a side note, this mobile app was originally planned to be developed using Swift and Java, but was later changed to a React Native with Expo environment to facilitate cross-platform development."
                    },
                    project5: {
                        title: "Mobile Calculator",
                        description: "Calculator project for mobile devices, with an intuitive interface. Allows performing basic operations, designed for usability on touch screens.",
                        contributionText: "My main contribution was developing the mobile app using React Native with Expo, where I implemented the user interface and interaction logic."
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
                },
                certifications: {
                    title: "Certifications",
                    textYear1: "Start Date",
                    textYear2: "End Date",
                    badgeButtonText: "View Badge",
                    certification1: {
                        title: "AWS Cloud Practitioner",
                        startYear: "2024",
                        endYear: "2027",
                    },
                    certification2: {
                        title: "Cisco: Introduction to Cybersecurity",
                        startYear: "2023",
                    }
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