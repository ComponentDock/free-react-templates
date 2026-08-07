# Soar (ColorLib Raptor) — Tasks & Design Notes

> Prep artifacts prepared on `main`; implementation ships on
> `feat/template-soar`. NOTE: the recreation is named **Soar**, NOT
> "Raptor" (mandatory naming rule — the new name must differ from the
> ColorLib source name).

## Design notes (replication findings)

- **Original:** ColorLib "Raptor" — Free Bootstrap 4 domain & hosting
  template (source: https://colorlib.com/wp/template/raptor/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/raptor/
  (HTTP 200, full rendered DOM + `css/style.css` (71KB) extracted).
- **Visual design (from DOM + CSS tokens):** domain/hosting site with a
  **teal** brand (`#2ebdc4`) + **green** accent (`#68e5b2`) hero gradient,
  light-blue `#78d5ef` buttons, Poppins + Work Sans fonts, a
  "Design. Development. Hosting." hero, domain search with TLD prices,
  "Why choose us" services, 4 pricing plans, fun-fact counters,
  testimonials, how-it-works tabs, newsletter, and a blog.
- **Structure (1:1, section order):**
  1. Navbar: logo "Soar." + Home, Domain, Pricing, Contact + **Get started**
     (+ repo-standard dark-mode toggle).
  2. Hero: h1 "Design. Development. Hosting." + blurb + **Get started /
     Get domain** (teal→green diagonal gradient bg).
  3. Domain search: "Get A Domain Name" + search form + TLD prices —
     **.com 9.75, .net 9.90, .biz $8.95, .me $7.95**.
  4. Services: "Why choose us" + **100% Uptime Guarantee, Safe and
     Secured, Our Dedicated Support** (icon + blurb).
  5. Pricing: "Our Best Pricing" + **Free $0** (100% free. Forever; 150 GB
     Bandwidth, 100 GB Storage, $1.00/GB Overages) · **Startup $19**
     (450 GB / 400 GB / $2.00) · **Premium $49** (250 GB / 200 GB / $5.00) ·
     **Pro $99** (450 GB / 400 GB / $20.00) — each + **Get Started**.
  6. Fun facts: "Some fun facts" + "More than 100,000 websites hosted" +
     counters: CMS Installation, Awards Won, Registered Domains,
     Satisfied Customers.
  7. Testimonials: "Our satisfied customer says" + quote + **Dennis Green,
     Marketing Manager**.
  8. How it works: "How it works" + tabs **Next gen VPS / Performance /
     Effectiveness** + "Next gen VPS hosting" + copy.
  9. Newsletter: "Subscribe to our Newsletter" + email form.
  10. Recent Blog: 3 cards (Aug 12, 2018 · Admin · 3 comments) +
      "Even the all-powerful Pointing has no control about the blind texts".
  11. Footer: brand + blurb + link columns + social + copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **teal `#2ebdc4`**; **green `#68e5b2`** accent; hero gradient
    `linear-gradient(135deg, #2ebdc4 0%, #68e5b2 100%)`.
  - Light-blue `#78d5ef` buttons; green `#22d47b` accents.
  - Dark `#3a4348`; muted `#6c757d`.
  - Fonts: **"Poppins"** + **"Work Sans"** (Google Fonts `<link>`).
- **Recreation name:** Soar (NEW name — ColorLib source is "Raptor").
  App folder `apps/soar`, package `@free-react-templates/soar`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/soar-<n>/<w>/<h>`); lucide-react icons; Poppins +
  Work Sans via Google Fonts; domain search + newsletter forms prevent
  default (no backend); teal primary in `@theme`; repo-standard Navbar
  (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-soar/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL 11 sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/soar` (copy the section-rich landing app pattern —
      Verve; rename package to `@free-react-templates/soar`).
- [ ] `npm install` at repo root so package-lock.json registers the new
      workspace (deploy `npm ci` fails on stale lockfile otherwise).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-soar`, open PR (source template, preview URL,
      design tokens, what differs), merge immediately.
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage +
      README status (bookkeeping on main, state D).
