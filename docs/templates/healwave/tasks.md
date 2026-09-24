# Healwave (ColorLib Medi) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the implementation awaits.
> Implementation ships later on `feat/template-healwave`.

## Design notes

- **Original:** ColorLib "Medi" — free medical website template
  (source: https://colorlib.com/wp/template/medi/).
- **Live preview DOM analyzed:** the official preview portal
  (`https://preview.colorlib.com/theme/medi/`) returns HTTP 200 (37.7KB
  HTML) + stylesheet `css/style.css` (150.9KB). Full rendered DOM
  extracted; structure below is from the DOM + CSS tokens.
- **Structure observed (1:1):** nav (logo + menu + Book Appointment) →
  hero slider ("Bringing health to life for the whole family") → welcome
  ("Welcome To Modern Clinic" + image + text + button) → departments
  (tabbed: Dentistry, Cardiology, ENT Specialists, Astrology,
  Neuroanatomy, Blood Screening) → doctors ("Our Doctors" cards) → book
  appointment (CTA band + phone) → quality features (4 cards: Quality
  Health, Health Consultation, Find Health, Search Doctor) → footer
  (3-column: logo+social | departments list | hours).
- **Design tokens:** brand gradient **#24c0f1 → #4c9afe** (blue); solid
  blue **#009DFF**; heading color **#191d34** (dark navy); footer bg
  **#152538**; light section bg **#f9f9ff**; text gray **#999999**;
  accent orange **#ff5e13**; font **Work Sans** + **Roboto** via Google
  Fonts; blue gradient/solid buttons with rounded corners (3–5px).
- **Recreation name:** Healwave. App folder `apps/healwave`, package
  `@free-react-templates/healwave`.
- **Design approach:** light theme with blue gradient accents; hero =
  full-width gradient overlay + headline + dual CTA buttons; welcome =
  two-column with seeded image + text + button; departments = tabbed UI;
  doctors = card grid; book appointment = centered CTA band; quality
  features = icon card grid; footer = dark navy 3-column; all images
  picsum-seeded (`picsum.photos/seed/healwave-N/w/h`); Google Fonts via
  `<link>`.
- Reuse `packages/ui` (Button, ButtonLink, Card, Badge, cn) — do NOT
  duplicate components.
- Base implementation on `apps/aurora` (multi-section landing with
  Navbar/Hero/Sections/Footer structure) — the closest existing multi-section
  app; adapt patterns from the 404 apps' Navbar/SocialLinks.

## Tasks

- [ ] Create branch `feat/template-healwave` from latest origin/main.
- [ ] Mark Healwave `[~]` in TEMPLATES.md on the branch.
- [ ] Refine spec with any additional replication findings (openspec/specs/template-healwave/spec.md).
- [ ] Scaffold `apps/healwave` (copy simplest multi-section app, rename package to `@free-react-templates/healwave`).
- [ ] Write tests first (TDD, red phase): Navbar, hero slider, welcome, departments tabs, doctors, book appointment CTA, quality features, footer + dark mode.
- [ ] Implement components using `packages/ui` + `cn()`, picsum-seeded images, lucide icons, Google Fonts (Work Sans + Roboto).
- [ ] Run verification gate: typecheck → lint → test:coverage (100%) → build → knip → fallow. Also `npm run spec:validate`.
- [ ] Self-review (docs/self-review.md), update TEMPLATES.md docs, commit conventionally, push branch, open PR to main.
