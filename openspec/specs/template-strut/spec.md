# Template: Strut (Industrial / Construction)
<!-- prep-status: shipped-as=industrix -->
> **SHIPPED-UNDER** — the ColorLib `durg` design this prep describes already
> ships as `apps/industrix` (<https://industrix.free.componentdock.com>).
> Do not scaffold `apps/strut`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-industrix/spec.md`.

## Purpose

Recreation of the ColorLib "Durg" industrial/construction website template as a
single-page React application.

- **Source template:** ColorLib Durg — https://colorlib.com/wp/template/durg/
- **Preview URL:** https://preview.colorlib.com/theme/durg/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/durg-free-template.jpg
- **New name:** `strut` (structural engineering term; avoids ColorLib name)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript (strict)
- **Package:** `@free-react-templates/strut`
- **Deploy target:** `strut.free.componentdock.com`

## Design Tokens

Extracted from the live preview CSS (`css/style.css`):

| Token | Value | Usage |
|-------|-------|-------|
| Font family | `Rubik` (Google Fonts, weights 300–900) | All text, headings, buttons |
| Brand / Primary | `#ff5e13` (vivid orange) | Buttons, links, section spans, hover states, star ratings border |
| Heading / Dark | `#020c26` (near-black navy) | Headings h1–h5, `.black-bg`, slider overlay, nav text |
| Body text | `#5c5c5c` (medium gray) | Paragraphs, service descriptions |
| Nav link | `#191d34` (dark navy) | Header navigation links |
| Gray bg | `#f5f5f5` | Brand carousel area background |
| Star accent | `#ffba00` (gold) | About section star ratings |
| White | `#ffffff` | Header background, slider content box, footer |
| Border (nav) | `#363d4f` | Carousel nav border |

### Button Styles

- **`.boxed-btn`** (primary CTA): bg `#ff5e13`, white text, no border-radius, padding 13px 32px, font-size 16px. Hover: transparent bg, `#ff5e13` text, 1px `#ff5e13` border.
- **`.boxed-btn2`** (hero/slider CTA): bg `#ff5e13`, white text, padding 22px 50px, font-size 16px. Used in slider and CTA sections.
- **`.underline-hover`**: Orange text, hover: underline.

### Layout Tokens

- Section padding: 120px top/bottom (60px mobile)
- Slider height: 760px (600px mobile)
- Slider content: white box overlay on left side, dark overlay on background image
- Section title: h3 at 44px / 56px line-height; mobile 30px
- Brand area: 65px vertical padding, gray bg

## Section Structure (from live preview)

1. **Header** — Top bar (black bg, phone + email left, nav right) → Main nav (white bg, sticky, logo left, nav center, search + quote button right)
2. **Hero Slider** — Full-width carousel (3 identical slides), dark overlay on background image, white content box on left with tagline, heading, CTA button
3. **Brand Logos** — Gray bg carousel of partner logos (6 logos)
4. **Services** — 3-column grid with section title, image thumbnails, service name, description, "Read More" link
5. **Projects** — Dark overlay bg, 40% text panel left (heading + "More Projects" link), 60% project carousel right with project cards (image + category + title)
6. **About** — Left: video thumbnail with play button popup; Right: section title + "Learn More" CTA; Below: testimonial carousel (quote, 5-star rating, author avatar, "350+" review count)
7. **CTA Banner** — Full-width bg image with dark overlay, heading, paragraph, black CTA button
8. **Address/Contact** — Black bg, 3-column layout (Location, Opening Hours, Contact) with icon, heading, text, link
9. **Footer** — 4-column: logo + description + social links | Company links | Solutions links | Branch office locations; Bottom: copyright bar

## Requirements

### Feature: Strut template behaviour

#### Scenario: Header renders with top bar and main navigation

- **GIVEN** the user visits the Strut homepage
- **THEN** a top bar is visible with phone number and email on the left
- **AND** navigation links (News & Media, Review, FAQ) on the right
- **AND** the main nav shows logo, menu items (Home, About, Services, Projects, Blog, Contact), search icon, and "Get a quote" button

#### Scenario: Header becomes sticky on scroll

- **GIVEN** the user scrolls down the page
- **THEN** the main header should become fixed at the top with a shadow
- **AND** the top bar should remain hidden

#### Scenario: Hero slider displays with content box

- **GIVEN** the user loads the homepage
- **THEN** a full-width slider area is visible
- **AND** the slider shows a background image with dark overlay
- **AND** a white content box appears on the left with:
| Element    | Content                                    |
| Tagline    | "Quality work. Trustable service..."      |
| Heading    | "We provide your Industrial solution"      |
| CTA Button | "Our Services"                             |
- **AND** navigation dots are visible on the right

#### Scenario: Brand logos carousel displays

- **GIVEN** the user views the brand area
- **THEN** a horizontal carousel of partner logos is visible
- **AND** the area has a gray (#f5f5f5) background

#### Scenario: Services section shows 3 service cards

- **GIVEN** the user scrolls to the services section
- **THEN** a section title "OUR SERVICES" is visible
- **AND** 3 service cards are displayed in a row
- **AND** each card has an image thumbnail, title, description, and "Read More" link

#### Scenario: Projects section displays with dark overlay and carousel

- **GIVEN** the user scrolls to the projects section
- **THEN** a dark overlay background is visible
- **AND** a left panel shows heading "Take a look around our projects" with description and "More Projects" link
- **AND** a right panel shows a carousel of project cards
- **AND** each project card has an image, category label, and project title

#### Scenario: About section shows video thumbnail and testimonials

- **GIVEN** the user scrolls to the about section
- **THEN** a left area shows a large video thumbnail with a play button
- **AND** a right area shows heading "Deliver innovative Industrial solution" with "Learn More" CTA
- **AND** below is a testimonial carousel with quote, star rating, author, and "350+" review count

#### Scenario: CTA banner displays with background image

- **GIVEN** the user scrolls to the CTA area
- **THEN** a full-width banner with dark overlay background image is visible
- **AND** it shows heading "Let's talk about your industrial problems"
- **AND** a black "Discuss now" CTA button is visible

#### Scenario: Address section shows 3 contact columns

- **GIVEN** the user scrolls to the address area
- **THEN** a black background section with 3 columns is visible
- **AND** columns show: Location, Opening Hours, Contact information
- **AND** each column has an icon, heading, text, and optional link

#### Scenario: Footer renders with 4 columns and copyright

- **GIVEN** the user scrolls to the footer
- **THEN** a 4-column footer is visible with logo + description, Company links, Solutions links, and Branch office info
- **AND** social media icons (Facebook, Twitter, LinkedIn) are shown
- **AND** a copyright bar appears at the bottom

#### Scenario: All interactive elements are accessible

- **GIVEN** the user navigates with keyboard only
- **THEN** all buttons and links are focusable
- **AND** focus-visible rings appear on interactive elements
- **AND** the navigation is keyboard-navigable

## Verification Checklist

- [ ] Header renders with top bar and main nav
- [ ] Sticky header works on scroll
- [ ] Hero slider renders with content box overlay
- [ ] Brand logos carousel displays partner logos
- [ ] Services section shows 3 cards with correct structure
- [ ] Projects section has dark overlay + carousel
- [ ] About section has video thumbnail + testimonials
- [ ] CTA banner renders with background image
- [ ] Address section shows 3 columns on black bg
- [ ] Footer renders with 4 columns + copyright
- [ ] Component Dock footer link present
- [ ] All sections use design tokens (Rubik font, #ff5e13 brand)
- [ ] Responsive layout works (mobile, tablet, desktop)
- [ ] Accessibility: keyboard nav, aria labels, focus-visible
- [ ] 100% test coverage
- [ ] No ColorLib references in app code
- [ ] `public/CNAME` contains `strut.free.componentdock.com`
- [ ] `package.json` homepage set correctly
