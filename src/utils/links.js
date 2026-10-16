/** True only for real http(s) URLs that are not still template placeholders. */
export function isValidUrl(value) {
  if (typeof value !== "string" || value.trim() === "") return false;
  if (value.toUpperCase().includes("YOUR-")) return false;
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}

/** True when an email is still the template placeholder. */
export function isPlaceholderEmail(value) {
  return !value || value.includes("example.com");
}
