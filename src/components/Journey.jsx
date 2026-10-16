import SectionHeading from "./SectionHeading";
import { journey } from "../config/site";

const statusLabel = {
  completed: "Completed",
  current: "Learning",
  upcoming: "Up next",
};

export default function Journey() {
  return (
    <section id="journey" className="section section--alt" aria-labelledby="journey-title">
      <div className="container container--narrow">
        <SectionHeading
          id="journey-title"
          title="Development journey"
          intro="How my learning has progressed so far, and where it is heading."
        />

        {journey.length > 0 ? (
          <ol className="timeline">
            {journey.map((item) => (
              <li key={item.title} className={`timeline__item timeline__item--${item.status}`}>
                <span className="timeline__marker" aria-hidden="true" />
                <div className="timeline__body">
                  <div className="timeline__meta">
                    <span className={`status status--${item.status}`}>{statusLabel[item.status]}</span>
                    {item.period ? <span className="timeline__period">{item.period}</span> : null}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        ) : (
          <p className="empty">Journey milestones will appear here once they are added to src/config/site.js.</p>
        )}
      </div>
    </section>
  );
}
