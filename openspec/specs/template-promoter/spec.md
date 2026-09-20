# Template: Promoter (Event/Conference)

## Purpose
Recreation of ColorLib "Eventro" event/conference template.
- **Source:** https://colorlib.com/wp/template/eventro/
- **Preview:** https://preview.colorlib.com/theme/eventro/
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens
Extracted from the live preview stylesheet (`style.css`):

| Token | Value | Usage |
| --- | --- | --- |
| Brand primary | `#FDE449` (bright yellow/gold) | Hero caption accents, CTA button background on hover, boxed-btn hover |
| Brand secondary | `#302072` (deep purple/navy) | Header button bg, btn primary color, dark accent |
| Dark primary | `#140C40` | Dark section backgrounds |
| Dark secondary | `#2c234d` | Speaker card headings |
| Light background | `#F6F7FF` (very light lavender) | `section-bg1`, alternating section backgrounds |
| Blue accent | `#0154F7` | `section-bg2` background |
| Body text | `#79709D` (muted purple-gray) | Nav tab text, secondary text |
| Gray text | `#777777` | Paragraph/body text |
| White | `#fff` | Primary background, headings on dark sections, boxed-btn bg |
| Font heading | Oswald (sans-serif) | Headings, hero h1 |
| Font body | Roboto (sans-serif) | Body text, paragraphs |
| Button radius | 5px | `.btn` elements |
| Boxed button | 18px 44px padding, text-transform uppercase | `.boxed-btn` (white bg, gold text) |
| Hero CTA | 30px 43px padding, border-radius 5px, font-size 20px | `.btn` primary (yellow bg, purple text) |
| Section padding | Section-level padding via `.section-padding` | All major sections |

**Background images:** `assets/img/gallery/section-bg1.jpg` (subscribe area), `assets/img/gallery/section-bg2.jpg` (contact CTA)

## Visual design notes
Event/conference site with a dark-themed hero slider, light lavender alternating sections, and a bold yellow (#FDE449) + deep purple (#302072) color scheme. The hero is a full-width image slider with date range, conference title, and dual CTAs. The about section uses a two-column layout with images. A features/highlights section highlights speakers/executives. A tabbed program schedule with 4 day-tabs follows. The speakers section is on a light lavender background with a 3-column card grid. The contact/CTA section uses a dark blue background with a centered "Buy Ticket" button. Footer is minimal with nav links.

## Section structure (in page order)
1. **Navbar** — Logo left, nav links center (Home, About, Programs, Speakers, Blog, Contact), "Buy Ticket" button right (purple bg)
2. **Hero** — Full-width image slider with date range "12 Jan – 20 Jan", headline "Business Conference", subtitle, "Join Now" yellow CTA button + "Watch Video" text link
3. **About** — Two-column: text left ("About the Conference" heading + description), images right (about.jpg, about2.jpg)
4. **Highlights** — "The New Era of Tech Companies" heading, description text, feature highlights with images
5. **Subscribe** — Background image section, "We have top executive & start up here" heading, description, email subscribe form (input + Subscribe button)
6. **ProgramSchedule** — "Program Details" heading, 4 tabbed day tabs (Day 1–4), each with schedule items (time + talk title + description)
7. **Speakers** — "Our Speakers" heading, 3-column grid of speaker cards (image + name + role), light lavender background
8. **ContactCTA** — "Book your seat" centered heading, description, "Buy Ticket" button, dark background with background image
9. **Footer** — Logo, nav links, social icons, Component Dock link

## Gherkin requirements

### Navbar
- Scenario: Navbar displays logo, nav links, and Buy Ticket button
  - Given the user is on the Promoter page
  - Then a navigation bar is visible with logo on the left
  - And links "Home", "About", "Programs", "Speakers", "Contact" are shown
  - And a "Buy Ticket" button is visible on the right

- Scenario: Navbar is transparent/overlaying the hero
  - Given the user views the top of the page
  - Then the header overlays the hero slider
  - And the nav background is transparent or semi-transparent

### Hero
- Scenario: Hero slider displays conference info
  - Given the user views the hero section
  - Then a date range is displayed (e.g. "12 Jan – 20 Jan 2025")
  - And a headline "Business Conference" is shown
  - And a subtitle description is visible
  - And a "Join Now" yellow CTA button is present

- Scenario: Hero has Watch Video link
  - Given the user is on the hero section
  - Then a "Watch Video" text link/icon is visible next to the CTA

- Scenario: Hero slider has navigation
  - Given the user is on the hero slider
  - Then prev/next arrow buttons are present for slide navigation

### About
- Scenario: About section displays conference description
  - Given the user scrolls to the about section
  - Then a heading "About the Conference" is shown
  - And a description paragraph is visible
  - And one or more images are displayed in a two-column layout

### Highlights
- Scenario: Highlights section shows key features
  - Given the user scrolls to the highlights section
  - Then a heading "The New Era of Tech Companies" is shown
  - And a description paragraph is visible
  - And feature highlights are displayed

### Subscribe
- Scenario: Subscribe section has email form
  - Given the user scrolls to the subscribe section
  - Then a heading "We have top executive & start up here" is shown
  - And an email input field is visible
  - And a "Subscribe" button is present
  - And the section has a background image

### ProgramSchedule
- Scenario: Program schedule displays tabbed days
  - Given the user scrolls to the program section
  - Then a heading "Program Details" is shown
  - And 4 day tabs are visible (Day 1 through Day 4)

- Scenario: Selecting a tab shows that day's schedule
  - Given the user clicks the "Day 2" tab
  - Then the schedule content updates to show Day 2 events
  - And each event shows time, title, and description

### Speakers
- Scenario: Speakers section displays speaker cards
  - Given the user scrolls to the speakers section
  - Then a heading "Our Speakers" is shown
  - And 3 speaker cards are displayed in a row
  - And each card shows an image, name, and role

### ContactCTA
- Scenario: Contact CTA section displays booking prompt
  - Given the user scrolls to the contact CTA section
  - Then a heading "Book your seat" is shown
  - And a description paragraph is visible
  - And a "Buy Ticket" button is present
  - And the section has a dark background with background image

### Footer
- Scenario: Footer displays navigation and branding
  - Given the user scrolls to the footer
  - Then nav links are visible (Home, About, Programs, Speakers, Contact)
  - And a Component Dock link is present
  - And social media icons are shown

## Verification checklist
- [ ] All 9 sections render in correct order
- [ ] Navbar overlays hero with transparent background
- [ ] Hero slider works with prev/next navigation
- [ ] Yellow (#FDE449) brand color used for CTAs
- [ ] Purple (#302072) used for header button and dark accents
- [ ] Oswald font used for headings, Roboto for body
- [ ] Program schedule tabs switch content
- [ ] Speaker cards display in 3-column grid
- [ ] Subscribe form has email input + button
- [ ] Footer links to Component Dock
- [ ] All images use picsum.photos placeholders
- [ ] No ColorLib references in app code
- [ ] Responsive layout (mobile hamburger nav, stacked columns)
