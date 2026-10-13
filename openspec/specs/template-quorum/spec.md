# Template: Quorum (Law Firm)

## Purpose

Recreation of ColorLib "Neutral" — a law firm / attorney website template.

- **Source slug:** `neutral`
- **Source URL:** https://colorlib.com/wp/template/neutral/
- **Preview URL:** https://preview.colorlib.com/theme/neutral/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/neutral-free-template.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Description:** Single-page law firm website with dark navbar, full-height hero with background image, animated stats counter, about section with video play button, testimonial carousel, vertical tabbed practice areas panel, attorney grid, blog cards, contact info, and multi-column footer. Muted plum (#6e5773) accent color throughout.

## Design Tokens

Extracted from the live preview CSS (`css/style.css`) and inline HTML styles:

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--brand` | `#6e5773` | Primary buttons, practice-areas tab panel bg, CTA hover accent |
| `--navbar-bg` | `#343a40` | Dark navbar background |
| `--body-text` | `#999999` | Body paragraph text (light gray) |
| `--body-bg` | `#ffffff` | Page background |
| `--section-alt` | `#f8f9fa` | Light section backgrounds (about, testimonials, attorneys, contact) |
| `--heading` | `#1b1b1b` | Section headings (dark, near-black) |
| `--hero-overlay` | `rgba(0,0,0,0.45)` | Hero dark overlay |
| `--counter-overlay` | image-based | Stats section uses background image with semi-transparent overlay |

### Typography

| Token | Value |
|-------|-------|
| Font family | `"Nunito Sans", Arial, sans-serif` |
| Body size | `17px` |
| Line height | `1.8` |
| Hero heading | `58px`, bold |
| Section heading | `44px`, capitalize |
| Subheading | uppercase small caps |

### Buttons & Interactive

| Element | Style |
|---------|-------|
| `.btn.btn-primary` | bg `#6e5773`, border `1px solid #6e5773`, white text, Bootstrap default border-radius (`0.25rem`) |
| `.btn.btn-primary:hover` | bg stays `#6e5773`, text color changes to `#6e5773` (outline style on hover) |
| Navbar CTA link | text-only link, highlighted on scroll |
| Hero CTA | `.btn.btn-primary.py-3.px-4` — padded, rounded button |

### Layout

- Container max-width: `1140px` (Bootstrap XL)
- Grid: Bootstrap 4.2.1 12-column
- Hero: full viewport height (`js-fullheight`)
- Counter: 4 columns, each with icon + number + label
- About: 2-column (image left, text right; reversed on second about block)
- Practice Areas: vertical tabs — icon list on left (`#6e5773` bg), content panel on right
- Attorneys: 4-column grid
- Blog: 3-column cards
- Contact: 4-column info cards
- Footer: 3-column

## Section Order (from live DOM)

1. **Navbar** — dark bg, brand "Quorum", links: Home, About, Practice Areas, Attorneys, Blog, Contact, "Request a Quote" CTA
2. **Hero** — full-height background image (use `picsum.photos/seed/quorum-hero/1920/1080`), dark overlay, heading "Reputation, Respect, Result", subtitle, "Request a Quote" CTA button
3. **Stats/Counter** — 4 animated counters with icons: 50 Years of Experience, 10000 Trusted Clients, 564 Qualified Lawyers, 300 Honors & Awards
4. **About** — two-column on light bg: left = image with "Watch Video" play button, right = "Welcome" subheading + "Welcome to Quorum A Law Firm" heading + descriptive paragraphs
5. **Testimonials** — carousel on light bg: quote text + person photo + name + role (3 slides)
6. **Practice Areas** — vertical tabbed panel: left side has icon list (Family Law, Business Law, Insurance Law, Criminal Law, Employment Law, Financial Law, Drug Offenses, Sexual Offenses, Property Law) on `#6e5773` bg; right side shows selected area's title, excerpt, full description, and "Learn More" link
7. **Attorneys** — 4-column grid: photo + name + role (Lloyd Wilson/CEO Founder, Rachel Parker/Business Lawyer, Ian Smith/Insurance Lawyer, Alicia Henderson/Criminal Law)
8. **Blog** — 3-column cards: image + title + excerpt + "Read More" link + meta (author, comments)
9. **Contact** — light bg, 4 info cards: Address, Contact Number, Email, Website
10. **Footer** — 3-column: about text, navigation links, practice areas links, contact info + copyright

## Requirements

### Feature: Quorum Law Firm Template

#### Scenario: Navbar renders with correct navigation links

- **GIVEN** the user visits the Quorum page
- **THEN** a dark navbar is visible at the top
- **AND** the brand text reads "Quorum"
- **AND** navigation links include: Home, About, Practice Areas, Attorneys, Blog, Contact
- **AND** a "Request a Quote" CTA link is visible

#### Scenario: Hero section displays full-height with CTA

