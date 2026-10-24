# Flowly (Colorlib Appco) — Tasks & Design Notes

> **SHIPPED** — this prep's design shipped as `apps/flowly`
> (<https://flowly.free.componentdock.com>). The unchecked items below are
> prep history, not outstanding work.

> Prep artifacts prepared on `main` while the Scarlet PR awaits review.
> Implementation ships later on `feat/template-flowly`.

## Design notes

- **Original:** ColorLib "Appco" — free app landing page template
  (source: https://colorlib.com/wp/template/appco/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/appco/`
  (HTTP 200, fetched 2026-08-04, title "Appco - Powerful App for Better
  Productivity") + stylesheet `assets/css/style.css` (HTTP 200).
- **Structure observed (1:1, section order):**
  1. Header — nav (Home, Feature, Services, Pricing, Pages, Blog, Contact)
     - "Download".
  2. Hero — h1 "Get things done with Flowly", copy, "Download" buttons,
     phone imagery (slider).
  3. Features — "Some of the best features Of Our App!": Easy to Costomize,
     Extreme Security, Customer Support, Creative Design.
  4. Services (`sky-blue`) — "How Can We Help Your with Flowly!": Easily
     Manage, Get Payments Easily, Quick Messaging.
  5. Video demo — "See Flowly in Action" + "Applic Apps Screenshot" gallery.
  6. Pricing — "Choose Your Very Best Pricing Plan.": $9/$29/$99 per month
     - "Get Started".
  7. Testimonials — "What Our Customers Have to Say": Sarah Johnson, Michael
     Chen, Emily Rodriguez, David Kim.
  8. FAQ — "Frequently Asked Questions": 6 questions (accordion).
  9. Download CTA — "Our App Available For Any Device Download now".
  10. Integrations — "Integrates With Your Favorite Tools" logo grid (Slack,
      Trello, Dropbox, GitHub, Figma, Notion).
  11. Metrics — "Say Hello To The Collaboration Hub.": 50K+, 250K+, 4.9,
      120+.
  12. Footer — about, Quick Links / Support / Newsletter columns, bottom
      bar.
- **Design tokens:** brand purple **#8f1bdc** (primary), pink accent
  **#f9218d**; headings **#222222**/**#415094**, muted **#999999**/
  **#828bb2**, light sections **#f9f9ff**/**#f0e9ff**; fonts **Poppins** +
  **Nunito** via Google Fonts; filled rounded purple buttons.
- **Recreation name:** Flowly (new original name — "flow" + the repo's "-ly"
  suffix, evoking the productivity-app design; the ColorLib source name is
  never reused). App folder `apps/flowly`, package
  `@free-react-templates/flowly`. Renamed from the earlier `appco` folder,
  which reused the source name (rule 5).
- **Design approach:** purple primary scale in `@theme`
  (`--color-primary-600: #8f1bdc` — drives shared ui Button/ButtonLink),
  accent `#f9218d`; seeded picsum placeholders
  `https://picsum.photos/seed/flowly-<n>/<w>/<h>`; lucide-react icons (Sliders,
  ShieldCheck, Headset, Palette, Workflow, CreditCard, MessageSquare, Quote,
  Star, ChevronDown); FAQ accordion as stateful component (native `hidden`
  attribute for visibility); repo-standard Navbar (dark-mode toggle) and
  Footer chrome with newsletter form; social icons (GitHub, X, LinkedIn)
  inline SVG.
- Reuse `packages/ui` (Button, ButtonLink, Card, Badge, cn) — do NOT
  duplicate components.
- Base implementation on `apps/pawpal` (most recent full multi-section
  landing architecture — `apps/sage` referenced in early prep never existed
  in git history) — the demo is Tailwind-native, so the recreation maps 1:1
  onto the monorepo stack.

## Tasks

- [x] Write `openspec/specs/template-flowly/spec.md` (Gherkin requirements +
      scenarios + replication findings) — DONE on main (this prep); refined
      on `feat/template-flowly` with fetched preview DOM/CSS findings
      (2026-08-04).
- [x] Validate spec: `npm run spec:validate` (221 specs pass).
- [x] Create `apps/flowly` (copy `apps/pawpal`; rename package to
      `@free-react-templates/flowly`).
- [x] TDD: tests first for Navbar, Hero, Features, Services, Video demo,
      Pricing, Testimonials, FAQ, Download CTA, Integrations, Metrics,
      Footer, App composition; 17 tests, all green.
- [x] Implement components (green) at 100% coverage.
- [x] Full gate: typecheck → lint → test:coverage (100/100/100/100) →
      build → knip → fallow → spec:validate — all pass.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list (bookkeeping
      on main, per Horse Club precedent shared docs are not touched on the
      feature branch).

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/flowly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/flowly/public/CNAME` = `flowly.free.componentdock.com`
  and the package `homepage` = `https://flowly.free.componentdock.com`.
