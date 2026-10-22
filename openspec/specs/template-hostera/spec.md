# Template: Hostera (Hosting / Domain Search)
<!-- prep-status: shipped-as=hostpeak -->
> **SHIPPED-UNDER** — the ColorLib `lorahost` design this prep describes already
> ships as `apps/hostpeak` (<https://hostpeak.free.componentdock.com>).
> Do not scaffold `apps/hostera`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-hostpeak/spec.md`.

## Purpose

Hostera is a single-page hosting-themed website template in the free-react-templates
monorepo. It is a React recreation of the ColorLib "Lorahost" free template
(source: https://colorlib.com/wp/template/lorahost/), built under a
DIFFERENT name (**Hostera**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a Bootstrap 4 multi-page hosting site. The homepage features
a transparent navbar over a hero banner with gradient overlay, a domain search
bar, a client logo carousel, a 3x2 feature grid, a pricing table section
with a dark gradient background, a services grid, a newsletter subscription
section, a dedicated server showcase (text + image), a testimonial carousel,
and a dark footer with four columns.

**Source mapping:**
- ColorLib item: "Lorahost" (TEMPLATES.md line 1088)
- Source URL: https://colorlib.com/wp/template/lorahost/
- Preview URL: https://preview.colorlib.com/theme/lorahost/
- Preview CSS: css/style.css (31 KB, hand-written, Bootstrap 4 + custom)
- Fonts: Google Fonts — Roboto (300, 400, 500) for body, Lato (300, 400, 900) for headings

## Design tokens

| Token | Value | Usage |
|-------|-------|-------|
| Brand primary | `#1e1859` | Headings, text, hover states, dropdown hover bg |
| Brand gradient start | `#2926ac` | Button gradient left |
| Brand gradient end | `#6128be` | Button gradient right, footer link hover, footer social hover |
| Navbar fixed bg | `#7676ff` | Sticky navbar background (light indigo/periwinkle) |
| Light page bg | `#f9f9ff` | `.bg-gray` sections, feature cards |
| Card bg | `#fbf9ff` | Sidebar widgets, blog author bg |
| Card bg alt | `#faf9ff` | Pricing card default bg |
| Footer bg | `#0c112a` | Footer area (very dark navy) |
| Body text | `#888888` | Default paragraph text, footer links |
| Secondary text | `#999999` | Input placeholders, secondary labels, domain hints |
| Border color | `#dbd9e6` | Card borders, input borders, checkbox borders |
| Footer heading | `#fff` | Footer widget headings |
| Footer body text | `#7b838a` | Footer paragraphs |
| Footer border | `#333333` | Footer bottom border-top |
| White | `#fff` | Hero text, button text, body bg |

**Fonts:**
- Body: `font-family: "Roboto", sans-serif` (weights 300, 400, 500)
- Headings (h1–h5): `font-family: "Lato", sans-serif` (weights 300, 400, 700, 900)

**Button shape:**
- Default `.button`: gradient bg (`#2926ac` → `#6128be`), border-radius: 30px (pill), white text, font-size 15px, font-weight 500
- Hover: solid `#1e1859` bg
- Outline variant: transparent bg, white 1px border, white text
- Small variant: reduced padding (`5px 45px`)
- Shadow variant (subscribe): `box-shadow: 0px 20px 20px 0px rgba(42,38,172,0.2)`

**Border radii:**
- Buttons: 30px (pill shape)
- Pricing cards: 3px
- Blog date badge: 5px
- Input fields: mostly 0 (sharp), contact textarea: 12px
- Footer newsletter input: 30px (pill)

**Hero:**
- Background image: `../img/banner/hero-banner-bg.png` → use placeholder
- Gradient overlay via `::after`: brand gradient at 0.9 opacity
- Text: white, centered, uppercase subtitle + large h1 + description + CTA button

## Requirements

### Feature: Hostera template behaviour

**Background**

- **GIVEN** the user navigates to the Hostera homepage

#### Scenario: Navbar displays correctly

- **THEN** the navbar shows the logo on the left
- **AND** navigation links: Home, Features, Services, Pricing, Blog, Contact
- **AND** a "Live Chat" link and a "Login" button on the right
- **AND** the navbar becomes sticky with a solid indigo background on scroll

#### Scenario: Hero banner renders

- **GIVEN** the hero banner section is visible
- **THEN** it shows a subtitle "Smart Company With Perfect Space"
- **AND** a headline "Powerful Web Hosting"
- **AND** a description paragraph
- **AND** a "Get Started" outline button (white border, pill shape)

#### Scenario: Domain search section works

- **GIVEN** the domain search section is visible
- **THEN** it shows "Search Your Domain Now!" heading
- **AND** an input field with placeholder "Enter Your Domain name"
- **AND** a "Search" button with brand gradient
- **AND** four checkboxes: .com ($5.99), .net ($5.99), .org ($5.99), .in ($5.99)

#### Scenario: Client logo carousel displays

- **GIVEN** the client logos section is visible
- **THEN** it shows "Trusted by 12,000+ happy customer worldwide"
- **AND** a carousel of 5 client logo images

#### Scenario: Feature grid renders 6 items

- **GIVEN** the features section is visible
- **THEN** it shows a heading "Choose Your Own Virtual Space"
- **AND** 6 feature cards in a 3-column grid
- **AND** each card has an icon, title, and description
- **AND** the feature cards are: Secured Server, Backup Facility, Easy To Customize, Free Domain Transfer, Live Chat Support

#### Scenario: Pricing table shows 3 plans

- **GIVEN** the pricing section is visible
- **THEN** it shows "Popular Pricing Package" heading
- **AND** 3 pricing cards: Normal ($45.80), Premium ($65.80), Ultimate ($75.80)
- **AND** each card has a feature list and a "Select Plan" button
- **AND** cards have a light background with subtle shadow

#### Scenario: Services grid renders 6 items

- **GIVEN** the services section is visible
- **THEN** it shows "High Quality Service" heading
- **AND** 6 service cards in a 3-column grid
- **AND** each card has an icon, title, and description
- **AND** the services are: SSD Cloud Hosting, Free Domain Transfer, Best Hosting Service, Strong Backup, Email Service, Data Analysis

#### Scenario: Newsletter subscription section

- **GIVEN** the newsletter section is visible
- **THEN** it shows "Subscribe To Get Our Newsletter" heading
- **AND** an email input with placeholder "Enter Your email"
- **AND** a "Subscribe" button with shadow effect
- **AND** the section has a light gray background

#### Scenario: Dedicated server section

- **GIVEN** the dedicated server section is visible
- **THEN** it shows text on the left about dedicated and secured servers
- **AND** a server image on the right
- **AND** the layout is side-by-side on desktop

#### Scenario: Testimonials carousel

- **GIVEN** the testimonials section is visible
- **THEN** it shows "Happy Customer Says" heading
- **AND** a carousel of testimonial cards
- **AND** each card has a circular avatar, quote, name, and title
- **AND** the section has a light gray background

#### Scenario: Footer layout

- **GIVEN** the footer is visible
- **THEN** it shows 4 columns: About Us, Contact Info, Important Links, Newsletter
- **AND** the About Us column has description text and logo
- **AND** the Contact Info column has address, phone, email
- **AND** the Important Links column has 5 links
- **AND** the Newsletter column has an email input with submit button
- **AND** a footer bottom bar with copyright text and social media icons (Facebook, Twitter, Dribbble, LinkedIn)
- **AND** the footer links to Component Dock (replacing ColorLib attribution)

## Verification checklist

- [ ] Navbar: transparent over hero, sticky on scroll, correct nav items
- [ ] Hero: gradient overlay, white text, pill CTA button
- [ ] Domain search: input + checkboxes, gradient search button
- [ ] Logo carousel: 5 client logos, title text
- [ ] Features: 3x2 grid, 6 cards with icons
- [ ] Pricing: 3 cards on dark gradient bg, correct prices
- [ ] Services: 3x2 grid, 6 cards with icons
- [ ] Newsletter: email input, subscribe button, gray bg
- [ ] Dedicated server: text + image side-by-side
- [ ] Testimonials: carousel with avatar, quote, name
- [ ] Footer: 4-column layout, dark bg, social icons
- [ ] Footer links to Component Dock (not ColorLib)
- [ ] Brand gradient buttons (pill shape, hover to #1e1859)
- [ ] Roboto body font, Lato heading font
- [ ] All placeholder images use picsum.photos
