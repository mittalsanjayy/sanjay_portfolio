import Icon, { GitHubIcon, LinkedInIcon } from "./Icon";
import { links, profile } from "../config/site";

export default function Footer() {
  const year = new Date().getFullYear();
  const githubUrl = links.github?.trim();
  const linkedInUrl = links.linkedin?.trim();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <p className="footer__name">{profile.name}</p>
          <p className="footer__headline">{profile.shortRole}</p>
          <p className="footer__copy">&copy; {year} {profile.name}. All rights reserved.</p>
        </div>

        <div className="footer__side">
          <ul className="footer__social" aria-label="Profiles">
            {githubUrl ? (
              <li>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)">
                  <GitHubIcon />
                </a>
              </li>
            ) : null}
            {linkedInUrl ? (
              <li>
                <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)">
                  <LinkedInIcon />
                </a>
              </li>
            ) : null}
          </ul>
          <a className="back-to-top" href="#home">
            <Icon name="arrowUp" size={16} />
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
