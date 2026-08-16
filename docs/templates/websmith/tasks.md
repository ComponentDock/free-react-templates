# Websmith (ColorLib Accent) — Tasks & Design Notes

> Prep artifacts prepared on `main`; implementation ships on
> `feat/template-websmith`. Source: ColorLib "Accent" — digital agency /
> web studio one-pager (https://colorlib.com/wp/template/accent/).
> Preview: https://preview.colorlib.com/theme/accent/ (HTTP 200; ~46 KB
> HTML, `css/style.css` ~20.5 KB parsed).

## Design notes (replication findings)

- **Original:** ColorLib "Accent" — web studio / digital agency one-pager
  (Bootstrap 4 + owl-carousel 2 + AOS + fancybox + bootstrap-datepicker +
  icomoon & flaticon icon fonts). Screenshot
  `accent-free-template.jpg` (1200×946, AVIF, viewed in browser): white
  header, bold blue "Accent." wordmark, hamburger top-right; hero photo of
  a workspace (laptop with code on a desk) under dark overlay with a very
  large white bold headline, white subtext, blue pill "Start a project"
  button, blue circular slider arrows right; below: gray uppercase "ABOUT
  US" label + blue "We Are Expert In Web" heading on white.
- **Visual design:** clean light agency site — accent blue `#007bff`
  (icons, active nav, service-card top borders, slider arrows, primary
  buttons), white + light gray `#f8f9fa` section bands, ink `#000`/`#212529`
  headings, muted gray `#b3b3b3` eyebrows; dark `#333333` footer. Roboto
  everywhere (preview loads NO Google Fonts — add a Roboto
  `<link>` 400;500;700;900 in `index.html` so the 8rem/900 hero h1 renders
  as designed). Buttons are pills (radius 30px, 2px border): blue primary,
  hover/focus/active → BLACK bg + BLACK border. Hero h1 8rem/900/white
  (4rem ≤767px), sub-text 1.4rem gray (black ≤991px). Section titles:
  eyebrow 1rem uppercase ls .2rem `#b3b3b3` + title 2.2rem black.
- **Signature motifs to preserve:**
  - STICKY WHITE NAVBAR with scrollspy `#007bff` active links + hamburger
    `MENU` toggle → off-canvas mobile panel.
  - HERO: 100vh; intro text left (z-index 3, white) over a right-anchored
    (`position:absolute; right:0; z-index:-1;` ~60% width) owl slider of 3
    workspace photos, each 100vh `object-fit: cover` + overlay
    `rgba(0,0,0,.4)`; two round 50px `#007bff` arrows (white glyphs) at
    `bottom:120px; right:50px` (stacked 10px apart). Mobile: image full
    width, white overlay `.5`, sub-text `#000`.
  - ABOUT SPLIT: photo left (col-lg-6), eyebrow "About Us" + h2 "We Are
    Expert In Web" right (col-lg-5 ml-auto) + `ul-check` with 6 blue
    `#007bff` checks (Design, Development, eCommerce, Mobile Apps,
    Copywriting, SEO) + "Watch the video" play link (fancybox vimeo —
    decorative link OK).
  - TEAM DUO: "Meet The Team" heading; two `.person` cards (col-lg-10
    ml-auto wrapper → col-lg-6 halves): photo + name + role (James
    Anderson — CEO, Co-Founder; Chris Peters — CTO, Co-Founder) + bio.
  - SERVICES: `bg-light` (`#f8f9fa`) band, centered eyebrow "What We Do",
    6 cards (3-col grid, col-md-6 col-lg-4): 50px circle icon on
    `#007bff` (white glyph 1.3rem), title, blurb, uppercase "Learn more"
    link; card = white bg, 1px `#eee` border, 2px `#007bff` top border;
    hover: `top:-2px`, shadow `0 10px 30px -10px rgba(0,0,0,.4)`, border
    transparent.
  - PORTFOLIO: "Recent Works" slider (same `slide-one-item` owl pattern):
    3 slides, text side (title, description, "Role: Design, Illustration,
    Web", blockquote + "— John Doe", blue pill "Visit website") + project
    photo side.
  - TESTIMONIALS: `bg-light` band, eyebrow "Testimonials" + h2 "Our
    Client Sayings", carousel of quotes + authors (source repeats ONE
    quote × 4 — paraphrase 3 distinct quotes/authors).
  - CONTACT: "Get In Touch" eyebrow + "Contact Us" h2 + form (First name /
    Last name / Email / Message textarea) + blue pill "Send Message".
  - FOOTER: `#333333` bg (padding-top 17rem — the deep spacer is a
    signature), white headings, `#8c8c8c` body text, `#b3b3b3` links,
    columns: brand + blurb / Navigation (Home, About Us, Privacy, Terms,
    Contact) / Subscribe Newsletter (transparent input border-white +
    blue pill "Subscribe"); bottom bar → Component Dock credit.
