# Template: Roundtable (Conference / Workshop Event)

## Purpose

Recreation of the ColorLib **Workshop** template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page conference/workshop event site.

- **Source:** https://colorlib.com/wp/template/workshop/
- **Preview:** https://preview.colorlib.com/theme/workshop/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/workshop-free-template.jpg
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)

## Design tokens

Extracted from the live preview stylesheet (`css/style.css`) and preview DOM:

| Token | Value | Notes |
|---|---|---|
| **Primary brand** | `#ff5733` | Orange-red accent (links, CTAs, text-primary) |
| **Accent dark** | `#c70039` | Darker red used in gradient |
| **Brand gradient** | `linear-gradient(to right, #c70039, #ff5733 70%)` | Hero heading text gradient, button backgrounds |
| **Body background** | `#232531` | Dark charcoal — entire page bg |
| **Footer background** | `#1b1d24` | Slightly darker than body |
| **Section light bg** | `#f4f5f9` | Light gray used in hover states, alternating rows |
| **Body text** | `#cfcfd1` | Light gray on dark bg |
| **Heading text (hero)** | Gradient `#c70039 → #ff5733` | Large gradient headings |
| **Speaker name text** | `#fff` (white) | On dark speaker cards |
| **Muted text** | `#818186` | Footer headings, secondary info |
| **Border light** | `#edf0f5` | Light borders between rows |
| **Border dark** | `#383b4f` | Dark borders in program/schedule rows |
| **Font family** | `"Roboto Mono", monospace` | Monospace aesthetic throughout |
| **Button radius** | `0` (sharp corners) | All buttons square/rectangular |
| **Button gradient** | `linear-gradient(to right, #c70039, #ff5733 70%)` | CTA buttons |
| **Dark overlay** | `rgba(0,0,0,0.6)` | Hero image overlay |
| **Accent border-top** | `2px solid #ff5733` | Tab active state |

## Requirements

### Section order (top to bottom)

#### Scenario: Section order (top to bottom)

1. Navbar
2. Hero
3. Speakers (4 speakers, alternating image/text layout)
4. Programs / Schedule (time-based agenda rows)
5. Sponsors (logo grid + "Be a Sponsor" CTA)
6. News / Blog (3-column card grid)
7. Footer (3-column: About, Quick Links, Connect + copyright)

### Navbar

#### Scenario: Navbar displays logo and navigation links

- **GIVEN** the user loads the page
- **THEN** the navbar shows the logo "Roundtable" (text-only, no image)
- **AND** the nav links are: Home, About Us, Speakers, News, Contacts
- **AND** a "Buy Tickets" CTA button appears at the right
- **AND** the navbar is fixed/sticky on scroll
- **AND** a mobile hamburger menu appears on small screens

#### Scenario: Navbar logo uses brand gradient highlight

