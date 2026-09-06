# Template: Pedestal (Footer)

## Purpose

Recreation of ColorLib "Bootstrap Footer 02"
(https://colorlib.com/wp/template/bootstrap-footer-02/).
Preview: https://preview.colorlib.com/theme/bft/bootstrap-footer-02/

Stack: React 19, Vite, Tailwind CSS 4, TypeScript (strict). Vitest + Testing
Library with 100% coverage enforced.

## Source Reference

- **ColorLib slug:** bootstrap-footer-02
- **Preview URL:** https://preview.colorlib.com/theme/bft/bootstrap-footer-02/
- **ColorLib page:** https://colorlib.com/wp/template/bootstrap-footer-02/
- **Description:** A dark-themed footer template with three columns (About Us
  with contact info + email subscribe, Latest Tweet feed, Instagram photo
  grid), a horizontal navigation menu bar, and Component Dock branding.

## Design Tokens (extracted from live preview CSS)

### Colors

| Token             | Value                   | Usage                                     |
| ----------------- | ----------------------- | ----------------------------------------- |
| Footer background | `#202126`               | Dark charcoal — main footer section bg    |
| Content area      | `bg-gray-200`           | Light gray bg for the hero/placeholder    |
| Footer body text  | `#888`                  | Muted gray — paragraph and link default   |
| H3 headings       | `#fff`                  | White — section headings                  |
| Contact info text | `#fff`                  | White — phone and email text              |
| Contact icons     | `#f88020`               | Orange — phone/email icons, subscribe btn |
| Subscribe input   | `#292b31`               | Darker gray — email input background      |
| Input placeholder | `#ccc`                  | Light gray — placeholder text             |
| Tweet text        | `#888` italic           | Muted gray, italic — tweet body           |
| Tweet icons       | `#fff`                  | White — Twitter icon in tweet items       |
| Menu links        | `#fff`                  | White — footer nav links                  |
| Logo text         | `#fff`                  | White — site logo                         |
| Border            | `rgba(255,255,255,0.1)` | Subtle white — menu separator             |

### Typography

| Element    | Font family                                                    |
| ---------- | -------------------------------------------------------------- |
| Body       | `"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", ...` |
| Footer     | `"Poppins", sans-serif`                                        |
| Headings   | Poppins, 20px, white, margin-bottom 30px                       |
| Paragraphs | `"Source Serif Pro", serif`                                    |
| Tweets     | Source Serif Pro, italic, 15px                                 |
| Logo       | 20px, white                                                    |

### Spacing & Shapes

| Token           | Value                                                |
| --------------- | ---------------------------------------------------- |
| Footer padding  | `7rem 0` (vertical)                                  |
| Subscribe input | height 55px, padding-left 30px, border-radius 30px   |
| Subscribe btn   | height 47px, border-radius 30px, absolute positioned |
| Tweet items     | margin-bottom 20px                                   |
| Gallery images  | margin-bottom 10px, 2x2 grid with 5px gap            |
| Menu border     | `border-top: 1px solid rgba(255,255,255,0.1)`        |
| Menu spacing    | margin-top 7rem, padding-top 2rem                    |
| Transitions     | `0.3s all ease` on all anchor tags                   |

### Layout (3-column + menu bar)

1. **About Us** column: heading, paragraph, contact list (phone + email with
   icons), subscribe form (email input + Send button)
2. **Latest Tweet** column: heading, 3 tweet items with Twitter icon + text
3. **Instagram** column: heading, 2x2 image grid
4. **Footer menu bar** (full width): horizontal nav links (Home, About, Our
   works, Services, Blog, Contacts) + Component Dock logo on right

## Requirements

### Requirement: Footer renders with correct semantic structure

The footer MUST be a `<footer>` element with role="contentinfo" and a dark background.

#### Scenario: Footer element renders

- **GIVEN** the page loads
- **THEN** a `<footer>` element with role="contentinfo" is present
- **AND** the footer has a dark charcoal background (`#202126`)

### Requirement: About Us column renders with contact info and subscribe form

The About Us section MUST display a heading, descriptive paragraph, phone and email links with orange icons, and a subscribe form.

#### Scenario: About Us content renders

- **GIVEN** the footer is visible
- **THEN** the "About Us" heading is displayed
- **AND** a descriptive paragraph is shown
- **AND** a phone number link (+1 291 3912 329) is displayed
- **AND** an email address link (info@gmail.com) is displayed
- **AND** a subscribe form with email input and Send button is present

#### Scenario: Subscribe form accepts email input

- **GIVEN** the subscribe form is visible
- **WHEN** the user types an email address
- **THEN** the input field displays the typed email
- **AND** the Send button is clickable

#### Scenario: Subscribe form prevents default submission

- **GIVEN** the subscribe form is visible
- **WHEN** the user submits the form
- **THEN** the page does not reload (default prevented)

### Requirement: Latest Tweet column renders with 3 tweet items

The Latest Tweet section MUST display a heading and exactly 3 tweet items with Twitter icons.

#### Scenario: Tweet items render

- **GIVEN** the footer is visible
- **THEN** the "Latest Tweet" heading is displayed
- **AND** exactly 3 tweet items are shown

### Requirement: Instagram column renders with 4 placeholder images

The Instagram section MUST display a heading and a 2x2 grid of 4 images with alt text.

#### Scenario: Instagram gallery renders

- **GIVEN** the footer is visible
- **THEN** the "Instagram" heading is displayed
- **AND** exactly 4 images are shown with non-empty alt text

### Requirement: Footer menu bar renders navigation and Component Dock branding

The footer menu bar MUST display horizontal navigation links and a Component Dock attribution link.

#### Scenario: Navigation menu renders

- **GIVEN** the footer is visible
- **THEN** navigation links are displayed: Home, About, Our works, Services, Blog, Contacts
- **AND** all navigation links point to "#"

#### Scenario: Component Dock attribution renders

- **GIVEN** the footer is visible
- **THEN** a link to componentdock.com is present with text "Component Dock"
- **AND** the link opens in a new tab with rel="noreferrer"

### Requirement: Design tokens are applied correctly

The footer MUST use the correct font families (Poppins for footer, Source Serif Pro for paragraphs) and accent color for interactive elements.

#### Scenario: Font families applied

- **GIVEN** the footer is visible
- **THEN** the footer element uses Poppins font family
- **AND** paragraphs use Source Serif Pro font family
