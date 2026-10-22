# Template: Signalwave (Internet Service Provider)
<!-- prep-status: shipped-as=blinkwave -->
> **SHIPPED-UNDER** — the ColorLib `fastnet` design this prep describes already
> ships as `apps/blinkwave` (<https://blinkwave.free.componentdock.com>).
> Do not scaffold `apps/signalwave`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-blinkwave/spec.md`.

## Purpose

Recreation of ColorLib **Fastnet** (`https://colorlib.com/wp/template/fastnet/`).
Preview URL: `https://preview.colorlib.com/theme/fastnet/` (reachable — live DOM + CSS analyzed).
Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript.

An internet service provider (ISP) website template for broadband/TV/phone companies.
Dark navy and red accent palette, slider hero, pricing cards, testimonials, and blog.

## Source references

- **ColorLib slug:** `fastnet`
- **ColorLib page:** `https://colorlib.com/wp/template/fastnet/`
- **Preview (reachable):** `https://preview.colorlib.com/theme/fastnet/`
- **Screenshot:** `https://colorlib.com/wp/wp-content/uploads/sites/2/fastnet-free-template.jpg`
- **Description (from ColorLib):** "Fastnet — Free Internet Service Website Template" (ISP / broadband provider theme).
- **Research note:** Preview fetched successfully. HTML structure + CSS (`style.css`, 176 KB) extracted. Design tokens extracted from stylesheet. Muli font loaded from Google Fonts.

## Design tokens

### Colors

| Token             | Hex       | Usage                                          |
| ----------------- | --------- | ---------------------------------------------- |
| `--color-primary` | `#ff3e3f` | CTA buttons, accent highlights, links, hover   |
| `--color-navy`    | `#072366` | Dark navy for headings, pricing features       |
| `--color-navy-dk` | `#002d5b` | Deeper navy for hero text                      |
| `--color-text`    | `#464d65` | Body text, secondary headings                  |
| `--color-muted`   | `#635c5c` | Muted/secondary text                           |
| `--color-subtle`  | `#838a9b` | Lighter muted text, feature lists              |
| `--color-bg`      | `#ffffff` | Page background                                |
| `--color-bg-alt`  | `#fafafa` | Alternate section / pricing card background    |
| `--color-footer`  | `#11141b` | Dark footer background                         |
| `--color-footer-lt` | `#101720` | Footer bottom bar                            |
| `--color-white`   | `#ffffff` | Text on dark backgrounds                       |
| `--color-light`   | `#bdbdbd` | Light text on dark footer                      |

### Typography

| Element   | Font Family          | Style                         |
| --------- | -------------------- | ----------------------------- |
| Headings  | "Muli", sans-serif   | Bold/semibold, navy (#072366) |
| Body      | "Muli", sans-serif   | Regular, #464d65              |
| Nav links | "Muli", sans-serif   | Regular, dark text            |

### Border radii

| Token    | Value   | Usage                         |
| -------- | ------- | ----------------------------- |
| `--radius-sm`  | `4px`   | Subtle rounding on cards      |
| `--radius-md`  | `8px`   | Pricing cards, inputs         |
| `--radius-lg`  | `20px`  | Hero slider elements          |
| `--radius-pill`| `50px`  | Pill-shaped CTA buttons       |

### Buttons

- Primary: background `#ff3e3f`, color `#fff`, border-radius `50px` (pill), hover darkens slightly
- Secondary/outline: transparent bg, border, dark text, hover fills red
- Font: "Muli", weight 600

### Overall aesthetic

- Clean, professional ISP/broadband provider look
- Red (#ff3e3f) accent against white and dark navy backgrounds
- Full-width hero slider with dark overlay
- Light section backgrounds (#fafafa) alternate with white
- Dark footer (#11141b) with light text
- Muli font gives modern, rounded feel

## Requirements

### Feature: Signalwave — Internet Service Provider Template

Feature: Signalwave ISP Template
As a visitor to an internet service provider website
I want to learn about plans, read about the company, and get in touch
So that I can choose an internet plan and contact support

Background:
- **GIVEN** the user is on the Signalwave homepage
- **AND** the page has loaded completely

**--- Header / Navbar ---**

#### Scenario: Header displays top bar and navigation

- **THEN** the header should have a top bar with contact info (phone, email)
- **AND** the header should display the brand name "Signalwave"
- **AND** the header should contain navigation links (Home, About, Packages, Features, Blog, Contact)
- **AND** the navbar should have a mobile hamburger menu on small screens
- **AND** the header should be sticky on scroll

#### Scenario: Header top bar shows social icons

- **THEN** the top bar should display social media icon links

**--- Hero Slider ---**

#### Scenario: Hero section displays a full-width image slider

- **THEN** the hero section should show a slider with multiple slides
- **AND** each slide should have a headline (e.g. "Don't suffer the buffer, get super internet")
- **AND** each slide should have a description paragraph
- **AND** each slide should have a "View Packages" CTA button
- **AND** the slider should auto-advance on a timer

#### Scenario: Hero slider navigation works

- **THEN** the slider should have navigation arrows or dots
- **WHEN** the user clicks next/prev
- **THEN** the slider should advance/go back accordingly

**--- About Section ---**

#### Scenario: About section presents the company

- **THEN** there should be an "About" section with a split layout (image + text)
- **AND** it should have a heading like "We listen and work together for Great experience"
- **AND** it should include descriptive paragraphs about the company
- **AND** it should have a "View Packages" or "About Us" CTA button
- **AND** the layout should be image on one side, text on the other

**--- Services Section ---**

#### Scenario: Services section shows 4 service cards

- **THEN** there should be a "Services" section
- **AND** there should be 4 service cards displayed in a row
- **AND** each card should have an icon, title, and brief description
- **AND** the service titles should include "Perfect in Coverage", "Live Call Support", "Secured Payment", "1 Gbps Data Rate"
- **AND** the cards should be centered with icon on top

**--- Pricing Section ---**

#### Scenario: Pricing section displays 3 plan tiers

- **THEN** there should be a "Pricing" section heading
- **AND** there should be 3 pricing cards side by side
- **AND** the cards should be labeled "Single Package", "Half Package", "Full Package"
- **AND** each card should show: plan name, description, price, and feature list
- **AND** prices should be "$20.00/mo", "$25.00/mo", "$29.00/mo" respectively
- **AND** each card should have a "View Packages" CTA button
- **AND** features should include: Line Rental Included, 12 Month Contract, No Activation Charges, Up to 12Mbps average Speed

#### Scenario: Pricing cards have consistent feature lists

- **THEN** all pricing cards should show the same set of features
- **AND** only the plan name, description, and price should differ

**--- Testimonial Section ---**

#### Scenario: Testimonials section displays customer feedback

- **THEN** there should be a "Testimonials" section
- **AND** it should have a heading like "What our clients think about us"
- **AND** there should be at least 2 testimonial entries
- **AND** each testimonial should have a quote, customer name, and role
- **AND** testimonials should be displayed in a slider/carousel
- **AND** there should be a sidebar image or content alongside the testimonials

**--- Blog Section ---**

#### Scenario: Blog section shows recent posts

- **THEN** there should be a "Blog" section
- **AND** there should be 3 blog post cards
- **AND** each card should show an image, title, and date
- **AND** the cards should be in a 3-column grid
- **AND** each card should have a "Read More" or link element

**--- Footer ---**

#### Scenario: Footer displays brand info and navigation

- **THEN** the footer should have a dark background (#11141b)
- **AND** the footer should contain: brand description, phone number, email
- **AND** the footer should have "Our Support" link column
- **AND** the footer should have "Quick Link" column
- **AND** the footer should have a newsletter signup with email input
- **AND** the footer should have social media icon links
- **AND** the footer should link to componentdock.com ("Made with Component Dock")
- **AND** the footer should have a copyright line

**--- Responsive ---**

#### Scenario: Template is responsive

- **WHEN** the viewport is resized to mobile width (375px)
- **THEN** all sections should stack vertically
- **AND** the navbar should collapse to a hamburger menu
- **AND** pricing cards should stack vertically
- **AND** images should scale to fit their containers
- **AND** text should remain readable

**--- Accessibility ---**

#### Scenario: Template meets basic accessibility

- **THEN** all images should have alt text
- **AND** interactive elements should be keyboard-focusable
- **AND** color contrast should meet WCAG AA standards
- **AND** semantic HTML elements should be used (nav, main, section, footer)

## Verification checklist

- [ ] Header: top bar with contact info, sticky nav, brand name, mobile hamburger
- [ ] Hero: full-width slider, 2+ slides, headline + description + CTA, auto-advance
- [ ] About: split layout (image + text), heading, paragraphs, CTA button
- [ ] Services: 4 service cards with icons, titles, descriptions
- [ ] Pricing: 3 pricing cards (Single/Half/Full), prices, feature lists, CTA
- [ ] Testimonials: 2+ quotes with names/roles, slider, sidebar image
- [ ] Blog: 3 post cards with images, titles, dates
- [ ] Footer: dark bg, columns (Support, Quick Links), newsletter, social, copyright
- [ ] Responsive: mobile hamburger, stacked pricing, readable text
- [ ] Accessibility: alt text, keyboard nav, WCAG AA contrast, semantic HTML
- [ ] Design tokens: Muli font, #ff3e3f accent, #072366 navy, pill buttons
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] Footer links to componentdock.com
