# Pose (ColorLib Stylistic) — Tasks & Design Notes

> Prep artifacts for the model-agency template (renamed Stylistic → Pose on
> claim). Implementation ships on `feat/template-pose`.

## Design notes (replication findings)

- **Original:** ColorLib "Stylistic" — free model agency website template
  (source: https://colorlib.com/wp/template/stylistic/). TEMPLATES.md lines
  **231, 1189, 1731** — THREE duplicate rows (Beauty, Corporate, Portfolio
  categories), all `- [ ]`; mark ALL `[x]` when done. Recreation uses the
  NEW name **Pose** (single word, no collision with `ls apps/` or spec
  folders).
- **Preview URL:** `https://preview.colorlib.com/theme/stylistic/` — **HTTP
  200** (51.7 KB), analyzed live. Stylesheet: `css/style.css` (71.5 KB, all
  custom tokens) + bootstrap/owl deps. Hero is a background video; owl
  carousels used elsewhere.
- **Screenshot** (`stylistic-free-template.jpg`, 1200×946, verified via
  browser vision): dark cinematic look. Header "STYLISTIC / MODEL AGENCY"
  (tall condensed serif) + hamburger; hero = runway-show photo/video
  background, centered "WELCOME TO" (small serif) / "STYLISTIC" (very large
  outlined serif) / "A PROFESSIONAL MODEL AGENCY" (small sans) + hot-pink
  pill "Become A Model"; below, a row of four model portrait cards
  (different women, direct gaze). Black/dark-charcoal backgrounds, white
  text, pink/magenta accent.
- **Visual design (DOM + CSS tokens + screenshot):**
  - Primary: **#f34573** (hot pink — `.btn.btn-primary` bg, links, logo
    icon, `.services .icon` circles, subheadings). 30 uses.
  - Dark neutrals: **#212529** ink, **#343a40** `bg-dark` services band,
    **#191919** appointment band, **#6c757d** gray, **#f8f9fa** light alt.
  - Fonts: headings **Vidaloka** serif (Google Fonts); body **Poppins**
    sans (Google Fonts); bootstrap sans is framework fallback only.
  - Buttons `.btn.btn-primary`: bg `#f34573`, 1px pink border, white text,
    **pill radius 30px**, uppercase; hover = transparent + pink text/border.
  - Sections: hero dark photo; featured model white (cards overlap hero
    `margin-top: -50px`); about white; services **#343a40**; top models
    white; blog white; testimony photo bg + overlay; appointment
    **#191919**; quote dark; footer dark. Rhythm `ftco-section` =
    `padding: 7em 0` (~112px).
  - `.services .icon`: 100×100, bg `#f34573`, `border-radius: 50%` (pink
    circles).
- **Section order (1:1, index page):**
  1. `header` — fixed dark navbar: "Pose / MODEL AGENCY" logo (lucide
     sparkles + text) + nav (Home, Models, Services, Blog, Contact) +
     dark-mode toggle.
  2. `video-hero.js-fullheight` — dark runway photo bg, "Welcome to" /
     "Pose" (serif) / "A Professional Model Agency" + pink pill "Become A
     Model".
  3. `ftco-featured-model` (overlaps hero -50px) — "A Professional Model
     Agency" + 4 model cards: Andrea/Andrea Smith, Nicole/Nicole Wall,
     Cindy/Cindy Smith, Jannah/Jannah Doe; stats Height 185 · Bust 79 ·
     Waist 40 · Hips 87 · Shoe 40.
  4. `ftco-about-section` — "Hello! Pose / A Professional Model Agency" +
     lorem (Vokalia/Bookmarksgrove filler).
  5. `ftco-section.bg-dark` (#343a40) — 4 services cards (Fashion Shows,
     Corporate Events, Commercial Photo Shots, Exhibitions/Trade Shows),
     pink circle icons 100px.
  6. `ftco-section` — "Our Tops Model's" + 10 tiles (Andrea, Cassy,
     Angela, May, Nicole, Jannah, Mariel, Maria, Ozawa, Maine).
  7. `ftco-section` — "Recent Blog" + post cards ("Asia's Next Top Model",
     "May 17, 2019 / Admin / 3").
  8. `testimony-section.img` — quote + "Mike Lewis / Architect".
  9. `ftco-appointment` (#191919) — "Contact Us" (address 198 West 21th
     Street, Suite 721, New York NY 10016; phone + 1235 2355 98; email
     info@yoursite.com; website) + "Become A Model?" + "Model Courses".
  10. `ftco-quote` — "Become A Model? Call us now to know how!" / "Model
      Courses / Know more" + "Request a Quote" heading.
  11. `footer` (dark) — brand Pose + blurb + socials; Recent Blog links;
      Site Links; "Have a Questions?" (address/phone/email).
