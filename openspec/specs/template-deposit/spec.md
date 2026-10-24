# Template: Deposit (Banking & Financial Services)
<!-- prep-status: shipped-as=bankcraft -->
> **SHIPPED-UNDER** — the ColorLib `banker` design this prep describes already
> ships as `apps/bankcraft` (<https://bankcraft.free.componentdock.com>).
> Do not scaffold `apps/deposit`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-bankcraft/spec.md`.

## Purpose

Recreation of ColorLib's **Banker** template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page app.

- **Source:** https://colorlib.com/wp/template/banker/
- **Preview:** https://preview.colorlib.com/theme/banker/
- **New name:** `deposit` (apps/deposit, @free-react-templates/deposit)
- **Design category:** Banking / Financial Services

## Design tokens (extracted from live preview CSS)

| Token | Value | Usage |
|-------|-------|-------|
| Brand primary | `#fd7e14` (orange) | Buttons, CTA accents, active states |
| Brand secondary | `#71bc42` (green) | Secondary accent text |
| Dark surface | `#343a40` | Navbar border, footer background |
| Light bg | `#f7f7f7` / `#f8f9fa` | Section alternating backgrounds |
| Neutral gray | `#ccc` / `#dee2e6` | Borders, subtle backgrounds |
| Text primary | `#212529` | Body text |
| Text muted | `#b3b3b3` | Secondary text |
| White | `#fff` | Card backgrounds, button text |
| Font family | `"Open Sans", sans-serif` | Body + headings |
| Button radius | `30px` (pill shape) | All primary buttons |
| Button padding | `10px 30px` | Primary CTA buttons |
| Button font size | `16px` | Button labels |
| Border radius (cards) | `4px` | Card corners |
| Section padding | `2.5em 0` (normal) / `8em 0` (hero cover) | Vertical rhythm |
| Navbar | Absolute overlay on hero, z-index 1999, bottom border rgba(255,255,255,0.7) | Transparent-over-hero pattern |

## Visual design (from preview DOM + screenshot context)

Banking/finance corporate template with:
- Full-width hero carousel with dark overlay on background image, centered white text
- Orange pill-shaped CTAs on dark/white sections
- Alternating white and light-gray section backgrounds
- Dark charcoal footer (#343a40) with white text
- Clean professional aesthetic, Open Sans typography throughout

## Section structure (in order, from preview DOM)

1. **Navbar** — Sticky/absolute, logo left, nav links right (Home, About Us, Team, Pricing, FAQ, Gallery, Services, Testimonials, Blog, Contact), mobile hamburger
2. **Hero Carousel** — Full-width bg-image with dark overlay, 3 slides: "Banking Solutions", "Financing Solutions", "Savings Accounts" each with subtext and "Learn More" CTA
3. **Features (3-col)** — 3 icon+heading+text cards: Money Savings, Online Shopping, Credit/Debit Cards
4. **About Us / CTA** — Left column: heading "We Solve Your Financial Problem" + description + "Learn More" button; Right column: newsletter/email capture form with "Subscribe" button
5. **Team** — 4 members in grid: Kaiara Spencer (Finance Manager), Dave Simpson (Marketing Manager), Ben Thompson (Accountant), Kyla Stewart (Accountant); each with photo, name, role, social icons
6. **Gallery** — Filter buttons (All, Web, Brand, Design) + grid of portfolio images with hover overlay
7. **How It Works** — 3 numbered steps with icon + title + description + "Learn More": 01 Online Applications, 02 Get an approval, 03 Card delivery
8. **Services** — 6 service cards (2 rows of 3): Business Consulting, Credit Card, Income Monitoring, Insurance Consulting, Financial Investment, Financial Management; each with icon, title, description, "Learn More"
9. **Testimonials** — Carousel of customer quotes with avatar, name, role
10. **Pricing** — 3 cards: Basic ($47/yr), Premium ($200/yr, popular), Professional ($750/yr); each with features list and "Buy Now" button
11. **FAQ** — Accordion with expandable questions/answers
12. **Blog** — 3 blog post cards with image, title, author, date, excerpt, "Continue Reading" link
13. **Contact** — Left: address, phone, email; Right: contact form (First Name, Last Name, Email, Subject, Message, Submit)
14. **Footer** — Dark bg (#343a40), 4 columns: About Us text, Quick Links, Follow Us (social icons), Subscribe Newsletter (email input); Copyright bar at bottom

## Requirements

### Feature: Navbar

#### Scenario: Desktop navbar displays all navigation links

- **GIVEN** the user is on a desktop viewport
- **WHEN** the page loads
- **THEN** the navbar is visible with links: Home, About, Team, Pricing, FAQ, Gallery, Services, Testimonials, Blog, Contact

#### Scenario: Mobile hamburger menu toggles

- **GIVEN** the user is on a mobile viewport
- **WHEN** the hamburger icon is clicked
- **THEN** the mobile menu slides open
- **AND** all navigation links are visible

### Feature: Hero Carousel

#### Scenario: Hero displays first slide

- **GIVEN** the page loads
- **WHEN** the hero section renders
- **THEN** slide "Banking Solutions" is visible
- **AND** a "Learn More" CTA button is displayed

#### Scenario: Hero auto-advances slides

- **GIVEN** the hero section is visible
- **WHEN** 5 seconds elapse
- **THEN** the carousel advances to the next slide

#### Scenario: Hero has dark overlay on background image

- **GIVEN** the hero section renders
- **THEN** a dark semi-transparent overlay covers the background
- **AND** the text is white and legible

### Feature: Features Section

#### Scenario: Three feature cards display

- **GIVEN** the features section is visible
- **THEN** there are 3 feature cards in a row
- **AND** each card has an icon, heading, and description text

### Feature: About Us / CTA

#### Scenario: About section shows heading and form

- **GIVEN** the about section is visible
- **THEN** the heading "We Solve Your Financial Problem" is displayed
- **AND** an email subscription form is present on the right

### Feature: Team Section

#### Scenario: Team members display in grid

- **GIVEN** the team section is visible
- **THEN** 4 team member cards are shown
- **AND** each card has a photo, name, role, and social icon links

### Feature: Gallery

#### Scenario: Gallery shows filterable portfolio

- **GIVEN** the gallery section is visible
- **THEN** filter buttons are displayed (All, Web, Brand, Design)
- **AND** a grid of portfolio images is shown
- **AND** clicking a filter button shows only matching items

### Feature: How It Works

#### Scenario: Three process steps display

- **GIVEN** the how-it-works section is visible
- **THEN** 3 numbered steps are shown
- **AND** each step has a number, title, description, and "Learn More" link

### Feature: Services Section

#### Scenario: Six services display in grid

- **GIVEN** the services section is visible
- **THEN** 6 service cards are shown in a 3-column grid
- **AND** each card has an icon, title, description, and "Learn More" link

### Feature: Testimonials

#### Scenario: Testimonials carousel shows customer quotes

- **GIVEN** the testimonials section is visible
- **THEN** a carousel of customer testimonials is displayed
- **AND** each testimonial has a quote, avatar, name, and role

### Feature: Pricing

#### Scenario: Three pricing tiers display

- **GIVEN** the pricing section is visible
- **THEN** 3 pricing cards are shown: Basic ($47/yr), Premium ($200/yr), Professional ($750/yr)
- **AND** each card has a features list and "Buy Now" button
- **AND** the Premium card is visually highlighted as popular

### Feature: FAQ

#### Scenario: FAQ accordion is functional

- **GIVEN** the FAQ section is visible
- **WHEN** a question is clicked
- **THEN** the answer expands below the question
- **AND** clicking again collapses the answer

### Feature: Blog

#### Scenario: Blog posts display as cards

- **GIVEN** the blog section is visible
- **THEN** 3 blog post cards are shown
- **AND** each card has an image, title, author, date, excerpt, and "Continue Reading" link

### Feature: Contact

#### Scenario: Contact form collects user input

- **GIVEN** the contact section is visible
- **THEN** a form with First Name, Last Name, Email, Subject, and Message fields is displayed
- **AND** a Submit button is present

#### Scenario: Contact info displays address details

- **GIVEN** the contact section is visible
- **THEN** the address, phone number, and email are displayed

### Feature: Footer

#### Scenario: Footer displays 4-column layout

- **GIVEN** the footer is visible
- **THEN** 4 columns are shown: About Us, Quick Links, Follow Us, Subscribe Newsletter
- **AND** a copyright bar is at the bottom
- **AND** a link to componentdock.com is present

#### Scenario: Footer newsletter form works

- **GIVEN** the footer is visible
- **WHEN** an email is entered and Subscribe is clicked
- **THEN** the form submits without errors

## Verification checklist

- [ ] Navbar: sticky/transparent over hero, all links present, mobile hamburger works
- [ ] Hero: carousel auto-advances, 3 slides with correct text, dark overlay, CTA buttons
- [ ] Features: 3 cards with icons, headings, descriptions
- [ ] About/CTA: heading, description, email form on right side
- [ ] Team: 4 members with photos, names, roles, social links
- [ ] Gallery: filter buttons work, image grid renders, hover effects
- [ ] How It Works: 3 numbered steps with descriptions and CTAs
- [ ] Services: 6 cards in 3-col grid with icons, titles, CTAs
- [ ] Testimonials: carousel with quotes, avatars, names
- [ ] Pricing: 3 tiers with correct prices, features, highlighted Premium
- [ ] FAQ: accordion expands/collapses on click
- [ ] Blog: 3 post cards with images, metadata, read-more links
- [ ] Contact: form fields (First Name, Last Name, Email, Subject, Message) + address info
- [ ] Footer: 4-column layout, newsletter form, copyright, Component Dock link
- [ ] Design tokens: orange (#fd7e14) buttons with pill radius (30px), Open Sans font, dark footer (#343a40)
- [ ] Responsive: all sections adapt to mobile/tablet viewports
- [ ] No ColorLib references in app code (provenance in spec + TEMPLATES.md only)
- [ ] Footer links to componentdock.com
