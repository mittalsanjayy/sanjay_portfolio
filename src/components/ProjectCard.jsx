import Icon, { GitHubIcon } from "./Icon";
import ProjectImage from "./ProjectImage";
import { isValidUrl } from "../utils/links";

export default function ProjectCard({ project, onOpen }) {
  const hasGithub = isValidUrl(project.links?.github);
  const hasDemo = isValidUrl(project.links?.demo);

  return (
    <article className="project-card" aria-labelledby={`card-${project.id}`}>
      <ProjectImage src={project.image} alt={project.imageAlt} variant={project.placeholder} />

      <div className="project-card__body">
        <div className="project-card__top">
          <h3 id={`card-${project.id}`}>{project.title}</h3>
          <span className="status">{project.status}</span>
        </div>

        <p className="project-card__summary">{project.summary}</p>

        <ul className="chips" aria-label={`${project.title} technologies and project tags`}>
          {project.stack.map((tech) => (
            <li key={tech} className="chip">{tech}</li>
          ))}
        </ul>

        <div className="project-card__actions">
          <button type="button" className="btn btn--secondary btn--sm" onClick={() => onOpen(project)}>
            View details
            <span className="sr-only"> for {project.title}</span>
          </button>
          {hasGithub && (
            <a className="btn btn--ghost btn--sm" href={project.links.github} target="_blank" rel="noopener noreferrer">
              <GitHubIcon size={16} />
              GitHub
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          )}
          {hasDemo && (
            <a className="btn btn--ghost btn--sm" href={project.links.demo} target="_blank" rel="noopener noreferrer">
              <Icon name="arrowUpRight" size={16} />
              Live demo
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
