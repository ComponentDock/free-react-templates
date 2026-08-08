# Fable (Colorlib Stories) — Tasks & Design Notes

> Prep artifact written on `main` by the prep stream so implementers start
> instantly. Implementation ships later on `feat/template-fable`.

## Design notes (replication findings)

- **Original:** ColorLib "Stories" — food & lifestyle blog template
  (source: https://colorlib.com/wp/template/stories/).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/stories/
  (HTTP 200; `css/style.css` parsed for tokens). Screenshot
  `stories-free-template.jpg` used as the visual reference.
- **Visual design (from screenshot):** clean white minimalist blog; split
  hero (left: food flat-lay photo, right: solid **yellow** panel with
  "FEATURED POSTS" label, serif headline with black underline, grey body
  text, black "Read More" button + arrow, carousel controls below); below
  it a "Recent Stories" row of three photo thumbnails; serif headlines
  throughout.
- **Structure (1:1, section order):**
  1. Navbar: logo "Stories." (serif + yellow accent span), links Home,
     About, Foods, Lifestyle, Contact. Active link = orange #fd5f00.
  2. Hero slider (owl-carousel, 2 slides): left full-bleed photo
     (`images/bg_1.jpg` style), right yellow panel (`width: 34%;
height: 680px; background: #ffd615`) with `subheading` "Featured
     Posts", h1, Duden paragraph, `.btn-black` "Read More" + arrow.
     Slides: "Love the Delicious & Tasty Foods" / "I Am A Blogger & I
     Love Foods".
  3. Recent Stories (`ftco-section`): heading with 10px yellow square
     dot after last word (`h2 span:after`), then large photo cards
     (`img-big d-flex align-items-end`) with dark overlay, category
     subheading (Food, Dessert), serif title, "Read More" link.
  4. Blog list + sidebar (`ftco-section ftco-no-pt`): entries with
     thumbnail + text (category, date "March 01, 2018", title, excerpt,
     Read More); sidebar has "About Me" box (avatar "Roger Bosch",
     "Holiday Seasons Recipes" heading) and "Categories" box (Foods,
     Lifestyle, Others).
  5. About Stories (`ftco-section-about`, dark `bg-darken`): heading +
     "Far far away, behind the word mountains..." text + italic Playfair
     serif signature `Roger.Bosch` (underline, rgba(255,255,255,.2)).
  6. Counter (`ftco-counter img`): background image, 4 × `block-18`
     stat blocks — 70px icon circle with blue gradient (#6b75ff →
     #59b7ff), bold 30px number, small label ("Years of Experienced",
     "Happy Customers", …).
  7. Subscribe (`ftco-subscribe bg-light`): "Subscribe to our
     Newsletter", 64px email input (radius 5px 0 0 5px, bg
     rgba(0,0,0,.05)), orange `.btn-primary` submit.
  8. Footer (`ftco-footer-2`, bg #1f1f1f, padding 7em 0): brand +
     Duden text; Information column (Terms of Uses, Privacy Policy,
     Accessibility Help, Advertise with us); Categories column (Food,
     Restaurant, Dessert, Lifestyle, Recipes); "Have a Questions?"
     column (203 Fake St. Mountain View, San Francisco, California,
     USA / +2 392 3929 210 / info@yourdomain.com); copyright + credit.
- **Design tokens extracted from the preview CSS:**
  - Brand accent: **#fd5f00** (orange) — links hover, active nav,
    `.btn-primary` bg; hover inverts to transparent + orange.
  - Accent yellow: **#ffd615** — hero panel, logo span, card subheadings,
    heading dot, contact icons.
  - Counter gradient: **#6b75ff** → **#59b7ff**.
  - Fonts: body **"Poppins"**, headings **"Playfair Display"** (serif,
    weight 400, lh 1.5, rgba(0,0,0,.8)).
  - Footer **#1f1f1f**; subscribe `bg-light`; container max-width 1200px.
- **Recreation name:** Fable (NEW — differs from ColorLib "Stories"). App
  folder `apps/fable`, package `@free-react-templates/fable`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/fable-<n>/<w>/<h>`); Poppins + Playfair Display via
  Google Fonts `<link>` in index.html; lucide-react icons (arrow icons;
  inline SVG for brand socials — lucide removed brand icons); orange +
  yellow accents in `@theme`; repo-standard Navbar (dark-mode toggle) +
  Footer chrome; reuse `packages/ui` (Button, ButtonLink, cn).

## Tasks

- [x] Write `openspec/specs/template-fable/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/fable` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/fable`; run
      `npm install` at root so package-lock registers the workspace).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Per-app gate: `npm run verify:app -- fable` (typecheck + lint +
      100% coverage + build).
- [ ] Push `feat/template-fable`, open PR (source template, preview URL,
      design tokens, what differs), merge immediately.
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D) — remember TEMPLATES.md has TWO
      "Stories" rows (lines ~288 and ~504); mark BOTH.
