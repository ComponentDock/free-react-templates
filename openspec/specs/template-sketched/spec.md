# Template: Sketched (Personal Portfolio)
<!-- prep-status: shipped-as=boldcraft -->
> **SHIPPED-UNDER** — the ColorLib `calvin` design this prep describes already
> ships as `apps/boldcraft` (<https://boldcraft.free.componentdock.com>).
> Do not scaffold `apps/sketched`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-boldcraft/spec.md`.

## Purpose

Recreation of ColorLib "Calvin" template.
- Preview URL: https://preview.colorlib.com/theme/calvin/
- ColorLib page: https://colorlib.com/wp/template/calvin/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/calvin-free-template.jpg
- Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript
- Category: Personal / Portfolio / Designer

## Design tokens

Extracted from `https://preview.colorlib.com/theme/calvin/assets/css/style.css` and inline HTML.

### Colors

| Token              | Value     | Usage                                           |
| ------------------ | --------- | ----------------------------------------------- |
| `primary`          | `#FF8553` | Brand orange — CTA buttons, progress bars, accents |
| `primary-hover`    | `#ec703f` | Darker orange hover state                       |
| `primary-light`    | `#FFFBF9` | Very light orange-tinted background             |
| `primary-lighter`  | `#FFE7DE` | Lighter orange background variant               |
| `black`            | `#000000` | Headings, text, footer background               |
| `white`            | `#ffffff` | Hero text, button text on dark, light sections  |
| `light-bg`         | `#f9f9ff` | Subtle purple-tinted light background           |
| `text-muted`       | `#635c5c` | Default link color, muted text                  |
| `text-dark`        | `#000000` | Body text, paragraph text                       |

### Typography

| Element       | Font family            | Weight | Notes                            |
| ------------- | ---------------------- | ------ | -------------------------------- |
| Headings      | Roboto Condensed       | 400/700| Condensed sans-serif             |
| Body text     | DM Sans                | 300/500/700 | Clean geometric sans-serif   |
| Icons         | FontAwesome + Themify  | —      | Icon fonts                      |

### Button styles

- `.border-btn`: white border, white text, transparent bg, `border-radius: 30px`, padding 12px 36px; used in hero header
- `.border-btn2`: outlined secondary button for "More Work" CTA
- `.btn`: primary CTA, `border-radius: 25px`, padding 13px 46px, white text
- `.boxed-btn`: white bg, orange text (`#FF8553`), 1px orange border, `letter-spacing: 3px`, uppercase

### Section backgrounds

| Section          | Background                           |
| ---------------- | ------------------------------------ |
| Header/Navbar    | Transparent (over hero)              |
| Hero             | Full-width background image, dark overlay |
| About info bar   | Semi-transparent dark overlay        |
| Services         | White                                |
| Gallery (Works)  | White                                |
| About + Skills   | White                                |
| Brand logos      | Light gray border-top                |
| Testimonials     | White (`.bg-light` or light tint)    |
| Blog             | White                                |
| Footer           | Dark (#000000)                       |

## Section structure (order from preview DOM)

1. **Navbar** — transparent overlay on hero, logo + links (Home, Work, Service, Blog dropdown, Contact) + "Let's Talk" button (border-btn, right-aligned)
2. **Hero** — full-height slider area with background image + dark overlay, left: employee/person image, right: large heading "My name is Calvin. Digital Product Designer", subtitle "Head of design at Calvino"
3. **About info bar** — positioned at bottom of hero, 3 columns: "Design For: Web & Mobile" | Phone number | Email with icon
4. **Services ("My Experties")** — 2×2 grid of service cards with icon + title + description + browse link
5. **Gallery ("My Works")** — 2×2 grid of portfolio items with background images and hover overlay with title link; "More Work" button below
6. **About + Skills** — 2-column: left has heading + text, right has 3 progress bars (UI Design 60%, UX 89%, Illustration 95%)
7. **Brand logos** — carousel/slider of 7 brand logo images
8. **Testimonials** — slider with quote text + founder image + name + role
9. **Blog ("Latest News")** — carousel of 3 blog cards: image + tag button + date/byline + title link
10. **Footer** — dark bg, 2-column: left has logo + description + social icons (twitter, facebook, pinterest, globe, instagram); right has "Let's Talk" + "Download CV" buttons; bottom row with copyright

## Requirements

### Feature: Sketched Template

#### Scenario: Navbar renders with transparent overlay and correct links

- **GIVEN** the user loads the page
- **THEN** a transparent navbar overlays the hero section
- **AND** it contains links: Home, Work, Service, Blog (with dropdown), Contact
- **AND** a "Let's Talk" button is visible on the right
- **AND** a mobile hamburger menu is present

#### Scenario: Hero section displays designer intro

- **GIVEN** the user loads the page
- **THEN** a full-height hero section is visible with a background image and dark overlay
- **AND** a person/employee image is shown on the left side
- **AND** the heading reads "My name is Calvin. Digital Product Designer"
- **AND** a subtitle reads "Head of design at Calvino"

#### Scenario: About info bar shows contact details

- **GIVEN** the user scrolls to the bottom of the hero
- **THEN** an info bar is visible with 3 sections: "Design For: Web & Mobile", phone number, and email
- **AND** the email section has an envelope icon

#### Scenario: Services section displays four expertise items

- **GIVEN** the user scrolls to the services section
- **THEN** the heading reads "My Experties"
- **AND** 4 service cards are displayed in a 2×2 grid
- **AND** each card has an icon, title, description, and browse link

#### Scenario: Gallery section shows four portfolio items

- **GIVEN** the user scrolls to the gallery section
- **THEN** the heading reads "My Works"
- **AND** 4 portfolio items are displayed in a 2×2 grid
- **AND** each item has a background image and hover overlay with title
- **AND** a "More Work" button is centered below

#### Scenario: About section shows skills with progress bars

- **GIVEN** the user scrolls to the about section
- **THEN** the heading reads "About Me"
- **AND** descriptive text is visible on the left
- **AND** 3 progress bars are displayed on the right: UI Design (60%), User Experience (89%), Illustration (95%)

#### Scenario: Brand logos carousel displays

- **GIVEN** the user scrolls to the brand area
- **THEN** a carousel of brand logos is visible
- **AND** logos are displayed in a horizontal scrolling row

#### Scenario: Testimonials section displays client quotes

- **GIVEN** the user scrolls to the testimonials section
- **THEN** the heading reads "Client Testimonial"
- **AND** a testimonial slider is visible with quote text
- **AND** each testimonial shows a founder image, name, and role

#### Scenario: Blog section shows latest news

- **GIVEN** the user scrolls to the blog section
- **THEN** the heading reads "Latest News"
- **AND** 3 blog post cards are displayed in a carousel
- **AND** each card has an image, tag button, date/byline, and title link

#### Scenario: Footer renders with CTA and social links

- **GIVEN** the user scrolls to the footer
- **THEN** a dark background footer is visible
- **AND** a logo and description text are displayed
- **AND** social media icons (Twitter, Facebook, Pinterest, Globe, Instagram) are present
- **AND** "Let's Talk" and "Download CV" buttons are visible
- **AND** a copyright line with a link to componentdock.com is present

## Verification checklist

- [ ] Transparent navbar overlays hero with correct links
- [ ] Hero shows designer intro with person image + heading + subtitle
- [ ] About info bar shows Design For, Phone, Email at hero bottom
- [ ] Services section shows 4 cards in 2×2 grid with icons
- [ ] Gallery shows 4 portfolio items with hover overlays
- [ ] "More Work" button visible below gallery
- [ ] About section shows text + 3 progress bars with correct percentages
- [ ] Brand logo carousel displays and scrolls
- [ ] Testimonials slider shows quotes with founder info
- [ ] Blog carousel shows 3 cards with images and metadata
- [ ] Footer has dark background, logo, social icons, CTA buttons
- [ ] Footer links to componentdock.com
- [ ] All sections match original section order
- [ ] Design tokens match: primary #FF8553, DM Sans + Roboto Condensed fonts
- [ ] No references to ColorLib in app code
- [ ] Placeholder images use picsum.photos
