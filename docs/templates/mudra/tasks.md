# Mudra — implementation tasks + design notes

Recreates ColorLib **Yogalax** (yoga studio) as **Mudra**.
Full spec: `openspec/specs/template-mudra/spec.md` (tokens, Gherkin, checklist).
Preview: https://preview.colorlib.com/theme/yogalax/ · Source page:
https://colorlib.com/wp/template/yogalax/
TEMPLATES.md rows to mark at ship: lines **236, 1737, 1893** (three `Yogalax`
duplicates — mark ALL of them).

## Task outline (TDD, 100% coverage, one commit per section or logical group)

- [ ] 1. Scaffold app `apps/mudra` (copy simplest existing app; rename package
      `@free-react-templates/mudra`; register `injectUiSource()` in
      `vite.config.ts`; `npm install` at root so the lockfile registers the
      workspace; `index.html` title "Mudra — Yoga Studio Template" + Google
      Fonts Work Sans 200–700 `<link>`)
- [ ] 2. `@theme` tokens in `index.css`: brand pink `#d291bc`, button blue
      `#78d5ef`/hover `#56caeb`, `#212529` body, `#f8f9fa` bg-light,
      `#f7ebf3` icon circles, `#090808` dark, secondary grays
- [ ] 3. Navbar (transparent → black mobile; `.scrolled` white fixed via scroll
      listener; active link pink; brand = Flower2 icon + "Mudra")
- [ ] 4. Hero (100vh photo, 45° pink gradient overlay 68%/.3 → 100% mobile,
      typewriter hook cycling the 3 phrases, h2, pill CTA "15 Day Free Trial")
- [ ] 5. Intro "Why You Should Go To Yoga" (cover photo section, right half
      text: h2 + lorem + 5 CircleCheck benefits)
- [ ] 6. Services (4 cards, circular `#f7ebf3` icons: Heart / Flower2 /
      Sparkles / Leaf — "Ideology" fixes the "Edeology" typo)
- [ ] 7. Yoga Classes (subheading + 6 image cards 400px, hover pink wash
      opacity .5 + white text reveal)
- [ ] 8. Pricing (3 white cards: Year $449, Monthly $200, Weekly $85; pink
      price; 4 features; bottom "Get Started" 60% width; hover → pink bg)
- [ ] 9. Testimony carousel (5 slides, Quote circle at left edge, avatars,
      dots + prev/next, wraps)
- [ ] 10. Counter band (dark photo + pink gradient overlay .8; count-up on
      IntersectionObserver: 5000/4560/570/900)
- [ ] 11. Blog (3 cards, day 31/27/25 pink 58px, 2018 December stacked gray,
      white text block -40px overlap)
- [ ] 12. Gallery (4 tiles 270px, hover pink circle + inline-SVG instagram)
- [ ] 13. Footer (pink, logo/address/social circles, copyright "© Mudra. All
      rights reserved.")
- [ ] 14. `npm run verify:app mudra` (typecheck + lint + 100% coverage + build)
- [ ] 15. PR: claim (`[~]` on all 3 Yogalax rows), implement, merge, mark
      `[x]` + surge URL + `npm run readme:status`

## Design notes (fidelity per section)

- **Look & feel:** minimalist yoga aesthetic — white space, thin Work Sans
  (weights 200/300 do most of the work), ONE accent color (mauve pink
  `#d291bc`), light-blue buttons with DARK text (`#212529` on `#78d5ef` —
  NOT white-on-blue; keep this inversion, it's the template's signature).
- **Section backgrounds:** white (classes, testimony, gallery) · `#f8f9fa`
  (services, pricing, blog) · photo + pink gradient (hero, intro, counter) ·
  solid `#d291bc` (footer). Order: navbar → hero → intro → services → classes
  → pricing → testimony → counter → blog → gallery → footer — 1:1, no
  reordering.
- **Navbar:** desktop = transparent, BLACK links (weight 300, 14px) + black
  brand + pink lotus icon; active link pink. Scroll > hero: fixed white with
  shadow. ≤991px: solid BLACK bar, white brand, "Menu" toggle (uppercase,
  letter-spacing .1em).
- **Hero:** h1 = typewriter ONLY (no static text): "Inspiration For Joyful
  Living." → "Effective Therapy Against Stress." → "Flexibility is A Second
  Power." (period 4000ms, blinking caret `border-right`). h2 = "Do Yoga today
  for a better tomorrow" (weight 200). CTA pill radius 30px; hover: white bg
  - black text. Overlay gradient sits on the LEFT 68% (opacity .3) so the
    photo shows on the right.
- **Intro:** the section IS a photo (`mudra-intro`); text column is
  right-aligned half-width (`.row.justify-content-end > .col-md-6`). The 5
  checklist items are LINKS in the source — render as anchor/ButtonLink, keep
  exact copy.
- **Classes hover:** text is `opacity: 0` by default; card `:hover/:focus`
  fades a full-cover pink wash (opacity .5) AND the white text (opacity 1).
  Implement with Tailwind `group` + `group-hover` utilities — no JS.
- **Pricing:** Get Started button is pinned to the card bottom (absolute,
  width 60%, centered) — cards need equal height/`flex` so buttons align.
  Price = sup `$` + 60px number, both pink.
- **Testimony:** quote circle (40px, pink) floats HALF OUTSIDE the card's left
  edge (`left: -20px`); quote text has a `#e6e6e6` left border line. 5 people,
  all position "Customer". Carousel: 1 visible, dots centered, arrows at
  mid-height.
- **Counter:** skip the unused `.icon` circles — markup only has number +
  label. Numbers 50px weight 500 white; labels 14px `rgba(255,255,255,.7)`.
  Count-up triggers when scrolled into view.
- **Blog:** white text card overlaps its image by 40px (margin-top -40px);
  date block left (pink 58px day) + stacked year/month right.
- **Gallery:** 4 tiles; the pink instagram badge is hidden until hover (0.6s
  fade). Lightbox optional — if implemented, keep it dependency-free (a
  simple modal) or drop it; the hover badge is the fidelity-critical part.
- **Footer:** 3 columns in one row (logo | address | social); social = 3
  circles (50px, `rgba(255,255,255,.05)`) with inline-SVG Twitter/Facebook/
  Instagram (lucide-react has NO brand icons — verified). Copyright bar
  centered below; drop the Colorlib credit line.
- **Nav links** point to subpages in the source (classes/schedule/about/
  blog/contact) — this is the single-page index; render them as `#` anchors
  (or dead links) like the source index does; do NOT build subpages.
- **Placeholder images:** seeded picsum (`mudra-hero`, `mudra-intro`,
  `mudra-p1..6` 800×1000, `mudra-t1..5` 200×200, `mudra-counter`, `mudra-b1..3`
  800×600, `mudra-g1..4` 800×600) — never copy ColorLib assets.
- **Accessibility:** toggler needs `aria-expanded` + `aria-label`; icon-only
  social buttons need `aria-label`; carousel dots need `aria-current`; hover
  reveals must also work on `:focus-visible`.
