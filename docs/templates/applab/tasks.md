# Applab (Colorlib Applab) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Scarlet PR awaits review.
> Implementation ships later on `feat/template-applab`.

## Design notes

- **Original:** ColorLib "Applab" — free app/SaaS landing page template
  (source: https://colorlib.com/wp/template/applab/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/applab/`
  (HTTP 200) + stylesheet `css/style.css` (HTTP 200).
- **Structure observed (1:1, section order):**
  1. Header — nav (home, Features, Pricing, blog, Contact) + "Download".
  2. Hero (slider) — "Promote your app with applab" / "Save your time to
     using applab", "Get Start Now" + "Download Now".
  3. Feature blocks — "Manage team in One Place", "All-powerful Pointing has
     no control", "Establish a solid online presence".
  4. How it works — Sign Up for free, Make your profile, Enjoy the app.
  5. Features — "Features that give you real feel" + "Easy setup and
     management".
  6. Testimonials — "Review from our regular users" (4 slides).
  7. Pricing — "Unlock full Power": Basic, Team, Business + "Get Now".
  8. CTA — "Get start from now and increase productivity".
  9. Footer — about, Services / Useful Links / Downloads columns.
- **Design tokens:** brand orange **#ff5e13** (primary), green **#37ef8d** +
  blue **#0181f5**/**#5DB2FF** accents; headings **#415094**, muted
  **#999999**, light sections **#f9f9ff**/**#f0e9ff**; fonts **Poppins** +
  Roboto via Google Fonts; filled rounded orange buttons.
- **Recreation name:** Applab (keeps the original name — it is already a
  distinct working name, not a ColorLib brand). App folder `apps/applab`,
  package `@free-react-templates/applab`.
- **Design approach:** orange brand tokens in `@theme`
  (`--color-brand: #ff5e13`, green/blue accents); seeded picsum placeholders
  `https://picsum.photos/seed/applab-<n>/<w>/<h>`; lucide-react icons
  (Users for team, CheckCircle for steps, Download for CTAs); how-it-works
  as numbered cards; repo-standard Navbar (dark-mode toggle) and Footer
  chrome; social icons (GitHub, X, LinkedIn) inline SVG.
- Reuse `packages/ui` (Button, ButtonLink, Card, Badge, cn) — do NOT
  duplicate components.
- Base implementation on `apps/sage` (multi-section landing architecture with
  features/pricing/testimonials/footer).

## Tasks

- [ ] Write `openspec/specs/template-applab/spec.md` (Gherkin requirements +
      scenarios + replication findings) — DONE on main (this prep).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/applab` (copy `apps/sage`; rename package to
      `@free-react-templates/applab`).
- [ ] TDD: tests first for Navbar, Hero, Feature blocks, How-it-works,
      Features strip, Testimonials, Pricing, CTA, Footer, App composition;
      run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list.
