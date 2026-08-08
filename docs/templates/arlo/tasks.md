# Arlo (ColorLib Alex Rivera) — Tasks & Design Notes

## Design notes (replication findings)

- **Original:** ColorLib "Alex Rivera" — personal portfolio template
  (source: https://colorlib.com/wp/template/alex-rivera/).
- **Demo DOM analyzed:** https://alexrivera-colorlib.pages.dev/
  (HTTP 200; `https://preview.colorlib.com/theme/alex-rivera/` returns 404 —
  demo hosted on Cloudflare Pages per the ColorLib preview portal).
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
