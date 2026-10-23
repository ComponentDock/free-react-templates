# Arlo (ColorLib Alex Rivera) — Tasks & Design Notes

## Design notes (replication findings)

- **Original:** ColorLib "Alex Rivera" — personal portfolio template
  (source: https://colorlib.com/wp/template/alex-rivera/).
- **Demo DOM analyzed:** https://alexrivera-colorlib.pages.dev/
  (HTTP 200 at prep time; `https://preview.colorlib.com/theme/alex-rivera/` returned 404 at prep time —
  demo was hosted on Cloudflare Pages per the ColorLib preview portal).

✅ **Pointer status — live reference re-probed 2026-10-13d (bot wall
lifted):** the demo is served by the ColorLib preview host —
`https://preview.colorlib.com/theme/alexrivera/` answers **HTTP 200**,
105,858 B `text/html; charset=utf-8` (90,060 B, sha256 `4e1dade132d0…` after
stripping the injected print-media `@font-face` block and the Insights
beacon); its stylesheet
`https://preview.colorlib.com/theme/alexrivera/_astro/Base.DSJ9xNgp.css` is
62,363 B sha256 `da08a5963991…` (Inter, Space Grotesk). The Cloudflare Pages
mirror `https://alexrivera-colorlib.pages.dev` is still **NXDOMAIN**
(re-checked 2026-10-13d). ⚠️ `apps/arlo` was built from the mirror's tokens
before the migration, so it follows the mirror, not today's preview host.
- **Visual design (from DOM + Tailwind classes):** light portfolio with
  gray neutrals and yellow (`yellow-400`) accents, dark-mode aware, Google
  Fonts (Inter + Space Grotesk), rounded cards and pill badges.
- **Structure (1:1, section order):**
  1. Navbar: About, Skills, Projects, Experience, Contact (+ dark toggle).
  2. Hero: "I design & build digital experiences" + blurb + CTAs.
  3. About: "About Me" + biography paragraphs.
  4. Expertise: "My Expertise" + Frontend, Backend, Design cards.
  5. Featured Work: "Featured Work" + E-commerce Platform, Design System,
     Analytics Dashboard, Mobile Fitness App.
  6. Experience: "Career Journey" timeline (Senior → Full-stack →
     Frontend → Junior Developer).
  7. Testimonials: "What Clients Say" + 3 quotes.
  8. FAQ: "Frequently Asked Questions" + expandable answers.
  9. Contact: "Let's Work Together" + details + form.
  10. Footer: columns + social (GitHub, X, LinkedIn) + copyright.
- **Design tokens extracted from the DOM:**
  - Light theme, gray neutrals, yellow-400 (`#facc15`) accent.
  - Fonts: Inter (body) + Space Grotesk (display) via Google Fonts.
- **Recreation name:** Arlo (NEW name — different from ColorLib "Alex
  Rivera"). App folder `apps/arlo`, package
  `@free-react-templates/arlo`.
- **Recreation approach:** lucide-react icons (brand icons → inline SVG);
  Google Fonts via `<link>`; yellow accent in `@theme`; repo-standard
  Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-arlo/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [x] Create `apps/arlo` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/arlo`).
- [x] TDD: tests first for each section component; run red.
- [x] Implement components (green) at 100% coverage.
- [x] Per-app gate: `scripts/verify-app.sh arlo` (typecheck → lint →
      test:coverage → build).
- [ ] Push `feat/template-arlo`, open PR (source template, preview URL,
      design tokens, what differs), merge immediately.
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage +
      `npm run readme:status` (bookkeeping on main, state D).

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/arlo/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/arlo/public/CNAME` = `arlo.free.componentdock.com`
  and the package `homepage` = `https://arlo.free.componentdock.com`.
