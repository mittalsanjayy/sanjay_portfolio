import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import { exploring } from "../config/site";

export default function Exploring() {
  return (
    <section id="exploring" className="section" aria-labelledby="exploring-title">
      <div className="container">
        <SectionHeading
          id="exploring-title"
          title="What I'm exploring"
          intro="These are learning goals and interests, not claims of professional expertise."
        />
        <ul className="explore-list">
          {exploring.map((item) => (
            <li key={item.title} className="explore-item">
              <Icon name={item.icon} size={22} className="explore-item__icon" />
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
