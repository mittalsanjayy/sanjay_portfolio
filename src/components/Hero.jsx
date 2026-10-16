import Icon, { GitHubIcon, LinkedInIcon } from "./Icon";
import { links, profile, resume } from "../config/site";

const githubUrl = links.github?.trim();
const linkedInUrl = links.linkedin?.trim();

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__copy">
          <div className="identity">
            <img
              className="identity__avatar"
              src={profile.photo}
              alt={profile.photoAlt}
            />
            <div>
              <p className="identity__name">{profile.name}</p>
              <p className="identity__headline">{profile.headline}</p>
            </div>
          </div>

          <h1 id="hero-title" className="hero__title">{profile.heroTitle}</h1>
          <p className="hero__text">{profile.heroText}</p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#projects">
              View My Projects
              <Icon name="arrowUpRight" size={16} />
            </a>
            <a className="btn btn--secondary" href={resume.file} download={resume.downloadName}>
              <Icon name="download" size={16} />
              Download Résumé
            </a>
          </div>

          <ul className="hero__social" aria-label="Profiles">
            {githubUrl ? (
              <li>
                <a className="social-link" href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <GitHubIcon />
                  <span>GitHub</span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ) : null}
            {linkedInUrl ? (
              <li>
                <a className="social-link" href={linkedInUrl} target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon />
                  <span>LinkedIn</span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ) : null}
          </ul>
        </div>

        <div className="hero__visual" aria-label="Profile photo area">
          <img src={profile.photo} alt={profile.photoAlt} className="profile-photo" />
        </div>
      </div>
    </section>
  );
}
