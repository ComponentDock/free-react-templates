# Template: AmenHouse (Church Website)
<!-- prep-status: shipped-as=fellowship -->
> **SHIPPED-UNDER** — the ColorLib `brotherlylove` design this prep describes already
> ships as `apps/fellowship` (<https://fellowship.free.componentdock.com>).
> Do not scaffold `apps/amenhouse`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-fellowship/spec.md`.

## Purpose

AmenHouse is a single-page church website template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Brotherlylove"
free church template (source: https://colorlib.com/wp/template/brotherlylove/),
built under a DIFFERENT name (**AmenHouse**), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a Bootstrap 4 church website with: a top info bar, sticky
navbar with dropdown menus, a full-width hero with background image and
overlay, a sermon announcement bar, a welcome section with video embed,
feature cards with icons, a church services carousel (Owl Carousel),
testimonials with blockquotes, and a multi-column footer with quick links,
events, and contact info. The design uses the Rubik font (weights 300/400/500)
and a muted purple (#6c5b7b) as the primary brand color on a white content
wrapper with a light gray (#e9ecef) page background.

**WHAT MAKES AMENHOUSE DISTINCT (signature behaviors):**

1. **Full-width hero with dark overlay + parallax background.** The
   `site-hero.overlay` section uses `data-stellar-background-ratio="0.5"`
   for parallax scrolling, with a `::before` pseudo-element darkening the
   image via `background: rgba(0,0,0,0.1)`. The hero contains a centered
   heading ("Let your light so shine before men.") and two CTAs: a
   `.btn-primary-white` pill button ("About Us") and a text link ("Visit
   Our Church") with a location icon.
2. **Overlapping sermon announcement bar (block-42).** A narrow bar with
   `border-top: 2px solid #6c5b7b` that overlaps the hero via negative
   margin (`.overlap` class). Contains "Latest Sermon:" label, sermon title,
   date/pastor info, and four media icons (video-camera, headphones,
   cloud-download, book).
3. **Split welcome section with video play button.** Two-column layout:
   left side has an image with a circular `.play-button` overlay (links to
   Vimeo), right side has heading "Welcome To Brotherly Love", description
   text, and pastor attribution. Uses `.img-shadow` for depth.
4. **Three feature cards with icon wrappers.** Each card has a circular
   icon wrapper (bg `#f6f6f6`, with decorative CSS triangles via
   `::before`/`::after` pseudo-elements in matching `#f6f6f6`) and a
   heading + description. The icons use Font Awesome (replace with
   lucide-react). Cards: "Connect With God" (book), "Come As You Are"
   (user), "Brotherly Love" (heart).
5. **Church services carousel (Owl Carousel).** A horizontal carousel of
   service cards (`.block-20`) each with an image, heading, description,
   and "Read More" link. The carousel is a single-row non-looping slider.
   Replace with a CSS-based carousel or flexbox scroll (no jQuery dependency).
6. **Testimonials section ("Change Lives").** Three-column grid of
   testimonial cards (`.block-33`) with blockquote text, circular avatar
   image, person name, and location. White card background (`#fff`) with
   padding.
7. **Multi-column footer with dark background.** Four-column footer
   (`.site-footer`) with: Church Quick Links (3 sub-columns of ministry
   links), Events (`.block-21` items with calendar/person/comment meta),
   Contact Information (`.block-23` with pin/phone/mail icons), and a
   copyright bar with social icons. Footer links are white with subtle
   underline on hover (`border-bottom: 1px solid rgba(255,255,255,0.05)`).

## Naming

The ColorLib source name "Brotherlylove" is FORBIDDEN as the app name.
New name: **AmenHouse** (`apps/amenhouse`, package
`@free-react-templates/amenhouse`).
Source slug: `brotherlylove`.
Source URL: https://colorlib.com/wp/template/brotherlylove/
Preview URL: https://preview.colorlib.com/theme/brotherlylove/

## Design tokens (extracted from preview)

| Token             | Value                                | Notes                                          |
| ----------------- | ------------------------------------ | ---------------------------------------------- |
| Primary color     | `#6c5b7b` (muted purple)            | Navbar active, buttons, borders, accents       |
| Page background   | `#e9ecef` (light gray)              | `body` background                              |
| Content wrapper   | `#fff` (white)                       | `.wrap` has max-width 1400px, white bg, shadow |
| Text color        | `gray` (body), `#000` (headings)     | h1/h2/h3 are black, body text is gray          |
| Font family       | Rubik (weights 300, 400, 500)       | Google Fonts via `<link>`                       |
| Button primary    | `#6c5b7b` bg, white text, 2px border | `.btn-primary-white` for hero CTA              |
| Button hover      | Transparent bg, `#6c5b7b` border     | `.btn-primary:hover`                            |
| Light section bg  | `#f6f6f6` (icon wrappers)           | Feature card icon background                   |
| Footer meta color | `#9f8fad` (muted lavender)          | Footer `.meta a` color                         |
| Border radius     | 0 (most elements)                    | Cards, dropdowns, buttons have no border-radius |
| Card shadow       | `0 0px 80px -10px rgba(0,0,0,0.2)`  | `.wrap` box-shadow                             |
| Dropdown shadow   | `0 2px 30px 0px rgba(0,0,0,0.2)`    | Navbar dropdown menu                           |
| Nav link size     | 15px                                 | `.nav-link` font-size                          |
| Line height       | 2 (body)                             | Generous vertical rhythm                       |

## Requirements

### Feature: Top bar and navigation

#### Scenario: Top info bar renders with links and social icons

- **GIVEN** the page is loaded
- **THEN** a top bar is visible above the navbar
- **AND** it contains links for "Home", "About Us", "Ministries"
- **AND** it shows social media icons (Facebook, Twitter, LinkedIn, Instagram)

#### Scenario: Navbar displays brand and navigation items

- **GIVEN** the page is loaded
- **THEN** the navbar shows the brand "AmenHouse" with a heart icon
- **AND** navigation items include "Home", "Ministries" (dropdown), "Sermons" (dropdown), "Events", "About", "Contact"
- **AND** the active nav link is highlighted in purple (#6c5b7b)

#### Scenario: Ministries dropdown shows ministry categories

- **GIVEN** the user hovers over "Ministries" in the navbar
- **THEN** a dropdown appears with items: "Outreach Ministry", "Men's Ministry", "Women's Ministry", "Children's Ministry", "Youth Ministry"

#### Scenario: Sermons dropdown shows sermon categories

- **GIVEN** the user hovers over "Sermons" in the navbar
- **THEN** a dropdown appears with items: "Daily Sermon", "Music", "Audio", "Video"

#### Scenario: Navbar is responsive on mobile

- **GIVEN** the viewport width is less than 992px
- **THEN** a hamburger toggler button is visible
- **AND** the nav items collapse into a mobile menu

### Feature: Hero section

#### Scenario: Hero renders with background image and overlay

- **GIVEN** the page is loaded
- **THEN** the hero section is visible with a background image
- **AND** a dark overlay covers the background (rgba(0,0,0,0.1))

#### Scenario: Hero displays heading and CTAs

- **GIVEN** the hero section is rendered
- **THEN** the heading reads "Let your light so shine before men."
- **AND** an "About Us" button is visible (white text on purple #6c5b7b)
- **AND** a "Visit Our Church" text link with location icon is visible

#### Scenario: Hero has parallax scrolling effect

- **GIVEN** the user scrolls the page
- **THEN** the hero background moves at a slower rate than foreground content

### Feature: Sermon announcement bar

#### Scenario: Sermon bar displays latest sermon info

- **GIVEN** the page is loaded
- **THEN** a sermon bar is visible below the hero
- **AND** it shows "Latest Sermon:" label
- **AND** it shows the sermon title "Rebuilding The Walls"
- **AND** it shows date "June 28, 2018" and pastor "Pastor John Smith"
- **AND** four media icons are visible (video, headphones, download, book)

#### Scenario: Sermon bar overlaps hero section

- **GIVEN** the page is loaded
- **THEN** the sermon bar overlaps the bottom of the hero section
- **AND** it has a purple (#6c5b7b) top border

### Feature: Welcome section

#### Scenario: Welcome section shows split layout with video

- **GIVEN** the page is loaded
- **THEN** a welcome section is visible with two columns
- **AND** the left column has an image with a circular play button overlay
- **AND** the right column has heading "Welcome To Church"
- **AND** the right column has a description paragraph
- **AND** the right column shows a pastor attribution

#### Scenario: Play button links to video

- **GIVEN** the user clicks the circular play button
- **THEN** a video modal or embed opens (Vimeo or placeholder)

### Feature: Feature cards

#### Scenario: Three feature cards render in a grid

- **GIVEN** the page is loaded
- **THEN** three feature cards are visible in a 3-column grid
- **AND** card 1 has an icon (BookOpen), heading "Connect With God", and description
- **AND** card 2 has an icon (User), heading "Come As You Are", and description
- **AND** card 3 has an icon (Heart), heading "Fellowship", and description

#### Scenario: Feature card icons have circular wrapper

- **GIVEN** the feature cards are rendered
- **THEN** each card's icon sits inside a circular wrapper with light gray (#f6f6f6) background

### Feature: Church services carousel

#### Scenario: Church services section displays heading

- **GIVEN** the page is loaded
- **THEN** a "Church Services" heading is visible on a light gray background

#### Scenario: Services carousel shows service cards

- **GIVEN** the church services section is rendered
- **THEN** a horizontal carousel/slider of service cards is visible
- **AND** each card has an image, heading, description, and "Read More" link
- **AND** at least 3 service cards are shown (Bible studies, Piano Lesson, The Truth)

#### Scenario: Services carousel is navigable

- **GIVEN** the services carousel is rendered
- **THEN** the user can scroll/navigate between service cards

### Feature: Testimonials section

#### Scenario: Testimonials section renders with heading

- **GIVEN** the page is loaded
- **THEN** a "Change Lives" heading is visible on a light gray background

#### Scenario: Three testimonial cards display

- **GIVEN** the testimonials section is rendered
- **THEN** three testimonial cards are visible in a 3-column grid
- **AND** each card has a blockquote with testimonial text
- **AND** each card has a circular avatar image
- **AND** each card shows a person name and location

### Feature: Footer

#### Scenario: Footer displays quick links

- **GIVEN** the page is loaded
- **THEN** the footer is visible with a dark background
- **AND** a "Church Quick Links" section shows ministry links in 3 columns

#### Scenario: Footer displays events

- **GIVEN** the footer is rendered
- **THEN** an "Events" section shows event items with title, date, author, and comment count

#### Scenario: Footer displays contact information

- **GIVEN** the footer is rendered
- **THEN** a "Contact Information" section shows address, phone, and email

#### Scenario: Footer shows copyright and social links

- **GIVEN** the footer is rendered
- **THEN** a copyright line is visible
- **AND** social media icons (Facebook, Twitter, LinkedIn, Instagram) are shown
- **AND** a "Component Dock" link is present (replacing Colorlib attribution)

## Verification checklist

- [ ] All sections render in correct order: top bar → navbar → hero → sermon bar → welcome → features → services → testimonials → footer
- [ ] Rubik font loads from Google Fonts (weights 300, 400, 500)
- [ ] Primary color #6c5b7b applied to: navbar active, buttons, sermon bar border, accents
- [ ] Hero has parallax background with dark overlay
- [ ] Sermon bar overlaps hero with negative margin
- [ ] Welcome section has video play button overlay on image
- [ ] Feature cards have circular icon wrappers with gray background
- [ ] Services carousel works (CSS-based, no jQuery)
- [ ] Testimonials show blockquotes with avatars
- [ ] Footer has 3-column quick links, events, contact info
- [ ] Footer links "Component Dock" (not Colorlib)
- [ ] Responsive: hamburger menu on mobile, stacked columns
- [ ] No ColorLib references in app code (only in spec/TEMPLATES.md)
- [ ] Images use picsum.photos placeholders with deterministic seeds
- [ ] All interactive elements have proper aria attributes
- [ ] npm run test:coverage passes at 100%
