# Template: ShearGlow (Creative — Hair Salon)

## Purpose

Recreation of ColorLib **Akame** — a multi-page hair salon website with a
full-width hero slider, about section, 4-column services grid, "Why Choose Us"
feature, filterable portfolio gallery, team experts with certificates, blog
posts, a CTA section, and a 3-column footer. Gold-and-dark aesthetic with
elegant serif headings.

- **Source slug:** `akame`
- **Source URL:** https://colorlib.com/wp/template/akame/
- **Preview URL:** https://preview.colorlib.com/theme/akame/ (live, CSS extracted)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens

Extracted from the live preview CSS (`style.css`):

| Token | Value | Notes |
|-------|-------|-------|
| Font family (body) | `"Open Sans", sans-serif` | Body text, paragraphs |
| Font family (heading) | `"Playfair Display", serif` | Section headings, buttons |
| Primary brand color | `#bca858` (gold) | Buttons, accents, highlights |
| Button hover/active | `#bca858` bg + `#ffffff` text | Filled gold on hover |
| Button default | transparent bg + `#252525` border | Outlined style |
| Text color (headings) | `#252525` (near-black) | h2, h3, h5 |
| Text color (body) | `#6e6e6e` (gray) | Paragraphs |
| Text color (white) | `#ffffff` | On dark backgrounds, hero |
| Background (light sections) | `#ffffff` (white) | Default |
| Background (alt sections) | `#f6f9f9` (light gray) | "Why Choose Us" area |
| Top header bar | dark background, white text | Hours + phone |
| Border color | `#e5e5e5` (light gray) | Dividers |
| Button font | `"Playfair Display", serif` | Same as headings |
| Button height | `42px` | Min height |
| Button min-width | `150px` | Min width |
| Button padding | `0 35px` | Horizontal |
| Button text-transform | `uppercase` | All caps |
| Button border | `1px solid #252525` | Default outline |
| Section padding | `80px 0` | Vertical padding per section |
| Portfolio filter buttons | outline style, active = gold fill | Same as akame-btn |

## Requirements

### Requirement: Header

The page SHALL display a header with a top info bar, main nav, and branding.

#### Scenario: Top info bar

- **WHEN** I view the page
- **THEN** a thin dark bar SHALL appear at the top with "Welcome to hair salon!"
  on the left and hours + phone on the right

#### Scenario: Main navigation

- **WHEN** I view the page
- **THEN** a navigation bar SHALL display the logo on the left and links:
  Home, Pages (dropdown), Portfolio, Services, About Us, Blog, Contact
- **AND** a "Book Now" button SHALL appear on the right side of the nav
- **AND** the nav SHALL be sticky on scroll

### Requirement: Hero slider

The page SHALL display a full-width hero section with a background image and
call-to-action text.

#### Scenario: Hero content

- **WHEN** I view the hero section
- **THEN** a large heading "We Care About Your Hair" SHALL be displayed over
  a background image
- **AND** a quote/tagline paragraph SHALL appear below the heading
- **AND** an "About Us" button SHALL be displayed below the text

### Requirement: About section

The page SHALL display a three-column about section.

#### Scenario: About layout

- **WHEN** I view the about section
- **THEN** the left column SHALL show the heading "Hair Salon" with subtitle
  "The House of Hair Salon & Spa" and "About Us" label
- **AND** the middle column SHALL show a salon image
- **AND** the right column SHALL show "Beautiful Hair Comes From A Legendary."
  heading, a quote paragraph, and a "Read More" button

### Requirement: Services section

The page SHALL display a four-column services grid.

#### Scenario: Services layout

- **WHEN** I view the services section
- **THEN** a centered heading "Our Services" SHALL be displayed
- **AND** four service cards SHALL be shown in a row: Coloring, Haircut,
  Hairstyle, Coloring (with icons and short descriptions)

### Requirement: Why Choose Us section

The page SHALL display a two-column feature section with a gray background.

#### Scenario: Why Choose Us layout

- **WHEN** I view the Why Choose Us section
- **THEN** the left side SHALL show a salon image
- **AND** the right side SHALL show "Why Choose Us" heading, a paragraph, and
  a bullet list of four benefits with check icons

### Requirement: Portfolio section

The page SHALL display a filterable portfolio gallery.

#### Scenario: Portfolio filters

- **WHEN** I view the portfolio section
- **THEN** filter buttons SHALL be displayed: All, Haircuts, Dye, Shave
- **AND** clicking a filter SHALL show only matching portfolio items

#### Scenario: Portfolio grid

- **WHEN** I view the portfolio section
- **THEN** a grid of portfolio image cards SHALL be displayed below the filters

### Requirement: Experts section

The page SHALL display a team/experts section with certificates.

#### Scenario: Experts layout

- **WHEN** I view the experts section
- **THEN** a side background image SHALL be displayed
- **AND** the heading "Our Experts" SHALL appear with a description paragraph
- **AND** certificate images SHALL be shown below the heading
- **AND** team member cards SHALL be displayed in a row with photos, names,
  and social links

### Requirement: Blog section

The page SHALL display a blog posts section.

#### Scenario: Blog layout

- **WHEN** I view the blog section
- **THEN** a centered heading "Latest News" SHALL be displayed
- **AND** three blog post cards SHALL be shown in a row with thumbnails,
  titles, and short excerpts

### Requirement: CTA section

The page SHALL display a call-to-action section with a background image.

#### Scenario: CTA layout

- **WHEN** I view the CTA section
- **THEN** "Make Stilo Your Number One Choice" heading SHALL be displayed
- **AND** two buttons SHALL be shown: "Book An Appointment" (active/gold)
  and "Contact Us" (outlined)
- **AND** a background image SHALL fill the right side

### Requirement: Footer

The page SHALL display a three-column footer.

#### Scenario: Footer layout

- **WHEN** I view the footer
- **THEN** the left column SHALL show the logo, description, and copyright
- **AND** the middle column SHALL show "Opening times" with hours and social
  media icons (Facebook, Twitter, Google+, Instagram)
- **AND** the right column SHALL show "Contact Us" with phone, email, and
  address
- **AND** a Component Dock link SHALL replace the Colorlib attribution

## Verification checklist

- [ ] Top info bar with welcome text + hours + phone
- [ ] Sticky nav with logo, links, dropdown, "Book Now" button
- [ ] Hero slider with background image, heading, quote, "About Us" button
- [ ] About section: 3-column layout (heading, image, content)
- [ ] Services section: 4-column grid with icons
- [ ] Why Choose Us: image + heading + bullet list on gray background
- [ ] Portfolio: filter buttons + image grid
- [ ] Experts: side thumbnail + heading + certificates + team cards
- [ ] Blog: 3-column post cards
- [ ] CTA: heading + two buttons + background image
- [ ] Footer: 3-column with logo, hours, contact
- [ ] Gold (#bca858) brand color used for accents and active states
- [ ] Playfair Display for headings and buttons
- [ ] Open Sans for body text
- [ ] Responsive layout across breakpoints
- [ ] Component Dock footer link
