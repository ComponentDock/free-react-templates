# Template: Supperly (Fine Dining Restaurant)

## Purpose

Recreation of ColorLib "Caviar" — a premium fine-dining restaurant website
template. Original source slug: `caviar`.

- **Original:** ColorLib "Caviar"
  (source: https://colorlib.com/wp/template/caviar/).
- **Preview URL:** `https://preview.colorlib.com/theme/caviar/` (HTTP 200, live).
- **Screenshot:** `caviar-free-template.jpg` from TEMPLATES.md — shows full-width
  hero with dark food photography, red accent CTA, About Us split section.
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript · Vitest + Testing
  Library. `@free-react-templates/supperly`.
- **Design aesthetic:** Upscale, contemporary fine-dining. Dark photography on
  white sections, red (#ff0000) accent, sans-serif typography (Work Sans /
  Open Sans). Minimal chrome, generous section padding, editorial feel.

## Design tokens (extracted from preview CSS)

| Token | Value | Notes |
|---|---|---|
| Brand color | `#ff0000` (red) | CTA buttons, accent text, hover states, slider nav hover |
| Primary text | `#333333` | Body copy, headings |
| Light text | `rgba(51,51,51,0.60)` | Form placeholders |
| Button text | `#000000` | CTA button label |
| Button bg | `#ffffff` | White button with grey border |
| Button border | `#b2b2b2` | 1px solid |
| Button radius | `0` (square) | Sharp rectangular buttons |
| Button dot accent | `8px × 8px` circle, `#ff0000` | Small red circle inside button |
| Footer bg | `#333333` | Dark charcoal |
| Footer text | `rgba(255,255,255,0.2)` | Very subtle copyright |
| Section bg (light) | `#fafafa` / `#f9f9f9` | Off-white alternate sections |
| Section bg (white) | `#ffffff` | Testimonials card, etc. |
| Heading font | `Work Sans` (Google Fonts) | Used on buttons, section headings |
| Body font | `Open Sans` (Google Fonts) | Body copy |
| Section padding | `150px` top/bottom | Generous vertical rhythm |
| Heading h2 | `36px`, `font-weight: 700` | Section headings |
| Button size | `min-width: 180px`, `height: 54px` | CTA button dimensions |
| Avatar border radius | `50%` | Circular testimonial avatars |
| Testimonial card shadow | `0 0 1px rgba(0,0,0,0.1)` | Subtle card lift |
| Thumbnail shadow | `3px 5px 45px rgba(0,0,0,0.15)` | About Us images |
| Social sidebar | Vertical, right edge, white icons on hero | Position `top: 50%; right: 50px` |

## Section structure (from preview DOM)

1. **Navbar** — Fixed/transparent header. Logo wordmark "supperly" left.
   Nav links right: Home, About Us, Menu, Awards, Testimonials, Reservation,
   Contact. Search icon button.

2. **Hero** — Full-width carousel/slider. Large background image (dark food
   photography). Left-aligned hero content: H2 headline, paragraph, CTA button
   "Reservation" (white bg, red dot, border). Right sidebar: vertical social
   icons (Facebook, Instagram, Twitter). Slider nav arrow on right side.

3. **About Us** — Two-part section (section-padding-150).
   Part A: Image left (6-col), text right (5-col): heading "About Us",
   red uppercase subheading "restaurant style", body paragraph.
   Part B: Text left (5-col), image right (6-col): heading implicit,
   red uppercase subheading "our chef", body paragraph.

4. **Dish Menu** — White section with decorative rotated "Special" watermark.
   Centered heading "Special", CTA button "View The Menu".
   3-column grid: dish image + name + price ($45). 3 dishes shown.

5. **Awards** — Heading "Awards" left (2-col), 5 award badge images right
   (9-col) in horizontal flex row.

6. **Testimonials** — Heading "Testimonials" centered. Carousel/slider of
   testimonials. Each: circular avatar + name + tagline + quote paragraph.
   Card with subtle shadow, white bg. 3 testimonials shown.

7. **Reservation** — Split layout. Left: dark background image (full-height).
   Right: white form area with heading "Reservation", form fields:
   date picker, time picker, persons input, last name input,
   message textarea. Submit button "Reserve Your Desk".

8. **Footer** — Dark charcoal (#333333) bg. Logo wordmark centered.
   Copyright text (subtle white). Link to Component Dock.

## Gherkin scenarios

### Feature: Supperly — Fine Dining Restaurant Template

#### Scenario: Navbar renders with all navigation links
- **GIVEN** the user loads the Supperly homepage
- **WHEN** the navbar is visible
- **THEN** it SHALL contain the logo/brand text "supperly"
- **AND** it SHALL contain navigation links: About Us, Menu, Awards,
  Testimonials, Reservation, Contact
- **AND** it SHALL contain a search icon button

#### Scenario: Hero section displays with CTA
- **GIVEN** the user loads the Supperly homepage
- **WHEN** the hero section is rendered
- **THEN** it SHALL display a full-width background image
- **AND** it SHALL contain a heading (H2)
- **AND** it SHALL contain descriptive paragraph text
- **AND** it SHALL contain a "Reservation" CTA button with red dot accent
- **AND** social media icon links SHALL be positioned vertically on the right

#### Scenario: About Us section shows two content blocks
- **GIVEN** the user scrolls to the About Us section
- **WHEN** the section renders
- **THEN** it SHALL show a heading "About Us"
- **AND** it SHALL contain a red uppercase subheading "restaurant style"
- **AND** it SHALL show an image alongside the text
- **AND** it SHALL have a second sub-section with subheading "our chef"
  and an image on the opposite side

#### Scenario: Dish Menu section shows special dishes
- **GIVEN** the user scrolls to the Menu section
- **WHEN** the section renders
- **THEN** it SHALL show a centered heading "Special"
- **AND** it SHALL contain a "View The Menu" CTA button
- **AND** it SHALL display a 3-column grid of dish cards
- **AND** each dish card SHALL show an image, dish name, and price

#### Scenario: Awards section shows award badges
- **GIVEN** the user scrolls to the Awards section
- **WHEN** the section renders
- **THEN** it SHALL show a heading "Awards"
- **AND** it SHALL display award badge images in a horizontal row

#### Scenario: Testimonials carousel shows reviews
- **GIVEN** the user scrolls to the Testimonials section
- **WHEN** the section renders
- **THEN** it SHALL show a centered heading "Testimonials"
- **AND** it SHALL display a carousel of testimonial cards
- **AND** each card SHALL contain an avatar image, name, tagline, and quote

#### Scenario: Reservation form accepts booking details
- **GIVEN** the user scrolls to the Reservation section
- **WHEN** the form renders
- **THEN** it SHALL show a heading "Reservation"
- **AND** it SHALL contain fields: date, time, persons, last name, message
- **AND** it SHALL contain a submit button "Reserve Your Desk"
- **AND** a decorative background image SHALL appear on the left side

#### Scenario: Footer displays brand and copyright
- **GIVEN** the user scrolls to the footer
- **WHEN** the footer renders
- **THEN** it SHALL display the brand text "supperly"
- **AND** it SHALL contain copyright text
- **AND** it SHALL link to Component Dock (https://www.componentdock.com/)

#### Scenario: Design tokens are applied correctly
- **GIVEN** the user views any section of Supperly
- **WHEN** visual styling is computed
- **THEN** the brand color SHALL be red (#ff0000)
- **AND** the primary font SHALL be Work Sans / Open Sans
- **AND** CTA buttons SHALL be white with red dot accent and square corners
- **AND** section backgrounds SHALL alternate between white and off-white (#fafafa)

#### Scenario: Responsive layout adapts to mobile
- **GIVEN** the user loads Supperly on a mobile viewport (< 768px)
- **WHEN** the layout renders
- **THEN** the navbar SHALL collapse into a hamburger menu
- **AND** multi-column grids SHALL stack to single column
- **AND** the reservation form and image SHALL stack vertically
- **AND** all content SHALL remain readable and accessible

## Verification checklist

- [ ] Navbar renders with all links and search button
- [ ] Hero section shows background image, heading, text, CTA, social icons
- [ ] About Us shows two-part layout with images and subheadings
- [ ] Dish Menu shows 3-column grid with dish info
- [ ] Awards section shows horizontal row of badges
- [ ] Testimonials carousel renders with avatar, name, quote
- [ ] Reservation form renders all fields and submit button
- [ ] Footer shows brand, copyright, Component Dock link
- [ ] Brand color #ff0000 applied to accents and CTAs
- [ ] Work Sans / Open Sans fonts loaded
- [ ] Buttons have square corners (border-radius: 0)
- [ ] Section padding matches ~150px vertical rhythm
- [ ] Responsive breakpoints collapse columns correctly
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] No ColorLib references in app code (provenance only in spec/TEMPLATES.md)
- [ ] `npm run verify:app upperly` passes (typecheck + lint + tests + build)
