# Appson (Colorlib Appson) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Vista PR (#4) awaits review.
> Implementation ships later on `feat/template-appson`.

## Design notes (replication findings)

- **Original:** ColorLib "Appson" — apps landing HTML template
  (source: https://colorlib.com/wp/template/appson/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/appson/
  (HTTP 200, full rendered DOM + `css/preview.css` (4KB) extracted).
- **Visual design (from DOM + CSS tokens):** the ColorLib preview for this
  entry is a **product showcase page** ("Appson Preview — Apps Landing Html
  Template") with a dark theme, a big "MAKE YOUR WEBSITE WITH OUR Apps
  Awesome Landing TEMPALTE" headline, a PURCHASE NOW button, a list of the
  template's 7 home-page variants (#1 Gradiant, #2 Backgroudn Video, #3
  Video Gradiant, #4 Background Image, #5 Background Gradiant, #6 Rain
  Drops Canvas, #7 Slider), and 4 blog layout links (Blog Standard, Blog
  With Sidebar, Blog Left Sidebar, Blog Details), then a ColorLib footer.
- **Structure (1:1, section order):**
  1. Navbar: "Appson" + "Appson Preview" tagline.
  2. Hero: "MAKE YOUR WEBSITE WITH OUR Apps Awesome Landing TEMPALTE" +
     **PURCHASE NOW!**.
  3. Showcase: "7 HOME PAGE | AND OTHER LAYOUT'S" — variants #1–#7
     (Gradient, Background Video, Video Gradient, Background Image,
     Background Gradient, Rain Drops Canvas, Slider).
  4. Blog layouts: Blog Standard, Blog With Sidebar, Blog Left Sidebar,
     Blog Details.
  5. Footer: copyright + Colorlib credit.
- **Design tokens extracted from `preview.css`:**
  - Dark showcase theme (near-black bg, white text); gradient accent on
    buttons. The advertised template's home pages use gradient heroes.
  - Font: system sans stack.
- **Recreation name:** Appson (kept — matches ColorLib name, distinct from
  existing names). App folder `apps/appson`, package
  `@free-react-templates/appson`.
- **Recreation approach:** dark showcase page with gradient variant cards
  rendered as styled swatches; lucide-react icons; picsum placeholders not
  needed for swatches; repo-standard Navbar (dark-mode toggle) + Footer
  chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-appson/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/appson` (copy the simplest app; rename package to
      `@free-react-templates/appson`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-appson`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
