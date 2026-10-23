# Template: Perkup (Agency / SaaS)

## Purpose

Recreation of ColorLib **Unbrew** (`https://colorlib.com/wp/template/unbrew/`), preview URL: `https://preview.colorlib.com/theme/unbrew/`. Built as a Vite + React 19 + Tailwind CSS 4 SPA in `apps/perkup`.

## Design tokens

- **Primary Brand Color**: `#0d6efd` (Bootstrap Blue), hover `#0b5ed7`
- **Secondary / Accent**: Dark slate / neutral `#212529` for dark elements, `#f8f9fa` for light backgrounds (`bg-light`)
- **Font Family**: "Roboto", sans-serif
- **Border Radii**: Soft rounded corners (`rounded-lg`, `rounded-2xl`, pill buttons `rounded-full`)
- **Spacing / Rhythm**: Generous vertical padding (`py-16 md:py-24`) per section

## Section structure (1:1 with Unbrew)

1. **Navbar**: Fixed top navigation with brand logo ("Perkup"), links (Home, Services, About, Team, Work, Pricing, Blog, Contact), and CTA button.
2. **Hero**: Hero wrap with headline ("Boost Personal Productivity"), subtext, call-to-action buttons, and preview illustration/image.
3. **Services**: Grid of service cards ("Marketing", "SEO", "UI/UX Design", "Creative", "Optimization", "Business Strategy") with icons and descriptions.
4. **Counter**: Statistics / metrics banner with counters (Happy Customers, Active Projects, Success Rate, Support).
5. **About**: Company overview ("Unbrew A Digital Agency Company" -> "Perkup Digital Agency"), image collage, and key feature list ("Easy Management", "Protect Your Profile", "Private Community", "24/7 Help Support").
6. **Team**: Expert team member cards with photos, names, roles, and social links.
7. **Testimonials**: Customer feedback carousel/grid ("Happy Customers").
8. **Work**: Portfolio / projects showcase with imagery and category tags.
9. **Pricing**: Pricing plans ("Choose Your Pricing Plan") with feature lists and subscribe buttons.
10. **Blog**: Recent articles / insights ("Recent Blog").
11. **Newsletter**: Call-to-action subscription banner ("Newsletter - Stay tune and get the latest update").
12. **Footer**: Multi-column footer with about blurb, navigation links, recent posts, contact info, and mandatory Component Dock attribution linking `https://www.componentdock.com/`.

## Requirements

### Feature: Navbar Navigation

#### Scenario: Navbar Navigation

- Scenario: User clicks navigation links to jump to sections
- **GIVEN** the user is on the Perkup landing page
- **WHEN** they click "Services" in the navbar
- **THEN** the viewport smoothly scrolls to the Services section

### Feature: Hero Call to Action

#### Scenario: Hero Call to Action

- Scenario: User views hero section and clicks CTA
- **GIVEN** the hero section is displayed with headline and action buttons
- **WHEN** the user clicks "Get Started"
- **THEN** an action or modal triggers appropriately

### Feature: Services Showcase

#### Scenario: Services Showcase

- Scenario: User views service offerings
- **GIVEN** the Services section is rendered
- **THEN** all 6 service cards are displayed with icons and descriptions

### Feature: Pricing Selection

#### Scenario: Pricing Selection

- Scenario: User reviews pricing tiers
- **GIVEN** the Pricing section is loaded
- **THEN** pricing tiers with features and CTA buttons are visible

### Feature: Component Dock Footer Attribution

#### Scenario: Component Dock Footer Attribution

- Scenario: Footer contains required branding
- **GIVEN** the page is scrolled to the bottom
- **THEN** the footer displays a link to `https://www.componentdock.com/` as "Component Dock"

## Verification checklist

- [ ] `npm run verify:app -- perkup` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] All 5 scenarios above are covered by colocated tests
      (query by role/label; test names mirror the scenario names):
      - Navbar Navigation
      - Hero Call to Action
      - Services Showcase
      - Pricing Selection
      - Component Dock Footer Attribution
- [ ] Sections render in the order listed in the requirements above,
      with no console errors on load.
- [ ] Responsive check at 375 / 768 / 1280px: no horizontal overflow,
      nav collapses to the mobile toggle, grids reflow.
- [ ] Design tokens from the reference are applied via the Tailwind
      theme (brand color, font, radii) — no hard-coded hex in sections.
- [ ] No ColorLib name, domain or URL in any app file or filename —
      provenance stays in this spec, TEMPLATES.md and the PR.
- [ ] Footer links https://www.componentdock.com/ ("Component Dock").
