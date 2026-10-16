import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Icon, { GitHubIcon, LinkedInIcon } from "./Icon";
import SectionHeading from "./SectionHeading";
import { contact, links } from "../config/site";
import { LIMITS, validateContact } from "../utils/validation";

const emptyForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
  website: "",
};

export default function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({
    type: "idle",
    message: "",
  });

  const lastSent = useRef(0);

  const emailConfigured = Boolean(
    contact.emailServiceId &&
      contact.emailTemplateId &&
      contact.emailPublicKey
  );

  const sending = status.type === "sending";

  const githubUrl = links.github?.trim();
  const linkedInUrl = links.linkedin?.trim();

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: undefined,
    }));
  }

  function handleBlur(event) {
    const { name } = event.target;
    const validationErrors = validateContact(form);

    setErrors((previous) => ({
      ...previous,
      [name]: validationErrors[name],
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (sending) return;

    // Honeypot field to discourage automated spam.
    if (form.website) {
      setStatus({
        type: "error",
        message: "Unable to send your message. Please try again.",
      });
      return;
    }

    const validationErrors = validateContact(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setStatus({
        type: "error",
        message: "Please correct the highlighted fields.",
      });

      const firstInvalidField = [
        "name",
        "email",
        "subject",
        "message",
      ].find((field) => validationErrors[field]);

      document
        .getElementById(`contact-${firstInvalidField}`)
        ?.focus();

      return;
    }

    if (!emailConfigured) {
      setStatus({
        type: "error",
        message: `Email is not configured. Contact me at ${links.email}.`,
      });
      return;
    }

    const cooldownMs = (contact.cooldownSeconds || 30) * 1000;
    const remainingMs =
      cooldownMs - (Date.now() - lastSent.current);

    if (remainingMs > 0) {
      setStatus({
        type: "error",
        message: `Please wait ${Math.ceil(
          remainingMs / 1000
        )} seconds before sending another message.`,
      });
      return;
    }

    setStatus({
      type: "sending",
      message: "Sending your message...",
    });

    try {
      await emailjs.send(
        contact.emailServiceId,
        contact.emailTemplateId,
        {
          from_name: form.name.trim(),
          reply_to: form.email.trim(),
          subject: form.subject.trim(),
          message: form.message.trim(),
        },
        {
          publicKey: contact.emailPublicKey,
        }
      );

      lastSent.current = Date.now();
      setForm({ ...emptyForm });

      setStatus({
        type: "success",
        message: "Message sent successfully! Thank you for contacting me.",
      });
    } catch (error) {
      console.error("EmailJS error:", error);

      setStatus({
        type: "error",
        message: `Your message could not be sent. Please try again or email me at ${links.email}.`,
      });
    }
  }

  function errorDescription(field) {
    return errors[field] ? `error-${field}` : undefined;
  }

  return (
    <section
      id="contact"
      className="section section--alt"
      aria-labelledby="contact-title"
    >
      <div className="container contact">
        <div className="contact__intro">
          <SectionHeading
            id="contact-title"
            title="Let's Connect"
            intro="Have an opportunity, a project idea, or a question? I'd love to hear from you. Feel free to reach out about software development, cloud computing, or AI."
          />

          <ul className="contact__links">
            <li>
              <a
                className="contact-link"
                href={`mailto:${links.email}`}
              >
                <Icon name="mail" size={18} />
                <span>{links.email}</span>
              </a>
            </li>

            {githubUrl && (
              <li>
                <a
                  className="contact-link"
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon />
                  <span>GitHub</span>
                  <span className="sr-only">
                    {" "} (opens in a new tab)
                  </span>
                </a>
              </li>
            )}

            {linkedInUrl && (
              <li>
                <a
                  className="contact-link"
                  href={linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon />
                  <span>LinkedIn</span>
                  <span className="sr-only">
                    {" "} (opens in a new tab)
                  </span>
                </a>
              </li>
            )}
          </ul>

          <p className="contact__note">
            {emailConfigured
              ? "Send me a message using the form. I'll get back to you as soon as possible."
              : `The contact form needs configuration. You can reach me directly at ${links.email}.`}
          </p>
        </div>

        <form
          className="form"
          onSubmit={handleSubmit}
          noValidate
          aria-label="Contact form"
        >
          <div className="field">
            <label htmlFor="contact-name">Full Name</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              maxLength={LIMITS.name}
              value={form.name}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errorDescription("name")}
              required
            />
            {errors.name && (
              <p className="field__error" id="error-name">
                {errors.name}
              </p>
            )}
          </div>

          <div className="field">
            <label htmlFor="contact-email">Email Address</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              maxLength={254}
              value={form.email}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errorDescription("email")}
              required
            />
            {errors.email && (
              <p className="field__error" id="error-email">
                {errors.email}
              </p>
            )}
          </div>

          <div className="field">
            <label htmlFor="contact-subject">Subject</label>
            <input
              id="contact-subject"
              name="subject"
              type="text"
              maxLength={LIMITS.subject}
              value={form.subject}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={Boolean(errors.subject)}
              aria-describedby={errorDescription("subject")}
              required
            />
            {errors.subject && (
              <p className="field__error" id="error-subject">
                {errors.subject}
              </p>
            )}
          </div>

          <div className="field">
            <label htmlFor="contact-message">Your Message</label>
            <textarea
              id="contact-message"
              name="message"
              rows={6}
              maxLength={LIMITS.message}
              value={form.message}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={[
                errorDescription("message"),
                "count-message",
              ]
                .filter(Boolean)
                .join(" ")}
              required
            />

            <div className="field__foot">
              {errors.message ? (
                <p className="field__error" id="error-message">
                  {errors.message}
                </p>
              ) : (
                <span />
              )}

              <span
                className="field__count"
                id="count-message"
              >
                {form.message.length}/{LIMITS.message}
              </span>
            </div>
          </div>

          <div
            className="field field--honeypot hp"
            aria-hidden="true"
          >
            <label htmlFor="contact-website">Website</label>
            <input
              id="contact-website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={form.website}
              onChange={handleChange}
            />
          </div>

          <div className="form__actions">
            <button
              type="submit"
              className="btn btn--primary"
              disabled={sending}
            >
              {sending ? "Sending..." : "Send Message"}
            </button>

            {status.message && (
              <p
                className={`form__status form__status--${status.type}`}
                role={status.type === "error" ? "alert" : "status"}
                aria-live="polite"
              >
                {status.message}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}