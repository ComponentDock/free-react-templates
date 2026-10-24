# Template: FinVault (Finance/Banking Corporate)
<!-- prep-status: shipped-as=finflow -->
> **SHIPPED-UNDER** — the ColorLib `finances` design this prep describes already
> ships as `apps/finflow` (<https://finflow.free.componentdock.com>).
> Do not scaffold `apps/finvault`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-finflow/spec.md`.

## Purpose

Recreation of ColorLib "Finances" template
(preview: https://preview.colorlib.com/theme/finances/,
source: https://colorlib.com/wp/template/finances/)

A finance/banking corporate website with a full-screen hero carousel,
about section, team, gallery, services grid, pricing cards, FAQ,
blog, and contact form. Corporate aesthetic with blue accent on white/gray.

Stack: React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design Tokens (extracted from preview CSS)

### Colors
| Token            | Value     | Usage                                    |
| ---------------- | --------- | ---------------------------------------- |
| brand-primary    | #007bff   | Buttons, links, dropdown borders, active nav |
| text-black       | #000000   | Headings, form labels                    |
| body-text        | gray      | Body copy (line-height: 1.7)            |
| bg-light         | #cccccc   | Light section backgrounds (services, pricing, contact) |
| bg-dark          | #343a40   | Footer background                        |
| success          | #71bc42   | Check-list icons                         |
| white            | #ffffff   | Card backgrounds, navbar (sticky)        |
| overlay          | rgba(0,0,0,0.7) | Hero image overlay                |

### Typography
| Element          | Font                                                     |
| ---------------- | -------------------------------------------------------- |
| Headings (h1-h5) | "Open Sans", sans-serif                                   |
| Body             | "Open Sans", sans-serif (weight: 400, 1rem)              |
| Hero h1          | 4rem, weight 900, uppercase, white                       |
| Section title    | font-size inherited from h2                              |

### Shapes
| Element         | Style                                         |
| --------------- | --------------------------------------------- |
| Buttons (.btn)  | border-radius: 30px, padding: 10px 30px       |
| Form inputs     | height: 43px, border-radius: 30px             |
| Circle-bg image | circular mask via ::after pseudo (300px circle) |

### Section Backgrounds
| Section            | Background                     |
| ------------------ | ------------------------------ |
| Hero               | Full-screen image + dark overlay |
| About              | White                          |
| Features           | White                          |
| Services/Features  | White                          |
| Meet Team          | White (border-bottom)          |
| Gallery            | White                          |
| How It Works       | White                          |
| Services Grid      | Light gray (bg-light)          |
| Testimonials       | White (testimonial-wrap)       |
| Pricing            | Light gray (bg-light)          |
| FAQ                | White                          |
| Blog               | White                          |
| Contact            | Light gray (bg-light)          |
| Footer             | Dark gray (#343a40)            |

## Section Structure (in order)

1. **Navbar** — sticky header; logo "FinVault." with blue dot; nav links: Home, About Us (with dropdown: Team, Pricing, FAQ, Gallery, Services, Testimonials, nested sub-menu), Blog, Contact, social icons (Facebook, Twitter, LinkedIn)
2. **Hero** — full-screen background image with dark overlay; owl-carousel of 3 slides (Banking Solutions, Financing Solutions, Savings Accounts); each slide: uppercase h1, description paragraph, "Get In Touch" primary button; animated scroll-down mouse indicator
3. **About Us** — centered section title + lead text; two-column layout: left circular-framed image, right heading "We Solve Your Financial Problem" + two paragraphs
4. **Features (3-col)** — three-column grid: Money Savings, Online Shoppings, Credit/Debit Cards; each: flaticon icon, title, short description
5. **Banking Solutions** — two-column: left circular-framed image, right "Banking Solutions Is Our Priority" heading + description + green check-list (3 items)
6. **Meet Team** — centered title; 3 team member cards in a row; each: image with social overlay (Facebook, Twitter, LinkedIn, Instagram), name, position
7. **Gallery** — masonry/isotope grid of 11 images with fancybox lightbox overlay on hover
8. **How It Works** — three numbered steps: 01. Online Applications, 02. Get an approval, 03. Card delivery; each with icon + description
9. **Services Grid** — light background; centered title; 6-service grid: Business Consulting, Credit Card, Income Monitoring, Insurance Consulting, Financial Investment, Financial Management; each with icon
10. **Testimonials** — owl-carousel of customer testimonials; each: quote text + person name/position
11. **Pricing** — light background; 3 pricing cards: Basic ($47/yr), Premium ($200/yr, popular/highlighted), Professional ($750/yr); each: tier name, price, feature check-list with strikethrough for excluded items, "Buy Now" button
12. **FAQ** — two-column grid of 8 FAQ items; each: question heading + answer paragraph
13. **Blog** — three blog cards; each: image, title, meta (author, date, category), excerpt, "Continue Reading..." link
14. **Contact** — light background; centered title; 3-column info (address, phone, email with primary-colored icons); contact form (first name, last name, email, subject, message, "Send Message" button)
15. **Footer** — dark background; three-column: About Us (text), Quick Links (list), Follow Us (social icons); Subscribe Newsletter section (email input + Send button); copyright line with heart icon

## Requirements

### Feature: FinVault template behaviour

Feature: FinVault — Finance/Banking Corporate Template

Background:
- **GIVEN** the FinVault template is loaded at the home page

**── Navbar ──**

#### Scenario: Navbar displays logo and navigation links

- **THEN** the navbar contains the logo text "FinVault."
- **AND** the nav links include "Home", "About Us", "Blog", "Contact"
- **AND** the navbar is sticky when scrolled past the top

#### Scenario: Navbar dropdown on About Us

- **WHEN** I hover over "About Us" in the navbar
- **THEN** a dropdown appears with "Team", "Pricing", "FAQ", "Gallery", "Services", "Testimonials"

#### Scenario: Mobile hamburger menu

- **GIVEN** the viewport is mobile-width (<= 1199px)
- **THEN** the hamburger menu icon is visible
- **WHEN** I tap the hamburger icon
- **THEN** the mobile slide-out menu opens from the right

**── Hero ──**

#### Scenario: Hero section displays carousel

- **THEN** the hero section has a full-screen background image with dark overlay
- **AND** the hero displays a heading "Banking Solutions"
- **AND** the hero displays a "Get In Touch" primary button

#### Scenario: Hero carousel auto-advances

- **WHEN** I wait 5 seconds
- **THEN** the hero heading changes to "Financing Solutions"

**── About Us ──**

#### Scenario: About section layout

- **THEN** the About Us section shows a centered "About Us" heading
- **AND** a left-side image with circular background decoration
- **AND** a right-side "We Solve Your Financial Problem" sub-heading with two paragraphs

**── Features ──**

#### Scenario: Features section displays 3 feature cards

- **THEN** the features section shows exactly 3 feature cards
- **AND** each card has an icon, a title, and a short description

**── Banking Solutions ──**

#### Scenario: Banking Solutions with checklist

- **THEN** the banking solutions section shows a heading "Banking Solutions Is Our Priority"
- **AND** a green check-list with at least 3 items

**── Team ──**

#### Scenario: Team section displays team members

- **THEN** the "Meet Team" section shows exactly 3 team member cards
- **AND** each card displays a name and position

**── Gallery ──**

#### Scenario: Gallery section with image grid

- **THEN** the gallery section displays at least 9 images in a masonry grid
- **AND** hovering an image shows a lightbox overlay icon

**── How It Works ──**

#### Scenario: How It Works section with numbered steps

- **THEN** the "How It Works" section shows exactly 3 steps
- **AND** each step has a number (01, 02, 03), a title, and a description

**── Services ──**

#### Scenario: Services grid with 6 items

- **THEN** the "Our Services" section shows exactly 6 service items
- **AND** each item has an icon and a title

**── Testimonials ──**

#### Scenario: Testimonials carousel

- **THEN** the "Happy Customers" section displays testimonials
- **AND** each testimonial has a quote and a customer name

**── Pricing ──**

#### Scenario: Pricing section with 3 tiers

- **THEN** the "Pricing" section shows 3 pricing cards
- **AND** the tiers are "Basic", "Premium", and "Professional"
- **AND** the "Premium" tier is visually highlighted as popular
- **AND** each card has a price, feature list, and "Buy Now" button

#### Scenario: Pricing excluded features are strikethrough

- **THEN** the "Basic" plan has some features with strikethrough text
- **AND** the "Professional" plan shows all features without strikethrough

**── FAQ ──**

#### Scenario: FAQ section in two columns

- **THEN** the FAQ section shows 8 question-and-answer pairs
- **AND** the questions are arranged in a two-column layout

**── Blog ──**

#### Scenario: Blog section with 3 cards

- **THEN** the blog section shows exactly 3 blog cards
- **AND** each card has an image, title, meta info, excerpt, and "Continue Reading..." link

**── Contact ──**

#### Scenario: Contact info with 3 columns

- **THEN** the "Contact Us" section shows address, phone, and email in 3 columns
- **AND** each info item has a primary-colored icon above the text

#### Scenario: Contact form

- **THEN** a contact form is displayed with fields: First Name, Last Name, Email, Subject, Message
- **AND** the form has a "Send Message" primary button

**── Footer ──**

#### Scenario: Footer layout

- **THEN** the footer has a dark background (#343a40)
- **AND** the footer contains "About Us" text, "Quick Links" list, and "Follow Us" social icons
- **AND** the footer has a "Subscribe Newsletter" section with email input and Send button
- **AND** the footer has a copyright line
- **AND** the footer links to "https://www.componentdock.com/" branded as "Component Dock"

## Verification checklist

- [ ] All 15 sections present in correct order
- [ ] Navbar is sticky; mobile hamburger opens slide-out menu
- [ ] Hero carousel cycles through 3 slides with correct headings
- [ ] About section has circular-framed image + text
- [ ] 3 feature cards with icons
- [ ] Banking solutions checklist with green check icons
- [ ] 3 team member cards with social overlays
- [ ] Gallery masonry grid with lightbox hover effect
- [ ] How It Works: 3 numbered steps
- [ ] 6-item services grid on light background
- [ ] Testimonials carousel
- [ ] 3 pricing cards; Premium highlighted
- [ ] FAQ: 8 Q&A pairs in 2-column grid
- [ ] 3 blog cards with meta info
- [ ] Contact: 3 info columns + form
- [ ] Footer: dark bg, About/Links/Social/Newsletter, copyright, Component Dock link
- [ ] Brand color #007bff used consistently for buttons, links, active states
- [ ] All buttons and form inputs have border-radius: 30px (pill shape)
- [ ] Font: Open Sans throughout
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Footer links to https://www.componentdock.com/
