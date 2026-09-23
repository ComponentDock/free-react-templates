# Template: Cardwell (Personal vCard / Portfolio)

## Purpose

Recreation of the ColorLib **Noah** template as a personal portfolio / vCard
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

## Requirements (Gherkin scenarios)

### Feature: Cardwell — Personal vCard / Portfolio Template

#### Scenario: Page loads with header and logo
  Given the user navigates to Cardwell
  Then a header is visible with the brand logo
  And the logo shows split-style text ("Card" + "well") on a black background
  And a hamburger menu toggle button is visible

#### Scenario: Hamburger menu opens sidebar
  Given the user clicks the hamburger menu toggle
  Then a sidebar slides in from the right
  And the sidebar contains navigation links: Home, Services, Work, Blog, About, Contact
  And the sidebar contains a search input field
  And the sidebar contains a mini gallery of 4 thumbnail images

#### Scenario: Sidebar closes
  Given the sidebar is open
  When the user clicks outside or the toggle again
  Then the sidebar closes with a slide animation

#### Scenario: About section displays correctly
  Given the page scrolls to the About section
  Then a large watermark heading "About" (250px) is visible behind content
  And a rotated vertical label "About" appears on the left
  And an image carousel shows on the left (5-col width)
  And the right side shows a name/title carousel with bio text
  And social media icon links are displayed (Facebook, Twitter, Google, Dribbble)
  And a "Contact Me!" outline button is visible

#### Scenario: Services section displays correctly
  Given the page scrolls to the Services section
  Then a large watermark heading "Services" appears behind content
  And a rotated vertical label "Services" is on the left
  And an intro heading "My Services" / "Here Are Some of My Skills" is shown
  And four services are listed in a two-column layout:
    | Service | Items |
    | 1 - Graphic Design | UI Design, Website & Digital Design, Branding & Visual Identity, Print Design |
    | 2 - Illustration | Editorial, Narrative, Motion Graphics, Animation, Visual Effects |
    | 3 - Front End Development | HTML/CSS, JS & jQuery Startup, WordPress, Joomla |
    | 4 - Web Marketing | Sales Marketing, Invoice, eCommerce |
  And a services image appears on the right side (4-col width)

#### Scenario: Portfolio section displays work entries
  Given the page scrolls to the Portfolio section
  Then a large watermark heading "Portfolio" appears behind content
  And an intro heading "Portfolio" / "Done Projects" is shown
  And four full-width work entries are displayed
  And each work entry has a background image with hover overlay
  And each work entry shows a title overlay on hover
  And each work entry has a description paragraph and "View details" link below

#### Scenario: Blog section shows carousel of articles
  Given the page scrolls to the Blog section
  Then a large watermark heading "Blog" appears behind content
  And an intro heading "Blog" / "Read Our Case" is shown
  And three blog article cards are displayed in a carousel
  And each article card has an image with dark overlay
  And each article card shows "Read more" on hover
  And each article card has a date, title, and excerpt below the image

#### Scenario: Testimonials section shows client quotes
  Given the page scrolls to the Testimonials section
  Then a large watermark heading "Testimonies" appears behind content
  And an intro heading "Testimonies" / "Clients Says" is shown
  And three testimonial blockquotes are displayed in a carousel
  And each blockquote shows a quote and an attribution name

#### Scenario: Footer displays three columns
  Given the page scrolls to the footer
  Then a "Let's Talk" column shows contact text, email link, and social icons
  And a "Latest Blog" column shows 3 featured blog entries with thumbnail, date, and title
  And a "Newsletter" column shows an email input and a "Subscribe" button
  And the subscribe input has a pill shape (border-radius 30px)
  And the copyright line includes a "Made with ❤ by Component Dock" link

#### Scenario: Design tokens are correctly applied
  Given the user inspects any Cardwell page element
  Then body font is "Karla" with fallback Arial
  And headings use "Playfair Display" with fallback Georgia
  And the accent color #CA82F8 is used for links, buttons, and social icons
  And buttons have border-radius 1px (near-square)
  And the page background is #fafafa
  And body text color is gray
  And body line-height is 1.8

#### Scenario: Responsive behavior
  Given the user views Cardwell on mobile (< 768px)
  Then the page has top padding of 5em for the fixed nav
  And the big watermark heading reduces to 60px
  And the sidebar becomes full-width
  And columns stack vertically
