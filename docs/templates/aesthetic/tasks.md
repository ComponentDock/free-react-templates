# Aesthetic (Colorlib Aesthetic) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Cove PR awaits review.
> Implementation ships later on `feat/template-aesthetic`.

## Design notes

- **Original:** ColorLib "Aesthetic" — free medical & cosmetic surgery
  website template (source: https://colorlib.com/wp/template/aesthetic/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/aesthetic/`
  (HTTP 200, 43.2KB) + stylesheet `css/style.css` (269.5KB). Full rendered
  DOM extracted; structure below is from the DOM + CSS tokens.
- **Structure observed (1:1):** navbar (Home/About/Services/Pages/Pricing/
  Doctor/Blog Details/News/Contact) → hero (set-bg photo, "Take the world's
  best quality Treatment" + Contact us) → consultation band → choose us
  ("Find Best Doctors With AESTHETIC": Advanced equipment, Qualified
  doctors, Certified services, Emergency care) → services (set-bg,
  procedures: Body procedures, Facial Procedures, Breast procedures, Skin
  care & Beauty) → team ("Our Expert Doctors": Caroline Grant, Dr. Maria
  Angel, Nathan Mullins) → latest ("Skin care tips" blog: 3 posts) →
  footer (Subscribe + Company: About Us/Departments/Find a Doctor/FAQ/News
  - Quick links: Facial Fillers/Breast Surgery/Body Lifts/Face & Neck/Fat
    Reduction + Contact Us: Los Angeles Gournadi, 1230 Bariasl ·
    1-677-124-44227 · Support@gmail.com).
- **Design tokens:** brand teal **#13a2b7** + dark **#111111**; font
  **Poppins** via Google Fonts; light sections with set-bg photo bands;
  teal filled rounded buttons.
- **Recreation name:** Aesthetic. App folder `apps/aesthetic`, package
  `@free-react-templates/aesthetic`.
- **Design approach:** light theme with teal accents; hero = seeded picsum
  photo + headline; consultation band; choose-us/features with lucide
  icons; procedures grid with photo cards; doctor cards with initials
  avatars; blog cards with seeded photos; footer with newsletter/contact
  columns + social links; all images picsum-seeded
  (`picsum.photos/seed/aesthetic-N/w/h`); Google Fonts via `<link>`.
- Reuse `packages/ui` (Button, ButtonLink, Card, Badge, cn) — do NOT
  duplicate components.
- Base implementation on `apps/aurora` (multi-section landing with
  Navbar/Hero/Sections/Footer structure) — the closest existing multi-section
  app; adapt patterns from the 404 apps' Navbar/SocialLinks.

## Tasks

- [x] Write `openspec/specs/template-aesthetic/spec.md` (Gherkin
      requirements + scenarios + replication findings) — DONE on main (this
      prep).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/aesthetic` (copy `apps/aurora`; rename package to
      `@free-react-templates/aesthetic`).
- [ ] TDD: tests first for Navbar, Hero, ChooseUs, Procedures, Doctors,
      Blog, Footer, App composition; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list.
