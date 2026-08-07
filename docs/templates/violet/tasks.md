# Violet (ColorLib Sierra) — Tasks & Design Notes

> Prep artifacts originally on `main` under the name "sierra"; **renamed to
> Violet** on `feat/template-violet` because the mandatory naming rule
> requires a NEW name different from the ColorLib source slug ("Sierra").
> Implementation ships via the `feat/template-violet` PR.

## Design notes (replication findings)

- **Original:** ColorLib "Sierra" — startup / business landing template
  (source: https://colorlib.com/wp/template/sierra/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/sierra/
  (HTTP 200, 44 KB rendered DOM) + `css/style.css` (51 KB) extracted.
  The TEMPLATES.md screenshot (`sierra-free-template.jpg`) is the visual
  reference.
- **Visual design:** startup landing with a **purple** brand (`#9b8aff`) +
  **blue** accent (`#6ebdfe`) — the hero and buttons are a blue→purple
  gradient — dark navy `#0b1033`, muted `#7c8d93`, Open Sans + Roboto fonts,
  a "Choose a powerful design" hero, 3 feature cards, testimonials, team,
  and a get-in-touch contact band.
- **Structure (1:1, section order from the live DOM):**
  1. Navbar: logo + Home, About Us, Services, Portfolio, Blog, Contact
     (original is multi-page; the one-page recreation uses the page's real
     sections: Home, Features, Testimonials, Team, Contact).
  2. Hero (revolution slider in original): "Choose a powerful design for
     your Start-up" + **Get your freebie template now!** + **Discover**
     (gradient blue→purple pill button).
  3. Features: "Discover the features" — "We are young but bold" + 3 cards —
     **Brand Identity, Online Marketing, Social Media** (icon + blurb +
     **Read More**).
  4. Testimonials: "They are the best" + quote + **Chriss Turner — CEO
     Enterprise** (carousel in original; static quote here).
  5. Team: "We build a strong team of great people" + 3 member cards.
  6. Contact: "Get in touch, send us an e-mail or call us" + world map area
     (recreated as a stylized dotted band with MapPin markers, no map asset).
  7. Footer: widget columns + social + copyright.
- **Design tokens extracted from `css/style.css`:**
  - Primary **purple `#9b8aff`**; **blue `#6ebdfe`**; hero + buttons use
    `linear-gradient(left, #6ebdfe, #9b8aff)`; buttons also
    `#70bafe → #998dff → #70bafe` with `border-radius: 35px`; dark navy
    `#0b1033`; muted `#7c8d93`.
  - Fonts: **"Open Sans"** + **"Roboto"** (Google Fonts `<link>`).
- **Recreation name:** **Violet** (NEW name — purple/blue gradient brand
  evocation; the ColorLib source name "Sierra" is NOT reused). App folder
  `apps/violet`, package `@free-react-templates/violet`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/violet-<n>/<w>/<h>`); lucide-react icons; Open Sans +
  Roboto via Google Fonts; purple/blue gradient primary in `@theme`;
  repo-standard Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Replication: fetch Sierra preview DOM + `css/style.css`; extract 1:1
      section structure and design tokens (recorded above).
- [x] Write `openspec/specs/template-violet/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above), renamed from the
      stale `template-sierra` prep.
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/violet` (copy the blush landing app pattern; rename
      package to `@free-react-templates/violet`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Per-app gate (FAST_MODE): typecheck → lint → vitest 100% → build;
      full gate runs in CI on merge.
- [ ] Push `feat/template-violet`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
