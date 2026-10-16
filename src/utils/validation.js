const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const LIMITS = { name: 80, subject: 120, message: 2000 };

/** Returns an object of field -> error message. Empty object means valid. */
export function validateContact({ name, email, subject, message }) {
  const errors = {};
  const n = name.trim();
  const e = email.trim();
  const s = subject.trim();
  const m = message.trim();

  if (n.length < 2) errors.name = "Enter your name (at least 2 characters).";
  else if (n.length > LIMITS.name) errors.name = `Keep your name under ${LIMITS.name} characters.`;

  if (!e) errors.email = "Enter your email address.";
  else if (!EMAIL_PATTERN.test(e)) errors.email = "Enter a valid email address, like name@example.com.";

  if (s.length < 3) errors.subject = "Enter a subject (at least 3 characters).";
  else if (s.length > LIMITS.subject) errors.subject = `Keep the subject under ${LIMITS.subject} characters.`;

  if (m.length < 10) errors.message = "Write a message of at least 10 characters.";
  else if (m.length > LIMITS.message) errors.message = `Keep the message under ${LIMITS.message} characters.`;

  return errors;
}
