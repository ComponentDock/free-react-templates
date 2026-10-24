# Template: Workzone (Conference / Event)
<!-- prep-status: shipped-as=seminar -->
> **SHIPPED-UNDER** — the ColorLib `workshop` design this prep describes already
> ships as `apps/seminar` (<https://seminar.free.componentdock.com>).
> Do not scaffold `apps/workzone`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-seminar/spec.md`.

## Purpose

Recreation of the ColorLib "Workshop" template.
- Source slug: `workshop`
- ColorLib URL: https://colorlib.com/wp/template/workshop/
- Preview URL: https://preview.colorlib.com/theme/workshop/
- Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript
- New name: **workzone** (no collision with existing apps/ or specs/)

## Design tokens

Extracted from `https://preview.colorlib.com/theme/workshop/css/style.css`:

| Token | Value | Notes |
|-------|-------|-------|
| Brand accent | `#ff5733` (orange-red) | Button hover, links, schedule highlights |
| Secondary accent | `#c70039` (crimson) | Gradient start for button hover |
| Dark bg | `#1b1d24` | Hero and section backgrounds |
| Dark surface | `#232531` | Schedule/program row backgrounds |
| Body text | `#fff` on dark / `#343a40` on light | |
| Muted text | `#818186` | |
| Border/divider | `#cfcfd1` | |
| Light bg | `#f4f5f9` / `#edf0f5` | Alternating section backgrounds |
| Font family | `'Roboto Mono', monospace` | Monospace feel throughout |
| Button radius | `0` (sharp corners) | `.btn-custom` is uppercase, no border-radius |
| Button bg | `#3f4046` default; gradient `#c70039 → #ff5733` on hover | |
| Button padding | `16px 30px` | Letter-spacing `0.2em`, uppercase |

## Section structure (in order)

1. **Navbar** — sticky top, logo left, nav links right (About, Speakers, Programs, Sponsors, News, Contact), mobile hamburger menu
2. **Hero** — dark background image, full-height, centered text: caption "Conference 2019", heading "Web Design Conference 2019", date/location subtitle, "Buy Tickets" CTA button
3. **Speakers** — section heading "Speakers" with description, 4 speaker cards (2×2 alternating image-left/image-right), each with photo, name, role
4. **Programs/Schedule** — section heading "Programs" with description, timeline rows with time + talk title + speaker name on dark background rows
5. **Sponsors** — section heading "Sponsors" with description, 3 sponsor logo images in a row
6. **News/Blog** — section heading "News", 3 blog post cards (image, title, author meta with avatar, date, excerpt)
7. **Footer** — 3-column: About Event (text), Quick Links (list), Connect with Us (social icons), copyright bar

## Requirements

### Navbar

#### Scenario: Navbar

- Scenario: Navbar renders all section links
- **GIVEN** the page loads
- **THEN** a navigation element is visible
- **AND** links to "About", "Speakers", "Programs", "Sponsors", "News", "Contact" are present
- Scenario: Mobile hamburger opens menu
- **GIVEN** the viewport is mobile-width
- **WHEN** the hamburger button is clicked
- **THEN** a mobile menu drawer opens with all nav links

### Hero

#### Scenario: Hero

- Scenario: Hero displays conference info
- **GIVEN** the page loads
- **THEN** a heading "Web Design Conference" is visible
- **AND** a date/location line is visible
- **AND** a "Buy Tickets" button is visible
- Scenario: Buy Tickets button navigates
- **GIVEN** the hero is visible
- **WHEN** the "Buy Tickets" button is clicked
- **THEN** navigation occurs (or scroll to section)

### Speakers

#### Scenario: Speakers

- Scenario: Speaker section shows 4 speakers
- **GIVEN** the page loads
- **WHEN** scrolling to the Speakers section
- **THEN** 4 speaker cards are visible
- **AND** each card shows a name and role

### Programs

#### Scenario: Programs

- Scenario: Schedule displays time slots
- **GIVEN** the page loads
- **WHEN** scrolling to the Programs section
- **THEN** at least 5 schedule rows are visible
- **AND** each row shows a time, title, and speaker name

### Sponsors

#### Scenario: Sponsors

- Scenario: Sponsors section shows logos
- **GIVEN** the page loads
- **WHEN** scrolling to the Sponsors section
- **THEN** at least 3 sponsor logos are visible

### News

#### Scenario: News

- Scenario: News section shows blog posts
- **GIVEN** the page loads
- **WHEN** scrolling to the News section
- **THEN** 3 blog post cards are visible
- **AND** each card shows an image, title, author, date, and excerpt

### Footer

#### Scenario: Footer

- Scenario: Footer renders all columns
- **GIVEN** the page loads
- **WHEN** scrolling to the footer
- **THEN** an "About Event" section is visible
- **AND** a "Quick Links" section is visible
- **AND** a "Connect with Us" section with social icons is visible
- **AND** a Component Dock link is present

## Verification checklist

- [ ] All 7 sections present in correct order
- [ ] Dark theme with #1b1d24 backgrounds
- [ ] Roboto Mono font applied
- [ ] Orange-red (#ff5733) accent color used for interactive elements
- [ ] Sharp-cornered buttons with gradient hover effect
- [ ] Speaker cards alternate image left/right layout
- [ ] Schedule rows have dark background with time/title/speaker
- [ ] Blog cards show image, title, author meta, excerpt
- [ ] Footer has 3 columns + copyright bar
- [ ] Component Dock link in footer
- [ ] Responsive: mobile hamburger, stacked columns
- [ ] No ColorLib references in app code
- [ ] picsum.photos placeholders for all images
