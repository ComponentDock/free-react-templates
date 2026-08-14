# Portrait (ColorLib Personalportfolio) — Tasks & Design Notes

> Prep artifacts (spec + research) prepared on `main` by the prep stream.
> Implementation ships later on `feat/template-portrait` by an implementer
> stream — this folder is the handoff.

## Design notes

- **Original:** ColorLib "Personalportfolio" — free personal portfolio /
  designer-landing template (source:
  https://colorlib.com/wp/template/personalportfolio/). TEMPLATES.md rows:
  **lines 473 (Bootstrap (216)), 2415 (Personal (53)), 2542 (Portfolio
  (89))** — the SAME slug appears THREE times; mark ALL THREE `[x]` with the
  same surge URL at ship time (never leave a duplicate unchecked).
- **Recreation name:** Portrait. App folder `apps/portrait`, package
  `@free-react-templates/portrait`, `public/CNAME` =
  `portrait.free.componentdock.com`, `"homepage"` =
  `https://portrait.free.componentdock.com`. Name verified collision-free
  against `apps/`, `openspec/specs/`, `docs/templates/`, TEMPLATES.md
  (2026-08-14).
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-14):**
  `https://preview.colorlib.com/theme/personalportfolio/` (HTTP 200, 44,795
  bytes HTML). Main stylesheet `assets/css/style.css` (56,179B) holds ALL
  design tokens; the other sheets are Bootstrap base + animation/carousel/
  icon-font (fontawesome-all, themify, flaticon) — recreate icons with
  lucide-react, never copy font files. Screenshot
  (`personalportfolio-free-template.jpeg`, 1200×946) browser-verified
  2026-08-14.
- **Aesthetic:** light, editorial, confident. Coral red `#ec5b53` is the
  ONLY saturated accent — everything else is deep navy headings
  (`#002d5b` hero / `#000a2d` titles) on white / `#f9f9ff`-family light
  backgrounds, with a very dark navy `#080827` footer. Serif (Rufina)
  headings + clean sans (Rubik) body. Generous whitespace, split hero,
  bordered white cards.
- **Section order (1:1):** preloader → sticky white header (logo +
  Home/About/Services/Portfolio/Page/Contact + coral "Get Free Consultant")
  → split hero (eyebrow "GET EVERY SINGLE SOLUTIONS." / h1 "I'm Designer
  Haris F. Watson." / Learn More + Hire Me / portrait photo + curved lines)
  → About ("Designing With Passion While Exploring The World." + "Any Type
  Of Query & Discussion." + CTA row) → Services category grid ("What
  Services you will Get from me!" + UI/UX Design / Digital Marketing /
  Website Design icon-circle cards) → filterable services/portfolio grid
  (tabs All/Branding/Logo/UI/UX/Web Design, active = `#ff5757` 2px bottom
  border) → WantToWork band ("Dont worry for contact i`m available" coral
  48px/700 + Contact Me Now, photo bg) → testimonials ("Some Possitive
  Feedback That Encourage Us", Bradley Erickson / UI/UX Designer ×3
  carousel) → brand logo strip → contact band ("If Not Now, When? Let's
  Work Together!" 48px/600 + Send Message, photo bg) → dark footer (email
  hireme@portfolio.com + Baker Street address + copyright + Component Dock
  link).
- **Copy quirks to preserve (paraphrase allowed but keep the KIND):** the
  eyebrow is fully uppercase; the h1 uses "I'm" (apostrophe); "Dont" and
  "i`m" are source typos — paraphrase to clean "Don't worry for contact,
  I'm available"; testimonial name + role ("UI/UX Designer") stay as-is;
  the three service cards share identical blurb text in the source —
  write per-card blurbs instead.
- **Hero background decision:** the source uses a full photo
  (`h1_hero.jpg`) as the hero bg. Recommend a light `#f9f9ff`→white
  gradient instead (lighter, matches the screenshot's soft grey-blue feel,
  no heavy image) and NOTE the deviation in the PR; alternatively a
  `picsum.photos/seed/portrait-hero/1600/1000` cover image. Either is
  acceptable — pick one, stay consistent.
- **Key CSS values (style.css, verified):** `.btn` bg `#ec5b53`, padding
  `27px 44px`, radius `5px`, Rubik 14px/500, letter-spacing 1px,
  capitalize, white; `.header-btn` padding `27px 18px`; `.hero__caption h1`
  70px/700 `#002d5b` lh 1.2; `.hero__caption p` `#464d65`; `.section-tittle
h2` 48px/600 `#000a2d`; `.about-area .about-caption h3` 30px/700
  `#000a2d` lh 1.5 mb 35px; `.contact-info-area .contact-caption h3`
  48px/600 `#000a2d` mb 40px; `.wantToWork-area .wantToWork-caption h2`
  48px/700 `#ec5b53`; `.single-cat` border `1px solid #e1ebf7`, radius 6px,
  padding `61px 22px`, hover border transparent; `.cat-icon span` 100px
  circle bg `#fff4f4` radius 50px color `#ec5b53`; `.nav-link.active`
  border-bottom `2px solid #ff5757`; `.footer-area` bg `#080827`;
  `.slider-height` min-height 1000px; `.section-paddingt30` padding-top
  195px / bottom 90px; `.section-tittle` mb 50px.
- **Placeholder images:** `picsum.photos/seed/portrait-1/900/1000` (designer
  cut-out), `portrait-2..5` (project cards), `portrait-6..9` (brand logos),
  `portrait-hero/1600/1000` (optional hero bg).
- **No forms in the source** (the "Send Message" button is a CTA, not a
  form) — do NOT invent a full contact form; a button linking to
  `mailto:`/`#contact` matches the reference.

## Tasks

1. Scaffold `apps/portrait` (copy the simplest existing app, rename package
   to `@free-react-templates/portrait`; `public/CNAME` =
   `portrait.free.componentdock.com`; `"homepage"` =
   `https://portrait.free.componentdock.com`); run `npm install` at root so
   `package-lock.json` registers the workspace; copy the MemoryStorage
   polyfill from `apps/cura/src/test/setup.ts` if jsdom lacks localStorage.
2. Write tests FIRST (TDD, 100% coverage) mirroring the spec's Gherkin
   scenarios: header/nav + mobile toggle, hero, about, services cards,
   filter grid (tab filtering + a11y), CTA band, testimonial, brand strip,
   contact band, footer (Component Dock link).
3. Implement sections in order with `packages/ui` Button/ButtonLink/cn:
   Navbar (sticky + hamburger `aria-expanded`) → Hero → About →
   ServiceCards → PortfolioGrid (filter tabs, `aria-selected`) →
   WantToWork → Testimonials → BrandStrip → Contact → Footer.
4. `@theme` tokens (index.css): coral `--color-coral: #ec5b53`, hover
   `#f44a40`, `#002d5b`, `#000a2d`, `#080827`, `#464d65`, `#f9f9ff`,
   `#f0e9ff`, `#fff4f4`, `#e1ebf7`, `#ff5757`; fonts Rubik + Rufina via
   Google Fonts `<link>` in index.html.
5. Verify: `scripts/verify-app.sh portrait` (typecheck + lint + 100%
   coverage + build); `npm run spec:validate`.
6. Branch `feat/template-portrait` → PR → immediate squash merge. PR
   description MUST include: source template + preview URL, design tokens,
   hero-background decision, placeholder images, the THREE TEMPLATES.md rows
   (473/2415/2542) to mark.
7. After merge: mark TEMPLATES.md rows 473 + 2415 + 2542 `[x]` with
   `https://portrait.free.componentdock.com`, run `npm run readme:status`,
   commit + push.
