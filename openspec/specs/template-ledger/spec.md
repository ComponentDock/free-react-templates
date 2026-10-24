# Template: Ledger (Financial & Accounting Services)

## Purpose

Recreation of ColorLib [Accounting](https://colorlib.com/wp/template/accounting/) (`https://preview.colorlib.com/theme/accounting/`), built as a high-conversion modern React single-page application using Vite, React 19, Tailwind CSS 4, and TypeScript. Designed for accounting, financial advisory, and professional consulting firms with hero carousel, services overview, core features grid, counters, blog/news section, pricing packages, consultation form, and contact footer.

- **Source design:** ColorLib "Accounting" — https://colorlib.com/wp/template/accounting/

## Design Tokens

- **Brand Primary:** Professional Emerald/Green (`#1BA12D`), Hover (`#148122`)
- **Heading Color:** Dark Slate / Charcoal (`#212529`)
- **Body Text Color:** Muted Gray (`#6C757D` / `#5E5E5E`)
- **Background Tones:** Soft Light Gray (`#F8F9FA`), Pure White (`#FFFFFF`)
- **Fonts:** Heading & Body: `"Montserrat"`, sans-serif
- **Button Radius:** Rounded / Pill (`4px` to `35px`)
- **Section Spacing:** Generous padding (`py-24`)

## Sections & Structure (1:1 with ColorLib Accounting)

1. **Top Bar & Navbar:** Top bar with contact phone and email, social media links. Sticky navbar with brand logo ("Ledger"), navigation links (Home, About, Services, Case Study, Blog, Contact), search form, and mobile menu toggle.
2. **Hero Carousel:** Slider with professional background imagery, dark overlay, bold headings ("We Help You Businesses Innovate and Grow", "Expert Financial Advice"), and CTA buttons ("Connect with us").
3. **About / Key Services Section:** Welcome subheading ("Welcome to Accounting"), video/image showcase on the left, and 4 key services on the right with custom icons (Market Analysis, Accounting Advisor, General Consultancy, Structured Assessment).
4. **Services Grid:** 4-column feature grid covering Accounting, Tax & Compliance, Financial Services, and Growth & Funding Access.
5. **Counter Statistics Section:** 4 key metrics displayed with large numbers (50 Years Experience, 8500 Cases Completed, 20 Awards Won, 50 Expert Consultants).
6. **Testimonials / Happy Clients:** Carousel / cards of client feedback and reviews.
7. **FAQs Section:** Accordion with frequently asked questions.
8. **Blog / News Section:** 3-column blog cards with dates, author, comment count, and headings.
9. **Newsletter / Consultation CTA Banner:** Full-width secondary background banner with consultation prompt and email subscribe form.
10. **Pricing / Packages Section:** 4 pricing tiers (Personal, Business, Ultimate, Premium) with feature checklists and "Get Started" buttons.
11. **Footer:** Multi-column footer with About us, Services, Discover, Resources links, social icons, consultation form on the right, and copyright linking `https://www.componentdock.com/` ("Component Dock").

## Requirements

### Feature: Top Bar & Navbar

Top bar with contact phone and email, social media links. Sticky navbar with brand logo ("Ledger"), navigation links (Home, About, Services, Case Study, Blog, Contact), search form, and mobile menu toggle.

#### Scenario: Top Bar & Navbar renders as documented

- **GIVEN** the recreation is rendered on a desktop viewport
- **THEN** the Top Bar & Navbar band SHALL be present at its documented position with the structure, copy and tokens named above

### Feature: Hero Carousel

Slider with professional background imagery, dark overlay, bold headings ("We Help You Businesses Innovate and Grow", "Expert Financial Advice"), and CTA buttons ("Connect with us").

#### Scenario: Hero Carousel renders as documented

- **GIVEN** the recreation is rendered on a desktop viewport
- **THEN** the Hero Carousel band SHALL be present at its documented position with the structure, copy and tokens named above

### Feature: About / Key Services Section

Welcome subheading ("Welcome to Accounting"), video/image showcase on the left, and 4 key services on the right with custom icons (Market Analysis, Accounting Advisor, General Consultancy, Structured Assessment).

#### Scenario: About / Key Services Section renders as documented

- **GIVEN** the recreation is rendered on a desktop viewport
- **THEN** the About / Key Services Section band SHALL be present at its documented position with the structure, copy and tokens named above

### Feature: Services Grid

4-column feature grid covering Accounting, Tax & Compliance, Financial Services, and Growth & Funding Access.

#### Scenario: Services Grid renders as documented

- **GIVEN** the recreation is rendered on a desktop viewport
- **THEN** the Services Grid band SHALL be present at its documented position with the structure, copy and tokens named above

### Feature: Counter Statistics Section

4 key metrics displayed with large numbers (50 Years Experience, 8500 Cases Completed, 20 Awards Won, 50 Expert Consultants).

#### Scenario: Counter Statistics Section renders as documented

- **GIVEN** the recreation is rendered on a desktop viewport
- **THEN** the Counter Statistics Section band SHALL be present at its documented position with the structure, copy and tokens named above

### Feature: Testimonials / Happy Clients

Carousel / cards of client feedback and reviews.

#### Scenario: Testimonials / Happy Clients renders as documented

- **GIVEN** the recreation is rendered on a desktop viewport
- **THEN** the Testimonials / Happy Clients band SHALL be present at its documented position with the structure, copy and tokens named above

### Feature: FAQs Section

Accordion with frequently asked questions.

#### Scenario: FAQs Section renders as documented

- **GIVEN** the recreation is rendered on a desktop viewport
- **THEN** the FAQs Section band SHALL be present at its documented position with the structure, copy and tokens named above

### Feature: Blog / News Section

3-column blog cards with dates, author, comment count, and headings.

#### Scenario: Blog / News Section renders as documented

- **GIVEN** the recreation is rendered on a desktop viewport
- **THEN** the Blog / News Section band SHALL be present at its documented position with the structure, copy and tokens named above

### Feature: Newsletter / Consultation CTA Banner

Full-width secondary background banner with consultation prompt and email subscribe form.

#### Scenario: Newsletter / Consultation CTA Banner renders as documented

- **GIVEN** the recreation is rendered on a desktop viewport
- **THEN** the Newsletter / Consultation CTA Banner band SHALL be present at its documented position with the structure, copy and tokens named above

### Feature: Pricing / Packages Section

4 pricing tiers (Personal, Business, Ultimate, Premium) with feature checklists and "Get Started" buttons.

#### Scenario: Pricing / Packages Section renders as documented

- **GIVEN** the recreation is rendered on a desktop viewport
- **THEN** the Pricing / Packages Section band SHALL be present at its documented position with the structure, copy and tokens named above

### Feature: Footer

Multi-column footer with About us, Services, Discover, Resources links, social icons, consultation form on the right, and copyright linking `https://www.componentdock.com/` ("Component Dock").

#### Scenario: Footer renders as documented

- **GIVEN** the recreation is rendered on a desktop viewport
- **THEN** the Footer band SHALL be present at its documented position with the structure, copy and tokens named above

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/ledger/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/ledger/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Top Bar & Navbar — the Top Bar & Navbar band SHALL be present at its documented position with the structure, copy and tokens named above
- [ ] Hero Carousel — the Hero Carousel band SHALL be present at its documented position with the structure, copy and tokens named above
- [ ] About / Key Services Section — the About / Key Services Section band SHALL be present at its documented position with the structure, copy and tokens named above
- [ ] Services Grid — the Services Grid band SHALL be present at its documented position with the structure, copy and tokens named above
- [ ] Counter Statistics Section — the Counter Statistics Section band SHALL be present at its documented position with the structure, copy and tokens named above
- [ ] Testimonials / Happy Clients — the Testimonials / Happy Clients band SHALL be present at its documented position with the structure, copy and tokens named above
- [ ] FAQs Section — the FAQs Section band SHALL be present at its documented position with the structure, copy and tokens named above
- [ ] Blog / News Section — the Blog / News Section band SHALL be present at its documented position with the structure, copy and tokens named above
- [ ] Newsletter / Consultation CTA Banner — the Newsletter / Consultation CTA Banner band SHALL be present at its documented position with the structure, copy and tokens named above
- [ ] Pricing / Packages Section — the Pricing / Packages Section band SHALL be present at its documented position with the structure, copy and tokens named above
