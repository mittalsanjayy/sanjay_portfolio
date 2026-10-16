import SectionHeading from "./SectionHeading";
import { about } from "../config/site";

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container about">
        <div>
          <SectionHeading id="about-title" title="About me" />
          <div className="prose">
            {about.paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
        </div>

        <aside className="facts" aria-label="Quick facts">
          <dl>
            {about.facts.map((fact) => (
              <div className="facts__row" key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}
