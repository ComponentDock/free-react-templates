# Template: SearchCraft (SEO / Digital Agency)

## Purpose

Recreation of ColorLib "Seo" template
(preview: https://preview.colorlib.com/theme/seo/
· source: https://colorlib.com/wp/template/seo/).

Stack: React 19 · Vite · Tailwind CSS 4 · TypeScript (strict).
Tests: Vitest + Testing Library, 100% coverage enforced.

## Design Tokens (extracted from live preview CSS)

| Token                | Value                              | Notes                                      |
|----------------------|------------------------------------|--------------------------------------------|
| Brand primary        | `#f54349`                          | Used on buttons, hover states, accent      |
| Brand gradient       | `linear-gradient(90deg, #f45622 0%, #f53e54 100%)` | Banner overlay, primary-btn bg, hover fills |
| Secondary accent     | `#4cd3e3`                          | Used in donut chart / stats                |
| Tertiary accent      | `#38a4ff`                          | Chart segments                             |
| Quaternary accent    | `#f4e700`                          | Chart segments                             |
| Background alt       | `#f9f9ff`                          | Menutop strip, alternating sections        |
| Body text            | `#777777`                          | Paragraphs, secondary text                 |
| Heading text         | `#222222`                          | H1–H6 headings                            |
| White                | `#fff`                             | Banner text, footer text                   |
| Font family          | `"Poppins", sans-serif`            | All weights 300–700 via Google Fonts       |
| Button radius        | `0px` (primary), `3px` (cards)    | Square primary buttons, slightly rounded cards |
| Section background   | Gradient overlay on dark image     | Banner + testimonial sections use overlay  |
| Section gap          | `.section-gap` class               | Consistent vertical spacing between sections |

## Section Order (from live preview DOM)

1. **Header** — top info bar (phone, email, "Free Seo Analysis" link) + navbar (logo, nav links: Home/Service/Plan/Team/Blog/Pages dropdown)
2. **Banner/Hero** — dark overlay background image, 2-column: left = headline ("Seo Analysis Helps to Upgrade Website Ranking") + subtext + CTA button ("Get a Quote"); right = header image
3. **Services** — 3-column grid: icon + title + description (Diagnosis Devices, Software Installation, Virus & Malware Removal)
4. **About** — 2-column: left = donut chart widget; right = heading + paragraph + CTA ("See Details")
5. **Related** — Carousel/slider with 2 slides: heading + paragraph + CTA + image (SEO content related)
6. **Pricing** — 3 pricing cards (Standard £199, Business £399, Premium £599): plan name, price, description, feature list, purchase button
7. **Team** — 4-column: photo + social overlay + name + role (Ethel Davis, Rodney Cooper, Dora Walker, Lena Keller)
8. **Testimonials** — dark overlay background, carousel: user avatar + quote text + name + title
9. **Blog** — (not present in this template)
10. **Brand Logos** — 5 grayscale partner/client logos in a row
11. **Contact** — title + 2-column form (left: name/email/subject; right: textarea + send button)
12. **Footer** — 3-column: Top Products links | Newsletter (email + subscribe) | Instagram feed (8 thumbnails) + copyright + social icons

## Requirements

### Feature: Header Navigation

#### Scenario: Top info bar displays contact info

- **GIVEN** the user visits the SearchCraft page
- **THEN** a top info bar shows a phone number and email address
- **AND** a "Free SEO Analysis" link is visible on the right side of the bar

#### Scenario: Navbar renders with logo and links

- **GIVEN** the user visits the SearchCraft page
- **THEN** the navbar shows a logo image
- **AND** navigation links: Home, Service, Plan, Team, Blog, Pages
- **AND** the Pages link has a dropdown with Generic and Elements items

#### Scenario: Navbar collapses on mobile

- **GIVEN** the user views on a mobile viewport
- **THEN** the navbar shows a hamburger toggle button
- **AND** clicking the toggle expands/collapses the nav links

### Feature: Banner / Hero Section

#### Scenario: Hero section renders with heading and CTA

- **GIVEN** the user visits the SearchCraft page
- **THEN** the hero section displays "Seo Analysis Helps to Upgrade Website Ranking"
- **AND** a descriptive paragraph below the heading
- **AND** a "Get a Quote" CTA button with gradient background
- **AND** a header image on the right side (desktop)

#### Scenario: Hero has dark overlay

- **GIVEN** the user visits the SearchCraft page
- **THEN** the banner area has a dark overlay over a background image
- **AND** the text is white on the dark overlay

### Feature: Services Section

#### Scenario: Services section displays 3 service cards

- **GIVEN** the user scrolls to the services section
- **THEN** the section heading reads "Device Related Services"
- **AND** 3 service cards are displayed in a row
- **AND** each card has an icon, title, and description

#### Scenario: Service cards have icons

- **GIVEN** the services section is visible
- **THEN** "Diagnosis Devices" has a magic-wand icon
- **AND** "Software Installation" has a rocket icon
- **AND** "Virus & Malware Removal" has a bug icon

### Feature: About Section

#### Scenario: About section renders with chart and text

- **GIVEN** the user scrolls to the about section
- **THEN** the left column displays a donut chart
- **AND** the right column has a heading "We Believe that Interior beautifies the"
- **AND** a paragraph below the heading
- **AND** a "See Details" CTA button

### Feature: Related Content Section

#### Scenario: Related section displays carousel

- **GIVEN** the user scrolls to the related section
- **THEN** the section heading reads "Device Related Services"
- **AND** a carousel with at least 2 slides
- **AND** each slide has a heading, paragraph, CTA button, and image

### Feature: Pricing Section

#### Scenario: Pricing displays 3 plans

- **GIVEN** the user scrolls to the pricing section
- **THEN** the section heading reads "Choose the Perfect Plan for you"
- **AND** 3 pricing cards are displayed: Standard (£199), Business (£399), Premium (£599)

#### Scenario: Each pricing card has complete content

- **GIVEN** a pricing card is visible
- **THEN** it shows the plan name, price, and description
- **AND** a feature list with at least 5 items
- **AND** a "Purchase Plan" button with gradient background

### Feature: Team Section

#### Scenario: Team section displays 4 members

- **GIVEN** the user scrolls to the team section
- **THEN** the section heading reads "About Creative Agency Team"
- **AND** 4 team member cards are displayed
- **AND** each card shows a photo, name, and role
- **AND** each card has social media overlay (Facebook, Twitter, LinkedIn)

### Feature: Testimonial Section

#### Scenario: Testimonials render in carousel

- **GIVEN** the user scrolls to the testimonials section
- **THEN** testimonials display in a carousel/slider
- **AND** each testimonial has a user avatar, quote, name, and title
- **AND** the section has a dark overlay background

### Feature: Brand Logos Section

#### Scenario: Brand logos display in a row

- **GIVEN** the user scrolls to the brand section
- **THEN** 5 brand/partner logos are displayed in a row
- **AND** logos are grayscale by default

### Feature: Contact Form Section

#### Scenario: Contact form renders with all fields

- **GIVEN** the user scrolls to the contact section
- **THEN** the section heading reads "Contact Us"
- **AND** the form has fields: Name, Email, Subject, Message
- **AND** a "Send Message" button

#### Scenario: Contact form validates required fields

- **GIVEN** the user clicks "Send Message" without filling fields
- **THEN** validation errors appear for Name, Email, Subject, and Message

### Feature: Footer

#### Scenario: Footer has 3 columns

- **GIVEN** the user scrolls to the footer
- **THEN** the left column shows "Top Products" links
- **AND** the middle column shows a Newsletter signup (email input + Subscribe button)
- **AND** the right column shows Instagram feed thumbnails

#### Scenario: Footer has copyright and social links

- **GIVEN** the user views the footer bottom
- **THEN** a copyright line is displayed
- **AND** social media icons (Facebook, Twitter, Dribbble, Behance) are visible
- **AND** a "Component Dock" attribution link is present

## Verification checklist

- [ ] All 11 sections rendered in correct order
- [ ] Header: top bar + navbar with dropdown
- [ ] Banner: dark overlay, 2-column, gradient CTA button
- [ ] Services: 3 cards with icons in a row
- [ ] About: donut chart placeholder + text + CTA
- [ ] Related: carousel with 2+ slides
- [ ] Pricing: 3 cards with plan details + feature lists
- [ ] Team: 4 member cards with social overlays
- [ ] Testimonials: carousel with dark overlay background
- [ ] Brand logos: 5 grayscale logos in a row
- [ ] Contact form: name, email, subject, message + submit
- [ ] Footer: 3 columns (products, newsletter, instagram) + copyright + social icons
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] Responsive (mobile hamburger menu, stacked columns on mobile)
- [ ] 100% test coverage
- [ ] Design tokens match: Poppins font, #f54349 brand, gradient buttons, #f9f9ff alt bg
