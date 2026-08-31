# Template: Swipe (Testimonials Carousel)

## Purpose

Swipe is a single-section testimonials carousel page in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Carousel 08"
website template design (see TEMPLATES.md), built under a different name with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Requirements

### Requirement: Section renders with heading

The testimonials section SHALL display a centered heading and generous vertical padding.

#### Scenario: Heading is visible on page load

- **WHEN** the page loads
- **THEN** a centered heading "Testimonials" is visible
- **AND** the section has generous vertical padding (~7em)
- **AND** the background is a very light gray

### Requirement: Carousel displays testimonial cards

The carousel SHALL display testimonial slides in a 50/50 split layout.

#### Scenario: Testimonial cards are rendered

- **WHEN** the testimonials section is rendered
- **THEN** there are at least 3 testimonial slides
- **AND** each slide contains a 50/50 split layout (image left, text right)
- **AND** each image uses a background-image covering its container
- **AND** each text panel has a white background with centered content

### Requirement: Testimonial card content structure

Each testimonial card SHALL display a quote, author name in brand gold, and position label.

#### Scenario: Card displays quote and attribution

- **WHEN** a testimonial card is displayed
- **THEN** the quote text is rendered in a serif font (Playfair Display)
- **AND** the quote text is large (~39px) and bold
- **AND** the author name is displayed below the quote in brand gold color (#dbcc8f)
- **AND** the author position/title is shown in muted gray text below the name

### Requirement: Carousel navigation dots

The carousel SHALL display pagination dots for slide navigation.

#### Scenario: Dots are displayed and interactive

- **WHEN** the carousel has multiple slides
- **THEN** there is one dot per slide
- **AND** dots are small circles (~10px) with a dark border
- **AND** the active slide's dot is filled with the brand gold color
- **AND** clicking a dot navigates to the corresponding slide

### Requirement: Carousel auto-advances

The carousel SHALL auto-advance to the next slide after a timeout.

#### Scenario: Automatic slide advancement

- **WHEN** the carousel is displayed
- **AND** the user waits for the timeout period
- **THEN** the carousel auto-advances to the next slide

### Requirement: Carousel arrow navigation

The carousel SHALL provide arrow navigation with hover transitions.

#### Scenario: Arrow navigation works

- **WHEN** the carousel is displayed
- **AND** the user clicks the right arrow
- **THEN** the carousel navigates to the next slide
- **AND** the arrows transition to the brand gold color on hover

### Requirement: Responsive layout

The carousel SHALL stack vertically on mobile devices.

#### Scenario: Mobile layout

- **WHEN** the page is viewed on a mobile device (< 768px)
- **THEN** the testimonial card stacks vertically (image on top, text below)
- **AND** the image height reduces to ~450px
- **AND** carousel controls remain accessible

### Requirement: Minimal page structure

The page SHALL consist of the testimonials section plus a minimal footer with Component Dock link.

#### Scenario: Page structure

- **WHEN** the page loads
- **THEN** there is no navigation bar
- **AND** the page consists of the testimonials carousel section plus a minimal footer
- **AND** the footer links to https://www.componentdock.com/

## Design tokens

| Token             | Value                                  | Usage                               |
| ----------------- | -------------------------------------- | ----------------------------------- |
| Brand color       | `#dbcc8f` (warm gold/tan)              | Links, active dots, author name     |
| Font — body       | "Poppins", sans-serif                  | Body text, headings, all UI         |
| Font — accent     | "Playfair Display", serif              | Testimonial quote text (h3)         |
| Body text color   | `gray` (#808080)                       | Body copy, position labels          |
| Heading color     | `#000` (black)                         | Section heading, quote text         |
| Page background   | `rgba(0, 0, 0, 0.05)`                  | Very light gray                     |
| Card background   | `#fff` (white)                         | Testimonial text panel              |
| Card shadow       | `0px 10px 40px -30px rgba(0,0,0,0.42)` | Soft elevated shadow                |
| Card image height | 600px (desktop), 450px (mobile)        | Person photo background-image       |
| Quote font size   | 39px, weight 700                       | Playfair Display testimonial text   |
| Author name       | 20px, weight 500, color #dbcc8f        | Attribution name                    |
| Dot size          | 10px circle, 1px border #000           | Carousel pagination                 |
| Active dot        | background + border = #dbcc8f          | Current slide indicator             |
| Arrow color       | rgba(0, 0, 0, 0.2) → #dbcc8f           | Navigation arrows, hover transition |
| Border radius     | 0 (no rounded corners)                 | Cards, buttons                      |
| Section padding   | 7em 0                                  | ftco-section vertical rhythm        |

## Verification checklist

- [ ] Heading is centered, 28px, Poppins, regular weight
- [ ] Background is very light gray rgba(0, 0, 0, 0.05)
- [ ] Section padding matches ~7em vertical
- [ ] Carousel displays 3 testimonial slides
- [ ] Each slide: 50/50 split (image left, text right)
- [ ] Image panel: background-image, cover, 600px height (450px mobile)
- [ ] Text panel: white background, centered, soft box shadow
- [ ] Quote text: Playfair Display, 39px, weight 700, black
- [ ] Author name: 20px, weight 500, brand gold #dbcc8f
- [ ] Position label: muted gray, smaller text
- [ ] Dots: 10px circles, black border, active = gold fill
- [ ] Arrow navigation: subtle black → gold on hover
- [ ] Responsive: mobile stacks vertically, image 450px
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
