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

## Gherkin Requirements & Scenarios

### Feature: Navbar Navigation

- Scenario: User clicks navigation links to jump to sections
  - Given the user is on the Perkup landing page
  - When they click "Services" in the navbar
  - Then the viewport smoothly scrolls to the Services section

### Feature: Hero Call to Action

- Scenario: User views hero section and clicks CTA
  - Given the hero section is displayed with headline and action buttons
  - When the user clicks "Get Started"
  - Then an action or modal triggers appropriately

### Feature: Services Showcase

- Scenario: User views service offerings
  - Given the Services section is rendered
  - Then all 6 service cards are displayed with icons and descriptions

### Feature: Pricing Selection

- Scenario: User reviews pricing tiers
  - Given the Pricing section is loaded
  - Then pricing tiers with features and CTA buttons are visible

### Feature: Component Dock Footer Attribution

- Scenario: Footer contains required branding
  - Given the page is scrolled to the bottom
  - Then the footer displays a link to `https://www.componentdock.com/` as "Component Dock"
