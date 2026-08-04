# Appco (Colorlib Appco) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Scarlet PR awaits review.
> Implementation ships later on `feat/template-appco`.

## Design notes

- **Original:** ColorLib "Appco" — free app landing page template
  (source: https://colorlib.com/wp/template/appco/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/appco/`
  (HTTP 200, fetched 2026-08-04, title "Appco - Powerful App for Better
  Productivity") + stylesheet `assets/css/style.css` (HTTP 200).
- **Structure observed (1:1, section order):**
  1. Header — nav (Home, Feature, Services, Pricing, Pages, Blog, Contact)
     - "Download".
  2. Hero — h1 "Get things done with Appco", copy, "Download" buttons,
     phone imagery (slider).
  3. Features — "Some of the best features Of Our App!": Easy to Costomize,
     Extreme Security, Customer Support, Creative Design.
  4. Services (`sky-blue`) — "How Can We Help Your with Appco!": Easily
     Manage, Get Payments Easily, Quick Messaging.
  5. Video demo — "See Appco in Action" + "Applic Apps Screenshot" gallery.
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
- **Recreation name:** Appco (keeps the original name — it is already a
  distinct working name, not a ColorLib brand). App folder `apps/appco`,
  package `@free-react-templates/appco`.
- **Design approach:** purple primary scale in `@theme`
  (`--color-primary-600: #8f1bdc` — drives shared ui Button/ButtonLink),
  accent `#f9218d`; seeded picsum placeholders
  `https://picsum.photos/seed/appco-<n>/<w>/<h>`; lucide-react icons (Sliders,
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

- [x] Write `openspec/specs/template-appco/spec.md` (Gherkin requirements +
      scenarios + replication findings) — DONE on main (this prep); refined
      on `feat/template-appco` with fetched preview DOM/CSS findings
      (2026-08-04).
- [x] Validate spec: `npm run spec:validate` (221 specs pass).
- [x] Create `apps/appco` (copy `apps/pawpal`; rename package to
      `@free-react-templates/appco`).
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
