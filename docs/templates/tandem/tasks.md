# Tandem — Tasks & Design Notes (recreation of ColorLib "Appy")

> **SHIPPED** — this prep's design shipped as `apps/tandem`
> (<https://tandem.free.componentdock.com>). The unchecked items below are
> prep history, not outstanding work.

> Shipped as `apps/tandem` (<https://tandem.free.componentdock.com>). The
> checklist below is prep/implementation history, not outstanding work.

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
  1. Navbar: logo "Tandem" + links Home, About, Features, Gallery, Pricing,
     FAQ, Blog, Contacts + **Sign Up**.
  2. Hero: h1 "Start your amazing stuff through tandem." + blurb +
     **Download App**.
  3. About (`progress-area gray-bg`): "About Tandem" + blurb + **Our
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
  13. Footer: About / Solutions / Why Tandem / Resources / Company columns +
      social + copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **blue `#5e88fc`** (buttons, accents); supporting `#4a7aff`,
    `#768ede`, `#8790af`.
  - Light bgs `#f5f6ff`, `#f2f3fc`; dark text `#434345`.
  - Font: **"Open Sans"** (Google Fonts `<link>`); Linearicons icons
    (replaced by lucide-react).
  - Blue rounded buttons with white text.
- **Recreation name:** Tandem — renamed away from the source design's name
  (AGENTS.md rule 5), so the folder, package and host no longer reuse it. App
  folder `apps/tandem`, package `@free-react-templates/tandem`, host
  `https://tandem.free.componentdock.com`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/tandem-<n>/<w>/<h>`); lucide-react icons; Open Sans
  via Google Fonts; video section as styled play button; blue primary in
  `@theme`; repo-standard Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-tandem/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [x] Create `apps/tandem` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/tandem`).
- [x] TDD: tests first for each section component; run red.
- [x] Implement components (green) at 100% coverage.
- [x] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [x] Push `feat/template-tandem`, open PR (source template, preview URL,
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
- **Provenance ban.** No file under `apps/tandem/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/tandem/public/CNAME` = `tandem.free.componentdock.com`
  and the package `homepage` = `https://tandem.free.componentdock.com`.
