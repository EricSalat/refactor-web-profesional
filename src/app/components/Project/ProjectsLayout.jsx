import { useState, useEffect } from "react";
import Project from "./Project";
import "./Project.css";
import {useTranslations} from 'next-intl';



function ProjectsLayout() {

        const t = useTranslations('PROJECTS');

        const projectsData = [
            {
                title: t('github_repo_title'),
                description: t('github_repo_description'),
                tech: ["TypeScript", "React", "Vite"],
                weblink: "https://github-repositories-omega.vercel.app/",
                githublink: "https://github.com/EricSalat/github-repositories",
                repoReference: "github-repositories",
            },
            {
                title: t('hitmakers_title'),
                description: t('hitmakers_description'),
                tech: ["JavaScript", "React", "Vite"],
                weblink: "https://hitmakers.vercel.app/",
                githublink: "https://github.com/EricSalat/music-promoter",
                repoReference: "music-promoter",
            },
            {
                title: t('crypto_title'),
                description: t('crypto_description'),
                tech: ["HTML", "CSS", "JavaScript", "React"],
                weblink: "https://crypto-stocks-green.vercel.app/",
                githublink: "https://github.com/EricSalat/kelisto-ejercicio-tecnico",
                repoReference: "kelisto-ejercicio-tecnico",
            },
            {
                title: t('professional_website_title'),
                description: t('professional_website_description'),
                tech: ["HTML", "CSS", "Wordpress"],
                weblink: t('professional-website-link'),
                githublink: "https://arianinternational.eu/",
                repoReference: null,
            },
            {
                title: t('arian_title'),
                description: t('arian_description'),
                tech: ["JavaScript", "React", "Next.js"],
                weblink: "https://ericsalat.com",
                githublink: "https://github.com/EricSalat/refactor-web-profesional",
                repoReference: "refactor-web-profesional",
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