- **GIVEN** the user visits the Quorum page
- **THEN** a full-height hero section is visible
- **AND** the heading reads "Reputation, Respect, Result"
- **AND** a subtitle paragraph is displayed below the heading
- **AND** a "Request a Quote" button is present with brand color styling
- **AND** the hero has a background image with a dark overlay

#### Scenario: Stats counter section shows 4 metrics

- **GIVEN** the user scrolls to the stats section
- **THEN** 4 counter items are visible
- **AND** "50" Years of Experienced is displayed
- **AND** "10000" Trusted Clients is displayed
- **AND** "564" Qualified Lawyers is displayed
- **AND** "300" Honors & Awards is displayed
- **AND** each counter has an icon above the number

#### Scenario: About section displays on light background

- **GIVEN** the user scrolls to the about section
- **THEN** the section has a light background
- **AND** a "Welcome" subheading is visible
- **AND** the heading reads "Welcome to Quorum A Law Firm"
- **AND** descriptive paragraphs are present
- **AND** a video play button is visible on the left image area

#### Scenario: Testimonials section shows carousel

- **GIVEN** the user scrolls to the testimonials section
- **THEN** a carousel of testimonial cards is visible
- **AND** each card contains a quote icon, quote text, person photo, name, and role
- **AND** navigation dots/arrows allow cycling through testimonials

#### Scenario: Practice Areas section shows tabbed panel

- **GIVEN** the user scrolls to the practice areas section
- **THEN** a vertical tab panel is visible with a brand-colored sidebar
- **AND** area tabs include: Family Law, Business Law, Insurance Law, Criminal Law, Employment Law, Financial Law, Drug Offenses, Sexual Offenses, Property Law
- **AND** clicking a tab shows that area's title, description, and "Learn More" link on the right panel
- **AND** the first tab is selected by default

#### Scenario: Attorneys section shows team grid

- **GIVEN** the user scrolls to the attorneys section
- **THEN** 4 attorney cards are displayed in a grid
- **AND** each card shows a photo, name, and role
- **AND** attorneys listed: Lloyd Wilson (CEO, Founder), Rachel Parker (Business Lawyer), Ian Smith (Insurance Lawyer), Alicia Henderson (Criminal Law)

#### Scenario: Blog section shows post cards

- **GIVEN** the user scrolls to the blog section
- **THEN** 3 blog post cards are displayed
- **AND** each card contains an image, title, excerpt, "Read More" link, and meta info

#### Scenario: Contact section displays info cards

- **GIVEN** the user scrolls to the contact section
- **THEN** 4 info items are visible on a light background
- **AND** Address, Contact Number, Email, and Website are displayed
- **AND** a "Contact Us" heading is present

#### Scenario: Footer has three columns

- **GIVEN** the user scrolls to the footer
- **THEN** the footer contains 3 columns
- **AND** column 1 has about text and description
- **AND** column 2 has navigation links
- **AND** column 3 has practice area links and contact info
- **AND** a copyright line is at the bottom

#### Scenario: Responsive design

- **GIVEN** the user views the page on a mobile viewport (< 768px)
- **THEN** the navbar collapses into a hamburger menu
- **AND** columns stack vertically
- **AND** the practice areas tabs move above the content panel
- **AND** all content remains readable

#### Scenario: Brand color consistency

- **GIVEN** the user views any interactive element
- **THEN** primary buttons use `#6e5773` background
- **AND** the practice areas tab sidebar uses `#6e5773` background
- **AND** the navbar uses dark background `#343a40`
- **AND** section backgrounds alternate between white and `#f8f9fa`

#### Scenario: Footer links to Component Dock

- **GIVEN** the user views the footer
- **THEN** a link to "https://www.componentdock.com/" is present
- **AND** the link text references "Component Dock"

## Verification Checklist

- [ ] Navbar: dark bg, brand "Quorum", all nav links, CTA link
- [ ] Hero: full-height, background image with overlay, heading, subtitle, CTA button
- [ ] Stats: 4 counters with correct numbers, icons, labels
- [ ] About: light bg, subheading, heading, paragraphs, video play button
- [ ] Testimonials: carousel with 3+ cards, quote + photo + name + role
- [ ] Practice Areas: vertical tabbed panel, 9 areas, brand-colored sidebar, "Learn More" links
- [ ] Attorneys: 4-column grid, 4 attorney cards with photo/name/role
- [ ] Blog: 3 post cards with image/title/excerpt/Read More/meta
- [ ] Contact: light bg, 4 info cards (Address, Phone, Email, Website)
- [ ] Footer: 3 columns, about text, nav links, practice areas, contact info, copyright
- [ ] Component Dock link in footer
- [ ] Brand color `#6e5773` on buttons and practice-areas sidebar
- [ ] Font: Nunito Sans via Google Fonts
- [ ] Responsive: mobile hamburger menu, stacked columns
- [ ] No ColorLib references in app code (provenance only in spec/TEMPLATES.md/PR)
