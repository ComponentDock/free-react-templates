# Barrister (ColorLib Fective) — Tasks & Design Notes

> Prep artifacts prepared on `main`; implementation ships on
> `feat/template-barrister`. Source: ColorLib "Fective" — elegant law firm /
> attorney one-pager
> (https://colorlib.com/wp/template/fective/).
> Preview: https://preview.colorlib.com/theme/fective/ (HTTP 200;
> 20,809-byte HTML, `css/style.css` ~55 KB parsed; screenshot
> `fective-free-template.jpg` 1200×946 viewed in the browser).
> TEMPLATES.md rows: line 580 + dup at 2116.

## Design notes (replication findings)

- **Original:** ColorLib "Fective" — light, professional law-firm one-pager
  ("Need a legal help? We are effective law agency."). Bootstrap 5 +
  tiny-slider + AOS + icomoon/flaticon icon fonts + jQuery. No Tailwind.
- **Screenshot vs live DOM:** they MATCH — full-width hero photo of classical
  stone columns under a dark slate overlay (rgba(36,47,58,0.9)), uppercase
  gold kicker, large white serif headline, gold-outline "Practice Area"
  button; below on white: centered promise heading + script signature image;
  light About-me split. The screenshot only shows the top of the page — the
  DOM is the authoritative source for the lower sections.
- **Visual design:** classic legal aesthetic — serif Playfair Display
  headings + Raleway body, gold #d79100 accents (kickers, v-lines, numbers,
  buttons, logo dot) on white / light-gray #f8f9fa sections, dark slate
  #242f3a hero overlay. Square-ish buttons (radius 0.25rem), not pills.
