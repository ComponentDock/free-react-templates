# Template: Pixelera (Creative Digital Agency)
<!-- prep-status: shipped-as=boxpulse -->
> **SHIPPED-UNDER** — the ColorLib `boxus` design this prep describes already
> ships as `apps/boxpulse` (<https://boxpulse.free.componentdock.com>).
> Do not scaffold `apps/pixelera`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-boxpulse/spec.md`.

## Purpose

Recreation of ColorLib "Boxus" — a creative digital agency one-page template.

- **Source:** https://colorlib.com/wp/template/boxus/
- **Preview:** https://preview.colorlib.com/theme/boxus/
- **Category:** Creative Digital Agency (one-page, single-page scroll)
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript

## Design tokens

Extracted from the live preview's `style.css` and inline styles.

| Token | Value | Usage |
| --- | --- | --- |
| brand-primary | `#221C5A` (deep purple) | Navbar, footer background, menu bar |
| brand-secondary | `#32DB8A` (teal green) | Section title boxes, progress bar fills (HTML) |
| brand-accent | `#E74C78` / `#e54b76` (pink/rose) | CTA buttons, hover states, highlights, submit button border |
| brand-warm | `#FFBA42` / `#E3A536` (amber) | Progress bar fills (CSS), accent date text in video section |
| brand-cool | `#4C9EE7` (blue) | Progress bar fill (DESIGN skill) |
| text-primary | `#23214c` (dark purple-navy) | Body text, link default color |
| text-secondary | `#727190` (gray-purple) | Timeline italic text, member info |
| text-footer | `#5b5881` | Footer text and links |
| bg-white | `#fff` | Section content backgrounds, doc-loader |
| font-body | `"Roboto", sans-serif` | Body text, 16px/26px, weight 400 |
| font-heading | `"Montserrat", sans-serif` | Section titles, service titles, content titles, weight 700 |
| section-title-box | 370x370px, bg `#32DB8A`, white text | Left/right rotated section titles with oversized numbers |
| section-number | Montserrat 180px, color `#55B286` | Large offset number inside title boxes |
| section-title-text | Montserrat 109px, white, uppercase, -3px letter-spacing | Vertical section name inside title box |
| button-style | 2px solid `#e54b76`, no radius, text `#e54b76`, hover fills pink | Submit/contact CTA |
| link-hover | `#ee87a4` (light pink) | Body link hover |
| navbar | Fixed top, bg `#221C5A`, white text, 13px uppercase, letter-spacing 0.03cm | Sticky navigation |

## Layout notes

- Content max-width: 1170px, centered.
- Sections alternate the title box between left and right.
- Section title boxes are 370px wide and float; content holders offset by 370px margin.
- The large section number overlaps the box edge (negative margin-left: -64px).

## Requirements

### Feature: Pixelera template behaviour

#### Scenario: Hero section renders with logo, headline, and subtitle

- **GIVEN** the user opens the page
- **WHEN** the hero section loads
- **THEN** a centered logo is displayed
- **AND** a large headline "We Craft Awesome Web And Graphic Design Solutions" is shown
- **AND** a subtitle describing the agency mission is visible

#### Scenario: Navbar displays fixed top with navigation links

- **GIVEN** the user opens the page
- **WHEN** the navbar renders
- **THEN** it is fixed to the top of the viewport
- **AND** it has a deep purple background (#221C5A)
- **AND** it shows links: Home, Services, Portfolio, About, News, Video, Skills, Contact
- **AND** all link text is white, uppercase, 13px

#### Scenario: Navbar scrolls to sections on link click

- **GIVEN** the navbar is visible
- **WHEN** the user clicks a nav link (e.g. "Services")
- **THEN** the page smoothly scrolls to the corresponding section

#### Scenario: Services section displays with numbered title box

- **GIVEN** the user scrolls to the Services section
- **THEN** a green title box (370x370px, #32DB8A) is shown on the left
- **AND** the number "01" is displayed large (180px) in muted green
- **AND** the title "SERVICES" is shown vertically in white Montserrat
- **AND** the content area on the right contains an image slider
- **AND** 8 service items with titles and descriptions are listed

#### Scenario: Portfolio section displays masonry grid

- **GIVEN** the user scrolls to the Portfolio section
- **THEN** a green title box is shown on the right with number "02" and title "PORTFOLIO"
- **AND** a masonry grid of 4 portfolio items is shown on the left
- **AND** each item has a hover overlay with icon, category text, and title
- **AND** a "LOAD MORE" button with infinity icon is below the grid

#### Scenario: About section shows bio text, image slider, and team members

- **GIVEN** the user scrolls to the About section
- **THEN** a green title box is shown on the left with number "03" and title "CRAFTERS"
- **AND** the content area has a two-column layout with bio text and timeline
- **AND** the timeline shows dates in pink (#e54b76) with italic descriptions in gray
- **AND** an image slider shows about images
- **AND** a team member carousel shows member name, position, and bio

#### Scenario: News section lists blog articles

- **GIVEN** the user scrolls to the News section
- **THEN** a green title box is shown on the right with number "04" and title "STORIES"
- **AND** 4 blog articles are listed with number, author, category, and title
- **AND** each article has a numbered badge (01-04)
- **AND** a "GO TO BLOG" link is at the bottom

#### Scenario: Video section shows video popup and icon carousel

- **GIVEN** the user scrolls to the Video section
- **THEN** a green title box is shown on the left with number "05" and title "OFFER"
- **AND** the content has a two-column layout with description and timeline (amber dates)
- **AND** a video thumbnail with play button overlay links to Vimeo
- **AND** an icon carousel shows 7 service icons (Video Editing, Premium Clean, etc.)

#### Scenario: Skills section shows animated progress bars

- **GIVEN** the user scrolls to the Skills section
- **THEN** a green title box is shown on the right with number "06" and title "EXPERTISE"
- **AND** 4 progress bars are displayed: HTML (81%, green), CSS (93%, amber), PSD (72%, pink), DESIGN (99%, blue)
- **AND** each bar shows the skill name, percentage, and colored fill

#### Scenario: Contact section renders form and map

- **GIVEN** the user scrolls to the Contact section
- **THEN** a green title box is shown on the left with number "07" and title "CONTACT"
- **AND** the content area has a two-column layout
- **AND** the left column has descriptive text with a pink-highlighted phrase
- **AND** the right column has a contact form with Name, Email, Subject, Message fields
- **AND** a "SEND" button with pink border that fills on hover
- **AND** a Google Maps embed is below the form

#### Scenario: Footer displays copyright and social links

- **GIVEN** the user scrolls to the bottom
- **THEN** a deep purple (#221C5A) footer is displayed
- **AND** it contains copyright text
- **AND** social media icon links (Twitter, Behance, Dribbble, Facebook, RSS) are shown
- **AND** a "Component Dock" attribution link is present

#### Scenario: Section title boxes alternate left/right

- **GIVEN** sections 01 through 07
- **THEN** odd-numbered sections (01, 03, 05, 07) have the title box on the left
- **AND** even-numbered sections (02, 04, 06) have the title box on the right
- **AND** each box is 370x370px with green background

#### Scenario: Page is responsive on mobile

- **GIVEN** the user views the page on a mobile viewport
- **THEN** the navbar collapses to a hamburger menu
- **AND** the section title boxes stack above their content
- **AND** the two-column layouts become single-column
- **AND** the masonry grid becomes single-column

## Verification checklist

- [ ] Navbar fixed at top, deep purple bg, 8 nav links, smooth scroll
- [ ] Hero: centered logo + headline + subtitle
- [ ] Services: numbered green title box (left), image slider, 8 service items
- [ ] Portfolio: numbered green title box (right), masonry grid (4 items), hover overlays, "LOAD MORE"
- [ ] About: numbered green title box (left), bio text, timeline (pink dates), image slider, team carousel
- [ ] News: numbered green title box (right), 4 blog articles with numbered badges, "GO TO BLOG"
- [ ] Video: numbered green title box (left), video popup with play overlay, icon carousel (7 items)
- [ ] Skills: numbered green title box (right), 4 progress bars with correct colors/percentages
- [ ] Contact: numbered green title box (left), 2-column (text + form), form fields, "SEND" button, map
- [ ] Footer: deep purple bg, copyright, social icons, Component Dock link
- [ ] Section title boxes: 370x370px, green (#32DB8A), alternating left/right, large number + vertical title
- [ ] Responsive: mobile hamburger, stacked layouts
- [ ] Fonts: Roboto (body), Montserrat (headings) loaded from Google Fonts
- [ ] Brand colors match tokens (#221C5A, #32DB8A, #E74C78, #FFBA42, #4C9EE7)
