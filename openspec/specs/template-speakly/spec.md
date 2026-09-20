# Template: Speakly (Language Learning)

## Purpose

Recreation of ColorLib **Lingua** — a language learning school template.
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

## Gherkin requirements

### TopBar
- Scenario: TopBar displays phone and social icons
  - Given the page loads
  - When the TopBar is rendered
  - Then it shows a phone number and social media icon links
  - And its background is white with a bottom border

### Header
- Scenario: Header displays logo and search
  - Given the page loads
  - When the Header is rendered
  - Then it shows a logo on the left and a search form on the right

### LanguageSlider
- Scenario: LanguageSlider shows language flags in a carousel
  - Given the page loads
  - When the LanguageSlider section is visible
  - Then it displays 8 language items in a horizontal carousel
  - And each item shows a flag icon and language name

### Courses
- Scenario: Courses section shows 3 course cards
  - Given the page loads
  - When the Courses section is visible
  - Then it displays 3 course cards in a row
  - And each card has an image, title, info text, student count, rating, and a price badge
  - And the price badge has brand-primary background (#2e21df)

### Instructors
- Scenario: Instructors section shows instructor profiles
  - Given the page loads
  - When the Instructors section is visible
  - Then it displays instructor cards in a grid

### Register
- Scenario: Register section shows CTA
  - Given the page loads
  - When the Register section is visible
  - Then it shows a registration call-to-action
  - And the section background is light gray (#f8f8f8)

### Events
- Scenario: Events section shows event cards
  - Given the page loads
  - When the Events section is visible
  - Then it displays 3 event cards in a row
  - And the section background is white

### Blog
- Scenario: Blog section shows categories and featured post
  - Given the page loads
  - When the Blog section is visible
  - Then it shows a left panel with 6 category tiles in a 3x2 grid
  - And a right panel with a featured blog post (image, category, title, text)

### Footer
- Scenario: Footer shows columns with newsletter and links
  - Given the page loads
  - When the Footer is rendered
  - Then it shows 4 columns: logo+newsletter, two link columns, contact+social
  - And the footer background is dark (#252525)
  - And it contains a Component Dock link

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
