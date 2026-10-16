# Sanjay Mittal | Developer Portfolio

React + Vite + plain CSS + Lucide icons. No backend, no database, no paid services.

## Run locally (Visual Studio Code)

1. Install Node.js 18 or newer from https://nodejs.org (check with `node -v`).
2. Unzip this folder, then in VS Code: File > Open Folder > `sanu-portfolio`.
3. Open the terminal (Ctrl + `) and run:

```bash
npm install
npm run dev
```

4. Open the address shown (normally http://localhost:5173).

## Production build

```bash
npm run build      # creates the /dist folder
npm run preview    # serves /dist locally to check it
```

## What to edit (everything is in `src/config/site.js`)

| To change | Edit |
|---|---|
| Name, headline, hero text | `profile` |
| GitHub, LinkedIn, email | `links` (replace every `YOUR-...`) |
| Résumé | Replace `public/Sanu_Resume.pdf` with your PDF (same path; the download is named for Sanjay Mittal) |
| About text and quick facts | `about` |
| Skills and their labels | `skillCategories` (levels: learned / familiar / project / practicing) |
| Projects | `projects` (features: implemented / partial / planned) |
| Project screenshots | Put images in `public/images/`, then set `image: "/images/name.png"` |
| Timeline | `journey` (add `period: "..."` only if you want dates) |
| Exploring list | `exploring` |
| Contact form delivery | EmailJS environment variables (see below) |

Project GitHub and demo links stay hidden until you enter real URLs.

## Contact form

The contact form sends submissions through EmailJS to the inbox configured in your EmailJS template. It does not open the visitor's email app. A successful message is shown only after EmailJS confirms the request.

### Configure EmailJS

1. Create an EmailJS account and connect the Gmail inbox `sanjaymittal.p2032005@gmail.com` as an email service.
2. Create an email template with the recipient (`To Email`) set to that Gmail address. Use these template variables:
   - **From name:** `{{from_name}}`
   - **Reply-to:** `{{reply_to}}` (this lets you reply directly to the visitor)
   - **Subject:** `Portfolio message: {{subject}}`
   - **Body:** include `{{from_name}}`, `{{reply_to}}`, `{{subject}}`, and `{{message}}`.
3. Copy `.env.example` to `.env` for local development, then fill in the EmailJS **Service ID**, **Template ID**, and **Public Key**. These `VITE_` values are public browser configuration; never put an EmailJS private key, Gmail password, or other secret in them.
4. Add the same three variables to your deployment provider's build-time environment settings (for example, Vercel Project Settings → Environment Variables or Netlify Site Configuration → Environment Variables), then redeploy. Vite embeds these values at build time; setting them only after deployment does not update an existing build.
5. In EmailJS, restrict allowed origins to your deployed domain and enable its CAPTCHA/bot protection if available. The form also validates input, uses a hidden honeypot, and applies a client-side cooldown; those client-side checks alone are not a strong rate limit.

If the EmailJS values are missing or EmailJS rejects/fails the request, the form shows an error and directs the visitor to the email address instead of reporting a false success.

### Verify delivery

- For local testing, set the three values in `.env`, restart `npm run dev`, submit the form, and confirm the success message appears only after the EmailJS request succeeds.
- For deployment, configure the environment variables in the hosting provider and redeploy. Submit a test message from the deployed site and check the Gmail inbox (and Spam folder). Verify the subject/body fields and use **Reply** to confirm the visitor address is the reply-to.

## Before sharing on LinkedIn

- [ ] Replace GitHub, LinkedIn and email placeholders
- [ ] Replace `public/Sanu_Resume.pdf`
- [ ] Update feature statuses and project statuses to match what truly works
- [ ] Add screenshots
- [ ] In `index.html`, replace `YOUR-SITE-URL` with your deployed address (Open Graph preview)
- [ ] Optionally edit `public/og-image.png` (1200x630)

## Deploy

**Vercel**: push to GitHub, import the repo at vercel.com, framework "Vite", deploy.
**Netlify**: import the repo, build command `npm run build`, publish directory `dist`.
Both are free for personal sites. `public/404.html` is used as the not-found page.

## Troubleshooting

- `npm: command not found`: install Node.js, then restart VS Code.
- `EACCES` or permission errors: do not use sudo; reinstall Node via the official installer.
- Port busy: run `npm run dev -- --port 3000`.
- Blank page: open the browser console (F12) and read the first red error; it is usually a typo in `site.js`.
- Broken install: delete `node_modules` and `package-lock.json`, then run `npm install`.
