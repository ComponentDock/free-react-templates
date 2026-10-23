# Template: SacredGate (Church / Non-Profit Landing Page)

## Purpose

SacredGate is a single-page church / ministry landing page in the
free-react-templates monorepo. It is a React recreation of the ColorLib
"Church" free HTML template (source:
https://colorlib.com/wp/template/church/), live preview at
https://preview.colorlib.com/theme/church/, built under a DIFFERENT name
(**SacredGate**), with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

**Note:** The TEMPLATES.md entry is listed as "Church Wordpress Themes"
(slug `church-wordpress-themes`) but the actual live HTML template resolves
at `preview.colorlib.com/theme/church/`. The colorlib detail page is
`colorlib.com/wp/template/church/`. Both URLs were checked during
research.

## Design tokens (extracted from preview CSS)

| Token | Value | Usage |
|-------|-------|-------|
| Brand color (primary) | `#eb4141` (red) | Buttons, newsletter bg, donation button, accents |
| Secondary accent | `#ffd600` (yellow) | Button underline, nav hover, section accents |
| Top bar bg | `#000000` (black) | Countdown timer bar |
| Page background | `#FFFFFF` (white) | Intro, Causes, News sections |
| Sermon section bg | `#f0f4f8` (light blue-gray) | Sermon section background |
| Footer bg | `#161619` (dark charcoal) | Footer background |
| Quote section bg | parallax image overlay (dark) | Quote section background |
| Services section bg | parallax image overlay (dark) | Services section background |
| Heading font | `"Bilbo", serif` | Logo, decorative headings |
| Body font | `"Montserrat", sans-serif` | All body text, nav, buttons |
| Button style | Red bg `#eb4141`, 157×54px, yellow `#ffd600` underline | `.button` class |
| Button hover | Red opacity 0.75 | `.button:hover` |
| Button radius | 0 (sharp corners) | Default button shape |
| Card/section padding | 97–98px vertical | Consistent section spacing |
| Newsletter bg | `#eb4141` (brand red) | Newsletter CTA section |
| Text colors | `#000000` (headings), `#6b6b6b` / `#797979` (body), `#9d9d9d` (muted) | Text hierarchy |
| Footer text | `#FFFFFF` (headings), `#b5b5b5` (body) | Footer content |

## Section order (from live preview DOM)

1. **Top Bar** — black `#000000` bg, countdown timer (days/hours/minutes/seconds),
   red "Send Donations" button on right
2. **Header** — white bg, logo ("Church" in Bilbo serif font), sticky nav
   (Home, Ministries, Sermons, Blog, Contact), search icon, hamburger menu
3. **Hero/Slider** — full-width Owl Carousel, dark overlay, "God is all around us"
   headline (Bilbo 112px white), CTA button per slide
4. **Intro** — white bg, "Welcome to Our Church" heading, descriptive text +
   image (two-column layout)
5. **Services** — parallax background image, "Our Church main activities"
   heading (white), 5 service items with circular icons + titles
6. **Causes** — white bg, "Our Church's Causes" heading, slider of cause
   cards with images, titles, descriptions
7. **Quote** — parallax background image, "Quote of the day" heading (white),
   large quote text with character/source attribution
8. **Sermon** — light gray `#f0f4f8` bg, "Today's Sermon" heading, sermon
   cards with images, titles, dates, play buttons
9. **Newsletter** — red `#eb4141` bg, newsletter signup form (email input +
   submit button)
10. **News/Blog** — white bg, "Latest News" heading, blog post cards with
    images, date badges, titles, excerpts, "Read More" links
11. **Footer** — dark `#161619` bg, logo + subtitle, 3-column layout
    (Quick Links, Support, Contact info), social media icons, copyright bar

## Requirements

### Feature: SacredGate template behaviour

**Background**
- **GIVEN** the app is loaded at the root URL
- **THEN** the page renders without errors
- **AND** all sections are present in the correct order

#### Scenario: Top bar renders with countdown and donation CTA

- **GIVEN** the user views the page
- **THEN** a black top bar is visible at the top
- **AND** a countdown timer shows days, hours, minutes, seconds
- **AND** a red "Send Donations" button is on the right side of the top bar

#### Scenario: Header renders with navigation

- **GIVEN** the user views the page
- **THEN** a white header is visible below the top bar
- **AND** a logo with the text "Church" (Bilbo serif font) is displayed
- **AND** navigation links for Home, Ministries, Sermons, Blog, Contact are present
- **AND** a search icon is visible in the header
- **AND** a hamburger menu icon is visible for mobile

#### Scenario: Hero slider displays slides

- **GIVEN** the user views the page
- **THEN** a full-width carousel/slider is visible
- **AND** the current slide displays the heading "God is all around us"
- **AND** each slide has a CTA button
- **AND** the slider supports auto-rotation between slides

#### Scenario: Intro section displays welcome content

- **GIVEN** the user scrolls to the intro section
- **THEN** a "Welcome to Our Church" heading is visible
- **AND** descriptive text about the church is present
- **AND** an image is displayed alongside the text (two-column layout)

#### Scenario: Services section shows ministry activities

- **GIVEN** the user scrolls to the services section
- **THEN** a parallax background image is visible behind the content
- **AND** the heading "Our Church main activities" is displayed in white
- **AND** 5 service items are shown with circular icons, titles, and descriptions

#### Scenario: Causes section displays church causes

- **GIVEN** the user scrolls to the causes section
- **THEN** a white background section is visible
- **AND** the heading "Our Church's Causes" is displayed
- **AND** cause cards are shown with images, titles, and descriptions
- **AND** the causes are displayed in a slider/carousel format

#### Scenario: Quote section displays a quote

- **GIVEN** the user scrolls to the quote section
- **THEN** a parallax background image is visible
- **AND** the heading "Quote of the day" is displayed in white
- **AND** a large quote text is shown with character and source attribution

#### Scenario: Sermon section shows recent sermons

- **GIVEN** the user scrolls to the sermon section
- **THEN** a light gray (#f0f4f8) background section is visible
- **AND** the heading "Today's Sermon" is displayed
- **AND** sermon cards show images, titles, dates, and play buttons

#### Scenario: Newsletter section has signup form

- **GIVEN** the user scrolls to the newsletter section
- **THEN** a red (#eb4141) background section is visible
- **AND** a newsletter signup form with email input is displayed
- **AND** a submit button is present

#### Scenario: News section shows blog posts

- **GIVEN** the user scrolls to the news section
- **THEN** a white background section is visible
- **AND** the heading "Latest News" is displayed
- **AND** blog post cards show images, date badges, titles, excerpts, and "Read More" links

#### Scenario: Footer displays site information

- **GIVEN** the user views the footer
- **THEN** a dark (#161619) background footer is visible
- **AND** the logo with "Church" text (Bilbo serif) is displayed
- **AND** three columns of links (Quick Links, Support, Contact) are present
- **AND** social media icons are displayed
- **AND** a copyright bar is at the bottom
- **AND** a link to Component Dock is present

#### Scenario: Responsive layout on mobile

- **GIVEN** the user resizes the viewport to 375px width
- **THEN** the hamburger menu icon is visible
- **AND** the navigation collapses into a mobile menu
- **AND** all sections stack vertically
- **AND** text remains readable

#### Scenario: Navigation links scroll to sections

- **GIVEN** the user clicks a navigation link (e.g., "Ministries")
- **THEN** the page scrolls to the corresponding section
- **AND** the scroll animation is smooth

### Requirement: Component Dock attribution

The system SHALL credit Component Dock — the marketplace that publishes this
template — with a visible link to `https://www.componentdock.com/` in the site
footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT
change the footer's own layout or copy beyond the credit line.

#### Scenario: Footer attribution

- **GIVEN** any page of the template is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL contain an anchor whose `href` is
  `https://www.componentdock.com/`
- **AND** the anchor's text SHALL name Component Dock

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/sacredgate/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/sacredgate/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] Top bar with countdown timer renders correctly
- [x] Red "Send Donations" button styled with #eb4141
- [ ] Header is sticky with logo in Bilbo serif font
- [ ] Nav links: Home, Ministries, Sermons, Blog, Contact
- [ ] Hero slider with Owl Carousel-style functionality
- [x] "God is all around us" headline visible on slides
- [x] Intro section with "Welcome to Our Church" heading
- [ ] Services section with parallax bg + 5 service items
- [ ] Causes slider with card items
- [ ] Quote section with parallax bg
- [ ] Sermon section on #f0f4f8 background
- [ ] Newsletter form on #eb4141 red background
- [ ] News/blog cards with date badges
- [ ] Footer on #161619 dark bg with 3 columns
- [ ] Footer links to Component Dock
- [ ] Responsive: hamburger menu on mobile
- [ ] Brand colors: #eb4141 (red), #ffd600 (yellow), #000 (black), #161619 (dark)
- [ ] Fonts: Bilbo (headings/logo), Montserrat (body)
- [ ] Placeholder images via picsum.photos/seed/sacredgate-*
- [ ] No ColorLib references in app code (provenance in spec only)
- [x] Footer credits Component Dock with a link to https://www.componentdock.com/
- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
