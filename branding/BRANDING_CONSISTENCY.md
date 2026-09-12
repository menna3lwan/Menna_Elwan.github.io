# Personal Branding Consistency — CV ↔ LinkedIn ↔ GitHub ↔ Portfolio

This is the single source of truth used to build the portfolio and the LinkedIn content package, plus a checklist to keep all four surfaces aligned going forward.

## Core positioning (use everywhere)

- **Name:** Menna Elwan (Menna Maher Elwan on the CV)
- **Title:** Flutter Developer
- **One-line pitch:** Flutter Developer building cross-platform mobile apps with Clean Architecture, Firebase, REST APIs, and ERP data-grids (PlutoGrid) — with real experience across ERP, healthcare, education, and AI-assisted products.
- **Location:** Egypt
- **Contact:** menna3lwan@gmail.com · +20 112 779 8986
- **Links:** github.com/menna3lwan · linkedin.com/in/menna-elwan

This exact positioning is used verbatim (or near-verbatim) in the portfolio hero/about copy and in the LinkedIn headline/About draft in `LINKEDIN_OPTIMIZATION.md`, so a recruiter reading either sees the same story.

## Cross-platform status (as of this rebuild)

| Surface | Status | Notes |
|---|---|---|
| **CV** (`assets/files/Menna-Elwan-CV.pdf`) | ✅ Source of truth | Used as the base for every experience/project/skill claim on the portfolio and in the LinkedIn draft. |
| **Portfolio** (this repo) | ✅ Rebuilt from scratch | New Hero/About/Skills/Experience/Projects/Open Source/Education/Contact sections, all sourced from the CV + your public GitHub repos. |
| **GitHub — repos** | ✅ Verified via API | Project descriptions on the portfolio were cross-checked against real repo READMEs (`hen_lhen`, `doctor_app`, `patient_app`, `movie_app`, `tasky_app`, `weather_app`, `exam_app`, `flower_app`, `Voltify`, `sout_el_qaa`, `WorkSync`, `digital_tasbeeh`, `pluto_grid`). |
| **GitHub — profile bio** | ⚠️ Needs a manual update | Your public GitHub bio currently reads *"Computer Science Enthusiast, Building the Future One Line at a Time, Algorithm Explorer."* This doesn't mention Flutter and reads as generic — it contradicts the "Flutter Developer" positioning used everywhere else. |
| **GitHub — profile README** (`github.com/menna3lwan/menna3lwan`) | ⚠️ Please verify | A GitHub-profile-style README (typing SVG, "Flutter Developer" badges, stats widgets) was found inside *this* portfolio repo's old `README.md` — it looks like it was meant for your special `menna3lwan/menna3lwan` profile repo instead. It's been replaced here with a portfolio-specific README (see below). Check whether your actual profile repo has the matching content, since GitHub shows that README on your profile page — it's high-visibility real estate for the same "Flutter Developer" story. |
| **LinkedIn** | ⏳ Action needed | I don't have (and shouldn't attempt) login access to your LinkedIn account, so I couldn't edit it directly. `LINKEDIN_OPTIMIZATION.md` contains ready-to-paste Headline, About, Experience, Projects, Skills, and Featured-section content — copy it in and the four surfaces will match. |

### Recommended GitHub bio replacement (paste into GitHub → Edit profile → Bio)

```
Flutter Developer | Clean Architecture, BLoC/Provider/Riverpod | Firebase & REST APIs | Open-source contributor (PlutoGrid)
```

## Fixing a factual mismatch before you publish

- **"Fashion App" / `Fashion-Store` repo:** this repository is a **fork**, not fully original work. Keep describing it exactly as the CV does ("E-commerce app with product browsing, wishlist management, payment integration, and real-time order tracking") — don't claim it was built fully from scratch on LinkedIn or in interviews; you can mention it was built on top of an existing base and customized, if asked.
- **Weather app:** the CV describes an "AI model to predict weather conditions," while the current `weather_app` GitHub repo (Skyline Weather) shows a straightforward forecast API integration without a visible AI/ML component in the README. The portfolio card uses the CV's framing since the CV is your source of truth — but if the AI piece isn't actually implemented yet, consider either (a) finishing/publishing that piece, or (b) softening the AI claim on LinkedIn/portfolio to avoid a recruiter noticing the gap after checking the repo.
- **MentorX, Meal Recommendation App, News App:** no public repos were found for these on your GitHub (likely private/team repos). They're included on the portfolio and LinkedIn draft as CV-only entries without GitHub links — this is intentional and consistent (no broken/missing links), but if you can make any of them public, linking real code will strengthen this section a lot.

## What "consistent" means for you day to day

1. Whenever you add a new project to your CV, add the same one-line description to the portfolio's Projects section and to LinkedIn's Projects section — same wording, same tech tags.
2. Whenever you finish something meaningful on GitHub, consider promoting it into the CV → then the portfolio → then LinkedIn, in that order, so all three stay in sync.
3. Keep the same headline framing everywhere: **Flutter Developer** first, supporting specializations (Clean Architecture, Firebase, ERP/data-grids, open source) second.
4. Reuse the same profile photo (or a same-session variant) across LinkedIn, GitHub, and the portfolio so your visual identity is instantly recognizable.
