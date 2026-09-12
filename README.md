# Menna Elwan — Flutter Developer Portfolio

Personal portfolio site for **Menna Elwan**, Flutter Developer, built from scratch as a fast, dependency-free static site.

**Live site:** https://menna3lwan.github.io/Menna_Elwan.github.io/

## What's inside

- `index.html` — single-page portfolio: Hero, About, Skills, Experience, Projects, Open Source, Education, Contact.
- `assets/css/style.css` — hand-written CSS (design tokens, dark/light theme, animations, responsive layout). No CSS framework.
- `assets/js/main.js` — vanilla JS: theme toggle, scroll reveal, typewriter effect, scrollspy, animated counters, project filters. No JS framework/library.
- `assets/img/` — optimized profile photo and real project screenshots (sourced from my own GitHub repos).
- `assets/files/Menna-Elwan-CV.pdf` — downloadable résumé, kept in sync with the LinkedIn/GitHub profile.

## Design goals

- **Fast** — no build step, no external JS/CSS frameworks, optimized/compressed images, system + Google Fonts only.
- **Consistent branding** — content, project descriptions, and skills mirror my [CV](assets/files/Menna-Elwan-CV.pdf), [GitHub](https://github.com/menna3lwan), and [LinkedIn](https://www.linkedin.com/in/menna-elwan/) so recruiters see the same story everywhere.
- **Responsive** — mobile-first layout, tested across mobile / tablet / desktop breakpoints.
- **Accessible motion** — scroll reveals, a typewriter headline, and subtle floating/gradient effects that respect `prefers-reduced-motion`.

## Content sources

All experience, projects, and skills are sourced directly from my résumé and from my public GitHub repositories — nothing here is invented. See `branding/BRANDING_CONSISTENCY.md` for the full cross-platform positioning notes and `branding/LINKEDIN_OPTIMIZATION.md` for the LinkedIn content package.

## Running locally

No build tools required — it's plain HTML/CSS/JS.

```bash
# from the project root
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deployment

This repo is served via GitHub Pages directly from the `main` branch root.

## Connect

- GitHub: [github.com/menna3lwan](https://github.com/menna3lwan)
- LinkedIn: [linkedin.com/in/menna-elwan](https://www.linkedin.com/in/menna-elwan/)
- Email: menna3lwan@gmail.com
