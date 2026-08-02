# Appy (Colorlib Appy) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Vista PR (#4) awaits review.
> Implementation ships later on `feat/template-appy`.

## Design notes (replication findings)

- **Original:** ColorLib "Appy" — modern mobile app landing page for iOS &
  Android (source: https://colorlib.com/wp/template/appy/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/appy/
  (HTTP 200, full rendered DOM + `style.css` (33KB) extracted).
- **Visual design (from DOM + CSS tokens):** modern mobile-app landing with
  a **blue** brand (`#5e88fc`), Open Sans font, light (`#f5f6ff`) sections,
  a phone-mockup hero, progress bars, 6 feature tiles, testimonials, a
  screenshot strip, 3 pricing plans, FAQ, and a subscribe band.
- **Structure (1:1, section order):**
  1. Navbar: logo "Appy" + links Home, About, Features, Gallery, Pricing,
     FAQ, Blog, Contacts + **Sign Up**.
  2. Hero: h1 "Start your amazing stuff through appy." + blurb +
     **Download App**.
  3. About (`progress-area gray-bg`): "About Appy" + blurb + **Our
     Progress** bars.
  4. Split (`video-area section-padding`): "Great Application Ever" +
     blurb + **Learn More**.
  5. Features (`feature-area section-padding-top`): "Powerful Features As
     Always" + 6 tiles — **Fast & Powerful, Easily Editable, Cloud
     Storage, Easy Notifications, Fully Responsive, Editable Layout**.
  6. Testimonials (`testimonial-area`): "Our Clients Love Us" + quote +
     **Ashekur Rahman — Art Dirrector** (carousel in original).
  7. Gallery (`gallery-area`): "Screenshot 01" + image row + **Learn
     More**.
  8. Our Features (`section-padding`): "Our Approach to Design is Pretty
     Simple and Clear" + Easy Notifications, Fully Responsive, Editable
     Layout.
  9. Download (`download-area overlay`): "Download The App" + blurb +
     **Apple Store / Play Store**.
  10. Pricing (`price-area`): "Our Awesome Pricing Plan" + **Free $0 /
      Medium $49 / Business $99** — each: 3 features (Easy Installations,
      Unlimited support, Unique Elements / Free Forever) + **Purchase**.
  11. FAQ (`questions-area`): "Frequently Asked Questions" + 3 Q&As (Faq
      first question goes here? / About frequent question goes here? / Why
      more question goes here?).
  12. Subscribe (`subscribe-area`): email input + subscribe button.
  13. Footer: About / Solutions / Why Appy / Resources / Company columns +
      social + copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **blue `#5e88fc`** (buttons, accents); supporting `#4a7aff`,
    `#768ede`, `#8790af`.
  - Light bgs `#f5f6ff`, `#f2f3fc`; dark text `#434345`.
  - Font: **"Open Sans"** (Google Fonts `<link>`); Linearicons icons
    (replaced by lucide-react).
  - Blue rounded buttons with white text.
- **Recreation name:** Appy (kept — matches ColorLib name, distinct from
  existing names). App folder `apps/appy`, package
  `@free-react-templates/appy`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/appy-<n>/<w>/<h>`); lucide-react icons; Open Sans
  via Google Fonts; video section as styled play button; blue primary in
  `@theme`; repo-standard Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-appy/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/appy` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/appy`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-appy`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
