import Project from "@/app/components/Project/Project";

export default function ProjectsLayoutEN() {
    const projectsData = [
        {
            title: "Github Repositories",
            description: "Web application where you can consult the GitHub repositories of a particular user according to the title and programming language.",
            tech: ["TypeScript", "React", "Vite"],
            weblink: "https://github-repositories-omega.vercel.app/",
            githublink: "https://github.com/EricSalat/github-repositories",
            repoReference: "github-repositories",
        },
        {
            title: "Hitmakers",
            description: "Web application where you can consult the GitHub repositories of a particular user according to the title and programming language.",
            tech: ["JavaScript", "React", "Vite"],
            weblink: "https://hitmakers.vercel.app/",
            githublink: "https://github.com/EricSalat/music-promoter",
            repoReference: "music-promoter",
        },
        {
            title: "Crypto stocks",
            description: "Main screen of a cryptocurrency investment app. See the balance of your stocks.",
            tech: ["HTML", "CSS", "JavaScript", "React"],
            weblink: "https://crypto-stocks-green.vercel.app/",
            githublink: "https://github.com/EricSalat/kelisto-ejercicio-tecnico",
            repoReference: "kelisto-ejercicio-tecnico",
        },
        {
            title: "Professional website",
            description: "Check the code of this site, my professional web, made with HTML, CSS, JavaScript and React.",
            tech: ["JavaScript", "React", "Next.js"],
            weblink: "https://ericsalat.com",
            githublink: "https://github.com/EricSalat/refactor-web-profesional",
            repoReference: "refactor-web-profesional",
        },
        {
            title: "Arian International",
            description: "UX/UI redesign of the cooperative website. Implemented responsive design and improved performance.",
            tech: ["HTML", "CSS", "Wordpress"],
            weblink: "https://arianinternational.eu/",
            githublink: "https://arianinternational.eu/",
            repoReference: null,
        },
    ];

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