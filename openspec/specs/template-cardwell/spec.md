# Template: Cardwell (Personal vCard / Portfolio)

## Purpose

A personal vCard portfolio template with sidebar, about, services, portfolio, testimonials and blog sections. Recreation of the ColorLib "Noah" template as a personal portfolio / vCard
template built with React 19 + Vite + Tailwind CSS 4 + TypeScript.

- **Source slug:** `noah`
- **Source URL:** https://colorlib.com/wp/template/noah/
- **Preview URL:** https://preview.colorlib.com/theme/noah/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/noah-free-personal-vcard-website-template.jpg
- **New name:** `cardwell` (apps/cardwell, @free-react-templates/cardwell)
- **Deploy target:** https://cardwell.free.componentdock.com

## Design tokens (extracted from preview CSS)

| Token | Value |
|---|---|
| Body font | `"Karla", Arial, sans-serif` (16px, weight 400, line-height 1.8) |
| Heading font | `"Playfair Display", Georgia, serif` |
| Body background | `#fafafa` |
| Body text color | `gray` |
| Accent / brand color | `#CA82F8` (purple) |
| Link color | `#CA82F8` |
| Heading color | `rgba(0,0,0,0.8)` |
| Logo background | `#000` (white text) |
| Button border-radius | `1px` (near-square) |
| Button text | uppercase, letter-spacing 2px, font-size 13px |
| Button primary bg | `#CA82F8`, hover `#d49af9` |
| Button outline | transparent bg, `1px solid #d9d9d9` border, hover fills `#CA82F8` |
| Newsletter input radius | `30px` (pill shape) |
| Footer padding | `8em 0` |
| Footer social icons | `#CA82F8` |
| Big watermark heading | `250px`, `#f0f0f0`, weight 700 |
| Section headings ("bold") | positioned absolute, huge watermark text |
| Rotated side label | uppercase, 14px, letter-spacing 1em, rotate 90deg, `Karla` |
| Intro heading span | uppercase, 12px, letter-spacing 3px |
| Section bg | white (default) |
| Nav sidebar bg | white, width 360px |
| Work hover overlay | dark overlay with centered title |
| Blog hover overlay | overlay with "Read more" link |

## Visual design notes (from screenshot)

The Noah template is a **single-page personal vCard/portfolio** with a clean,
minimal aesthetic. Key visual traits:

- **Left side nav** (hamburger toggle): slides a white panel from the right
  with nav links, search bar, and mini gallery thumbnails.
- **Logo:** Split-style "No" / "ah" on black square — clean typographic mark.
- **Huge watermark headings:** Each section has a 250px gray "About" /
  "Services" / "Portfolio" etc. text behind content as a typographic background.
- **Rotated vertical labels:** Side labels like "About", "Services" are
  rotated 90deg with a black horizontal line, positioned absolutely on the
  left of content.
- **Two-column about section:** Left = image carousel, Right = name/title
  carousel + bio text + social icons + CTA button.
- **Services section:** Two-column grid (services list | services image).
  Each service has numbered headings with bullet lists.
- **Portfolio section:** Full-width stacked entries — each is a full-width
  background image with overlay title, plus description below.
- **Blog section:** Owl Carousel of article cards — image with overlay
  "Read more", date, title, excerpt below.
- **Testimonials section:** Owl Carousel of centered blockquotes with
  attribution.
- **Footer:** 3-column — "Let's Talk" (contact), "Latest Blog" (3 entries),
  "Newsletter" (email subscribe).
