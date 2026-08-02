# Cobalt (Colorlib Applab) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Vista PR (#4) awaits review.
> Implementation ships later on `feat/template-cobalt`.

## Design notes (replication findings)

- **Original:** ColorLib "AppLab" — app landing page
  (source: https://colorlib.com/wp/template/applab/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/applab/
  (HTTP 200, full rendered DOM + `css/style.css` (155KB) extracted).
- **Visual design (from DOM + CSS tokens):** app landing with an **orange**
  brand (`#ff5e13`), Poppins font, light (`#f9f9ff`, `#f0e9ff`) sections,
  phone-mockup image blocks with two-line display headings, a 3-step "how it
  works" row, a 3-tier pricing row (all $06 in the demo), and a CTA band.
- **Structure (1:1, section order):**
  1. Navbar: logo + links Home, Features, Pricing, Blog, Contact +
     **Download** button (demo has Pages/Elements extras).
  2. Hero: "Promote your app with applab" + "Get more users to promote your
     app with this template" + **Get Start Now** button.
  3. Feature split ("Save your time to using applab"): two-line heading +
     phone mockup image.
  4. Feature split ("Manage team in One Place").
  5. Feature split ("All-powerful Pointing has no control" +
     "Establish a solid online presence").
  6. How it works: 3 numbered steps — **01 Sign Up for free**, **02 Make
     your profile**, **03 Enjoy the app** (number + title + blurb).
  7. Features band: "Features that give you real feel" + blurb + **Download
     Now**.
  8. Easy setup split: "Easy setup and management" + 3 check bullets +
     **Download Now**.
  9. Testimonials: "Review from our regular users" + quote + **- Robert
     Smile** (carousel of 3 slides in original).
  10. Pricing: "Unlock full Power" + 3 plans — **Basic $06, Team $06,
      Business $06** — features (One User, 1000 ui elements, Webmail
      Support, 100GB Cloud Storage; Team adds Unlimited Users Limit) +
      **Get Now**.
  11. CTA band: "Get start from now and increase productivity".
  12. Footer: blurb + **Services** (Team management, Collaboration, Todo,
      Events), **Useful Links** (Pricing, Features, Blog, Contact),
      **Downloads** (Apple Store, Play Store), social icons + copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **orange `#ff5e13`** (buttons, accents, highlights).
  - Font: **"Poppins", sans-serif** (Google Fonts via `<link>`).
  - Light section bgs `#f9f9ff`, `#f0e9ff`; dark text `#2C2C2C`.
  - Buttons: orange bg, white text, rounded.
- **Recreation name:** Cobalt (app/tech themed, distinct from "Applab" and
  all existing names). App folder `apps/cobalt`, package
  `@free-react-templates/cobalt`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/cobalt-<n>/<w>/<h>`); lucide-react icons (replaces
  fontawesome/themify); Poppins via Google Fonts; forms prevent default (no
  backend); orange primary in `@theme`; repo-standard Navbar (dark-mode
  toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-cobalt/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/cobalt` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/cobalt`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-cobalt`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
