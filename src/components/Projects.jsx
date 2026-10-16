import { useState } from "react";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { projects } from "../config/site";

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeading
          id="projects-title"
          title="Featured projects"
          intro="Projects I'm building to practise full-stack development, databases and cloud infrastructure. Each one shows its real status."
        />

        {projects.length > 0 ? (
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} onOpen={setSelected} />
            ))}
          </div>
        ) : (
          <p className="empty">Projects will appear here once they are added to src/config/site.js.</p>
        )}

        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      </div>
    </section>
  );
}
