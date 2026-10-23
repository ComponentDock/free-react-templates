# Template: VoyagePoint (Travel / Tourism)
<!-- prep-status: shipped-as=goquest -->
> **SHIPPED-UNDER** — the ColorLib `gotrip` design this prep describes already
> ships as `apps/goquest` (<https://goquest.free.componentdock.com>).
> Do not scaffold `apps/voyagepoint`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-goquest/spec.md`.

## Purpose

Recreation of the ColorLib **Gotrip** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page app.

- **ColorLib source:** https://colorlib.com/wp/template/gotrip/
- **Live preview:** https://preview.colorlib.com/theme/gotrip/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/gotrip-free-template.jpg
- **Package:** `@free-react-templates/voyagepoint`
- **Surge target:** `voyagepoint.free.componentdock.com`
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript · lucide-react icons · Google Fonts

## Design Tokens

Extracted from `preview.colorlib.com/theme/gotrip/assets/css/style.css` + screenshot.

| Token | Value | Usage |
|---|---|---|
| Brand primary | `#014B85` (deep blue) | Navbar top bar, buttons, blog section gradient, links |
| Accent / highlight | `#F4E700` / `#FDE02F` (gold-yellow) | Script heading accent, hero search button border |
| Text primary | `#222222` | Body text |
| Text heading | `#191D34` | Section titles |
| Light background | `#F9F9FF` | Alternate section backgrounds |
| Muted text | `#999999` / `#888888` | Secondary text, captions |
| Font — headings | `"Barlow Condensed"` | Hero h1, section titles |
| Font — body | `"Roboto"` | Paragraphs, nav, cards |
| Font — script | `"Satisfy"` | Hero cursive heading accent |
| Button style | bg `#014B85`, color `#fff`, text-transform uppercase, letter-spacing 1px, font-size 14px, font-weight 500, border-radius 3px, hover slides a `#E6373D` overlay (scaleX transition) |
| Card border-radius | 3px default, 12px for tour cards |
| Section titles | `#191D34`, 60px desktop / 39px mobile, weight 600, with `::after` underline accent |

### Color Palette Summary

- Deep blue `#014B85` — primary brand
- Gold-yellow `#F4E700` — accent / highlight
- White `#FFFFFF` — backgrounds, text on dark
- Off-white `#F9F9FF` — alternating section bg
- Near-black `#191D34` / `#222222` — headings / body
- Cyan `#4CD3E3` — minor accent (service icons)
- Red `#E6373D` — button hover overlay

## Visual Design (from screenshot)

The template is a travel/tourism booking site with:

1. **Top info bar** — dark navy `#014B85` background with email, phone, address; social icons on the right.
2. **Navbar** — white background, logo on left (script font "GoTrip" with yellow dot), nav links right (Home, About Us, Package, Blog, Pages, Contact Us).
3. **Hero** — full-width mountain/lake landscape image with semi-transparent overlay. Large heading "Find your Next tour!" in white (with "Next tour!" in yellow script `Satisfy`). Search form: destination input + "When" date dropdown + gold "SEARCH" button.
4. **Services stats** — 4-column grid on white bg, each with a thin-line icon (cyan `#4CD3E3`) and stat text (e.g. "8000+ Our Local Guides").
5. **Featured Tours** — section title "FEATURED TOURS Packages", 6 cards in 3×2 grid. Each card: image, "8.0 Superb" badge, tour name, price, duration, location. Cards have light border, rounded corners.
6. **Video section** — large landscape image with play button overlay. Text on right: "Love where you're going in the perfect time" + company description + checkmark list.
7. **About Company** — split: company description + checkmark list on left, support image on right.
8. **Testimonials** — slider with quote text, author name, avatar image.
9. **Blog** — dark blue gradient background, 2-column blog cards with images, date badge, title, excerpt, "Read more" link.
10. **Footer** — dark background with logo, quick links, recent products, support links, copyright.

## Requirements

### Feature: VoyagePoint — Travel Template

#### Scenario: Page renders all sections in order

- **GIVEN** a user visits the VoyagePoint homepage
- **THEN** they see the following sections in order: TopBar, Navbar, Hero, Services, FeaturedTours, Video, AboutCompany, Testimonials, Blog, Footer

#### Scenario: Top bar displays contact info

- **GIVEN** the TopBar is visible
- **THEN** it shows an email address, phone number, and address
- **AND** social media icon links are on the right side
- **AND** the background color is deep navy blue

#### Scenario: Navbar has correct links

- **GIVEN** the Navbar is visible
- **THEN** it shows the VoyagePoint logo on the left
- **AND** navigation links: Home, About Us, Package, Blog, Pages, Contact Us
- **AND** the background is white

#### Scenario: Hero section has search form

- **GIVEN** the Hero section is visible
- **THEN** it displays a large heading with script-style accent text
- **AND** a subtitle text
- **AND** a search form with destination input, date input, and search button
- **AND** the search button has gold/yellow color

#### Scenario: Services section shows 4 stats

- **GIVEN** the Services section is visible
- **THEN** 4 stat cards are displayed in a row
- **AND** each card has an icon, a number/stat, and a description

#### Scenario: Featured Tours shows tour cards

- **GIVEN** the FeaturedTours section is visible
- **THEN** section title reads "FEATURED TOURS Packages"
- **AND** at least 4 tour cards are displayed
- **AND** each card shows an image, rating badge, title, price, duration, and location

#### Scenario: Video section has play button

- **GIVEN** the Video section is visible
- **THEN** a landscape image is shown with a play button overlay
- **AND** descriptive text appears alongside
- **AND** a company description with checkmark list

#### Scenario: About Company section

- **GIVEN** the AboutCompany section is visible
- **THEN** it shows company description text
- **AND** a checklist of features/benefits
- **AND** an image on the right side

#### Scenario: Testimonials slider

- **GIVEN** the Testimonials section is visible
- **THEN** a testimonial quote is displayed
- **AND** the author name and avatar are shown

#### Scenario: Blog section

- **GIVEN** the Blog section is visible
- **THEN** it has a dark blue gradient background
- **AND** blog post cards show image, date, title, excerpt, and "Read more" link

#### Scenario: Footer

- **GIVEN** the Footer is visible
- **THEN** it contains the VoyagePoint logo
- **AND** quick links, products, and support sections
- **AND** a copyright line
- **AND** a link to Component Dock (https://www.componentdock.com/)

#### Scenario: Responsive layout

- **GIVEN** a user visits on mobile viewport
- **THEN** the navbar collapses to a hamburger menu
- **AND** sections stack vertically
- **AND** the hero search form stacks inputs vertically

#### Scenario: Footer links to Component Dock

- **GIVEN** the Footer is visible
- **THEN** it contains a link to https://www.componentdock.com/

## Verification checklist

- [ ] All 10 sections rendered in correct order
- [ ] Top bar: dark blue bg, contact info, social icons
- [ ] Navbar: white bg, logo, 6 nav links
- [ ] Hero: background image, heading with script accent, search form
- [ ] Services: 4 stat cards with icons
- [ ] Featured Tours: 4+ tour cards with image, rating, price, duration
- [ ] Video: landscape image, play button, text, checklist
- [ ] About Company: description, checklist, image
- [ ] Testimonials: quote, author, avatar
- [ ] Blog: dark bg, 2 blog cards
- [ ] Footer: logo, links, copyright, Component Dock link
- [ ] Responsive: mobile hamburger, stacked layouts
- [ ] No ColorLib references in app code
- [ ] Public/CNAME set to voyagepoint.free.componentdock.com
- [ ] package.json homepage set correctly
- [ ] 100% test coverage
