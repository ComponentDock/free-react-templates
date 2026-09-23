# Template: Oathmark (Legal / Notary)

Recreation of the ColorLib "Notary" template as a React 19 + Vite + Tailwind 4 + TypeScript single-page app.

## Purpose

- **Source**: [ColorLib Notary](https://colorlib.com/wp/template/notary/)
- **Preview URL**: https://preview.colorlib.com/theme/notary/
- **Stack**: React 19 · Vite (latest) · Tailwind CSS 4 · TypeScript
- **Category**: Legal / Notary services landing page
- **ComponentDock name**: `oathmark` (apps/oathmark, @free-react-templates/oathmark)

## Replication Reference

Live preview fetched 2026-09-23. Design tokens extracted from `css/style.css` on the preview.

### Design Tokens

| Token | Value | Source |
|-------|-------|--------|
| Heading font | Playfair Display (serif) | Google Fonts, CSS `font-family` |
| Body font | Roboto (sans-serif) | Google Fonts, CSS `font-family` |
| Brand green (CTA) | `#71bc42` | `.btn.btn-primary`, hover states |
| Hero overlay | `#364d59` | `.hero.overlay:before` background |
| Light section bg | `#f8f9fa` | `.site-section.bg-light` |
| Accent peach/tan | `#fee2b3` | `.practicing` icon wrap, hover |
| Text dark | `#212529` | Bootstrap body text |
| Border radius (buttons) | `50%` (pill) | `.btn.btn-primary` |
| Border radius (cards) | `7px` | `.practicing-inner` |
| Footer background | Image (dark overlay) | `background-image: url('images/hero_bg_footer.jpg')` |

### Visual Design Notes (from screenshot + preview)

- Dark hero with image overlay, split layout: left intro text + right appointment form card (white bg, date picker)
- Light gray background for Practice Areas: 6 cards in a 3-column grid, each with a circular icon, title, and short blurb
- Two-column "about" section: attorney images left (2 stacked), CTA text right
- Testimonials on light bg: 3 cards, each with circular avatar, author name, and quote in blockquote
- Three-column "legal solutions" section: image left, text center with checklist, accordion FAQ right
- Footer: dark background image with overlay, About Us + 4 link columns + social icons

## Gherkin Requirements

### Feature: Navbar

Scenario: Sticky navigation bar renders
  Given the user loads the page
  Then a sticky navbar should be visible at the top
  And it should show the brand name "Oathmark" on the left
  And it should show navigation links: Home, Practice Areas, Testimonials, About, Contact

Scenario: Mobile menu toggle
  Given the user is on a mobile viewport
  When the user clicks the hamburger icon
  Then the mobile navigation menu should expand

Scenario: Practice Areas dropdown
  Given the user hovers over or clicks "Practice Areas" in the navbar
  Then a dropdown should appear with links: Bankruptcy Law, Business Law, Civil Rights Law, Criminal Law, Immigration Law, Family Law

### Feature: Hero Section

Scenario: Hero with overlay renders
  Given the user loads the page
  Then the hero section should display with a dark image overlay background
  And it should show a headline: "Notary Public & Legal Solutions"
  And it should show a subtitle paragraph about legal services

Scenario: Appointment form in hero
  Given the hero section is visible
  Then an appointment booking form should be displayed on the right side
  And the form should have fields: Name, Email, Date
  And the form should have a "Book Appointment" submit button

Scenario: Appointment form submission
  Given the user fills in Name, Email, and Date
  When the user clicks "Book Appointment"
  Then the form should validate required fields

### Feature: Practice Areas

Scenario: Practice areas grid renders
  Given the user scrolls to the Practice Areas section
  Then 6 practice area cards should be displayed in a 3-column grid
  And each card should have an icon, title, and description paragraph
  And the cards should be: Bankruptcy Law, Business Law, Civil Rights Law, Criminal Law, Immigration Law, Family Law

Scenario: Practice area card hover
  Given a practice area card is visible
  When the user hovers over a card
  Then the card should show a subtle hover effect

### Feature: About / Attorney Section

Scenario: About section with images renders
  Given the user scrolls to the about section
  Then two attorney images should be displayed side by side
  And a headline "We Provide Highly Reliable & Effective Legal Solutions" should appear
  And a description paragraph should follow
  And a "Book an appointment" button should be visible

### Feature: Testimonials

Scenario: Testimonials section renders
  Given the user scrolls to the testimonials section
  Then 3 testimonial cards should be displayed in a row
  And each card should show an avatar image, author name, role, and a blockquote

Scenario: Testimonial card structure
  Given a testimonial card is visible
  Then it should display the person's circular avatar
  And it should show their name and title
  And it should show a quoted text in a blockquote element

### Feature: Legal Solutions / FAQ

Scenario: Legal solutions section renders
  Given the user scrolls to the legal solutions section
  Then a three-column layout should appear: image left, text center, accordion right
  And the text center column should have a headline "We Have Legal Solutions"
  And a checklist with 3 items should be visible

Scenario: Accordion FAQ interaction
  Given the accordion FAQ is visible
  When the user clicks a FAQ header
  Then the corresponding answer should expand
  And other open items should collapse

### Feature: Footer

Scenario: Footer renders
  Given the user scrolls to the footer
  Then it should display on a dark background image
  And it should show "About Us" text with social icon links
  And it should show 4 link columns: Quick Links, Resources, Support, Company
  And it should show a copyright line at the bottom
  And the copyright should include a link to https://www.componentdock.com/

## Verification Checklist

- [ ] Navbar is sticky and renders all nav links
- [ ] Mobile hamburger toggle works
- [ ] Practice Areas dropdown opens on hover/click
- [ ] Hero section has dark overlay, headline, subtitle, and form
- [ ] Appointment form validates Name, Email, Date fields
- [ ] Practice Areas grid shows 6 cards with icons
- [ ] About section shows 2 attorney images + CTA
- [ ] Testimonials show 3 cards with avatar, name, quote
- [ ] Accordion FAQ opens/collapses correctly
- [ ] Footer shows on dark bg with columns and social links
- [ ] Footer links to componentdock.com
- [ ] All design tokens match: Playfair Display + Roboto fonts, #71bc42 green, pill buttons
- [ ] Placeholder images use picsum.photos
- [ ] No ColorLib references in app source code
- [ ] 100% test coverage (lines, functions, branches, statements)