- **Behavior:** hero video → seeded photo + dark overlay; hamburger nav →
  standard repo Navbar (site name, Home link, dark-mode toggle); one-page
  recreation with nav links as in-page anchors.

## Tasks (implementation order)

- [x] Rename prep folders `template-stylistic` → `template-pose` (spec +
      docs) and mark TEMPLATES.md lines 231/1189/1731 `[~]` (claim commit
      on `feat/template-pose`).
- [ ] `apps/pose` scaffold (copy `apps/pump` — closest multi-section app;
      package `@free-react-templates/pose`; `injectUiSource()` in
      vite.config; register workspace + `npm install` at root so
      package-lock.json updates).
- [ ] `src/index.css` theme tokens: `--color-brand: #f34573`, `--color-ink:
    #212529`, `--color-night: #191919`, `--color-dark: #343a40`,
      `--color-mist: #6c757d`, `--color-cloud: #f8f9fa`; headings Vidaloka
      (Google Fonts `<link>` in index.html: Vidaloka + Poppins); primary
      scale for shared ui Button.
- [ ] `Navbar` — dark, fixed; logo (sparkles icon + "Pose / MODEL AGENCY");
      links Home/Models/Services/Blog/Contact; dark-mode toggle (persist +
      cleanup); mobile menu (aria-expanded, Escape/backdrop close).
- [ ] `Hero` — dark full-height runway photo (picsum seed pose-1), "Welcome
      to" eyebrow, h1 "Pose", tagline "A Professional Model Agency", pink
      pill "Become A Model" (ButtonLink).
- [ ] `FeaturedModels` — heading "A Professional Model Agency" + 4 cards
      (photo, name, stats Height 185 / Bust 79 / Waist 40 / Hips 87 / Shoe
      40); cards overlap hero bottom (-50px).
- [ ] `About` — "Hello! Pose" + "A Professional Model Agency" + lorem
      paragraphs.
- [ ] `Services` (bg #343a40) — 4 cards, pink circle icons (lucide), title + blurb.
- [ ] `TopModels` — "Our Tops Model's" + 10 tiles (photo + name).
- [ ] `Blog` — "Recent Blog" + 3 post cards (photo, meta "May 17, 2019 /
      Admin / 3", title "Asia's Next Top Model" + 2 more).
- [ ] `Testimony` — dark photo band + quote + "Mike Lewis, Architect".
- [ ] `Appointment` (bg #191919) — "Contact Us" (address/phone/email/
      website) + "Become A Model?" + "Model Courses" blocks.
- [ ] `Quote` — "Request a Quote" heading + "Become A Model? Call us now to
      know how!" + "Know more" button.
- [ ] `Footer` (dark) — brand + blurb + socials; Recent Blog / Site Links /
      "Have a Questions?" columns.
- [ ] `App.tsx` composition (11 sections in original order, main landmark) +
      document title "Pose — Model Agency".
- [ ] Tests (red→green) for every section; 100% coverage via
      `npm run verify:app -- pose`.
- [ ] PR: source (ColorLib Stylistic), preview URL (HTTP 200), tokens,
      renames; after merge mark TEMPLATES.md lines 231, 1189 AND 1731 `[x]` + surge URL.
