# Template: Banknote (Banking / Finance Website)

## Purpose

Banknote is a single-page multi-section BANKING / FINANCE WEBSITE in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Banker" free template (source:
https://colorlib.com/wp/template/banker/, preview:
https://preview.colorlib.com/theme/banker/), built under a DIFFERENT name
(**Banknote**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a Bootstrap 4 one-page site with an Orange (`#fd7e14`)
brand palette, Open Sans typography, owl-carousel hero slider, isotope
gallery with filter buttons, owl-carousel testimonial slider, AOS scroll
animations, and a sticky navbar with multi-level dropdown menus. It targets
financial services — banking, loans, credit cards, and consulting.

## Design Tokens (extracted from live preview)

### Colors

| Token              | Value     | Usage                                  |
| ------------------ | --------- | -------------------------------------- |
| `--brand-primary`  | `#fd7e14` | Buttons, active nav links, accents     |
| `--brand-dark`     | `#343a40` | Footer background                      |
| `--text-black`     | `#000000` | Headings, `.text-black` class          |
| `--text-body`      | `gray`    | Body text color                        |
| `--check-green`    | `#71bc42` | Checkmark icons in lists               |
| `--disabled-gray`  | `#dee2e6` | Struck-through list items              |
| `--hover-bg`       | `#eff1f3` | Dropdown menu item hover               |

### Typography

| Token       | Value           | Notes                                     |
| ----------- | --------------- | ----------------------------------------- |
| Font family | `"Open Sans"`   | All headings + body (Google Fonts 300/400/700) |
| Hero h1     | `4rem` / `900`  | Desktop; `2rem` on mobile (< 992px)       |
| Body        | `1rem`, weight 400, line-height 1.7 |

### Components

| Element       | Style                                                      |
| ------------- | ---------------------------------------------------------- |
| `.btn`        | `border-radius: 30px`, padding `10px 30px`, font-size 16px |
| `.btn-primary`| bg `#fd7e14`, border `#fd7e14`, white text                |
| `.form-control`| height 43px, border-radius 30px                          |
| Dropdown      | border-top 2px solid `#fd7e14`, white bg, shadow           |
| `.site-section`| padding 2.5em mobile, 8em desktop                         |
| `.site-footer` | bg `#343a40`, padding 4em/8em                             |

### Section backgrounds

| Section          | Background                                    |
| ---------------- | --------------------------------------------- |
| Hero/Cover       | Full-viewport background image, dark overlay   |
| Features (3-col) | White (default)                                |
| About            | White (default)                                |
| Team             | White, border-bottom                           |
| Gallery          | White (default)                                |
| How It Works     | White (default)                                |
| Services (6-col) | `bg-light` (#f8f9fa), border-bottom           |
| Testimonials     | White (default)                                |
| Pricing + FAQ    | `bg-light` (#f8f9fa)                           |
| About (2nd)      | White (default)                                |
| Blog             | White (default)                                |
| Contact          | `bg-light` (#f8f9fa)                           |
| Footer           | `#343a40` dark                                 |

## Sections (in DOM order)

1. **Navbar** — Sticky, transparent-over-hero, `site-navbar` with "Banker."
   logo (`text-primary` dot), multi-level dropdown (About Us → Team, Pricing,
   FAQ, Gallery, Services, Testimonials), Blog, Contact, social icons
   (Facebook, Twitter, LinkedIn). Mobile hamburger menu (off-canvas right).
2. **Hero / Cover** — Full-viewport `site-blocks-cover` with background
   image (`hero_2.jpg`), dark overlay, centered text. Owl-carousel with 3
   slides: "Banking Solutions", "Financing Solutions", "Savings Accounts"
   (each h1 uppercase + paragraph + no button). Mouse scroll indicator at
   bottom.
3. **Features (3-col)** — Three icon+title+text cards: Money Savings (wallet),
   Online Shoppings (cart), Credit/Debit Cards (credit-card). Uses SVG
   flaticon icons, `w-25 mb-4` images. White background.
4. **About + Email Signup** — Two-column: left = circular-framed image
   (`circle-bg`), right = "Amortization Computation" heading, paragraph,
   check list (3 items, green checkmarks), inline email form (input +
   "Submit Email" button).
5. **About Us** — Two-column: centered "About Us" section title + lead text,
   then left = circular-framed image, right = "We Solve Your Financial
   Problem" heading + two paragraphs.
6. **Meet Team** — Centered "Meet Team" title + lead. 8 team member cards
   in a 4-column grid (2 rows). Each card: hover overlay with social icons,
   photo, name, position.
7. **Gallery** — Centered "Gallery" title. Filter buttons (All, Events, Party,
   Holidays) using isotope.js. 12-item grid (`no-gutter`) with hover overlay
   (search icon). Lightbox via fancybox.
8. **How It Works** — Centered title + lead. Two-column: left = owl-carousel
   of 3 images with prev/next arrows, right = owl-carousel of 3 steps
   (numbered "01. Online Applications", "02. Get an approval", "03. Card
   delivery" each with text + "Learn More" button).
9. **Our Services (6-col)** — `bg-light`, centered title. 6 service cards
   (3×2 grid): Business Consulting, Credit Card, Income Monitoring,
   Insurance Consulting, Financial Investment, Financial Management. Each
   has icon + title + text + "Learn More" link.
10. **Happy Customers / Testimonials** — Centered title. Owl-carousel of 4
    testimonials, each: blockquote + centered person image + name.
11. **Pricing** — `bg-light`, centered title. 3 pricing cards (col-lg-4):
    Basic ($47/yr), Premium ($200/yr, popular — `pricing-popular`), Professional
    ($750/yr). Each: title, price, feature list with check/cross marks,
    "Buy Now" button.
12. **FAQ** — Centered "Frequently Ask Questions" title. Two-column layout,
    8 Q&A items (4 per column). Each: h4 question + paragraph answer.
13. **About (2nd)** — Two-column: left = circular-framed image, right = 2
    feature items (Bank Loan, Banking Consultation) with icon + title + text
    + "Learn More" link. flaticon icons.
14. **Blog** — Centered "Our Blog" title. 3 blog post cards (col-lg-4):
    image, title, meta (author, date, category), excerpt, "Continue Reading..."
    link.
15. **Contact** — `bg-light`, centered "Contact Us" title. 3-column contact
    info (address, phone, email — each with `text-primary` icon). Contact
    form (white bg, `p-5`): First Name, Last Name, Email, Subject, Message
    textarea, "Send Message" button.
16. **Footer** — `#343a40` dark. 3-column row: left = About Us + Quick Links
    + Follow Us (social icons); right = Subscribe Newsletter (email + Send
    button). Bottom row: copyright text with heart icon.

## Requirements

### Feature: Banknote Banking Website

Feature: Banknote Banking Website
As a visitor to a banking services website
I want to navigate through banking offerings and services
So that I can learn about financial products and contact the company

Background:
- **GIVEN** the Banknote page is loaded
- **AND** the browser supports modern JavaScript

**── Navbar ────────────────────────────────────────────────────────**

#### Scenario: Sticky navbar with logo and navigation links

- **THEN** the navbar displays "Banknote." as the logo with an orange dot
- **AND** the navbar has links: Home, About Us, Blog, Contact
- **AND** the About Us link has a dropdown submenu
- **AND** the navbar has social icons (Facebook, Twitter, LinkedIn)

#### Scenario: Multi-level dropdown menu

- **WHEN** I hover over "About Us" in the navbar
- **THEN** a dropdown appears with: Team, Pricing, FAQ, Gallery, Services, Testimonials
- **AND** the dropdown has a top border of orange (#fd7e14)

#### Scenario: Mobile hamburger menu

- **GIVEN** the viewport is mobile width (< 768px)
- **THEN** a hamburger menu icon is visible
- **AND** the desktop navigation is hidden
- **WHEN** I tap the hamburger icon
- **THEN** a right-side off-canvas menu slides in

**── Hero ──────────────────────────────────────────────────────────**

#### Scenario: Hero section with carousel

- **THEN** a full-viewport hero section is visible
- **AND** the hero has a background image with dark overlay
- **AND** the hero displays "Banking Solutions" as the initial slide heading

#### Scenario: Hero carousel auto-rotates

- **GIVEN** the hero is showing "Banking Solutions"
- **WHEN** I wait for the carousel interval
- **THEN** the hero shows "Financing Solutions"

#### Scenario: Mouse scroll indicator

- **THEN** a mouse scroll indicator is visible at the bottom of the hero
- **AND** clicking it smooth-scrolls to the next section

**── Features ──────────────────────────────────────────────────────**

#### Scenario: Three-column feature cards

- **THEN** three feature cards are displayed
- **AND** the cards show: "Money Savings", "Online Shoppings", "Credit / Debit Cards"
- **AND** each card has an icon, title, and description paragraph

**── About + Email ────────────────────────────────────────────────**

#### Scenario: About section with circular image

- **THEN** a circular-framed image is displayed on the left
- **AND** "Amortization Computation" heading is on the right
- **AND** a green checkmark list with 3 items is displayed

#### Scenario: Email signup form

- **THEN** an email input field with placeholder "Enter your email" exists
- **AND** a "Submit Email" button is next to the input

**── About Us ─────────────────────────────────────────────────────**

#### Scenario: About Us section

- **THEN** "About Us" section title is centered
- **AND** a lead paragraph is displayed below the title
- **AND** "We Solve Your Financial Problem" heading appears with two paragraphs

**── Team ─────────────────────────────────────────────────────────**

#### Scenario: Team member grid

- **THEN** "Meet Team" title is centered
- **AND** 8 team member cards are displayed in a grid
- **AND** each card has a photo, name, and position
- **AND** each card shows social icons on hover

**── Gallery ──────────────────────────────────────────────────────**

#### Scenario: Filterable gallery

- **THEN** filter buttons are displayed: All, Events, Party, Holidays
- **AND** 12 gallery items are displayed in a grid
- **WHEN** I click the "Events" filter
- **THEN** only "Events" category items are visible

#### Scenario: Gallery hover overlay

- **WHEN** I hover over a gallery image
- **THEN** a dark overlay with a search icon appears

**── How It Works ────────────────────────────────────────────────**

#### Scenario: How It Works section

- **THEN** "How It Works" title is centered
- **AND** a carousel of 3 images is on the left
- **AND** 3 numbered steps are on the right: "01. Online Applications", "02. Get an approval", "03. Card delivery"
- **AND** each step has a "Learn More" button

**── Services ─────────────────────────────────────────────────────**

#### Scenario: Six-column services grid

- **THEN** "Our Services" title is centered on a light background
- **AND** 6 service cards are displayed: Business Consulting, Credit Card, Income Monitoring, Insurance Consulting, Financial Investment, Financial Management
- **AND** each card has an icon, title, description, and "Learn More" link

**── Testimonials ────────────────────────────────────────────────**

#### Scenario: Testimonial carousel

- **THEN** "Happy Customers" title is centered
- **AND** 4 testimonials are in an owl-carousel
- **AND** each testimonial has a blockquote, person image, and name

**── Pricing ──────────────────────────────────────────────────────**

#### Scenario: Three pricing tiers

- **THEN** 3 pricing cards are displayed on a light background
- **AND** the tiers are: Basic ($47/yr), Premium ($200/yr), Professional ($750/yr)
- **AND** the Premium tier has a "popular" highlight
- **AND** each card has a feature list and "Buy Now" button

#### Scenario: Pricing feature comparison

- **THEN** Basic has 3 included features and 2 excluded (struck-through)
- **AND** Premium has 4 included features and 1 excluded
- **AND** Professional has 5 included features and 0 excluded

**── FAQ ───────────────────────────────────────────────────────────**

#### Scenario: FAQ section

- **THEN** "Frequently Ask Questions" title is centered
- **AND** 8 FAQ items are displayed in two columns (4 per column)
- **AND** each FAQ has a question heading and answer paragraph

**── About (2nd) ────────────────────────────────────────────────**

#### Scenario: Second about section with features

- **THEN** a circular-framed image is on the left
- **AND** 2 feature items are on the right: "Bank Loan" and "Banking Consultation"
- **AND** each feature has an icon, title, text, and "Learn More" link

**── Blog ──────────────────────────────────────────────────────────**

#### Scenario: Blog posts grid

- **THEN** "Our Blog" title is centered
- **AND** 3 blog post cards are displayed
- **AND** each card has an image, title, meta info (author, date, category), excerpt, and "Continue Reading..." link

**── Contact ──────────────────────────────────────────────────────**

#### Scenario: Contact info

- **THEN** "Contact Us" title is centered on a light background
- **AND** 3 contact details are displayed: address, phone, email
- **AND** each has an orange icon

#### Scenario: Contact form

- **THEN** a contact form is displayed with fields: First Name, Last Name, Email, Subject, Message
- **AND** a "Send Message" button submits the form
- **AND** the form has a white background with padding

**── Footer ───────────────────────────────────────────────────────**

#### Scenario: Footer layout

- **THEN** the footer has a dark background (#343a40)
- **AND** it displays "About Us" text, "Quick Links", and "Follow Us" social icons
- **AND** a "Subscribe Newsletter" section with email input and "Send" button
- **AND** a copyright line at the bottom

#### Scenario: Footer links

- **THEN** "Quick Links" contains: Terms, Policy, About Us, Services, Testimonials, Contact Us
- **AND** all footer links smooth-scroll to the corresponding sections

**── Cross-cutting ───────────────────────────────────────────────**

#### Scenario: Responsive layout

- **GIVEN** the viewport is mobile width
- **THEN** the navbar collapses to a hamburger menu
- **AND** multi-column grids stack to single column
- **AND** the hero heading reduces to 2rem

#### Scenario: AOS scroll animations

- **THEN** elements with data-aos attributes animate on scroll
- **AND** fade-up is the most common animation type

## Verification Checklist

- [ ] All sections from the original DOM order are present
- [ ] Orange (#fd7e14) brand color used consistently for buttons, accents, active states
- [ ] Open Sans font loaded via Google Fonts (300, 400, 700 weights)
- [ ] Pill-shaped buttons (border-radius: 30px) on all buttons and form controls
- [ ] Full-viewport hero with background image overlay and carousel
- [ ] Multi-level dropdown navbar with correct border-top color
- [ ] 8 team members in a responsive 4-column grid
- [ ] Isotope-style gallery with filter buttons
- [ ] How It Works: image carousel + 3-step text carousel side by side
- [ ] 6 service cards on light background
- [ ] Testimonial carousel with centered quotes
- [ ] 3 pricing cards with feature check/cross lists
- [ ] FAQ in two-column layout (8 items)
- [ ] Contact form with all 5 fields
- [ ] Dark footer (#343a40) with About, Quick Links, Social, Newsletter
- [ ] Responsive: mobile hamburger, stacking grids, reduced hero heading
- [ ] Placeholder images use picsum.photos/seed/banknote-{n}/w/h
- [ ] No ColorLib references in app code — provenance only in spec + TEMPLATES.md
- [ ] Footer links to https://www.componentdock.com/
- [ ] AOS scroll animations replicated (fade-up on scroll)