- **Overall feel:** Light (#fafafa), airy, purple accent, serif headings,
  clean sans-serif body text, generous whitespace.

## Requirements

### Feature: Cardwell — Personal vCard / Portfolio Template

#### Scenario: Page loads with header and logo

- **GIVEN** the user navigates to Cardwell
- **THEN** a header is visible with the brand logo
- **AND** the logo shows split-style text ("Card" + "well") on a black background
- **AND** a hamburger menu toggle button is visible

#### Scenario: Hamburger menu opens sidebar

- **GIVEN** the user clicks the hamburger menu toggle
- **THEN** a sidebar slides in from the right
- **AND** the sidebar contains navigation links: Home, Services, Work, Blog, About, Contact
- **AND** the sidebar contains a search input field
- **AND** the sidebar contains a mini gallery of 4 thumbnail images

#### Scenario: Sidebar closes

- **GIVEN** the sidebar is open
- **WHEN** the user clicks outside or the toggle again
- **THEN** the sidebar closes with a slide animation

#### Scenario: About section displays correctly

- **GIVEN** the page scrolls to the About section
- **THEN** a large watermark heading "About" (250px) is visible behind content
- **AND** a rotated vertical label "About" appears on the left
- **AND** an image carousel shows on the left (5-col width)
- **AND** the right side shows a name/title carousel with bio text
- **AND** social media icon links are displayed (Facebook, Twitter, Google, Dribbble)
- **AND** a "Contact Me!" outline button is visible

#### Scenario: Services section displays correctly

- **GIVEN** the page scrolls to the Services section
- **THEN** a large watermark heading "Services" appears behind content
- **AND** a rotated vertical label "Services" is on the left
- **AND** an intro heading "My Services" / "Here Are Some of My Skills" is shown
- **AND** four services are listed in a two-column layout:
    | Service | Items |
    | 1 - Graphic Design | UI Design, Website & Digital Design, Branding & Visual Identity, Print Design |
    | 2 - Illustration | Editorial, Narrative, Motion Graphics, Animation, Visual Effects |
    | 3 - Front End Development | HTML/CSS, JS & jQuery Startup, WordPress, Joomla |
    | 4 - Web Marketing | Sales Marketing, Invoice, eCommerce |
- **AND** a services image appears on the right side (4-col width)

#### Scenario: Portfolio section displays work entries

- **GIVEN** the page scrolls to the Portfolio section
- **THEN** a large watermark heading "Portfolio" appears behind content
- **AND** an intro heading "Portfolio" / "Done Projects" is shown
- **AND** four full-width work entries are displayed
- **AND** each work entry has a background image with hover overlay
- **AND** each work entry shows a title overlay on hover
- **AND** each work entry has a description paragraph and "View details" link below

#### Scenario: Blog section shows carousel of articles

- **GIVEN** the page scrolls to the Blog section
- **THEN** a large watermark heading "Blog" appears behind content
- **AND** an intro heading "Blog" / "Read Our Case" is shown
- **AND** three blog article cards are displayed in a carousel
- **AND** each article card has an image with dark overlay
- **AND** each article card shows "Read more" on hover
- **AND** each article card has a date, title, and excerpt below the image

#### Scenario: Testimonials section shows client quotes

- **GIVEN** the page scrolls to the Testimonials section
- **THEN** a large watermark heading "Testimonies" appears behind content
- **AND** an intro heading "Testimonies" / "Clients Says" is shown
- **AND** three testimonial blockquotes are displayed in a carousel
- **AND** each blockquote shows a quote and an attribution name

#### Scenario: Footer displays three columns

- **GIVEN** the page scrolls to the footer
- **THEN** a "Let's Talk" column shows contact text, email link, and social icons
- **AND** a "Latest Blog" column shows 3 featured blog entries with thumbnail, date, and title
- **AND** a "Newsletter" column shows an email input and a "Subscribe" button
- **AND** the subscribe input has a pill shape (border-radius 30px)
- **AND** the copyright line includes a "Made with ❤ by Component Dock" link

#### Scenario: Design tokens are correctly applied

- **GIVEN** the user inspects any Cardwell page element
- **THEN** body font is "Karla" with fallback Arial
- **AND** headings use "Playfair Display" with fallback Georgia
- **AND** the accent color #CA82F8 is used for links, buttons, and social icons
- **AND** buttons have border-radius 1px (near-square)
- **AND** the page background is #fafafa
- **AND** body text color is gray
- **AND** body line-height is 1.8

#### Scenario: Responsive behavior

- **GIVEN** the user views Cardwell on mobile (< 768px)
- **THEN** the page has top padding of 5em for the fixed nav
- **AND** the big watermark heading reduces to 60px
- **AND** the sidebar becomes full-width
- **AND** columns stack vertically

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
`apps/cardwell/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/cardwell/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] Footer credits Component Dock with a link to https://www.componentdock.com/
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Page loads with header and logo — a header is visible with the brand logo
- [ ] Hamburger menu opens sidebar — a sidebar slides in from the right
- [ ] Sidebar closes — the sidebar closes with a slide animation
- [x] About section displays correctly — a large watermark heading "About" (250px) is visible behind content
- [x] Services section displays correctly — a large watermark heading "Services" appears behind content
- [x] Portfolio section displays work entries — a large watermark heading "Portfolio" appears behind content
- [x] Blog section shows carousel of articles — a large watermark heading "Blog" appears behind content
- [ ] Testimonials section shows client quotes — a large watermark heading "Testimonies" appears behind content
- [x] Footer displays three columns — a "Let's Talk" column shows contact text, email link, and social icons
- [ ] Design tokens are correctly applied — body font is "Karla" with fallback Arial
- [ ] Responsive behavior — the page has top padding of 5em for the fixed nav
