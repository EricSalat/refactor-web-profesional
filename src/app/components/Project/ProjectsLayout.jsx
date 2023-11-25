import { useState, useEffect } from "react";
import Project from "./Project";
import { fetchCommitsData } from "@/app/logic/APICall";
import "./Project.css";



function ProjectsLayout() {
        const projectsData = [
            {
                title: "Github Repositories",
                description: "Aplicación web donde consultar los repositorios de GitHub de un usuario en particular según el título y el lenguaje de programación.",
                tech: ["TypeScript", "React", "Vite"],
                weblink: "https://github-repositories-omega.vercel.app/",
                githublink: "https://github.com/EricSalat/github-repositories",
                repoReference: "github-repositories",
            },
            {
                title: "Hitmakers",
                description: "Aplicación estilo Spotify de una productora de música para promocionar el álbum de la cantante Tessa Violet",
                tech: ["JavaScript", "React", "Vite"],
                weblink: "https://hitmakers.vercel.app/",
                githublink: "https://github.com/EricSalat/music-promoter",
                repoReference: "music-promoter",
            },
            {
                title: "Crypto stocks",
                description: "Pantalla principal de una app de inversiones de criptomonedas. Ve el balance de tus stocks.",
                tech: ["HTML", "CSS", "JavaScript", "React"],
                weblink: "https://crypto-stocks-green.vercel.app/",
                githublink: "https://github.com/EricSalat/kelisto-ejercicio-tecnico",
                repoReference: "kelisto-ejercicio-tecnico",
            },
            {
                title: "Web profesional",
                description: "Revisa el código de este mismo sitio, mi web profesional, hecha con HTML, CSS, JavaScript, React y Next.js.",
                tech: ["JavaScript", "React", "Next.js"],
                weblink: "https://ericsalat.com",
                githublink: "https://github.com/EricSalat/refactor-web-profesional",
                repoReference: "refactor-web-profesional",
            },
            {
                title: "Web Arian International",
                description: "Rediseño de UX/UI de la web corporativa. Implementación de diseño responsive y mejora del rendimiento.",
                tech: ["HTML", "CSS", "Wordpress"],
                weblink: "https://arianinternational.eu/",
                githublink: "https://arianinternational.eu/",
                repoReference: null,
            },
        ];
        
        const [datosApi, setDatosApi] = useState({});
    
        // useEffect(() => {
        //     // Hacer una solicitud por cada proyecto con su referencia
        //     const fetchData = async () => {
        //         for (const project of projectsData) {
        //             if (project.repoReference) {
        //                 try {
        //                     const data = await fetchCommitsData(project.repoReference);
        //                     setDatosApi((prevDatos) => ({
        //                         ...prevDatos,
        //                         [project.repoReference]: data[0].total
        //                     }));
        //                     console.log(`Datos obtenidos para ${project.repoReference}, un total de ${data[0].total}`);
        //                     console.log(data);
        //                 } catch (error) {
        //                     console.error(`Error al obtener los datos para ${project.repoReference}:`, error);
        //                 }
        //             }
        //         }
        //     };
    
        //     fetchData();
        // }, [projectsData]);
    
       
    return (
        
        <div className="projects-section">
            {projectsData.map( (project, index) => (
                <Project
                    key={index}
                    title={project.title}
                    description={project.description}
                    // commits={datosApi[project.repoReference] || null}
                    tech={project.tech}
                    weblink={project.weblink}
                    githublink={project.githublink}
                />
            ))}
        </div>
    );
}
       


export default ProjectsLayout