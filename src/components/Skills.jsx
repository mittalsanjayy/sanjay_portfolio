import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import { skillCategories, skillLevels } from "../config/site";

function LevelBadge({ level }) {
  const info = skillLevels[level];
  if (!info) return null;
  return (
    <span className={`level level--${level}`} title={info.hint}>
      <span className="level__dot" aria-hidden="true" />
      {info.label}
    </span>
  );
}

export default function Skills() {
  const hasSkills = skillCategories.length > 0;

  return (
    <section id="skills" className="section section--alt" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading
          id="skills-title"
          title="Technical skills"
          intro="Each label reflects whether I have studied a topic, understand it at a basic level, or have applied it in a project."
        />

        <ul className="legend" aria-label="Skill label meanings">
          {Object.entries(skillLevels).map(([key, info]) => (
            <li key={key} className={`level level--${key}`}>
              <span className="level__dot" aria-hidden="true" />
              <strong>{info.label}:</strong> {info.hint}
            </li>
          ))}
        </ul>

        {hasSkills ? (
          <div className="skills-grid">
            {skillCategories.map((category) => (
              <article className="skill-panel" key={category.id} aria-labelledby={`skill-${category.id}`}>
                <header className="skill-panel__header">
                  <span className="icon-tile"><Icon name={category.icon} size={20} /></span>
                  <div>
                    <h3 id={`skill-${category.id}`}>{category.title}</h3>
                    <p>{category.summary}</p>
                  </div>
                </header>
                <ul className="skill-list">
                  {category.skills.map((skill) => (
                    <li key={skill.name} className="skill-item">
                      <span>{skill.name}</span>
                      <LevelBadge level={skill.level} />
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        ) : (
          <p className="empty">Skills will appear here once they are added to src/config/site.js.</p>
        )}
      </div>
    </section>
  );
}
