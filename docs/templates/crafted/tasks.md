# Crafted (Colorlib Crafted) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Tears PR (#5) awaits review.
> Implementation ships later on `feat/template-crafted`.

## Design notes (replication findings)

- **Original:** ColorLib "Crafted" — creative agency website template
  (source: https://colorlib.com/wp/template/crafted/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/crafted/
  (HTTP 200, full rendered DOM + `css/main.css` (99KB) extracted).
- **Visual design (from DOM + CSS tokens):** creative agency site with a
  **blue** brand (`#4ba0f9`) + **yellow** accent (`#f8b600`), Playfair
  Display + Roboto fonts, a "We Are Crafted" hero, service tiles, an about
  band with big stats, a portfolio grid, team, testimonials, and CTA.
- **Structure (1:1, section order):**
  1. Navbar: logo "Crafted" + Home, About, Service, Projects, Team, Blog,
     Contact.
  2. Hero (`home-banner-area`): "We Are Crafted." / "Design & Development
     Service Provider." + **More About Us / Watch Live Demo**.
  3. Brand strip (`brand-area`): logo row.
  4. Services (`service-area`): "We Are Crafted. We Provide These Services
     to Our Customers" + **Story Boarding** tiles x3 (icon + title +
     blurb).
  5. About (`video-sec-area`): "We Are Crafted. Some Info About Us" +
     stats: **500+ Qualified Lawyer, 20,650+ Solved Cases, 2.5k+ Trusted
     Clients, 50+ Achievements**.
  6. Portfolio (`portfolio-area`): "Recent Portfolio Showcase" + **Proper
     Guided Tour, Santorini Island Dream, Holiday and Fun Package** +
     **View all Works**.
  7. Team (`team-area`): member cards.
  8. Testimonials (`testimonial-area`): quote carousel.
  9. CTA (`cta-area`): band with button.
  10. Blog (`blog-area`): post cards.
  11. Footer: columns + social + copyright.
- **Design tokens extracted from `main.css`:**
  - Primary **blue `#4ba0f9`**; **yellow `#f8b600`** accent; cyan
    `#4cd3e3`.
  - Dark `#222222` sections; light `#f9f9ff`.
  - Fonts: **"Playfair Display"** + **"Roboto"** (Google Fonts `<link>`).
  - Blue buttons with white text; yellow accents.
- **Recreation name:** Crafted (kept — matches ColorLib name, distinct from
  existing names). App folder `apps/crafted`, package
  `@free-react-templates/crafted`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/crafted-<n>/<w>/<h>`); lucide-react icons; Playfair
  Display + Roboto via Google Fonts; blue primary + yellow accent in
  `@theme`; repo-standard Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-crafted/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/crafted` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/crafted`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-crafted`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/crafted/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/crafted/public/CNAME` = `crafted.free.componentdock.com`
  and the package `homepage` = `https://crafted.free.componentdock.com`.
