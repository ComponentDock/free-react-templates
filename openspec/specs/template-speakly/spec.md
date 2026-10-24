# Template: Speakly (Language Learning)

## Purpose

Recreation of ColorLib "Lingua" — a language learning school template.
- Source slug: `lingua`
- Preview URL: https://preview.colorlib.com/theme/lingua/
- Stack: React 19, Vite, Tailwind CSS 4, TypeScript

## Design tokens (from preview CSS)

| Token | Value |
|-------|-------|
| Brand primary | `#2e21df` (indigo-blue) |
| Brand accent | `#f9cf0e` (gold) |
| Dark background | `#252525` / `#232323` (footer) |
| Light background | `#f8f8f8` (sections) |
| White background | `#FFFFFF` |
| Text dark | `#000000` |
| Text muted | `#a5a5a5` |
| Warm accent | `#937c6f` (taupe), `#ffa07f`, `#FF6347` |
| Font primary | Poppins, sans-serif |
| Font secondary | Montserrat, sans-serif |
| Button radius | 3px (subtle rounded) |
| Card border-radius | 3px |

## Requirements

### TopBar

#### Scenario: TopBar

- Scenario: TopBar displays phone and social icons
- **GIVEN** the page loads
- **WHEN** the TopBar is rendered
- **THEN** it shows a phone number and social media icon links
- **AND** its background is white with a bottom border

### Header

#### Scenario: Header

- Scenario: Header displays logo and search
- **GIVEN** the page loads
- **WHEN** the Header is rendered
- **THEN** it shows a logo on the left and a search form on the right

### LanguageSlider

#### Scenario: LanguageSlider

- Scenario: LanguageSlider shows language flags in a carousel
- **GIVEN** the page loads
- **WHEN** the LanguageSlider section is visible
- **THEN** it displays 8 language items in a horizontal carousel
- **AND** each item shows a flag icon and language name

### Courses

#### Scenario: Courses

- Scenario: Courses section shows 3 course cards
- **GIVEN** the page loads
- **WHEN** the Courses section is visible
- **THEN** it displays 3 course cards in a row
- **AND** each card has an image, title, info text, student count, rating, and a price badge
- **AND** the price badge has brand-primary background (#2e21df)

### Instructors

#### Scenario: Instructors

- Scenario: Instructors section shows instructor profiles
- **GIVEN** the page loads
- **WHEN** the Instructors section is visible
- **THEN** it displays instructor cards in a grid

### Register

#### Scenario: Register

- Scenario: Register section shows CTA
- **GIVEN** the page loads
- **WHEN** the Register section is visible
- **THEN** it shows a registration call-to-action
- **AND** the section background is light gray (#f8f8f8)

### Events

#### Scenario: Events

- Scenario: Events section shows event cards
- **GIVEN** the page loads
- **WHEN** the Events section is visible
- **THEN** it displays 3 event cards in a row
- **AND** the section background is white

### Blog

#### Scenario: Blog

- Scenario: Blog section shows categories and featured post
- **GIVEN** the page loads
- **WHEN** the Blog section is visible
- **THEN** it shows a left panel with 6 category tiles in a 3x2 grid
- **AND** a right panel with a featured blog post (image, category, title, text)

### Footer

#### Scenario: Footer

- Scenario: Footer shows columns with newsletter and links
- **GIVEN** the page loads
- **WHEN** the Footer is rendered
- **THEN** it shows 4 columns: logo+newsletter, two link columns, contact+social
- **AND** the footer background is dark (#252525)
- **AND** it contains a Component Dock link

## Verification checklist

- [ ] All 9 sections present in correct order
- [ ] Brand color #2e21df used for price badges and CTAs
- [ ] Font: Poppins for body, Montserrat for headings
- [ ] Course cards: image, title, info, students, rating, price
- [ ] Blog: 6-category grid + featured post layout
- [ ] Footer: dark background, 4 columns, newsletter, Component Dock link
- [ ] Responsive layout with Tailwind breakpoints
- [ ] No ColorLib references in app code
- [ ] Placeholder images via picsum.photos
- [ ] Lucide icons where appropriate
