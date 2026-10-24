# Template: Craftly (Creative Agency)
<!-- prep-status: shipped-as=forgehub -->
> **SHIPPED-UNDER** — the ColorLib `create` design this prep describes already
> ships as `apps/forgehub` (<https://forgehub.free.componentdock.com>).
> Do not scaffold `apps/craftly`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-forgehub/spec.md`.

## Purpose

Recreation of ColorLib's **Create** template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page creative agency website.

- **Source:** https://colorlib.com/wp/template/create/
- **Preview:** https://preview.colorlib.com/theme/create/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/create-free-template.jpg
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript, Vitest + Testing Library
- **App name:** `craftly` (never reuse ColorLib source name "create")
- **Package:** `@free-react-templates/craftly`
- **Surge:** `craftly.free.componentdock.com`
- **Source design:** ColorLib "Create" — https://colorlib.com/wp/template/create/

## Design Tokens (from preview CSS)

| Token             | Value                                  | Notes                                     |
| ----------------- | -------------------------------------- | ----------------------------------------- |
| Font family       | `Quicksand` (Google Fonts)             | 300, 400, 500, 700, 900 weights           |
| Brand primary     | `#32dbc6`                              | Teal — buttons, links, accents, checkmarks|
| Dark bg           | `#000000`                              | Hero overlay, feature band background     |
| Footer bg         | `#333333`                              | Site footer                               |
| Body text         | `#4d4d4d`                              | Default paragraph color                   |
| Border color      | `#edf0f5`                              | Subtle dividers, form borders             |
| Light bg          | `#f8f9fa`                              | Light section alternate backgrounds       |
| Button radius     | `30px`                                 | Pill-shaped buttons                       |
| Button padding    | `15px 30px`                            | `.btn-md` size class                      |
| Button font       | `12px`, uppercase, `letter-spacing: .1em` | CTA style                           |
| Form control      | `border-radius: 30px`, height `43px`  | Pill-shaped inputs                        |
| Section padding   | `2.5em 0` (mobile) / `5em 0` (desktop)| Standard vertical rhythm                  |

## Visual Description (from screenshot)

The template is a clean, modern creative agency onepage. White navbar with "Create." logo (teal dot accent). Full-width hero with dark background image, centered headline "We Love To Build" with a typed-words animation cycling through "Web Apps", "WordPress", "Mobile Apps", and a "Watch Video" pill button. Below: 3-column services grid with large numbered watermarks (01, 02, 03) in teal, each with a heading, paragraph, and checkmark list. Portfolio grid of 6 images in 3 columns with hover overlay showing project title and category. A black-background features band with an image on the left and 4 service items (Strategy, Web Development, Art Direction, Copywriting) with Material-style icons on the right. Testimonials section with a carousel. Blog section with 3 post cards. Contact section with form (pill-shaped inputs) and address card. Teal CTA banner ("Let's Get Started"). Dark footer with About Us, Features links, Follow Us social icons, and newsletter subscribe form.

## Requirements

### Feature: Top Bar

#### Scenario: Top bar displays contact info and social links

- **GIVEN** I visit the Craftly homepage
- **THEN** I see a dark top bar with phone number and email address
- **AND** I see social media icon links (Facebook, Twitter, Instagram, LinkedIn)

### Feature: Navbar

#### Scenario: Sticky navbar shows logo and navigation links

- **GIVEN** I visit the Craftly homepage
- **THEN** I see a white sticky navbar with the "Craftly" logo (teal dot accent)
- **AND** I see navigation links: Home, Work, Services, About, Blog, Contact

#### Scenario: About link has a dropdown submenu

- **GIVEN** I hover over the "About" nav link
- **THEN** I see a dropdown with "Specialties" and "Our Team" links

#### Scenario: Mobile hamburger menu toggles navigation

- **GIVEN** I view the page on a mobile viewport
- **WHEN** I tap the hamburger menu icon
- **THEN** the mobile navigation menu opens

### Feature: Hero Section

#### Scenario: Hero displays headline with typed animation and CTA

- **GIVEN** I visit the Craftly homepage
- **THEN** I see a hero section with a dark background image
- **AND** the headline reads "We Love To Build" followed by a cycling word
- **AND** I see a "Watch Video" pill button

### Feature: Services Section

#### Scenario: Three-column services grid shows numbered items

- **GIVEN** I scroll to the services section
- **THEN** I see 3 service cards in a row
- **AND** each card has a large number (01, 02, 03), a teal heading, description text, and a checkmark list

#### Scenario: Services have correct content

- **GIVEN** I view the services section
- **THEN** card 01 is titled "Innovate" with items: Customer Experience, Product Management, Proof of Concept
- **AND** card 02 is titled "Create" with items: Web Design, Branding, Web & App Development
- **AND** card 03 is titled "Scale" with items: Social Media, Paid Campaigns, Marketing & SEO

### Feature: Portfolio Section

#### Scenario: Portfolio displays 6 project images in a grid

- **GIVEN** I scroll to the portfolio section
- **THEN** I see the heading "Our Works"
- **AND** I see 6 portfolio items in a 3-column grid
- **AND** each item shows an image with a hover overlay containing a title and category label

#### Scenario: Portfolio grid is responsive

- **GIVEN** I view the portfolio on a tablet viewport
- **THEN** the items reflow into 2 columns
- **AND** on mobile they stack into 1 column

### Feature: Features Band

#### Scenario: Black features band shows 4 service items

- **GIVEN** I scroll to the features band
- **THEN** I see a dark (black) background section
- **AND** there is an image on the left half
- **AND** I see 4 feature items on the right: Strategy, Web Development, Art Direction, Copywriting
- **AND** each item has a Material icon, heading, description, and "Read More" link

### Feature: Testimonials Section

#### Scenario: Testimonials carousel displays quotes

- **GIVEN** I scroll to the testimonials section
- **THEN** I see the heading "Testimonials"
- **AND** I see a carousel with testimonial quotes
- **AND** each testimonial has an author name and role

### Feature: Blog Section

#### Scenario: Blog shows 3 post cards

- **GIVEN** I scroll to the blog section
- **THEN** I see the heading "Recent Posts"
- **AND** I see 3 blog post cards in a row
- **AND** each card has an image, title, author, date, category, excerpt, and "Continue Reading..." link

### Feature: Contact Section

#### Scenario: Contact form accepts user input

- **GIVEN** I scroll to the contact section
- **THEN** I see the heading "Contact Us"
- **AND** I see a form with fields: First Name, Last Name, Email, Subject, Message
- **AND** I see a "Send Message" submit button
- **AND** I see an address card with Address, Phone, and Email

#### Scenario: Form inputs have pill-shaped styling

- **GIVEN** I view the contact form
- **THEN** all text inputs and textarea have rounded (pill) borders

### Feature: CTA Banner

#### Scenario: Teal CTA banner prompts action

- **GIVEN** I scroll to the CTA banner below the contact section
- **THEN** I see a teal (#32dbc6) background band
- **AND** it displays the text "Let's Get Started"

### Feature: Footer

#### Scenario: Dark footer shows about, links, social, and newsletter

- **GIVEN** I scroll to the footer
- **THEN** I see a dark (#333333) background footer
- **AND** I see an "About Us" text block
- **AND** I see a "Features" link list (About Us, Services, Testimonials, Contact Us)
- **AND** I see "Follow Us" social media icon links
- **AND** I see a newsletter subscribe form with email input and "Send" button
- **AND** I see a copyright line with a link to https://www.componentdock.com/

### Feature: Accessibility

#### Scenario: Page uses semantic HTML and ARIA attributes

- **GIVEN** I view the page source
- **THEN** navigation uses `<nav>` elements
- **AND** headings follow a logical hierarchy (h1 > h2 > h3)
- **AND** form fields have associated `<label>` elements
- **AND** social links have descriptive text or aria-labels

## Verification checklist

- [ ] Navbar is sticky and highlights active section on scroll
- [ ] Typed animation cycles through words in the hero
- [ ] Portfolio hover overlays show title + category
- [ ] Testimonials carousel auto-plays and can be navigated
- [ ] Contact form validates required fields
- [ ] All images use placeholder URLs (picsum.photos)
- [ ] No ColorLib references in app code (provenance only in spec + PR)
- [ ] Footer links to https://www.componentdock.com/
- [ ] All CSS design tokens match the original (Quicksand, #32dbc6, pill buttons)
- [ ] Responsive: 3-col → 2-col → 1-col breakpoints
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] `npm run verify:app craftly` passes
