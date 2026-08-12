# Imagine (ColorLib Creative Agency 2) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-imagine` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Creative Agency 2" — creative agency Bootstrap
  template (page title "Creative Agency"; source:
  https://colorlib.com/wp/template/creative-agency-2/). Listed in
  TEMPLATES.md under Bootstrap (line 368) — dup rows also at lines 961 and
  1457; one recreation covers all three rows, mark all `[x]` with the same
  surge URL at bookkeeping time (do NOT re-implement the dups).
- **Canonical preview UNREACHABLE:** `https://preview.colorlib.com/theme/creative-agency-2/`
  → HTTP 404 (curl AND real browser); portal hash
  `preview.colorlib.com/#creative-agency-2` falls back to an unrelated
  theme ("Rea"); no Wayback snapshot. **Reference used instead:** the
  TEMPLATES.md screenshot `agency-free-agency-website-template.jpg` matched
  1:1 against the LIVE theme at
  `https://preview.colorlib.com/theme/creativeagency/` (HTTP 200) — its DOM
  contains the screenshot's exact headings ("We Provide Solutions that
  Brings Joy", "Hire Us Now!", "Latest News from all categories", "Easy
  Flight Search", "Get Hotel Offers", "Holiday Packages", "Dedicated
  Support"). All tokens come from that theme's `css/main.css`.
- **Sibling-traps to avoid:** "Creative Agency 2 2" (creative-agency-2-2,
  line 369) is a DIFFERENT template — its live preview is
  `/theme/creativeagency2/` (the "California" agency design with works
  grid, counters, Instagram strip); the classic "Agency" (v1,
  creative-agency, line 1456) is the DIGILAB green design. Do NOT use
  either as the reference for Imagine.
- **Brand gradient is `#908ced → #b56fe8`** (lavender-purple) — hero CTA,
  Subscribe button, all hover fills, donut segments, testimonial overlay,
  footer social hover. Periwinkle `#8490ff` for footer link hover. Black
  `#000` for hero overlay (0.4), skills section, blog date badges. Footer
  `#222222`, social squares `#111111`.
- **Font:** Poppins (Google Fonts). Hero h1 72px weight 100 (thin) with
  bold 700 spans, white, line-height 1em; centers on ≤991px.
- **Buttons:** `.primary-btn` gradient pill (radius 25px, uppercase,
  padding 0 60px 0 30px, arrow slides on hover); `.primary-btn2` outline
  pill (black 600, 1px `#f4f4f4`, padding 8px 35px, radius 20px, hover =
  gradient); white-border `.primary-border.circle` variants on the dark
  about section.
- **Hero** = full-width photo (hands holding a potted plant, blue sweater)
  - black 0.4 overlay, content right-aligned (col-lg-6, justify-end,
    700px fullscreen). Recreation: picsum photo (SCREEN the seed — see
    seed-screening note in the skill), dark overlay, right-aligned text,
    gradient "Hire Us Now!" pill; no parallax JS needed (fixed cover).
- **Services:** 4 icon cards (lucide: Rocket, Wand2, Gift, Phone — the
  source uses linearicons `lnr-*`; hover = gradient text) + h4 + lorem +
  "View Details" outline pill.
- **About:** photo background (`about-bg.png`) + white text left, image
  right; two white-outline circle buttons ("What we offer", "Get a free
  quote").
- **Projects:** owl carousel → static responsive grid (≥4 cards); uppercase
  label + caption.
- **Skills:** black section; left heading "Our Fields of Expertness", right
  3 progress rings (Wireframing, User Research, User Experience) — CSS
  conic-gradient with the brand gradient.
- **Team:** 4 cards (Ethel Davis / Rodney Cooper / Dora Walker / Lena
  Keller) with picsum portraits; hover reveals Facebook/Twitter/LinkedIn
  (inline SVG brand icons — lucide has none).
- **Testimonials:** photo bg + gradient overlay 0.6; quote + "Mark Alviro
  Wiens" + "CEO at Google".
- **Blog:** 4 cards — image, black date badge, h4 link (hover gradient
  text), excerpt, meta "♥ 15 Likes" / "💬 02 Comments" (lucide Heart /
  MessageCircle).
- **Footer:** `#222222`; Top Products links | Newsletter (trust line +
  email input + "Subscribe" gradient pill with arrow — form MUST validate
  and swap to a success state) | Instagram Feed (8 thumbs). Bottom bar:
  copyright ♥ left (Component Dock link — NO Colorlib attribution in app
  code) + social squares right (Facebook, Twitter, Dribbble, Behance).

## Tasks (implementation order)

1. Scaffold `apps/imagine` (copy the simplest existing app; rename package
   to `@free-react-templates/imagine`; `npm install --package-lock-only` at
   root; set `public/CNAME` = `imagine.free.componentdock.com`, `homepage`
   in package.json; `injectUiSource()` in vite.config.ts per conventions).
2. `index.html`: Google Fonts Poppins (100–700); `src/index.css` `@theme`
   tokens: `--color-brand-start` `#908ced`, `--color-brand-end` `#b56fe8`
   (or a single `--color-brand` + gradient utility), `--color-periwinkle`
   `#8490ff`, `--color-ink` `#000`, `--color-footer` `#222222`,
   `--color-social` `#111111`, `--color-icon` `#777777`, `--color-outline`
   `#f4f4f4`.
3. `Navbar` — wordmark + links (Home active, Service, Project, Blog, Team,
   Pages dropdown) + mobile toggle (aria-expanded).
4. `Hero` — picsum photo + dark overlay, right-aligned thin h1 with bold
   spans, gradient "Hire Us Now!" button; center on mobile.
5. `Services` — 4 icon cards + "View Details" outline pills.
6. `About` — photo bg section, white text left, image right, 2 outline
   circle buttons.
7. `Projects` — heading + grid of ≥4 cards (uppercase label + caption).
8. `Skills` — black section, left text, 3 conic-gradient rings.
9. `Team` — 4 cards with hover social overlay (inline SVG icons).
10. `Testimonials` — photo bg + gradient overlay, quote/name/role.
11. `Blog` — 4 cards with date badge + meta row.
12. `Footer` — dark bg, Top Products links, Newsletter form (validation +
    success state; on success the input unmounts — test with
    `queryByLabelText` absent), Instagram thumbs, copyright bar with
    Component Dock link.
13. Tests per section (Gherkin scenarios from the spec), 100% coverage;
    `npm run verify:app imagine`.
14. Bookkeeping after merge: mark ALL THREE TEMPLATES.md rows (lines 368,
    961, 1457) `[x]` with `https://imagine.free.componentdock.com`, `npm
run readme:status`, README status row.

## Fidelity checkpoints

- [ ] Hero: full-width photo + dark overlay, RIGHT-aligned thin (100) white
      72px headline with BOLD spans, gradient "Hire Us Now!" pill — not a
      left-aligned generic hero
- [ ] 4 service cards with lucide icons + outline "View Details" pills
- [ ] About on a photo background with white text + 2 outline circle
      buttons
- [ ] Skills on black with 3 gradient progress rings
- [ ] Team hover social overlay (inline SVG brand icons)
- [ ] Footer `#222222` with newsletter form (validation + success state)
      and Component Dock link; NO Colorlib string anywhere in `apps/imagine`
