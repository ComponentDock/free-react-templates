# Loanworks (ColorLib Finloans) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-loanworks`. Recreation name: **Loanworks** (NEW name —
> the ColorLib source keeps its name "Finloans").

## Source mapping

- **ColorLib item:** "Finloans" (TEMPLATES.md line 1756; section "## Finance (30)").
- **Source URL:** https://colorlib.com/wp/template/finloans/
- **Preview URL:** https://preview.colorlib.com/theme/finloans/ (verified reachable)
- **Preview CSS:** `css/style.css` (main styles), `css/bootstrap.min.css` (grid/utilities)
- **Fonts:** Google Fonts — Roboto (weights 100–900, but 300/400/500/700 are primary)

## Reference research (done — do not redo)

### Screenshot analysis

Professional finance/payday-loan template. Teal (`#33D4D6`) brand color on white background.
Hero has a full-width background image with a loan calculator form card on the right.
Service cards use a blue gradient (`#0a8cff` → `#054680`). Section headings have a small
teal accent bar above them. Light blue (`#F5FBFF`) background on "How It Works" section.
FAQ section has a split layout with decorative background. Dark footer with newsletter.

### Key design tokens

- **Brand color:** `#33D4D6` (teal/cyan)
- **Font:** Roboto
- **Button radius:** 5px
- **Service card gradient:** `#0a8cff` → `#054680`
- **Dark navy headings:** `#001D38` / `#040E27`
- **Body text:** `#7A838B`
- **Works section bg:** `#F5FBFF`

## Implementation tasks

### 1. Scaffold app

- [ ] Copy simplest existing app as base (e.g., `apps/abjure` or similar)
- [ ] Rename package to `@free-react-templates/loanworks`
- [ ] Update `vite.config.ts` with `injectUiSource()`
- [ ] Set `public/CNAME` to `loanworks.free.componentdock.com`
- [ ] Set `homepage` in `package.json`
- [ ] Run `npm install` at repo root to register workspace in lockfile
- [ ] Add Roboto font via `<link>` in `index.html`

### 2. Design tokens in index.css

- [ ] Define `@theme` block with brand color `#33D4D6`
- [ ] Define dark navy `#001D38`
- [ ] Define body text `#7A838B`
- [ ] Define works section bg `#F5FBFF`
- [ ] Define overlay color `#040E27`

### 3. Components (section-by-section)

- [ ] **Navbar** — Sticky header: logo "Loanworks", nav links (Home, Loan, About, Blog, FAQ, Contact), phone number, "Apply for a Loan" outline button. Responsive hamburger menu.
- [ ] **Hero** — Full-width with dark overlay background, headline, CTA button. Right side: white card with loan calculator (Amount dropdown, Month dropdown, payment display, Continue button).
- [ ] **Services** — "What we offer for you" heading with teal accent bar. 3 service cards with blue gradient bg, icon, title, price, detail list, "Apply Now" button.
- [ ] **About** — "Why Choose Us?" heading, split layout: image left, text + 4 bullet points + "About Us" button right.
- [ ] **HowItWorks** — Light blue bg, "How It Works" heading, 3 numbered steps (circular badge, title, description).
- [ ] **FAQ** — Split layout: left side decorative image with dark overlay, right side "Frequently ask" heading + 4 accordion items.
- [ ] **Testimonials** — Carousel with author image, quote text, author name. Navigation arrows.
- [ ] **BrandLogos** — Carousel of 5 partner logos (placeholder images).
- [ ] **CtaBanner** — Full-width dark overlay, heading, "Apply Now" button.
- [ ] **Footer** — Dark bg, 4 columns: logo + contact + social, Services links, Useful Links, Subscribe newsletter form. Bottom: copyright + Component Dock link.

### 4. Testing (TDD)

- [ ] Write tests for each component before/alongside implementation
- [ ] Ensure 100% coverage (lines, functions, branches, statements)
- [ ] Test navbar sticky behavior and mobile menu toggle
- [ ] Test FAQ accordion expand/collapse
- [ ] Test carousel navigation
- [ ] Test form interactions in hero calculator

### 5. Verification

- [ ] Run `scripts/verify-app.sh loanworks` — typecheck + lint + tests + build
- [ ] Visual check: compare with screenshot at https://colorlib.com/wp/wp-content/uploads/sites/2/finloans-free-template.jpg
- [ ] Responsive check: mobile, tablet, desktop
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com

### 6. Ship

- [ ] Commit as `feat: Loanworks — payday loan template (ColorLib Finloans)`
- [ ] Open PR, merge immediately (squash)
- [ ] Update TEMPLATES.md: mark Finloans as `[x]` with surge URL
- [ ] Run `npm run readme:status`
