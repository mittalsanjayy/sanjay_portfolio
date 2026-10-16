import { useEffect, useRef } from "react";
import Icon, { GitHubIcon } from "./Icon";
import { isValidUrl } from "../utils/links";

const featureMeta = {
  implemented: { icon: "checkCircle", label: "Implemented" },
  partial: { icon: "circleDot", label: "Partly built" },
  planned: { icon: "circle", label: "Planned" },
};

/** Uses the native <dialog> element: focus trapping and Escape come built in. */
export default function ProjectModal({ project, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (project && !dialog.open) dialog.showModal();
    if (!project && dialog.open) dialog.close();
  }, [project]);

  const handleBackdropClick = (event) => {
    if (event.target === dialogRef.current) onClose();
  };

  const hasGithub = isValidUrl(project?.links?.github);
  const hasDemo = isValidUrl(project?.links?.demo);

  return (
    <dialog
      ref={dialogRef}
      className="modal"
      aria-labelledby="modal-title"
      onClose={onClose}
      onClick={handleBackdropClick}
    >
      {project && (
        <div className="modal__content">
          <header className="modal__header">
            <div>
              <h3 id="modal-title">{project.title}</h3>
              <span className="status">{project.status}</span>
            </div>
            <button type="button" className="icon-button" onClick={onClose} aria-label="Close project details">
              <Icon name="close" size={20} />
            </button>
          </header>

          <p className="modal__summary">{project.summary}</p>

          <div className="modal__cols">
            <section>
              <h4>The problem</h4>
              <p>{project.problem}</p>
            </section>
            <section>
              <h4>The solution</h4>
              <p>{project.solution}</p>
            </section>
          </div>

          <section>
            <h4>Technologies and project tags</h4>
            <ul className="chips">
              {project.stack.map((tech) => (
                <li key={tech} className="chip">{tech}</li>
              ))}
            </ul>
          </section>

          <section>
            <h4>Features and their status</h4>
            <ul className="feature-list">
              {project.features.map((feature) => {
                const meta = featureMeta[feature.status] ?? featureMeta.planned;
                return (
                  <li key={feature.label} className={`feature feature--${feature.status}`}>
                    <Icon name={meta.icon} size={18} />
                    <span>{feature.label}</span>
                    <span className="feature__state">{meta.label}</span>
                  </li>
                );
              })}
            </ul>
          </section>

          <footer className="modal__footer">
            {hasGithub && (
              <a className="btn btn--secondary btn--sm" href={project.links.github} target="_blank" rel="noopener noreferrer">
                <GitHubIcon size={16} />
                View on GitHub
              </a>
            )}
            {hasDemo && (
              <a className="btn btn--primary btn--sm" href={project.links.demo} target="_blank" rel="noopener noreferrer">
                <Icon name="arrowUpRight" size={16} />
                Open live demo
              </a>
            )}
            {!hasGithub && !hasDemo && (
              <p className="modal__note">Source code and a live demo will be linked here once they are available.</p>
            )}
          </footer>
        </div>
      )}
    </dialog>
  );
}
