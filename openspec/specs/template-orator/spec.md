# Template: Orator (Event / Conference)
<!-- prep-status: shipped-as=convene -->
> **SHIPPED-UNDER** — the ColorLib `manup` design this prep describes already
> ships as `apps/convene` (<https://convene.free.componentdock.com>).
> Do not scaffold `apps/orator`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-convene/spec.md`.

## Purpose

Recreation of the ColorLib **Manup** event/conference template as a
React 19 + Vite + Tailwind CSS 4 + TypeScript single-page app.

- **Source:** https://colorlib.com/wp/template/manup/
- **Preview:** https://preview.colorlib.com/theme/manup/
- **Screenshot:** ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/manup-free-template.jpg)
- **Package:** `@free-react-templates/orator`
- **Surge target:** `orator.free.componentdock.com`

### Design tokens (extracted from preview CSS)

| Token | Value | Notes |
|---|---|---|
| Brand gradient | `linear-gradient(120deg, #ee8425 0%, #f9488b 100%)` | Orange → hot pink, used on buttons, badges, active tabs, newsletter CTA |
| Accent red | `#f44949` | Nav active underline, hover accents, icon color, "About" check icons |
| Heading color | `#171822` | Dark navy-black used on all h1–h6, section titles |
| Body text | `#6a6b7c` | Paragraph text, schedule metadata, footer link color |
| Footer text | `#a0a1b5` | Muted gray for footer links, copyright, newsletter placeholder |
| Footer bg | `#171822` | Dark background for footer section |
| Blog bg | `#f4f6f8` | Light gray background for Latest Blog section |
| Body font | `"Work Sans", sans-serif` | Primary typeface for all text |
| Price font | `"Poppins", sans-serif` | Used for pricing tier amounts |
| Button border-radius | `50px` | Pill shape on primary buttons, newsletter input, subscribe button |
| Card border-radius | `2px` | Subtle rounding on pricing cards, schedule tabs, blog items |
| Section spacing | `100px` top/bottom padding on `.spad` sections |
| Shadow (card) | `0px 6px 20px rgba(0, 0, 0, 0.15)` | Pricing cards, testimonial cards |
| Shadow (blog) | `0px 0px 30px rgba(79, 84, 139, 0.15)` | Blog item cards |
| Shadow (map) | `0px 12px 30px rgba(11, 12, 48, 0.15)` | Google Maps embed |

### Visual design (from screenshot)

The original Manup screenshot shows a bold event-conference landing page
with a dark hero section, warm orange-to-pink gradient accents, and a clean
structured layout. The hero has a large headline with white text on a dark
background image. The counter section uses a vibrant gradient bar. Speaker
cards use full-bleed images with hover social overlays. Pricing is
three-column with gradient price tags. The blog section mixes one large
feature card with two smaller stacked cards. A newsletter bar uses a
background image with gradient overlay. The footer is dark navy with
partner logo carousel and social icon circles.

---

## Requirements

### Feature: Header / Navigation

#### Scenario: Renders sticky navigation bar

- **GIVEN** the user loads the page
- **THEN** a navigation bar is visible at the top
- **AND** the nav contains links: Home, About, Speakers, Schedule, Blog, Contact
- **AND** the nav contains a "Ticket" CTA button styled as a pill with brand gradient

#### Scenario: Speakers dropdown on hover

- **GIVEN** the user hovers over the "Speakers" nav link
- **THEN** a dropdown appears listing speaker names (Emma, Sara, Jayden, Harriet)

### Feature: Hero Section

#### Scenario: Displays event headline and CTA

- **GIVEN** the user views the hero section
- **THEN** a date/event info line is visible (uppercase, accent color)
- **AND** a large headline "Change Your Mind To Become Success" is displayed
- **AND** a "Buy Ticket" primary button is shown below the headline
- **AND** a hero illustration/image appears on the right side

### Feature: Countdown Timer

#### Scenario: Shows event countdown

- **GIVEN** the user views the counter section
- **THEN** a countdown timer displays Days, Hours, Minutes, Seconds
- **AND** the section has a gradient background (brand gradient)
- **AND** "Conference Date" label and descriptive text appear on the left

### Feature: About Section

#### Scenario: Displays conference info with checklist

- **GIVEN** the user views the about section
- **THEN** an image appears on the left half
- **AND** "About Conference" heading appears on the right half
- **AND** a paragraph of descriptive text follows
- **AND** a checklist with 4 items (with accent-colored check icons) is shown
- **AND** a "Discover Now" link with underline effect is visible

### Feature: Team / Speakers Section

#### Scenario: Displays speaker cards in a row

- **GIVEN** the user views the speakers section
- **THEN** "Who's Speaking" heading is displayed centered
- **AND** 10 speaker cards are shown in a horizontal grid (5 per visible row)
- **AND** each card has a background image of the speaker
- **AND** each card shows speaker name and role on hover
- **AND** each card has social media icon links (Facebook, Instagram, Twitter, LinkedIn)

### Feature: Schedule Section

#### Scenario: Tabbed day schedule

- **GIVEN** the user views the schedule section
- **THEN** "Our Schedule" heading is displayed centered
- **AND** 5 tabs are shown: Day 1 through Day 5, each with a date
- **AND** the active tab has a gradient background
- **AND** each tab shows session cards with: speaker photo, session title, speaker name/email, time, location
- **AND** 4 sessions are shown per day tab

### Feature: Pricing Section

#### Scenario: Three-column pricing cards

- **GIVEN** the user views the pricing section
- **THEN** 3 pricing tier cards are displayed side by side
- **AND** each card has: tier name, price (with Poppins font), feature list, "Get Ticket" button
- **AND** the middle card has a "top rated" ribbon badge
- **AND** the section has a dark background image with overlay
- **AND** the price text uses the brand gradient

### Feature: Latest Blog Section

#### Scenario: Blog cards layout

- **GIVEN** the user views the blog section
- **THEN** "Latest News" heading is displayed centered
- **AND** 1 large blog card appears on the left (full height)
- **AND** 2 smaller blog cards appear stacked on the right
- **AND** each card has: background image, category tag, title, date
- **AND** the section has a light gray (#f4f6f8) background

### Feature: Newsletter Section

#### Scenario: Newsletter signup form

- **GIVEN** the user views the newsletter section
- **THEN** a newsletter bar with background image is displayed
- **AND** "Subscribe Newsletter" heading and description appear on the left
- **AND** an email input field with pill shape is shown
- **AND** a "Subscribe" button with gradient is shown on the right

### Feature: Contact Section

#### Scenario: Location and map

- **GIVEN** the user views the contact section
- **THEN** "Location" heading and "Get directions to our event center" text appear
- **AND** address, phone, email contact details are listed
- **AND** a Google Maps embed iframe is shown on the right half

### Feature: Footer

#### Scenario: Footer layout

- **GIVEN** the user views the footer
- **THEN** a partner logo carousel strip is shown at the top
- **AND** footer nav links: Home, Speakers, Schedule, Blog, Contact
- **AND** a copyright line with "Made with ❤ by Component Dock" text
- **AND** social media icon circles (Facebook, Twitter, LinkedIn, Instagram, YouTube)
- **AND** the footer has dark background (#171822)

---

## Verification checklist

- [ ] All 11 sections rendered in correct order
- [ ] Brand gradient (#ee8425 → #f9488b) applied to buttons, active tabs, badges
- [ ] Work Sans font loaded for body/headings
- [ ] Poppins font loaded for pricing amounts
- [ ] Pill-shaped buttons (border-radius: 50px)
- [ ] Countdown timer section has gradient background
- [ ] Speaker cards have hover effect (social overlay + name slide-in)
- [ ] Schedule tabs with 5-day switching
- [ ] Pricing cards with top-rated ribbon on middle card
- [ ] Blog section with asymmetric grid (1 large + 2 small)
- [ ] Newsletter bar with input + gradient subscribe button
- [ ] Contact section with map embed
- [ ] Dark footer with partner logos and social icons
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code
- [ ] placeholder images use https://picsum.photos/seed/orator-<n>/<w>/<h>
