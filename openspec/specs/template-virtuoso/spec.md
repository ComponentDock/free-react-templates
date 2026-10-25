# Template: Virtuoso (Virtual Assistant / Digital Services)
<!-- prep-status: shipped-as=valet -->
> **SHIPPED-UNDER** — the ColorLib `virtualassistant` design this prep describes already
> ships as `apps/valet` (<https://valet.free.componentdock.com>).
> Do not scaffold `apps/virtuoso`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-valet/spec.md`.

## Purpose

Recreation of ColorLib's **Virtualassistant** template as a modern React 19 + Vite + Tailwind 4 + TypeScript single-page app.

- **Source**: https://colorlib.com/wp/template/virtualassistant/
- **Preview**: https://preview.colorlib.com/theme/virtualassistant/
- **Stack**: React 19, Vite (latest), Tailwind CSS 4, TypeScript (strict)
- **App folder**: `apps/virtuoso`
- **Package**: `@free-react-templates/virtuoso`
- **Deploy target**: `virtuoso.free.componentdock.com`
- **Design category**: Virtual Assistant / Digital Services landing page
- **Source design:** ColorLib "Virtualassistant" — https://colorlib.com/wp/template/virtualassistant/

## Design tokens

Extracted from the ColorLib preview stylesheet (`css/style.css`):

| Token | Value | Usage |
|-------|-------|-------|
| Brand accent | `#21bf73` (green) | Subheading labels, decorative lines, pricing numbers |
| Primary/CTA | `#007bff` (blue) | `.btn-primary` buttons |
| Font family | Roboto (300, 400, 500, 700) | Body and headings |
| Button radius | `0.25rem` | Small rounded buttons |
| Footer background | `#1a1a1a` (dark) | Footer section |
| Testimonial background | Dark overlay | `.testimony-section .overlay` |
| Light section BG | `#f8f9fa` | How It Works + Pricing sections (`bg-light`) |
| Heading text | `#212529` | Primary heading color |
| Body text | `#495057` | Paragraph and body text |
| Card shadow | `0px 24px 48px -13px rgba(0,0,0,0.05)` | `.services-2` cards |
| Pricing card radius | `4px` | `.block-7` pricing cards |


<!-- heading-role-tokens: virtualassistant/ink/template-virtuoso -->
**Heading-ink role (measured 2026-10-25):** the `heading text` row states `#212529`, but the page declares it only for non-heading elements (body; .btn; .btn:hover) — no heading rule carries it. The rendered headings paint rgba(0, 0, 0, 0.8) x13, rgb(0, 0, 0) x9, rgb(255, 255, 255) x7.
<!-- /heading-role-tokens -->

**Visual notes from screenshot**: Clean, professional layout with a hero area featuring a large background image and dark overlay. Green accent lines flank the section subheading labels. Dark footer and testimonial sections contrast with light card-based content sections. The "How It Works" section uses a stepped numbered layout with hover-reveal descriptions.

<!-- role-rule-tokens: virtualassistant/body -->
**Role rule (measured 2026-10-25):** 1 rule(s) own body; strongest `body{color:#212529}` — the design declares `#212529`; this prep states `#495057`, which no rule that owns the body text colour declares. The sibling prep `valet` states the measured value.
<!-- /role-rule-tokens -->

## Requirements

### Feature: Navbar

#### Scenario: Navbar renders with brand and navigation links

- **GIVEN** the app is loaded
- **THEN** a navbar is visible at the top
- **AND** the brand text reads "Virtuoso"
- **AND** navigation links include "Home", "About", "Services", "How It Works", "Pricing", and "Contact"

#### Scenario: Navbar is responsive with hamburger menu

- **GIVEN** the viewport width is less than 768px
- **THEN** the hamburger toggle button is visible
- **AND** clicking it reveals the navigation links

### Feature: Hero section

#### Scenario: Hero displays headline and CTA

- **GIVEN** the app is loaded
- **THEN** the hero section is visible with a background image
- **AND** a dark overlay covers the background
- **AND** a headline reads "Save Your Precious Time & Outsource Daily Tasks"
- **AND** a CTA button reads "Request Our Assistant"

#### Scenario: Hero CTA button is clickable

- **GIVEN** the hero section is displayed
- **WHEN** the user clicks the CTA button
- **THEN** the page scrolls or navigates appropriately

### Feature: Why Choose Us section

#### Scenario: Why Choose Us section displays with image and feature list

- **GIVEN** the app is loaded
- **THEN** the "Why Choose Us" section is visible
- **AND** a subheading label "Why Choose Us" is shown in green accent
- **AND** a heading reads "Top Reason Why We Need to Get Virtual Assistant"
- **AND** an image is displayed on the left side
- **AND** four feature items are listed on the right side

#### Scenario: Feature items have icon, title, and description

- **GIVEN** the Why Choose Us section is displayed
- **THEN** each feature item shows an icon, a title, and a short description
- **AND** the four features are: "Get decided business results", "Save time with qualified assistants", "Work & Life Balance", "Quick formulate your all plans"

### Feature: Services section

#### Scenario: Services grid displays 8 service cards

- **GIVEN** the app is loaded
- **THEN** the "Our Services & Offers" section is visible
- **AND** a subheading reads "Virtual Assistant Services"
- **AND** 8 service cards are displayed in a 4-column grid

#### Scenario: Each service card has icon, title, and description

- **GIVEN** the services section is displayed
- **THEN** each card shows a centered icon, a title, and a description
- **AND** the services are: "Family Task", "Online Research", "Management Task", "Project Management", "Writing Editing", "Multilingual Services", "Customer Service", "Executive Admin"

### Feature: About / Comparison section

#### Scenario: About section displays with image and progress circles

- **GIVEN** the app is loaded
- **THEN** a section displays "Get Your Own Highly Skilled Virtual Assistant"
- **AND** an image is shown on the left
- **AND** descriptive text is shown on the right
- **AND** two circular progress indicators are displayed below the text

#### Scenario: Progress circles show comparison data

- **GIVEN** the about/comparison section is displayed
- **THEN** one circle shows "30%" labeled "Regular Office Employee"
- **AND** another circle shows "75%" labeled "Virtual Assistant Employee"

### Feature: Testimonials section

#### Scenario: Testimonials carousel displays client reviews

- **GIVEN** the app is loaded
- **THEN** the testimonial section is visible with a dark background
- **AND** a subheading reads "Testimonial"
- **AND** a heading reads "Happy Clients"
- **AND** a carousel shows at least 3 testimonial cards

#### Scenario: Each testimonial card has quote, avatar, name, and role

- **GIVEN** the testimonial carousel is displayed
- **THEN** each card shows a quote icon, a testimonial paragraph, a user avatar image, a name, and a role/title

### Feature: How It Works section

#### Scenario: How It Works shows 3-step process

- **GIVEN** the app is loaded
- **THEN** the "How It Works" section is visible
- **AND** a subheading reads "Proceduce" [sic — keep as-is for fidelity]
- **AND** 3 step cards are displayed in a row
- **AND** each card has a number (01, 02, 03), a title, and a description

#### Scenario: Step cards reveal description on hover/active

- **GIVEN** the How It Works section is displayed
- **THEN** step 1 is "Handling The Task"
- **AND** step 2 is "Creating To-Do List" (active/highlighted)
- **AND** step 3 is "Schedule A Meeting"

### Feature: Pricing section

#### Scenario: Pricing displays 4 plan cards

- **GIVEN** the app is loaded
- **THEN** the "Affordable Packages" section is visible
- **AND** a subheading reads "Price & Plans"
- **AND** 4 pricing cards are displayed in a row

#### Scenario: Each pricing card shows price, plan name, features, and CTA

- **GIVEN** the pricing section is displayed
- **THEN** card 1 shows "$49/mo" with label "Small Plan"
- **AND** card 2 shows "$79/mo" with label "Startup Plan"
- **AND** card 3 shows "$109/mo" with label "Medium Plan"
- **AND** card 4 shows "$149/mo" with label "Commercial Plan"
- **AND** each card lists 2 features with checkmarks
- **AND** each card has a "Get Started" button

### Feature: Blog section

#### Scenario: Blog section displays recent posts

- **GIVEN** the app is loaded
- **THEN** the "Recent Blog" section is visible
- **AND** a subheading reads "Blog"
- **AND** 3 blog post cards are displayed

#### Scenario: Each blog card has image, date, author, comments, and title

- **GIVEN** the blog section is displayed
- **THEN** each card shows a background image, a date, an author, a comment count, and a post title

### Feature: Footer

#### Scenario: Footer displays with multiple columns

- **GIVEN** the app is loaded
- **THEN** the footer is visible with a dark background (#1a1a1a)
- **AND** it contains the brand "Virtuoso" with social media icons (Twitter, Facebook, Instagram)
- **AND** it has columns: "Explore", "Legal", "Company", and "Have a Questions?"

#### Scenario: Footer includes contact information

- **GIVEN** the footer is displayed
- **THEN** it shows an address, phone number, and email

#### Scenario: Footer links to Component Dock

- **GIVEN** the footer is displayed
- **THEN** a link to "https://www.componentdock.com/" is present
- **AND** it reads "Component Dock" (replacing the original Colorlib attribution)

## Verification checklist

- [ ] All sections render in correct order: Navbar → Hero → Why Choose Us → Services → About/Comparison → Testimonials → How It Works → Pricing → Blog → Footer
- [ ] Green accent (#21bf73) used on all subheading labels and decorative lines
- [ ] Blue CTA buttons (#007bff) with 0.25rem border radius
- [ ] Roboto font loaded via Google Fonts (weights 300, 400, 500, 700)
- [ ] Footer background is dark (#1a1a1a)
- [ ] Testimonial section has dark overlay background
- [ ] How It Works and Pricing sections use light background (#f8f9fa)
- [ ] 8 service cards in the services grid
- [ ] 4 pricing cards with correct prices ($49, $79, $109, $149)
- [ ] 3 blog post cards
- [ ] Progress circles show 30% and 75%
- [ ] No references to "Colorlib" in any app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] Placeholder images use picsum.photos with deterministic seeds
- [ ] Responsive layout works at mobile breakpoints
- [ ] 100% test coverage (lines, functions, branches, statements)