- **GIVEN** the user views the navbar
- **THEN** "Round" is displayed in white
- **AND** "table" uses the primary brand color (#ff5733)

### Hero

#### Scenario: Hero section displays conference info

- **GIVEN** the user loads the page
- **THEN** the hero shows a caption "Conference 2025"
- **AND** a large heading "Web Design Conference 2025" with gradient text
- **AND** a date/location line "September 6th-7th, Minnesota, United States"
- **AND** a "Buy Tickets" CTA button with gradient background
- **AND** the hero has a dark background with subtle overlay
- **AND** elements animate in with fade-up on scroll

#### Scenario: Hero heading uses brand gradient

- **GIVEN** the user views the hero heading
- **THEN** the heading text uses a linear-gradient from #c70039 to #ff5733
- **AND** the font is Roboto Mono
- **AND** font size is ~6rem on desktop, ~2rem on mobile

### Speakers

#### Scenario: Speakers section shows 4 speakers in alternating layout

- **GIVEN** the user scrolls to the Speakers section
- **THEN** a section heading "Speakers" appears on the left
- **AND** a description paragraph appears beside it
- **AND** 4 speaker cards are displayed, each with:
| field | content |
| image | placeholder person photo |
| name  | white text, large |
| role  | uppercase text in primary color (#ff5733) |
| bio   | short description paragraph |
| social links | Facebook, Twitter, GitHub icons |
- **AND** speaker cards alternate image left/right layout
- **AND** each card animates with AOS fade effects

#### Scenario: Speaker role text uses brand color

- **GIVEN** the user views a speaker card
- **THEN** the role label (e.g. "Web Designer") is uppercase
- **AND** the role text color is #ff5733 (primary)

### Programs / Schedule

#### Scenario: Programs section shows time-based agenda

- **GIVEN** the user scrolls to the Programs section
- **THEN** a section heading "Programs" appears on the left
- **AND** a description paragraph appears beside it
- **AND** 6 schedule rows are displayed, each with:
| field | content |
| time  | e.g. "8:00 AM" in large white text |
| title | session title in white |
| speaker | speaker name (optional, omit for breaks) |
- **AND** rows are separated by dark borders (#383b4f)
- **AND** break rows (e.g. "Break With Snacks", "Break For Lunch") have no speaker
- **AND** rows animate with AOS fade effects

#### Scenario: Schedule rows have consistent styling

- **GIVEN** the user views the Programs section
- **THEN** each row has a top and bottom border
- **AND** the time column takes ~25% width
- **AND** the title column takes ~75% width

### Sponsors

#### Scenario: Sponsors section shows logo grid

- **GIVEN** the user scrolls to the Sponsors section
- **THEN** a section heading "Sponsors" appears on the left
- **AND** a description paragraph appears beside it
- **AND** 6 sponsor logos are displayed in a 3-column grid
- **AND** logos are grayscale or neutral by default
- **AND** a "Be a Sponsor" CTA button appears centered below the grid
- **AND** the CTA button uses the brand gradient
- **AND** logos animate with AOS fade effects

#### Scenario: Be a Sponsor button matches brand style

- **GIVEN** the user views the Sponsors section
- **THEN** the "Be a Sponsor" button has sharp corners (border-radius: 0)
- **AND** the button uses the gradient background (#c70039 → #ff5733)
- **AND** the button text is white

### News / Blog

#### Scenario: News section shows 3 blog entry cards

- **GIVEN** the user scrolls to the News section
- **THEN** a section heading "News" appears on the left
- **AND** a description paragraph appears beside it
- **AND** 3 blog entry cards are displayed in a row, each with:
| field | content |
| image | thumbnail photo |
| title | article title (links) |
| meta  | author avatar + author name + date |
| excerpt | short paragraph |
- **AND** card titles link to # (placeholder)
- **AND** the author name uses the primary color (#ff5733)
- **AND** cards animate with AOS fade effects

#### Scenario: Blog entry meta shows author info

- **GIVEN** the user views a blog entry
- **THEN** a small circular author avatar appears
- **AND** "By [Author Name]" text appears next to the avatar
- **AND** a date follows the author name

### Footer

#### Scenario: Footer has 3 columns and copyright

- **GIVEN** the user scrolls to the footer
- **THEN** the footer background is darker than the body (#1b1d24)
- **AND** column 1 shows "About Event" heading + description
- **AND** column 2 shows "Quick Links" with links: About Us, Speakers, Gallery, Contact Us
- **AND** column 3 shows "Connect with Us" with social icons (Facebook, Twitter, YouTube, Instagram)
- **AND** a copyright line at the bottom with current year
- **AND** the footer links to Component Dock (https://www.componentdock.com/)
- **AND** footer headings use muted text color (#818186)
- **AND** footer links are white, hover to #ff5733

#### Scenario: Footer attribution links to Component Dock

- **GIVEN** the user views the footer copyright
- **THEN** it displays "Made with ♥ by Component Dock" or equivalent
- **AND** the Component Dock link points to https://www.componentdock.com/

## Verification checklist

- [ ] Spec matches section order: Navbar → Hero → Speakers → Programs → Sponsors → News → Footer
- [ ] Design tokens match: #ff5733 primary, #c70039 accent, gradient buttons, Roboto Mono font, sharp corners
- [ ] All 7 sections implemented as separate components in `src/components/`
- [ ] Speaker cards alternate image left/right layout (4 speakers)
- [ ] Program schedule has 6 rows with time + title + optional speaker
- [ ] Sponsors section has 3x2 logo grid + "Be a Sponsor" CTA
- [ ] News section has 3 blog entry cards with author meta
- [ ] Footer has 3 columns + copyright + Component Dock link
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] Footer links to https://www.componentdock.com/
- [ ] Placeholder images use https://picsum.photos/seed/...
- [ ] `npm run spec:validate` passes
- [ ] App builds without errors (`npm run build`)
