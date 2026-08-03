# Appco (Colorlib Appco) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Scarlet PR awaits review.
> Implementation ships later on `feat/template-appco`.

## Design notes

- **Original:** ColorLib "Appco" — free app landing page template
  (source: https://colorlib.com/wp/template/appco/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/appco/`
  (HTTP 200) + stylesheet `assets/css/style.css` (HTTP 200).
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
  8. FAQ — "Frequently Asked Questions": 6 questions.
  9. Download CTA — "Our App Available For Any Device Download now".
  10. Integrations — "Integrates With Your Favorite Tools" logo grid.
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
- **Design approach:** purple brand tokens in `@theme`
  (`--color-brand: #8f1bdc`, accent `#f9218d`); seeded picsum placeholders
  `https://picsum.photos/seed/appco-<n>/<w>/<h>`; lucide-react icons (Sliders
  for customize, ShieldCheck for security, Headset for support, Palette for
  design); FAQ accordion as stateful component; repo-standard Navbar
  (dark-mode toggle) and Footer chrome; social icons (GitHub, X, LinkedIn)
  inline SVG.
- Reuse `packages/ui` (Button, ButtonLink, Card, Badge, cn) — do NOT
  duplicate components.
- Base implementation on `apps/sage` (multi-section landing architecture with
  features/pricing/testimonials/FAQ/footer newsletter).

## Tasks

- [ ] Write `openspec/specs/template-appco/spec.md` (Gherkin requirements +
      scenarios + replication findings) — DONE on main (this prep).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/appco` (copy `apps/sage`; rename package to
      `@free-react-templates/appco`).
- [ ] TDD: tests first for Navbar, Hero, Features, Services, Video demo,
      Pricing, Testimonials, FAQ, Download CTA, Metrics, Footer, App
      composition; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list.
