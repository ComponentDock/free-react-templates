# Template: Credova (Finance / Loan)
<!-- prep-status: shipped-as=loanforge -->
> **SHIPPED-UNDER** — the ColorLib `loan` design this prep describes already
> ships as `apps/loanforge` (<https://loanforge.free.componentdock.com>).
> Do not scaffold `apps/credova`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-loanforge/spec.md`.

## Purpose

Recreation of ColorLib "Loan" template.

- **Source:** https://colorlib.com/wp/template/loan/
- **Preview:** https://preview.colorlib.com/theme/loan/
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Category:** Finance / Loan / Business Lending

## Design tokens

| Token | Value | Notes |
|---|---|---|
| Brand color | `#3589f1` | Primary blue — CTAs, hover states, accents |
| Dark navy | `#021a47` | Testimonial section background |
| Text dark | `#000a2d` | Primary text color, default button bg |
| Hero button bg | `#0b1416` | Dark hero CTA buttons |
| Orange accent | `#ff872d` | Secondary accent (suggested) |
| Light bg | `#e0e4f8` | Application area background |
| White | `#fff` | Main content background |
| Gray text | `#7a8290` | Secondary/body text |
| Font headings | `"Rufina", serif` | Section headings, logo |
| Font body | `"Rubik", sans-serif` | Body text, buttons, nav |
| Button radius | `5px` | Rounded buttons |
| Button bg | `#000a2d` | Default button background |
| Button hover | `#3589f1` | Button hover state |

## Section order (from live preview DOM)

1. **Header** — transparent sticky nav, logo left, nav links right (Home, About, Services, Blog, Element, Contact), "Apply Now" CTA button
2. **Hero Slider** — two slides, each with heading "Small Business Loans For Daily Expenses", subtext "Achieve your financial goal", CTA "Apply for Loan", hero image right
3. **About** — two-column: image left, heading "Building a Brighter Financial Future & Good Support", body text, "Apply for Loan" CTA
4. **Services** — heading "High Performance Services For All Industries", 4 service cards (Business Loan, Commercial Loans, Construction Loans, Business Loan) with icon + title + description
5. **Support / Company** — dark section, heading "We Promise Sustainable Future For You", body text, two-column layout with image
6. **Application CTA** — light background (#e0e4f8), heading "Easy Application Process For Any Types of Loan", "Apply for Loan" button
7. **Team** — heading "Take a look to our professional team members", 4 team member cards (image + name + social links)
8. **Testimonials** — dark navy background (#021a47), carousel with testimonial text + author
9. **Blog** — heading "News from around the world selected by us", 2-3 blog cards (image + date + title + excerpt)
10. **Footer** — dark background, 3-column layout (Quick Link, New Products, Support), copyright, social icons

## Requirements

### Feature: Credova template behaviour

#### Scenario: Header navigation renders correctly

- **GIVEN** the user visits the Credova homepage
- **THEN** the header displays a logo on the left
- **AND** navigation links "Home", "About", "Services", "Blog", "Contact" are visible
- **AND** an "Apply Now" button is visible in the header
- **AND** the header becomes sticky on scroll

#### Scenario: Hero slider displays loan content

- **GIVEN** the user views the hero section
- **THEN** a heading "Small Business Loans For Daily Expenses" is displayed
- **AND** a subtext "Achieve your financial goal" is shown
- **AND** an "Apply for Loan" CTA button is visible
- **AND** a hero image is shown on the right side
- **AND** the slider supports auto-rotation between slides

#### Scenario: About section shows company info

- **GIVEN** the user scrolls to the About section
- **THEN** a heading "Building a Brighter Financial Future & Good Support" is displayed
- **AND** a descriptive paragraph is shown
- **AND** an "Apply for Loan" CTA button is visible
- **AND** an about image is displayed on the left

#### Scenario: Services section displays loan types

- **GIVEN** the user scrolls to the Services section
- **THEN** a heading "High Performance Services For All Industries" is displayed
- **AND** 4 service cards are visible
- **AND** each card has a service icon, title, and description
- **AND** the service types include "Business Loan", "Commercial Loans", "Construction Loans"

#### Scenario: Support section with company promise

- **GIVEN** the user scrolls to the Support section
- **THEN** a heading "We Promise Sustainable Future For You" is displayed
- **AND** a descriptive paragraph is shown
- **AND** the section has a distinct layout with supporting imagery

#### Scenario: Application CTA section

- **GIVEN** the user scrolls to the Application section
- **THEN** a heading "Easy Application Process For Any Types of Loan" is displayed
- **AND** an "Apply for Loan" button is prominent
- **AND** the section has a light background

#### Scenario: Team section shows members

- **GIVEN** the user scrolls to the Team section
- **THEN** a heading "Take a look to our professional team members" is displayed
- **AND** 4 team member cards are visible
- **AND** each card shows a photo, name, and social media links

#### Scenario: Testimonials carousel

- **GIVEN** the user scrolls to the Testimonials section
- **THEN** a dark navy background is displayed
- **AND** testimonial content with author attribution is shown
- **AND** the testimonials support carousel navigation

#### Scenario: Blog section shows recent posts

- **GIVEN** the user scrolls to the Blog section
- **THEN** a heading "News from around the world selected by us" is displayed
- **AND** 2-3 blog post cards are visible
- **AND** each card shows an image, date, title, and excerpt

#### Scenario: Footer with links and copyright

- **GIVEN** the user scrolls to the Footer
- **THEN** 3 columns of links are displayed (Quick Link, New Products, Support)
- **AND** social media icons are visible
- **AND** a copyright line is shown
- **AND** a "Component Dock" link is present in the footer

## Verification checklist

- [ ] Header: transparent → sticky on scroll, logo, nav links, "Apply Now" CTA
- [ ] Hero slider: heading, subtext, CTA, hero image, auto-rotation
- [ ] About: two-column, heading, body, CTA, image
- [ ] Services: 4 cards with icons, titles, descriptions
- [ ] Support: dark section, heading, body, imagery
- [ ] Application CTA: light bg, heading, prominent button
- [ ] Team: 4 member cards with photos, names, social links
- [ ] Testimonials: dark bg, carousel, content + author
- [ ] Blog: 2-3 cards with image, date, title, excerpt
- [ ] Footer: 3-column links, social icons, copyright, Component Dock link
- [ ] Design tokens: brand blue #3589f1, Rufina + Rubik fonts, 5px radius
- [ ] Responsive: mobile hamburger menu, stacked columns on small screens
- [ ] No ColorLib references in app code (provenance only in spec)
