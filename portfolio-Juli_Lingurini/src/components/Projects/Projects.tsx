import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projectsData } from '../../data/projects';
import type { Language } from '../../data/translations';
import './Projects.css';

export default function Projects({ t, lang }: { t: any; lang: Language }) {
    return (
        <section id="proyectos" className="section">
            <h3 className="section-title">{t.projects.title}</h3>
            <div className="projects-grid">
                {projectsData.map((project) => (
                    <article key={project.id} className="project-card">
                        <h4 className="project-title">{project.title}</h4>
                        <p className="project-desc">{project.desc[lang]}</p>
                        <div className="tech-tags">
                            {project.tech.map((tech, index) => (
                                <span key={index} className="tech-tag">{tech}</span>
                            ))}
                        </div>
                        <div className="project-links">
                            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="project-link">
                                <FaGithub /> {t.viewCode}
                            </a>
                            {project.liveUrl && (
                                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="project-link">
                                    <FaExternalLinkAlt /> {t.viewDemo}
                                </a>
                            )}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}