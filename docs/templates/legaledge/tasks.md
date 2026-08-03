# Legaledge (Colorlib Legaledge 2) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Cloud PR (#7) awaits review.
> Implementation ships later on `feat/template-legaledge`.

## Design notes (replication findings)

- **Original:** ColorLib "Legaledge 2" — law firm / attorneys website
  template (source: https://colorlib.com/wp/template/legaledge-2/).
- **Demo DOM analyzed:** https://legaledge-colorlib.pages.dev/ (HTTP 200;
  `https://preview.colorlib.com/theme/legaledge-2/` returns 404 — preview
  portal loads demos from `<slug>-colorlib.pages.dev`, confirmed via
  `preview.colorlib.com/assets/js/products.js`).
- **Visual design (from DOM + Tailwind classes):** classic, trustworthy law
  firm landing — navy (#102a43) surfaces with gold (#c9a227) accents,
  Playfair Display display + Inter body fonts, rounded cards, pill buttons,
  dark footer, full dark mode.
- **Structure (1:1, section order):**
  1. Navbar: Home, About, Practice Areas, Attorneys, Contact + "Free
     Consultation".
  2. Hero: "Trusted Legal Excellence" + Free Case Evaluation badge + contact
     strip ((555) 234-5678, contact@morrisonlaw.com, Mon–Fri 8–6).
  3. Practice Areas: Corporate Law, Litigation, Real Estate, Family Law,
     Estate Planning, Criminal Defense.
  4. A Legacy of Legal Excellence: Proven Track Record, Client-Focused
     Approach, Industry Recognition, Transparent Communication + stats.
  5. Meet Our Attorneys: James Morrison, Sarah Chen, Michael Thompson,
     Elena Rodriguez.
  6. Client Testimonials: 4 quotes (CEO TechVenture, Martinez Properties,
     Private Client, Retired Executive).
  7. Recognition: Super Lawyers, Martindale-Hubbell, AV Preeminent.
  8. CTA: "Ready to Discuss Your Legal Matter?" + Request Free
     Consultation.
  9. Footer: Practice Areas / Quick Links / Contact Us + legal disclaimer.
- **Design tokens extracted from the DOM + CSS:**
  - Brand colors: **#c9a227** (gold) + **#102a43** (navy; scale #243b53,
    #8a6914, #a78419).
  - Neutrals: white/#f0f4f8/#d9e2ec/black.
  - Fonts: **"Playfair Display"** (display) + **"Inter"** (body) via Google
    Fonts.
  - Shapes: rounded-lg cards, pill buttons.
- **Recreation name:** Legaledge (kept — matches ColorLib name). App folder
  `apps/legaledge`, package `@free-react-templates/legaledge`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/legaledge-<n>/<w>/<h>`); lucide-react icons; Playfair
  Display + Inter via Google Fonts; repo-standard Navbar (dark-mode toggle)
  - Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-legaledge/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/legaledge` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/legaledge`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-legaledge`, open PR (source template, preview
      URL, design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