- **Structure (1:1, section order, home page):**
  1. Navbar (sticky white): wordmark "Websmith." + Home / About Us / What
     We Do / Portfolio / Contact + hamburger → off-canvas menu.
  2. Hero (#home-section): 100vh, intro left (h1 "Websmith Web Studio",
     sub-text "We are web studio in New York.", p, "Start a project" pill)
     - right 60% photo slider (3 slides, overlay, blue round arrows).
  3. About (#about-section): photo + eyebrow/h2 + 6 blue-check items +
     "Watch the video" link.
  4. Team (inside #about-section): "Meet The Team", 2 person cards.
  5. What We Do (#what-we-do-section, bg-light): eyebrow + 6 service cards.
  6. Recent Works (#portfolio-section): 3-slide project carousel.
  7. Testimonials (bg-light): "Our Client Sayings" carousel.
  8. Get In Touch (#contact-section): eyebrow + h2 + 4-field form.
  9. Footer (#333): brand / Navigation / Subscribe + copyright bar.

## Implementation tasks

- [ ] Scaffold `apps/websmith` (copy simplest existing app, rename package
      to `@free-react-templates/websmith`, `public/CNAME` =
      `websmith.free.componentdock.com`, homepage
      `https://websmith.free.componentdock.com`); `npm install` at root
      to register the workspace in package-lock.json.
- [ ] `index.html`: title "Websmith — Digital Agency Template", Google
      Fonts `<link>` Roboto (400;500;700;900).
- [ ] `src/index.css`: `@theme` tokens — `--color-accent: #007bff`
      (brand blue), `--color-ink: #000`, `--color-dark: #212529`,
      `--color-night: #333333` (footer bg), `--color-muted: #b3b3b3`,
      `--color-faint: #8c8c8c`, `--color-light: #f8f9fa` (bg-light),
      `--color-success: #28a745`; pill radius 30px via utilities/component
      styles (Tailwind v4 `--radius-pill: 30px` if using rounded-[30px]
      is fine too).
- [ ] `src/components/Navbar.tsx`: sticky white; wordmark "Websmith."
      (bold, `#007bff` dot or black + blue period); 5 scrollspy links
      (`#home-section` etc., active → `#007bff`); hamburger + uppercase
      "MENU" text; off-canvas mobile panel with close button; aria-
      expanded/aria-label on toggle, semantic `<nav>`.
- [ ] `src/components/Hero.tsx`: 100vh section, intro column (h1 8rem/900
      white — clamp for ≤767px 4rem; sub-text 1.4rem; paragraph; "Start a
      project" blue pill, hover → black), right-anchored slider: 3 slides
      (picsum seeds screened for workspace/desk scenes, see seed method),
      `object-fit: cover` + overlay `rgba(0,0,0,.4)`; two 50px circular
      `#007bff` prev/next buttons bottom-right; client-side slide state;
      mobile: full-width image + white overlay .5 + black sub-text.
- [ ] `src/components/About.tsx`: split — left photo (picsum), right
      eyebrow "About Us" + h2 "We Are Expert In Web" + paragraph + 6-item
      blue-check list (Design / Development / eCommerce / Mobile Apps /
      Copywriting / SEO — lucide Check icons in `#007bff`) + "Watch the
      video" play link (circle Play icon + text).
- [ ] `src/components/Team.tsx`: "Meet The Team" + 2 `.person` cards
      (photos picsum-seeded, James Anderson CEO Co-Founder / Chris Peters
      CTO Co-Founder + short bios).
- [ ] `src/components/Services.tsx`: `bg-light` band, centered eyebrow
      "What We Do" + 6 cards (Web Design, Web Development, Web Apps,
      Mobile Apps, CopyWriting, Search Engine Optimization): 50px circle
      icon `#007bff` + white glyph (probe lucide exports: Palette,
      Monitor, AppWindow, Smartphone, PenTool, Search — typeof check
      before importing), title, distinct blurbs (source repeats one
      placeholder), uppercase "Learn more" link; 2px `#007bff` top border,
      hover lift + shadow.
- [ ] `src/components/Portfolio.tsx`: "Recent Works" carousel, 3 slides:
      title + description + "Role: Design, Illustration, Web" + quote
      (blockquote, "— Name") + blue pill "Visit website" + project photo
      (picsum); client-side state + arrow controls.
- [ ] `src/components/Testimonials.tsx`: `bg-light` band, eyebrow
      "Testimonials" + h2 "Our Client Sayings"; ≥3 distinct paraphrased
      quotes with author names; prev/next controls.
- [ ] `src/components/Contact.tsx`: eyebrow "Get In Touch" + h2 "Contact
      Us" + form: First name / Last name / Email / Message (textarea) +
      blue pill "Send Message"; required validation with per-field errors;
      success state swaps the form (assert input absence in tests).
- [ ] `src/components/Footer.tsx`: `#333333` bg, columns: brand
      (wordmark + blurb), Navigation (Home / About Us / Privacy / Terms /
      Contact), Subscribe Newsletter (email input transparent + "Subscribe"
      blue pill); bottom bar with Component Dock link
      (https://www.componentdock.com/).
- [ ] `src/App.tsx` composition + `src/main.tsx` entry; MemoryStorage
      polyfill in `src/test/setup.ts` (copy from apps/cura — jsdom 30 has
      no localStorage) only if localStorage is used (no dark mode in this
      template — likely unneeded).
- [ ] Tests first (TDD) mirroring spec scenarios; 100% coverage; run
      `bash scripts/verify-app.sh websmith`.
- [ ] PR description: source (ColorLib Accent), preview URL, tokens
      (`#007bff`, `#000`, `#212529`, `#333333`, `#b3b3b3`, `#8c8c8c`,
      `#f8f9fa`, `#28a745`, Roboto 400;500;700;900, pill buttons, 8rem
      hero h1, blue circle arrows, 2px blue service-card top border,
      dark footer), what differs (wordmark "Websmith", picsum placeholders,
      Component Dock credit, paraphrase, distinct service blurbs + quotes,
      no asset copying, sliders client-side).
- [ ] Post-merge bookkeeping: mark ALL THREE TEMPLATES.md Accent rows
      (lines 879, ~2285, ~2492) `[x]` with the live URL
      (https://websmith.free.componentdock.com),
      `npm run readme:status`.

## Pitfalls / notes

- The hero image slider is anchored `position:absolute; right:0;
z-index:-1` behind the intro text (`.intro` z-index 3) — implement the
  slider as the section's background layer, NOT as a flex column, or the
  split breaks. Negative z-index decorative layers need `isolate` on the
  positioned wrapper or they paint below the section background.
- Hero arrows: `bottom:120px; right:50px`, stacked vertically 10px apart
  (prev over next) — both 50px circles on `#007bff`.
- `aria-hidden` on non-active carousel slides: use
  `aria-hidden={cond ? 'true' : undefined}`; test slide visibility via
  `getAttribute('aria-hidden') !== 'true'`, and query sliders with
  `{ hidden: true }` when needed.
- The source repeats ONE testimonial quote ×4 and ONE service blurb ×6 —
  paraphrase into distinct content (content-kind latitude).
- Section headings in the source have typos ("We Are Expert In We,
  Branding and Mobile") — fix to "We Are Expert In Web, Branding and
  Mobile" is NOT needed; keep the about h2 "We Are Expert In Web" and the
  team section heading "Meet The Team"; do not replicate the typo.
- lucide-react has NO brand icons (Facebook/Instagram/LinkedIn →
  undefined) — this template has no social row, but probe every icon
  export (typeof check) before importing (Medkit-style renames bite).
- No `[~]`/`[x]` markers were set by the prep stream — implementer
  claims via the usual `[~]` push on `feat/template-websmith`.
- No `colorlib` string anywhere in `apps/websmith/*` — provenance lives
  only here, TEMPLATES.md, and the PR.
- Never write a literal `tel:+<digits>` URI in source (secret-scan
  masker rewrites it) — this template has NO phone number in the footer,
  so skip contact links entirely unless added; compute at runtime if ever
  needed.
- Picsum seeds for workspace/desk/office photos need subject screening
  (see skill: pixel-metric + browser_vision on top candidates) — pick
  seeds that provably render desk/office scenes for hero + about + team +
  portfolio, and pin them in spec + tests + docs together.
- 3 TEMPLATES.md dup rows exist for this source (Business 879, One Page
  ~2285, Portfolio ~2492) — bookkeeping must mark ALL three `[x]`.
