# Truss (ColorLib Kraft) — Tasks & Design Notes

> Prep artifacts renamed from the ColorLib source name (`template-kraft`) to
> the new original name (`template-truss`) per the naming rule. Implementation
> ships on `feat/template-truss`.

## Design notes (replication findings)

- **Original:** ColorLib "Kraft" — architecture template
  (source: https://colorlib.com/wp/template/kraft/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/kraft/
  (HTTP 200, full rendered DOM + `css/style.min.css` extracted).
- **Visual design (from DOM + CSS tokens):** architecture landing with an
  **orange** brand (`#ff5200`) on white sections, Bootstrap system sans
  font, a "Creates Smart Architecture." hero with INTRO label, orange stat
  counters (25 / 159 / 298), overlapping photo stack, a staggered 2×2
  services grid, a 4-slide testimonial carousel on a faint orange tint
  (`rgba(255,82,0,.02)`), a 3-column projects gallery with white hover
  overlay, and a light-grey (`#efefef`) footer.
- **Structure (1:1, section order):**
  1. Navbar: "Truss." logo + Home, Services, Projects, About, Contact Us.
  2. Hero: INTRO label, "Creates Smart Architecture." + paragraph + orange
     square CTA + stats (25 Years experience / 159 Projects build /
     298 Number of people) + overlapping photo stack.
  3. Mission: MISSION label + "Architectures for Complex Projects" + blurb
     - READ MORE link.
  4. Our Services: Architect, Interior Design, Landscape Design,
     Consultancy (staggered grid, image + blurb + READ MORE).
  5. Testimonials: 4-slide carousel (quote + avatar + name + role).
  6. Our Projects: La Lega Stadium (Madrid, Spain), France Building,
     22 New Homes, Manage Center, Sports Hall.
  7. Footer: About Truss. + Connect socials, Projects, Services, Contact
     (address + phones + email) + copyright.
- **Design tokens extracted from `css/style.min.css`:**
  - Primary **orange `#ff5200`** (buttons, links, active nav, stat
    numbers, logo dot); hover `#ff6014`.
  - Black `#000000` headings / white `#ffffff` sections; footer
    `background: #efefef`, muted text `#888`, subtext labels `#bfbfbf`.
  - Font: Bootstrap system sans stack (recreated with Inter via Google
    Fonts).
  - Buttons: pill (30px radius), 11px bold uppercase; hero CTA 60×60
    orange square with white arrow. Hero heading 70px; section headings
    50px; small uppercase `subtext` labels 11px `#bfbfbf`.
- **Recreation name:** Truss (NEW original name — never reuse the ColorLib
  source name "Kraft"). App folder `apps/truss`, package
  `@free-react-templates/truss`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/truss-<n>/<w>/<h>`); lucide-react icons + inline
  SVG brand icons; Inter via Google Fonts; orange primary in `@theme`;
  repo-standard Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, cn).

## Tasks

- [x] Write `openspec/specs/template-truss/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Replication research: preview DOM, `css/style.min.css` tokens,
      screenshot, live browser render.
- [ ] Scaffold `apps/truss` (copy simplest existing app, rename package).
- [ ] Tests first, then implementation (100% coverage).
- [ ] `bash scripts/verify-app.sh truss` + `npm run spec:validate`.
- [ ] PR `feat: Truss — architecture template (ColorLib Kraft)` + merge.
- [ ] Bookkeeping: TEMPLATES.md `[x]` + surge URL, homepage, readme:status.
