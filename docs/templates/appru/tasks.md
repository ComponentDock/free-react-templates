# Appru (Colorlib Appru) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Vista PR (#4) awaits review.
> Implementation ships later on `feat/template-appru`.

## Design notes (replication findings)

- **Original:** ColorLib "Appru" — app landing / mobile app marketing site
  (source: https://colorlib.com/wp/template/appru/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/appru/
  (HTTP 200, full rendered DOM + `css/main.css` (68KB) extracted).
- **Visual design (from DOM + CSS tokens):** app landing with a **cyan →
  blue gradient** brand (`#46dbf9` → `#204be3`), Poppins + Roboto fonts,
  light (`#f9f9ff`) sections, a phone-mockup hero, a stats band, 3 feature
  tiles, testimonials, a screenshot strip, and 3 pricing plans.
- **Structure (1:1, section order):**
  1. Navbar: logo "Appru" + links Home, About, Pricing, Pages, Elements,
     Blog, Contact.
  2. Hero (`home-banner-area`, image bg + gradient overlay): h1 "App That
     Suits You Better" + blurb + **Available on App Store** /
     **Available on Play Store** + phone mockup.
  3. Stats band (`fact-area`): **100K+ Total Downloads, 10K+ Positive
     Reviews, 50K+ Daily Visitors, 0.02% Uninstallation Rate, 15K+ Pro
     User** (gradient numbers).
  4. Features (`feature-area`): "Unique Features" + blurb + 3 tiles —
     **Expert Technicians, Professional Service, Great Support** (icon +
     title + blurb).
  5. About (`about-area`): "We Believe that Interior beautifies the Total
     Architecture" + blurb + **Get Details**.
  6. About-video (`about-video-area`): same heading + play button + store
     buttons.
  7. Testimonials (`testimonials-area`): quote + **Fanny Spencer** (carousel
     of 4 identical slides in original).
  8. Screenshots (`screenshot-area`): "Featured Screens" + image row.
  9. Pricing (`pricing-area`): "Suitable Pricing Plans" + **Standard £199 /
     Business £399 / Ultimate £499** — each: audience line, 5 features
     (2.5 GB Free Photos, Secure Online Transfer Indeed, Unlimited Styles
     for interface, Reliable Customer Service, Manual Backup Provided) +
     **Purchase Plan**.
  10. Footer (`footer-area`, dark `#04091e`): **Top Products** (Managed
      Website, Manage Reputation, Power Tools, Marketing Service), **Quick
      Links** (Jobs, Brand Assets, Investor Relations, Terms of Service),
      **Resources** (Guides, Research, Experts, Agencies), social icons +
      copyright.
- **Design tokens extracted from `main.css`:**
  - Primary **gradient `linear-gradient(0deg, #46dbf9 0%, #204be3 100%)`**
    (buttons `.primary-btn`, accents, stat numerals).
  - Cyan `#46dbf9`; deep blue `#204be3`; light bgs `#f9f9ff`, `#fcfdff`,
    `#f8fcff`; dark footer `#04091e` / `#222222`; muted text `#777777`.
  - Fonts: **"Poppins"** (headings) + **"Roboto"** (body) via Google Fonts
    `<link>`.
  - `.primary-btn`: height 50px, padding 0 45px, **border-radius 0**
    (square), gradient bg, white uppercase text.
- **Recreation name:** Appru (app-themed, distinct from "Appli" and all
  existing names). App folder `apps/appru`, package
  `@free-react-templates/appru`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/appru-<n>/<w>/<h>`); lucide-react icons (replaces
  font-awesome/linearicons); Poppins + Roboto via Google Fonts; phone mockup
  as a styled illustration (no assets copied); store badges as lucide-icon
  buttons; gradient primary in `@theme`; repo-standard Navbar (dark-mode
  toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-appru/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/appru` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/appru`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-appru`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
