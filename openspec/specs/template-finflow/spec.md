# Template: Finflow (Finance / Banking)

## Purpose

Finflow is a single-page finance/banking template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Finances" free
template (source: https://colorlib.com/wp/template/finances/; preview:
https://preview.colorlib.com/theme/finances/), built under a DIFFERENT name
(**Finflow**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a Bootstrap-based single-page banking/finance site with a
sticky navbar, a multi-slide hero carousel (owl-carousel), team section, photo
gallery, services grid, testimonials, pricing cards, about section with feature
icons, blog cards, FAQ accordion, contact form, and a dark footer. Font is
**Open Sans** (300/400/700) from Google Fonts / Cloudflare Fonts. Primary brand
color is Bootstrap blue `#007bff`. Buttons are pill-shaped (30px radius).
Section backgrounds alternate between white and light grey (`#f8f9fa`).

## Design Tokens

| Token           | Value                                                          |
| --------------- | -------------------------------------------------------------- |
| Brand primary   | `#007bff` (Bootstrap blue)                                    |
| Brand secondary | `#6c757d` (Bootstrap grey)                                    |
| Accent green    | `#71bc42` (used for check icons in pricing)                   |
| Body text       | `#212529`                                                      |
| Muted text      | `#6c757d`                                                      |
| Light bg        | `#f8f9fa` (alternating section backgrounds)                   |
| Dark bg         | `#343a40` (footer)                                            |
| White           | `#fff`                                                        |
| Font family     | `"Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif` |
| Font weights    | 300 (light), 400 (regular), 700 (bold)                       |
| Button radius   | 30px (pill-shaped)                                            |
| Border radius   | 50% (avatar circles, carousel dots)                           |
| Icon font       | icomoon (custom icon font) + flaticon                         |
| AOS animation   | `data-aos="fade"` / `data-aos="fade-up"` on scroll-in         |

## Section Order (from preview DOM)

1. **Navbar** — sticky, logo "Finances." (blue dot), nav links: Home, About Us
   (dropdown: Team, Pricing, FAQ, Gallery, Services, Testimonials, More Links),
   Blog, Contact, social icons (Facebook, Twitter, LinkedIn). Mobile hamburger.
2. **Hero Carousel** — owl-carousel with 3 slides: "Banking Solutions",
   "Financing Solutions", "Savings Accounts". Each slide: uppercase heading
   + description paragraph + "Get In Touch" pill button. Background images
   (hero_1.jpg, hero_2.jpg, hero_3.jpg). Dark overlay `rgba(0,0,0,0.7)`.
3. **Team** (`#team-section`) — "Meet Team" heading, 3 cards in a row:
   Kaiara Spencer, Dave Simpson, Ben Thompson. Each card: circular avatar
   (50% radius), name h3, role caption. Social icon links below.
4. **Gallery** (`#gallery-section`) — "Gallery" heading, masonry/photo grid.
5. **Services** (`#services-section`) — "Our Services" heading on light bg,
   4 service items: Business Consulting, Credit Card, Income Monitoring,
   Insurance Consulting. Each: icon + title + description.
6. **Testimonials** (`#testimonials-section`) — "Happy Customers" heading,
   owl-carousel of testimonial cards with quote, author name, avatar.
7. **Pricing** (`#pricing-section`) — "Pricing" heading on light bg, 3 cards:
   Basic ($47/yr), Premium ($200/yr, featured/popular), Professional ($500/yr).
   Each: plan name, price, feature list with check/remove icons, "Buy Now" button.
8. **About** (`#about-section`) — "About Us" / "We Solve Your Financial Problem"
   heading, 4 feature items with icons: Money Savings, Online Shoppings,
   Credit/Debit Cards, + one more. Short description paragraphs.
9. **Blog** (`#blog-section`) — "Our Blog" heading, 3 blog cards. Each:
   image, category tag, date, title, short excerpt. "Read More" link.
10. **FAQ** (`#faq-section`) — "Frequently Ask Questions" heading on light bg,
    accordion with expandable items.
11. **Contact** (`#contact-section`) — "Contact Us" heading, split layout:
    left side with form fields (First Name, Last Name, Subject, Email, Message),
    right side with office address + phone info. "Send Message" button.
12. **Footer** — dark bg (`#343a40`), 3 columns: brand + description,
    Quick Links (Terms, Policy, About Us, Services, Testimonials, Contact Us),
    Subscribe form (email input). Copyright bar at bottom.

## Requirements

### Feature: Finflow template behaviour

Feature: Finflow — Finance/Banking Template

Background:
- **GIVEN** the template is loaded at the root URL
- **AND** the viewport is 1280x800

**── Navbar ──────────────────────────────────────────────**

#### Scenario: Sticky navbar displays logo and navigation links

- **THEN** the navbar should contain the logo text "Finances"
- **AND** the navbar should have nav links: "Home", "About Us", "Blog", "Contact"
- **AND** the navbar should display social icons for Facebook, Twitter, LinkedIn
- **AND** the navbar should be sticky on scroll

#### Scenario: Mobile hamburger menu toggles navigation

- **GIVEN** the viewport is 375x812
- **WHEN** I click the hamburger menu icon
- **THEN** the mobile menu should be visible
- **WHEN** I click the close icon
- **THEN** the mobile menu should be hidden

**── Hero ────────────────────────────────────────────────**

#### Scenario: Hero carousel displays banking slides

- **THEN** the hero should display a carousel with 3 slides
- **AND** slide 1 should show heading "Banking Solutions"
- **AND** slide 2 should show heading "Financing Solutions"
- **AND** slide 3 should show heading "Savings Accounts"
- **AND** each slide should have a "Get In Touch" button

#### Scenario: Hero has dark overlay on background images

- **THEN** each hero slide should have a dark overlay background
- **AND** the overlay color should be approximately rgba(0,0,0,0.7)

**── Team ────────────────────────────────────────────────**

#### Scenario: Team section displays three team members

- **THEN** the team section should show heading "Meet Team"
- **AND** there should be 3 team member cards
- **AND** each card should display a circular avatar
- **AND** each card should show a name and social links

**── Gallery ─────────────────────────────────────────────**

#### Scenario: Gallery section displays photo grid

- **THEN** the gallery section should show heading "Gallery"
- **AND** it should display a grid of photos

**── Services ────────────────────────────────────────────**

#### Scenario: Services section displays four service items

- **THEN** the services section should show heading "Our Services"
- **AND** it should display 4 service items on a light background
- **AND** each service item should have an icon, title, and description
- **AND** the service titles should include "Business Consulting" and "Credit Card"

**── Testimonials ────────────────────────────────────────**

#### Scenario: Testimonials section displays customer reviews

- **THEN** the testimonials section should show heading "Happy Customers"
- **AND** it should display testimonial cards with quotes and author info

**── Pricing ─────────────────────────────────────────────**

#### Scenario: Pricing section displays three plan cards

- **THEN** the pricing section should show heading "Pricing"
- **AND** it should be on a light background
- **AND** there should be 3 pricing cards: "Basic", "Premium", "Professional"
- **AND** Basic should show "$47 / year"
- **AND** Premium should show "$200 / year" and be highlighted as popular
- **AND** Professional should show "$500 / year"
- **AND** each card should have a feature list and a "Buy Now" button

#### Scenario: Pricing feature lists show included and excluded items

- **THEN** Basic plan should show 2 included features and 3 excluded features
- **AND** Premium plan should show 4 included features and 1 excluded feature
- **AND** Professional plan should show all 5 features as included

**── About ───────────────────────────────────────────────**

#### Scenario: About section displays financial problem-solving content

- **THEN** the about section should show heading "About Us"
- **AND** it should display sub-heading "We Solve Your Financial Problem"
- **AND** it should list feature items: "Money Savings", "Online Shoppings", "Credit / Debit Cards"

**── Blog ────────────────────────────────────────────────**

#### Scenario: Blog section displays three blog post cards

- **THEN** the blog section should show heading "Our Blog"
- **AND** there should be 3 blog post cards
- **AND** each card should have an image, category, date, title, and excerpt

**── FAQ ─────────────────────────────────────────────────**

#### Scenario: FAQ section displays expandable questions

- **THEN** the FAQ section should show heading "Frequently Ask Questions"
- **AND** it should be on a light background
- **AND** it should display expandable question items

**── Contact ─────────────────────────────────────────────**

#### Scenario: Contact section displays form and office info

- **THEN** the contact section should show heading "Contact Us"
- **AND** it should be on a light background
- **AND** it should display a form with fields: First Name, Last Name, Subject, Email, Message
- **AND** it should display a "Send Message" button
- **AND** it should show office address and contact information

**── Footer ──────────────────────────────────────────────**

#### Scenario: Footer displays brand info, links, and subscribe form

- **THEN** the footer should have a dark background
- **AND** it should display the brand name and description
- **AND** it should show Quick Links: "Terms", "Policy", "About Us", "Services", "Testimonials", "Contact Us"
- **AND** it should display an email subscribe input
- **AND** it should contain a copyright line linking to Component Dock

**── Cross-cutting ───────────────────────────────────────**

#### Scenario: All sections use Open Sans font

- **THEN** all text should use "Open Sans" as the primary font family

#### Scenario: Buttons are pill-shaped with 30px border-radius

- **THEN** all primary buttons should have border-radius of approximately 30px

#### Scenario: Alternating section backgrounds

- **THEN** team section should have white background
- **AND** services section should have light grey background
- **AND** pricing section should have light grey background
- **AND** contact section should have light grey background
- **AND** footer should have dark grey background

#### Scenario: No ColorLib references in app code

- **THEN** no source file should contain "colorlib" or "preview.colorlib.com"
- **AND** the footer should link to "https://www.componentdock.com/"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/finflow/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/finflow/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification Checklist

- [ ] Hero carousel renders 3 slides with correct headings and CTA buttons
- [ ] Sticky navbar with dropdown navigation works on desktop
- [ ] Mobile hamburger menu toggles open/close
- [ ] Team section shows 3 member cards with circular avatars
- [ ] Gallery section displays photo grid
- [ ] Services section shows 4 items on light background with icons
- [ ] Testimonials carousel displays customer quotes
- [ ] Pricing section shows 3 cards (Basic/Premium/Professional) with correct prices
- [ ] Pricing feature lists differentiate included vs excluded items
- [ ] About section shows financial features with icons
- [ ] Blog section shows 3 post cards with images
- [ ] FAQ section has expandable accordion items
- [ ] Contact form has all required fields and validation
- [ ] Footer has dark background, quick links, subscribe form, Component Dock link
- [ ] All buttons have 30px pill-shaped border-radius
- [ ] Font is Open Sans (300/400/700) throughout
- [ ] No ColorLib references in any app source file
- [ ] Test coverage is 100% lines/functions/branches/statements
- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
