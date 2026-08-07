# Driven (ColorLib Sasu) — Tasks & Design Notes

> Recreation of ColorLib "Sasu" under the NEW name **Driven**
> (source: https://colorlib.com/wp/template/sasu/).
> Implementation ships on `feat/template-driven` (renamed from the earlier
> `template-sasu` prep, which reused the source name against the mandatory
> naming rule).

## Design notes (replication findings)

- **Original:** ColorLib "Sasu" — app / digital marketing landing page
  (source: https://colorlib.com/wp/template/sasu/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/sasu/
  (HTTP 200, full rendered DOM) + `css/style.css` (151KB) extracted.
- **Visual design (from DOM + CSS tokens):** digital-marketing landing with
  a **blue** brand (`#0ab6ff`), Poppins + Roboto fonts, light (`#f9f9ff`,
  `#f0e9ff`) sections, a "Drive More Customers" hero, feature tiles, a
  stats split, pricing, and a CTA.
- **Structure (1:1, section order from the LIVE DOM):**
  1. Navbar: logo "sasu" + Home, feature, pricing, Blog, pages, Contact.
  2. Hero (`banner_part`): h1 "Drive More Customers Through Digital" +
     blurb + **Get Started / Sign up for free** + banner image (right).
  3. Feature tiles (`feature_part`): **A Volunteer** x3 (icon + blurb) on
     the left; "featured" heading + blurb + **50k Total Volunteer, 100k
     Successed Mission** + **learn more** on the right.
  4. About split (`about_us`): "Right people at the Right time." + blurb +
     **get started / sing up free** + image (right).
  5. Who can use (`use_sasu`): "Who can use Sasu?" + 3 **A Volunteer**
     cards (icons).
  6. Right-time split (`about_us.right_time`): "Easy to Use Mobile
     Application" + blurb + **get started / sing up free** + image (left).
  7. Pricing (`pricing_part`): "Simple Pricing" + 3 **business** plans
     ($50/$60/$80 per mo; 2GB Bandwidth, Two Account, 15GB Storage, Sale
     After Service, 3 Host Domain, 24/7 Support) + **Choose Plane**.
  8. CTA (`cta_part`): "Very useful Friendly" + blurb + **Get Started /
     Sign up for free**.
  9. Footer: About Us + social icons; Contact Info (Address / Phone /
     Email); Important Link; Newsletter (blurb + email form); copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **blue `#0ab6ff`**; button gradient `#00b4ff → #57ddff`
    (`.btn_1` solid, `.btn_2` outline with gradient hover).
  - Light bgs `#f9f9ff`, `#f0e9ff`; muted `#999999`, `#7f7f7f`.
  - Fonts: **"Poppins"** + **"Roboto"** (Google Fonts `<link>`).
- **Recreation name:** Driven (NEW name — the source name "Sasu" must NOT
  be reused). App folder `apps/driven`, package
  `@free-react-templates/driven`.
- **Copy fixes (paraphrase allowed):** "100k Successed Mission" →
  "100k Successful Missions"; "Choose Plane" → "Choose Plan"; "sing up
  free" → "Sign Up Free"; "Very useful Friendly" → "Very Useful &
  Friendly"; "Bsngladesh" → "Bangladesh"; "Who can use Sasu?" → "Who can
  use Driven?"; footer email → `info@driven.dev`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/driven-<n>/<w>/<h>`); lucide-react icons (brand
  icons as inline SVG); Poppins + Roboto via Google Fonts; forms prevent
  default (no backend); blue primary in `@theme`; repo-standard Navbar
  (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Rename prep artifacts to the mandatory new name: spec
      `openspec/specs/template-driven/spec.md`, notes
      `docs/templates/driven/tasks.md` (old `template-sasu`/`sasu` folders
      removed).
- [x] Update `openspec/specs/template-driven/spec.md` (Gherkin requirements + scenarios reflecting the REAL sections above, name "Driven").
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/driven` (copy the section-rich landing app pattern —
      Soar; rename package to `@free-react-templates/driven`); `npm install`
      at root so the lockfile registers the workspace.
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-driven`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage +
      README status (bookkeeping on main, state D).
