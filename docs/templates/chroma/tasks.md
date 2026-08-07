# Chroma (ColorLib Transcend) — Tasks & Design Notes

> Prep artifacts originally on `main` under the name "transcend"; **renamed
> to Chroma** on `feat/template-chroma` because the mandatory naming rule
> requires a NEW name different from the ColorLib source slug ("Transcend").
> Implementation ships via the `feat/template-chroma` PR.

## Design notes (replication findings)

- **Original:** ColorLib "Transcend" — creative studio / digital experiences
  landing page (source: https://colorlib.com/wp/template/transcend/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/transcend/
  (HTTP 200, 35 KB rendered DOM) + `css/main.css` (70 KB) extracted.
  The TEMPLATES.md screenshot (`transcend-free-template-1.jpg`) is the
  visual reference.
- **Visual design:** creative studio landing with a **magenta** brand
  (`#cc147f`), a **teal** secondary accent (`#26bfb5`), near-black
  backgrounds (`#000`/`#111`), Domine (serif) + Metropolis (sans) fonts,
  a "Hello folks, we are Transcend Studio." hero with social links, a
  Who We Are section with a 4-step process (Define, Design, Build, Launch),
  a What We Do services grid, Featured Works, a stats band, and a contact
  section.
- **Structure (1:1, section order from the live DOM):**
  1. Navbar: logo "Chroma Studio" + Home, About, Services, Works, Contact.
  2. Hero (`#home`): "Hello folks, we are Chroma Studio." + blurb + quick
     links (About / Services / Contact) + social + Scroll Down.
  3. Who We Are: "Who We Are" + "We are a group of design driven
     individuals passionate about creating beautiful..." + 4 steps —
     Define, Design, Build, Launch.
  4. What We Do: "What We Do" + 6 cards — Brand Identity, Illustration,
     Web Design, Product Strategy, UI/UX Design, Mobile Development.
  5. Works: "Featured Works" + project cards (title + category + Project
     Link).
  6. Stats (`#stats`): 129 Awards Received, 1507 Cups of Coffee, 108
     Projects Completed, 103 Happy Clients.
  7. Contact (`#contact`): "Contact Us" + e-mail/phone/address + Follow Us
     social links.
  8. Footer: copyright.
- **Design tokens extracted from `css/main.css`:**
  - Primary **magenta `#cc147f`**; **teal `#26bfb5`** accent; near-black
    `#000`/`#111`; muted `#626262`; white.
  - Fonts: **"Domine"** (serif display) + **"Metropolis"** (sans body) —
    recreated with Domine + Poppins via Google Fonts `<link>`.
  - Buttons: solid magenta with white text.
- **Recreation name:** **Chroma** (NEW name — color/creative studio
  evocation for a magenta-brBranded studio; the ColorLib source name
  "Transcend" is NOT reused). App folder `apps/chroma`, package
  `@free-react-templates/chroma`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/chroma-<n>/<w>/<h>`); lucide-react icons; Domine +
  Poppins via Google Fonts; magenta primary + teal accent in `@theme`;
  repo-standard Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Replication: fetch Transcend preview DOM + `css/main.css`; extract
      1:1 section structure and design tokens (recorded above).
- [x] Write `openspec/specs/template-chroma/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above), renamed from the
      stale `template-transcend` prep.
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/chroma` (copy the postie landing app pattern; rename
      package to `@free-react-templates/chroma`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Per-app gate (FAST_MODE): typecheck → lint → vitest 100% → build;
      full gate runs in CI on merge.
- [ ] Push `feat/template-chroma`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
