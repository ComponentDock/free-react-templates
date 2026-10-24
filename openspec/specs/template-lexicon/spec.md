# Template: Lexicon (Hotel)

## Purpose

A hotel template with hero, about, rooms, services, video, guest reviews and brand logo sections. Recreation of ColorLib's **Rolax** hotel template.

- **Source:** https://colorlib.com/wp/template/rolax/
- **Preview:** https://preview.colorlib.com/theme/rolax/
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **New name:** `lexicon` (apps/lexicon, @free-react-templates/lexicon)
- **Deploy target:** https://lexicon.free.componentdock.com
- **Source design:** ColorLib "Rolax" — https://colorlib.com/wp/template/rolax/

## Design tokens

Extracted from the live preview stylesheet (`assets/css/style.css`):

| Token                 | Value                                        | Notes                                                          |
| --------------------- | -------------------------------------------- | -------------------------------------------------------------- |
| Font — headings       | `"Baskervville", serif`                      | Google Fonts import                                            |
| Font — body           | `"Jost", sans-serif`                         | Google Fonts import                                            |
| Brand / accent        | `#E29C89`                                    | Salmon/coral — buttons, submenu, scroll-to-top, btn_01 outline |
| Dark base             | `#191514`                                    | Near-black — heading color, sticky header bg                   |
| Header top bar        | `#2e0000`                                    | Very dark maroon — top info bar bg                             |
| Paragraph text        | `#94817E`                                    | Warm gray for p color                                          |
| Button primary bg     | `#E29C89`                                    | Pill-shaped: `border-radius: 35px`                             |
| Button primary hover  | `#ec583a`                                    | Darker coral on hover (scaleX pseudo-element)                  |
| Hero overlay gradient | `#b86e5a → rgba(88,55,48,0.43)`              | Warm brown gradient top-to-bottom                              |
| Section padding       | `120px 0` (desktop)                          | `.section-padding`                                             |
| Section heading size  | `42px` desktop, `31px` tablet, `24px` mobile | `.section-tittle h2`                                           |
| Card overlay gradient | `rgba(41,38,33,0) → #292621`                 | Room/guest card bottom gradient                                |

## Requirements

### Feature: Lexicon — Hotel Template

#### Scenario: Header — top info bar

- **GIVEN** the user loads the page
- **THEN** a dark maroon top bar (`#2e0000`) is visible
- **AND** it shows contact phone and email text in white
- **AND** social media icons (Facebook, Twitter, LinkedIn) appear on the right

#### Scenario: Header — sticky navigation

- **GIVEN** the user scrolls past the hero
- **THEN** the navigation bar becomes sticky with a dark background (`#191514`)
- **AND** logo is on the left, nav links (Home, Rooms, About, Blog, Contact) in center
- **AND** a "Book Now" CTA button (`#E29C89`, no border-radius) sits on the right

#### Scenario: Hero section

- **GIVEN** the page loads
- **THEN** a full-width hero image with a warm brown gradient overlay is displayed
- **AND** a large heading "Rest Journey in Single step, in the breathtaking" is centered
- **AND** a booking search form below has: Check In date, Check Out date, Adult select, Children select, Search button
- **AND** the search form sits on a semi-transparent dark background at the bottom of the hero

#### Scenario: About section

- **GIVEN** the user scrolls below the hero
- **THEN** a two-column layout appears: left image, right text with heading "Luxury & Comfort Our services and wonders of Prague"
- **AND** a descriptive paragraph follows
- **AND** a "Learn More" outline button (`btn_01` style: `#E29C89` border + text, transparent bg, `border-radius: 0`) is shown
- **AND** a secondary right-side image appears on desktop only

#### Scenario: Rooms carousel section

- **GIVEN** the user scrolls to "Our Rooms"
- **THEN** a section heading with title "Our Rooms" and subtitle text is shown
- **AND** a horizontal carousel displays room cards (Luxurious Room, Family Room, Couple Room)
- **AND** each card has an image with a bottom gradient overlay, room name, occupancy text, and price ("Started from $500")

#### Scenario: Services / Seasonal specials section

- **GIVEN** the user scrolls to the services area
- **THEN** a centered heading reads "Surrounded by galleries, boutiques, restaurants and cafés..."
- **AND** a "Find a Room For You" dotted-underline link is below
- **AND** a split image-text card shows: left image, right text with heading "Take advantage of our seasonal specials", paragraph, "View Project" outline button

#### Scenario: Video section

- **GIVEN** the user scrolls to the video area
- **THEN** a full-width background image with a play button icon is displayed
- **AND** clicking the play icon opens a YouTube video popup

#### Scenario: Guest services section

- **GIVEN** the user scrolls to "We Offer to Our Guest"
- **THEN** a 3-column grid of image cards is shown (Free Drinks, Free Breakfast, Free Dinner)
- **AND** each card has a hover overlay revealing descriptive text

#### Scenario: Testimonials section

- **GIVEN** the user scrolls to the testimonials area
- **THEN** a carousel of testimonial cards is shown
- **AND** each card has a heading (e.g. "Nice Accommodation"), quoted text, and author name with dash prefix

#### Scenario: Footer

- **GIVEN** the user scrolls to the footer
- **THEN** a 4-column layout is displayed: logo + social links, Navigation links, Contact info, Newsletter signup
- **AND** a bottom bar shows copyright text
- **AND** a footer MUST link to https://www.componentdock.com/ (branded as "Component Dock")

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/lexicon/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/lexicon/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] Header: top bar dark maroon, phone + email + social icons
- [ ] Navigation: sticky on scroll, dark bg, logo + 5 links + Book Now CTA
- [ ] Hero: full-width image, warm gradient overlay, centered heading, booking form (dates + guests + search)
- [ ] About: 2-col (image + text), heading, paragraph, Learn More outline button, side image (desktop)
- [ ] Rooms: carousel with 3 room cards, image + gradient overlay, name, occupancy, price
- [ ] Services: centered heading + dotted-underline link, split image-text card with outline button
- [ ] Video: bg image + play button popup
- [ ] Guest: 3-col image cards with hover overlay
- [ ] Testimonials: carousel with heading, quoted text, author
- [ ] Footer: 4-col (logo/social, nav, contact, newsletter), Component Dock link in copyright
- [ ] Fonts: Baskervville (headings), Jost (body) via Google Fonts
- [ ] Colors: brand #E29C89, dark #191514, header-top #2e0000
- [ ] Responsive: mobile menu, stacked columns, reduced section padding
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