- **Signature motifs to preserve:**
  - NAVBAR: logo "barrister." (Playfair Display, gold dot) left; menu right
    — Home (active), Attorneys (dropdown: Menu One, Menu Two, Dropdown →
    Sub Menu One/Two/Three, Menu Three), Our Services, About, Contact Us;
    mobile burger → SOLID slide-in drawer (past templates shipped
    transparent mobile menus — user tests on phone, make it solid +
    tappable).
  - HERO (`.hero.overlay`, padding 15rem 0, bg photo + overlay
    rgba(36,47,58,0.9)): centered — gold uppercase subheading "Welcome to
    our site" (12px, .1rem ls, bold), h1 50px/700 white serif (34px ≤991px)
    "Need a legal help? We are effective law agency.", gold-outline button
    "Practice Area" (hover → gold fill / black text), gold `.v-line` (1px ×
    100px, absolute bottom-left).
  - INTRO (`div.section.sec-intro`, white): centered col-lg-7 — h2.heading
    "My promise to every client is to work tirelessly to obtain a just
    result." (mb-5), two paragraphs, signature image → render as cursive
    script TEXT (never copy the PNG; e.g. italic serif "Jeynne M. Campbell"
    styled like a signature), gold `.v-line` (1px × 160px, absolute
    bottom-right).
  - ABOUT ME (`div.section.sec-about-me.bg-light`): `.box-wrap` row — left
    col-lg-6: gold subheading "About me", h2 "Jeynne M. Campbell" (two
    lines via `<br>`), white `.box` paragraph; right col-lg-5: photo.
  - WHY US heading (`div.section.sec-service-1.pb-0`): gold subheading
    "Why Us" + h3.heading paragraph.
  - ICON ROW (`div.setion.sec-service-2.pt-0`): intro paragraph right
    (col-lg-4 ml-auto) + 4 col-lg-3 icon cards (2-up on mobile): Court Mace
    / Court Building / Crime / Authority Badge; heading-3 18px #242f3a.
  - GALLERY (`div.gallery-slider-wrap`): tiny-slider of 4 `.item` images,
    dot nav bottom-center. Source repeats hero_1.jpg 4× — ship 4 DISTINCT
    seeded picsum images (barrister-gallery-1..4).
  - WHY CHOOSE US (`div.section.sec-why-us`): left photo, right heading-2
    "Why Choose Us" + `.box` with 3 `.custom-media` rows — gold `.number`
    (01/02/03; flex 0 0 60px, mr 20px) + bold h2 (Effective / 99% Cases
    wins / Expert Lawyers) + paragraph.
  - LIST OF SERVICES (`div.section.sec-about-2`): left `.box` "List Of
    Services" + 2 paragraphs; right photo; below: col-lg-8 `.box-list`
    two-column `ul.list-unstyled` checklist with gold `li:before` marks.
    Source repeats the same filler ~14× — paraphrase into ~14 distinct
    practice-area items (e.g. "Family law consultations", "Corporate
    litigation", ...) with no duplicates.
  - FOOTER (LIGHT — white bg, black links, padding 70px 0, 14px): 4 widgets
    — "About Us" (paragraph + `.btn-primary` "Learn more"), "Navigation"
    (TWO stacked link columns), "Follow us" (5 social icons: facebook,
    twitter, linkedin, google, play) + "Subscribe" (email input 42px, 2px
    rgba(0,0,0,0.2) border, icon-only submit 1.5rem), "Recent Posts" (4
    dated links, date "May 3, 2020" style); `.copyright` bar → Component
    Dock credit.
- Brand gold `#d79100` is the ONLY accent — don't invent a second color.
  Bootstrap's default `#0d6efd` must NOT appear. Hover golds: `#dda226`
  (bg), `#db9c1a` (border), active `#dfa733`.
- Hero overlay is `rgba(36,47,58,0.9)` — dark slate, NOT black.
- Buttons are square-ish (radius 0.25rem) with 1px borders — NOT pills.
- Flaticon court glyphs (Court Mace / Court Building / Crime / Authority
  Badge) → lucide-react probes (Scale, Landmark, Gavel, Award/BadgeCheck —
  use the typeof check before importing; fall back to inline SVG).
- Social icons: lucide-react has no reliable brand set — probe
  Facebook/Twitter/Linkedin/Globe/Play exports; any that throw "Element
  type is invalid" → inline SVG fallback.
- Signature: source PNG `signature.png` — do NOT copy. Render cursive script
  text (italic serif, e.g. "Jeynne M. Campbell") styled as a signature.
- Footer contact/address placeholders — paraphrase to fictional values.
  Never write a literal `tel:+<digits>` URI in source (secret-scan masker
  rewrites it); render phone as plain text.
- jsdom 30 has no localStorage — copy the MemoryStorage polyfill from
  `apps/cura/src/test/setup.ts` into the new app if anything touches it.
- No `[~]`/`[x]` markers were set by the prep stream — implementer claims
  via the usual `[~]` push on `feat/template-barrister`.
- No `colorlib` string anywhere in `apps/barrister/*` — provenance lives only
  here, TEMPLATES.md, and the PR.
- TEMPLATES.md lists "Fective" TWICE (lines 580, 2116) — bookkeeping must
  mark ALL rows `[x]` with the same live URL.

## Tasks / todo outline (implementer checklist)

1. **Bootstrap the app** — copy the simplest existing app (e.g.
   `apps/propel`), rename package to `@free-react-templates/barrister`,
   `public/CNAME` = `barrister.free.componentdock.com`, homepage
   `https://barrister.free.componentdock.com`. Run `npm install` at root so
   `package-lock.json` registers the workspace.
2. **Tokens** — `@theme` in `src/index.css`: `--color-primary: #d79100`
   (hover `#dda226` / border `#db9c1a` / active `#dfa733`), `--color-slate:
#242f3a`, `--color-ink: #212529`, `--color-muted: #6c757d`,
   `--color-surface: #f8f9fa`, `--color-border: #e9ecef`, `--color-gold-light:
#ebc880`; fonts Playfair Display (400/700) + Raleway via Google Fonts
   `<link>` in `index.html`; register `injectUiSource()` in vite.config.ts.
3. **Components** (colocated tests, TDD red→green):
   - `Navbar` — logo "barrister." + links + Attorneys dropdown (nested) +
     solid mobile drawer.
   - `Hero` — bg photo + slate overlay, kicker, headline, outline button,
     v-line.
   - `Intro` — centered heading, paragraphs, script signature text, v-line.
   - `About` — bg-light split, white box, photo.
   - `WhyUs` — heading block + 4 icon cards (lucide court icons).
   - `Gallery` — 4 distinct seeded images + dot slider (simple state-based
     slider or tiny-slider equivalent — no new deps unless necessary).
   - `WhyChoose` — photo + 3 numbered gold rows.
   - `Services` — box + photo + two-column gold-bullet checklist (~14
     distinct items).
   - `Footer` — 4 widgets, subscribe form (zod validation + error state per
     conventions), social icons, Component Dock copyright.
   - `App` — compose in order; document title "Barrister — Law Firm
     Template".
4. **Verify** — `npm run verify:app -- barrister` (typecheck + lint + 100%
   coverage + build), then commit conventionally (`feat: Barrister — Law
firm template (ColorLib Fective) (#PR)`) on `feat/template-barrister`,
   push, open PR, `gh pr merge --squash --delete-branch`.
5. **Bookkeep** — after merge: TEMPLATES.md lines 580 + 2116 `[x]` with
   live URL `https://barrister.free.componentdock.com`, README status
   regen (`npm run readme:status`), commit `chore:`.
