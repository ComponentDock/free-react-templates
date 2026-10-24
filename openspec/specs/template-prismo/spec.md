# Template: Prismo (Business / Digital Agency)
<!-- prep-status: shipped-as=doflo -->
> **SHIPPED-UNDER** — the ColorLib `dizzi` design this prep describes already
> ships as `apps/doflo` (<https://doflo.free.componentdock.com>).
> Do not scaffold `apps/prismo`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-doflo/spec.md`.

## Purpose

Recreation of ColorLib "Dizzi" — a professional business / digital agency
website template. Single-page React app; all sections on one page.

- **Source slug:** `dizzi`
- **ColorLib page:** https://colorlib.com/wp/template/dizzi/
- **Live preview:** https://preview.colorlib.com/theme/dizzi/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/dizzi-free-template.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design Tokens (extracted from preview CSS)

| Token              | Value                              | Notes                                      |
| ------------------ | ---------------------------------- | ------------------------------------------ |
| Font family        | `"Open Sans", sans-serif`          | Google Fonts 300/400/600/700               |
| Brand / accent     | `#00d089` (green)                  | Buttons, section subtitle text, link hover |
| Button hover       | `#0042ff` (blue)                   | `.btn_1:hover`                             |
| Heading color      | `#000`                             | h1–h6, font-weight 700                     |
| Body text          | `#848484`                          | paragraphs, font-weight 300                |
| Button radius      | `50px` (pill)                      | `.btn_1` border-radius                     |
| Button padding     | `27px 70px` desktop / `10px 30px` mobile | Pill CTA buttons                      |
| Section padding    | `140px 0` desktop / `70px 0` mobile | `.section_padding`                       |
| Section title p    | `#00d089`, uppercase, 16px        | Subtitle under section heading             |
| CTA section bg     | Dark / image-based (banner area)   | Hero uses background image                 |
| About img area     | Light / white background           | Left image, right text layout              |
| Services bg        | Light gray                         | 3-column numbered service cards            |
| Projects bg        | White                              | Filterable grid with hover overlay         |
| Creative section   | Left image, right text + video CTA | Full-width fluid container                 |
| Testimonials bg    | White                              | Owl carousel, client avatars               |
| CTA banner         | Green bg (`#00d089`) or image      | "Let's create something awesome"           |
| Footer bg          | Dark (dark surface)                | 4-column footer                            |

## Requirements

### Navbar

Feature: Navbar

#### Scenario: Logo and navigation links

- **GIVEN** the user visits the page
- **THEN** a navbar is visible at the top
- **AND** it contains links: Home, About, Services, Blog, Pages (dropdown), Contact
- **AND** social icons (Facebook, Twitter, Dribbble, Instagram) appear on desktop
- **AND** a hamburger menu toggle appears on mobile

#### Scenario: Sticky navbar on scroll

- **GIVEN** the user scrolls down
- **THEN** the navbar becomes sticky with a subtle shadow

### Hero / Banner

Feature: Hero Banner

#### Scenario: Hero displays headline and CTA

- **GIVEN** the user visits the page
- **THEN** a hero banner is visible
- **AND** it contains subtitle "We are digital agency"
- **AND** headline "Digital and innovative idea"
- **AND** a CTA button "Explore Work"
- **AND** the background is a dark overlay image

### Client Logos

Feature: Client Logo Carousel

#### Scenario: Logo carousel displays partner logos

- **GIVEN** the user scrolls to the client logos section
- **THEN** a horizontal carousel of 6+ partner logos is visible
- **AND** the logos auto-scroll in an infinite loop

### About Us

Feature: About Section

#### Scenario: About section shows company info

- **GIVEN** the user scrolls to the About section
- **THEN** subtitle "About Us" is shown in brand green
- **AND** heading "Digital design and development company"
- **AND** a paragraph of body text
- **AND** a CTA button "explore us"
- **AND** an illustration image on the right

### Services

Feature: Services Section

#### Scenario: Three service cards are displayed

- **GIVEN** the user scrolls to the services section
- **THEN** 3 numbered service cards are shown (01, 02, 03)
- **AND** each card has a heading, description paragraph, and bullet list
- **AND** card 01 is "User experience design"
- **AND** card 02 is "Web and App development"
- **AND** card 03 is "Digital and innovative marketing"

### Projects / Portfolio

Feature: Projects Section

#### Scenario: Portfolio grid with filters

- **GIVEN** the user scrolls to the projects section
- **THEN** subtitle "our project" and heading "Our Projects" are shown
- **AND** filter tabs "All", "Web Design", "Mobile App" are visible
- **AND** 2 project cards are shown with images
- **AND** hovering a card shows an overlay with category + title
- **AND** a "more projects" link is visible on desktop

### Creative / Video Section

Feature: Creative Section

#### Scenario: Full-width creative section with video CTA

- **GIVEN** the user scrolls to the creative section
- **THEN** heading "We work hard and think creatively"
- **AND** a paragraph + quote
- **AND** a "See how we work" link with play icon (YouTube popup)
- **AND** an illustration image on the left

### Testimonials

Feature: Testimonials Section

#### Scenario: Client testimonials carousel

- **GIVEN** the user scrolls to the testimonials section
- **THEN** subtitle "Testimonials" and heading "What our Client say"
- **AND** a carousel of at least 2 testimonials
- **AND** each testimonial has an avatar, name, role, and quote

### CTA Banner

Feature: CTA Banner

#### Scenario: Call-to-action banner

- **GIVEN** the user scrolls to the CTA section
- **THEN** heading "Let's create something awesome together"
- **AND** a CTA button "Discuss project"
- **AND** the background is brand green or a dark overlay image

### Footer

Feature: Footer

#### Scenario: 4-column footer

- **GIVEN** the user scrolls to the footer
- **THEN** 4 columns are shown: brand info + nav, Company links, Resources links, Contact info
- **AND** social icons are visible
- **AND** contact info shows 2 office locations (London, New York)
- **AND** the footer links to https://www.componentdock.com/
- **AND** a "More templates at Component Dock" or equivalent line is present

## Verification checklist

- [ ] All sections render in correct order matching the original
- [ ] Design tokens match: Open Sans, #00d089 brand green, pill buttons, #000 headings, #848484 body
- [ ] Responsive: hamburger nav on mobile, stacked columns, adjusted padding
- [ ] No references to ColorLib in app code (only in spec + TEMPLATES.md)
- [ ] Footer links to componentdock.com
- [ ] Placeholder images use picsum.photos/seed/prismo-*
- [ ] Google Fonts loaded via index.html link
- [ ] Icons from lucide-react (replacing ti- icons)
- [ ] Works with packages/ui components where possible
- [ ] Navbar — a navbar is visible at the top
- [ ] Hero / Banner — a hero banner is visible
- [ ] Client Logos — a horizontal carousel of 6+ partner logos is visible
- [ ] About Us — subtitle "About Us" is shown in brand green
- [ ] Services — 3 numbered service cards are shown (01, 02, 03)
- [ ] Projects / Portfolio — subtitle "our project" and heading "Our Projects" are shown
- [ ] Creative / Video Section — heading "We work hard and think creatively"
- [ ] Testimonials — subtitle "Testimonials" and heading "What our Client say"
- [ ] CTA Banner — heading "Let's create something awesome together"
