# Canvas — implementation tasks + design notes

Recreates ColorLib **Approach** (creative agency) as **Canvas**.
Full spec: `openspec/specs/template-canvas/spec.md` (tokens, Gherkin, checklist).
Preview: https://preview.colorlib.com/theme/approach/ · Source page:
https://colorlib.com/wp/template/approach/
TEMPLATES.md rows to mark at ship: lines **336, 886, 1959** (THREE `Approach`
duplicates — Bootstrap, Business and Interior Design categories; mark ALL of
them).

## Task outline (TDD, 100% coverage, one commit per section or logical group)

- [ ] 1. Scaffold app `apps/canvas` (copy simplest existing app; rename package
      `@free-react-templates/canvas`; register `injectUiSource()` in
      `vite.config.ts`; `npm install` at root so the lockfile registers the
      workspace; `index.html` title "Canvas — Creative Agency Template" +
      Google Fonts `<link>`: Poppins 400/700/900 + Source Serif Pro 300/400)
- [ ] 2. `@theme` tokens in `index.css`: brand indigo `#3b4eda`, black `#000`,
      body `#6c7b95`, bg-light `#f8f9fa`, white; font families poppins /
      source-serif-pro; radii (50% only — sharp corners elsewhere)
- [ ] 3. Navbar (absolute transparent, uppercase Poppins white brand "Canvas",
      links Home active/Portfolio/About/Services/Blog/Contact at
      rgba(255,255,255,.7)→white; scroll listener → sticky white bar + shadow
      `4px 0 20px -5px rgba(0,0,0,.2)`, brand + active link indigo, links
      black; ≤991px indigo hamburger + 300px off-canvas panel from the right)
- [ ] 4. Hero (solid black, `calc(100vh - 196px)` min 677px; centered Poppins
      900 4rem white headline "Creativity is a wild mind and a disciplined
      eye." (2rem mobile) + 18px rgba(255,255,255,.6) lead + 50px white play
      circle with black Play glyph → video lightbox modal)
- [ ] 5. Portfolio mosaic (bg-light section pulled up `-5rem` over the hero,
      black `:before` strip 70% height; row 1: col-span-3/6/3, row 2: three
      col-span-4; 6 seeded picsum images, shadow `0 4px 40px -5px
    rgba(0,0,0,.4)`, hover scale 1.05 + 20% black overlay)
- [ ] 6. Services (white, 3 cards: 64px indigo icons Monitor / Compass /
      Layers; h3 20px/900: Interface Design / Product Design / Quality
      Results; lorem)
- [ ] 7. Blog Updates (`#3b4eda` band: h2 "Blog Updates" Poppins bold white
      32px + lead; carousel 3-per-view desktop / 1 mobile, auto-advance +
      dots + arrows: image, "October 18, 2019", 26px bold white title, 60px
      round avatar + "by John Freeman" / "Thinker & Designer"; 8–12 distinct
      titles, white 10px dots below)
- [ ] 8. Client logos (`#f8f9fa` row of 4: gray text wordmarks Google,
      InVision, Nike, Microsoft)
- [ ] 9. Footer (white, `4em 0`/`8em 0` ≥768px: "Canvas" Poppins bold
      uppercase indigo left; right 3 link columns — Contact Us /
      hello@mydomain.com / +1 829 2293 382 / Support, then Home / Blog /
      Services / About Us ×2 (keep the duplication); links rgba(0,0,0,.5)→
      black, 10px gap)
- [ ] 10. Social + copyright band (5 centered inline-SVG glyphs Facebook /
      Twitter / LinkedIn / Instagram / Skype, m-2 spacing; "© Canvas. All
      rights reserved.")
- [ ] 11. `npm run verify:app canvas` (typecheck + lint + 100% coverage + build)
- [ ] 12. PR: claim (`[~]` on all 3 Approach rows), implement, merge, mark
      `[x]` + surge URL + `npm run readme:status`

## Design notes (fidelity per section)

- **Look & feel:** minimal, editorial, high-contrast creative studio. Solid
  BLACK hero (no image, no overlay), white Poppins-900 display headline, ONE
  vivid indigo accent (`#3b4eda`) used sparingly (icons, blog band, footer
  logo, sticky states), slate-gray serif body text. The template's signature:
  Source Serif Pro body vs Poppins 900 headings — the serif/sans contrast IS
  the design. Do not add buttons, pills, or rounded corners that the source
  doesn't have (sharp corners everywhere except circles).
- **Hero:** the `.site-section-cover` renders as flat black — the source has
  NO hero image (verified live + screenshot). Keep it plain black.
- **Portfolio:** `margin-top: -5rem` pulls the section up over the hero; the
  `:before` black strip (70% of section height) shows as a black band behind
  the top row of photos — replicate with an absolutely-positioned black div
  behind the grid. Row 1 is 3/6/3 columns (center image double width), row 2
  is three equal 4-column cells. Mix portrait and landscape picsum crops.
- **Navbar:** top state = transparent, WHITE links, active link white (the
  `.active` li itself has the indigo color rule, but the active LINK renders
  white). Sticky = white bar, black links, indigo logo + active. Mobile =
  indigo hamburger, off-canvas 300px white panel from the right with
  `#212529` links.
- **Blog band:** cards have NO background — white text sits directly on the
  indigo band (date, 26px bold title, author line). The source repeats the
  exact same card 12 times; give 8–12 distinct titles, keep the same date +
  author copy. Owl dots sit BELOW the band's bottom edge (`bottom: -3rem`).
- **Client logos:** source uses logo images (Google/InVision/Nike/Microsoft)
  — replace with muted gray text wordmarks; do not copy the images.
- **Footer:** three link columns, and columns 2+3 are IDENTICAL in the source
  — keep the duplication. Social icons are plain glyphs with `m-2` spacing
  (NO circles — the `.social_29128` circle variant is only on other pages).
- **Typed.js:** loaded with a `.typed-words` config (Business/Startups/
  Organization/Company) but there is NO `.typed-words` element in the home
  DOM — the effect is inert. Skip it.
- **Other pages:** the source is multi-page (portfolio/about/services/blog/
  contact .html) — the home recreation is single-page; keep nav labels and
  point them at the corresponding sections (Portfolio → mosaic, About →
  services, Blog → blog band, Contact → footer) or use `#` placeholders.
