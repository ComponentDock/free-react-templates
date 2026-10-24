# Template: Consultex (Business / Consulting)
<!-- prep-status: shipped-as=bizmark -->
> **SHIPPED-UNDER** — the ColorLib `bizcon` design this prep describes already
> ships as `apps/bizmark` (<https://bizmark.free.componentdock.com>).
> Do not scaffold `apps/consultex`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-bizmark/spec.md`.

## Purpose

Recreation of ColorLib "Bizcon" — a modern business consulting landing page.
- **Source**: https://colorlib.com/wp/template/bizcon/
- **Preview**: https://preview.colorlib.com/theme/bizcon/
- **Stack**: Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design tokens

Extracted from the live preview stylesheet (`css/style.css`) and screenshot analysis.

### Colors

| Token | Hex | Usage |
|-------|-----|-------|
| brand | `#ff7e5f` | Primary coral accent — buttons, links, social icon borders, hover states |
| brand-light | `#feb47b` | Peach in gradient (`linear-gradient(131deg, #feb47b, #ff7e5f)`) |
| brand-hover | `#ff8b23` | Orange hover/accent on specific elements |
| text-heading | `#2f373d` | All h2–h6 and link text |
| text-heading-hero | `#222222` | Banner h1 (nearly black) |
| text-body | `#646464` | Body copy |
| text-muted | `#8a8a8a` | Copyright bar text |
| gray-bg | `#f7f7f7` | Service section background |
| footer-bg | `#303030` | Copyright bar background |
| service-icon-bg | `#e3f1da` | Light green behind service link arrows |
| dropdown-bg | `#fafafa` | Nav dropdown menu |
| border-light | `#dfdfdf` | Subtle separators |

### Fonts

| Role | Family | Weight | Notes |
|------|--------|--------|-------|
| Hero h1 | "Martel" (serif) | 800 | 55px, line-height 1.27, capitalised |
| Headings h2–h6 | "Poppins" (sans-serif) | 600 | h2: 44px, line-height 1.22 |
| Body / UI | "Roboto" (sans-serif) | 400 | 15px, line-height 1.93 |
| Button 3 (link) | "Poppins" (sans-serif) | 500 | 14px |

### Buttons

- **btn_1** (primary): gradient `linear-gradient(131deg, #feb47b, #ff7e5f)`, white text, `border-radius: 50px` (pill), padding 14px 40px, text-transform capitalize, transition 0.4s.
- **btn_2** (secondary): same gradient + white text + pill radius, `box-shadow: 0 12px 20px rgba(255,126,95,0.15)`, padding 13px 47px.
- **btn_3** (text-link): dark text `#2f373d` with arrow icon, `background: #e3f1da` box behind (width 61px, height 48px, radius 5px).
- **button** (form submit): `border-radius: 4px`, `background: #ff7e5f`, `border: 1px solid #fdcb9e`, white text uppercase.

### Section backgrounds

- **Banner**: white bg with `banner_bg.png` image at top-right (41% width, no-repeat). Height 880px desktop / 650px mobile.
- **About**: white background.
- **Services**: `#f7f7f7` gray background.
- **Reviews**: white background.
- **Portfolio**: white background.
- **Our Service (2nd about)**: white background.
- **Blog**: white background.
- **Footer area**: white background, padding 140px top/bottom.
- **Copyright**: `#303030` dark bar, 26px padding.

## Section order (from live DOM)

1. **Navbar** — Logo left, right-aligned nav links (Home, About, Blog ▾, Page ▾, Contact). Dropdown on hover. White bg, border-bottom on collapse.
2. **Hero / Banner** — Asymmetric split: left side has headline ("Lead from Front in Business Innovation."), subtext, primary CTA ("learn more"), video play button. Right side has background image. Scattered decorative animated dot icons.
3. **About** — Split layout: image right, heading + subtitle + paragraph + "read more" button left. Subtitle in italic/regular weight.
4. **Services** — Gray bg. Left column: heading ("We Provide Best Services"), paragraph, "Load More" button. Two service cards with icons: "Business Opportunity", "Commercial Approach". Each has icon, heading, paragraph, "Learn More →" link.
5. **Reviews / Testimonials** — Section heading ("Customer Are Saying"), thumbnail slider left, main review slide center-right with quote icon, testimonial text, reviewer name + title.
6. **Portfolio** — Masonry-style card grid. First card is a blockquote with heading + text. Remaining are image cards with title + short text.
7. **Our Service (2nd About)** — Same split layout as About section. Heading: "We Providing high quality adviser service". Image left, text right.
8. **Blog** — Section heading ("Update From Blog"). 3 blog cards: image, category tag + date, heading, comments + likes count.
9. **Footer Area** — 5 columns: Top Products (4 links), Quick Links (4 links), Features (4 links), Resources (4 links), Newsletter (text + email input + subscribe button).
10. **Copyright Footer** — Dark bar. Copyright text left, social icons right (Facebook, Twitter, Instagram, Skype) with coral-bordered square buttons.

## Requirements

### Feature: Consultex template behaviour

Feature: Consultex — Business Consulting Landing Page

Background:
- **GIVEN** the user opens the Consultex page
- **THEN** the page loads with the correct fonts: Martel for the hero h1, Poppins for headings, Roboto for body

#### Scenario: Navbar renders correctly

- **GIVEN** the navbar is visible
- **THEN** the logo image is displayed on the left
- **AND** the nav links "Home", "About", "Blog", "Page", "Contact" are on the right
- **AND** "Blog" and "Page" have dropdown menus
- **WHEN** the user hovers "Blog"
- **THEN** a dropdown appears with "Blog" and "Single blog" links
- **WHEN** the user hovers "Page"
- **THEN** a dropdown appears with "Project", "Project Details", "Services", "Elements" links

#### Scenario: Hero section renders with correct content and styling

- **GIVEN** the hero banner is visible
- **THEN** the headline reads "Lead from Front in Business Innovation."
- **AND** the headline uses the Martel serif font at approximately 55px
- **AND** the brand color #ff7e5f is used in accent elements
- **AND** there is a paragraph of body text below the headline
- **AND** a primary "learn more" button is displayed with gradient coral pill styling
- **AND** a video play button ("Intro Video") is displayed next to the button

#### Scenario: About section shows consulting experience

- **GIVEN** the about section is visible
- **THEN** the heading reads "We Have 24 Year Experience in consulting"
- **AND** there is a subtitle line and paragraph of body text
- **AND** an image is displayed to the right of the text
- **AND** a "read more" button with btn_2 styling is shown

#### Scenario: Services section shows service offerings

- **GIVEN** the services section is visible
- **THEN** the section has a gray (#f7f7f7) background
- **AND** the heading reads "We Provide Best Services"
- **AND** there is a descriptive paragraph and a "Load More" button
- **AND** two service cards are displayed side by side
- **AND** each card has an icon, heading, paragraph, and "Learn More →" link
- **AND** the first service is "Business Opportunity"
- **AND** the second service is "Commercial Approach"

#### Scenario: Reviews section displays customer testimonials

- **GIVEN** the reviews section is visible
- **THEN** the heading reads "Customer Are Saying"
- **AND** thumbnail avatar images are shown on the left
- **AND** a main review slide shows a quote icon, testimonial text, reviewer name, and title

#### Scenario: Portfolio section shows work in a card grid

- **GIVEN** the portfolio section is visible
- **THEN** the first card is a styled blockquote with heading "Explore Our Best Practice Area"
- **AND** remaining cards show project images with title "Startup Project" and short description

#### Scenario: Second about section shows adviser service

- **GIVEN** the second about section is visible
- **THEN** the heading reads "We Providing high quality adviser service"
- **AND** the layout mirrors the first about section (image + text split)

#### Scenario: Blog section shows latest posts

- **GIVEN** the blog section is visible
- **THEN** the heading reads "Update From Blog"
- **AND** three blog cards are displayed in a row
- **AND** each card has an image, category tag, date, heading, and comment/like counts

#### Scenario: Footer area has links and newsletter

- **GIVEN** the footer area is visible
- **THEN** four link columns are shown: "Top Products", "Quick Links", "Features", "Resources"
- **AND** each column has four links
- **AND** a newsletter column has email input and "subscribe" button

#### Scenario: Copyright footer renders with social icons

- **GIVEN** the copyright bar is visible
- **THEN** it has a dark (#303030) background
- **AND** the copyright text is displayed on the left
- **AND** social icon links (Facebook, Twitter, Instagram, Skype) are on the right
- **AND** the social icons have coral (#ff7e5f) square borders

#### Scenario: Brand color consistency

- **GIVEN** any interactive element is rendered
- **THEN** links use the brand color #ff7e5f on hover
- **AND** primary buttons use a gradient from #feb47b to #ff7e5f
- **AND** service link arrow backgrounds use #e3f1da

#### Scenario: Responsive behavior

- **GIVEN** the viewport width is below 576px
- **THEN** the hero h1 reduces to 30px font size
- **AND** the navbar collapses to a toggler
- **AND** section padding reduces from 140px to smaller values

#### Scenario: Footer links to Component Dock

- **GIVEN** the page footer is rendered
- **THEN** a link to https://www.componentdock.com/ is present
- **AND** it is branded as "Component Dock"

## Verification checklist

- [ ] Hero headline uses Martel serif font, not Poppins
- [ ] Hero h1 is 55px (40px on tablet, 30px on mobile)
- [ ] All buttons use pill shape (border-radius: 50px)
- [ ] Primary buttons use gradient from #feb47b to #ff7e5f
- [ ] Service section has #f7f7f7 gray background
- [ ] Service cards have green (#e3f1da) arrow icon backgrounds
- [ ] Reviews section has thumbnail slider + main review slide
- [ ] Portfolio uses masonry-style card layout (first card is blockquote)
- [ ] Copyright bar is #303030 dark with #ff7e5f social icon borders
- [ ] Footer has 5 columns (4 link groups + newsletter)
- [ ] Dropdown menus appear on hover
- [ ] Decorative animated dot icons in hero, about, and review sections (can be simplified/omitted)
- [ ] No reference to ColorLib in any app source file
- [ ] Footer links to https://www.componentdock.com/ branded as "Component Dock"
- [ ] All placeholder images use picsum.photos with deterministic seeds
