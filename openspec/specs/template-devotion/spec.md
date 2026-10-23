# Template: Devotion (Charity / Church Template)

## Purpose

Devotion is a single-page church/charity landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Faithful" charity website template, built under a different
name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

**Source:** ColorLib "Faithful" — charity/church template
  (https://colorlib.com/wp/template/faithful/)
  Listed in TEMPLATES.md line 1267 (Charity section).

**Preview URL:** https://preview.colorlib.com/theme/faithful/
  (reachable, HTTP 200). HTML saved to `/tmp/faithful.html` (29.2 KB);
  stylesheet `css/style.css` saved to `/tmp/faithful-style.css` (23.6 KB).

The template is a warm, faith-based charity/church landing with a hero
slider, church services, feature cards, sermon section, testimonies,
upcoming events, and a dark footer.

## Design tokens (extracted from reference)

### Colors
- **Primary (Bootstrap primary):** `#f23a2e` — red, used for section heading
  underlines (2px bottom border on h2:before/h2:after), primary buttons,
  icons (`text-primary`), and accent elements.
- **Backgrounds:**
  - Hero overlays: `rgba(0,0,0,0.4)` / `rgba(0,0,0,0.6)` / `rgba(0,0,0,0.8)`
  - Upcoming events band: Bootstrap `bg-primary` = `#f23a2e` (red)
  - Section alt bg: `#f8f9fa` (light gray, Bootstrap `bg-light`)
  - White sections: `#fff`
  - Footer: `#000` (black)
- **Text:** `#000` (headings on light), `#fff` (on dark/overlay)
- **Secondary grays:** `#212529`, `#25262a`, `#343a40` (body text, borders)
- **Muted:** `#b3b3b3`, `#cccccc`

### Typography
- **Display/heading font:** `Amatic SC` (400 weight) — decorative script,
  used for large hero heading ("Faithful" / "December Camp Meeting")
- **Body font:** `Work Sans` (system fallback stack) — clean sans-serif for
  body text, nav links, buttons, and secondary headings
- **Icon font:** icomoon + flaticon (church-specific icons: speaker, chat,
  paper-plane, clock, comments)

### Buttons
- **Primary CTA:** `btn btn-primary pill text-white px-4` — pill shape
  (`border-radius: 30px !important`), Bootstrap primary background `#f23a2e`,
  white text, 1rem horizontal padding. "Read More" is the example text.
- Hover: standard Bootstrap primary hover (slightly darker red)

### Section backgrounds
- Navbar: `#fff` (bg-white)
- Hero slider: full-bleed background images with dark overlay
- Upcoming events: `bg-primary` (`#f23a2e` red strip)
- Church services: white background
- Feature cards: white background, light border
- "God is Love": dark overlay background
- "Our Mission": white background
- Sermons carousel: light background
- Testimonies: white background
- Footer: `#000` (black)

## Section structure (in order from preview DOM)

1. **Navbar** — fixed white bar, logo "Faithful" (left), nav links (About,
   Services, Sermons, Events, Contact), hamburger mobile menu
2. **Hero Slider** — owl-carousel, 2 slides with background images
   (`hero_1.jpg`, `hero_2.jpg`), dark overlay, centered white text
   ("December Camp Meeting" / "Seek The Lord While He Will Be Found"),
   pill-shaped CTA buttons
3. **Upcoming Events band** — red `bg-primary` strip, countdown text
   "Upcoming Events", event name, short description
4. **Church Services** — 3-column grid, each item has a `text-primary`
   icon (speaker, paper-plane, chat), a title, and a description
5. **Feature Cards** — 3-column grid with heading "Consectetur adipisicing
   elit", icon + title + description per card, "Read More" pill link
6. **God is Love** — dark overlay background, sermon-style content:
   heading, preacher attribution ("by Ptr. Johnson"), scripture quote,
   description text, "Watch Video" CTA button
7. **More Features** — section heading, additional feature items
8. **Our Mission** — centered text, heading + paragraph + "Read More" link
9. **Listen To Our Sermons** — owl-carousel of sermon entries with audio
   player (mediaelement.js), sermon title + date
10. **Testimonies** — carousel of testimonial cards with quote, author name
11. **Upcoming Events** — carousel of event cards with image, date, title,
    location, and short description
12. **Footer** — dark `#000` background, 4 columns: About (text + Read More),
    Quick Menu (links), Ministries (links), Get In Touch (address, phone,
    email). Social icons (Facebook, Twitter, Instagram). Copyright bar.

## Requirements

### Feature: Devotion template behaviour

Feature: Devotion — Charity/Church Landing Template

#### Scenario: Navbar renders with logo and navigation links

- **GIVEN** the page loads
- **THEN** the navbar is visible with the "Devotion" logo text
- **AND** navigation links "About", "Services", "Sermons", "Events", "Contact" are present
- **AND** the mobile hamburger menu button is visible on small viewports

#### Scenario: Hero slider displays with background images and CTAs

- **GIVEN** the page loads
- **THEN** the hero section displays a full-bleed background image
- **AND** a dark overlay covers the background image
- **AND** the heading text is visible on the hero
- **AND** CTA pill buttons are visible on the hero

#### Scenario: Upcoming events band shows countdown

- **GIVEN** the page loads
- **THEN** the red events band is visible below the hero
- **AND** the band displays "Upcoming Events" heading
- **AND** a countdown or event description is visible

#### Scenario: Church services section displays three service items

- **GIVEN** the page loads
- **THEN** three church service items are displayed in a grid
- **AND** each service item has a primary-colored icon
- **AND** each service item has a title and description text

#### Scenario: Feature cards section displays three feature items

- **GIVEN** the page loads
- **THEN** three feature cards are displayed
- **AND** each card has an icon, title, and description
- **AND** each card has a "Read More" link

#### Scenario: God is Love section renders with sermon content

- **GIVEN** the page loads
- **THEN** the "God is Love" section is visible
- **AND** the section shows a preacher attribution
- **AND** a "Watch Video" CTA button is present

#### Scenario: More Features section renders additional items

- **GIVEN** the page loads
- **THEN** the "More Features" heading is visible
- **AND** additional feature items are displayed

#### Scenario: Our Mission section renders with CTA

- **GIVEN** the page loads
- **THEN** the "Our Mission" section is visible
- **AND** a "Read More" link is present

#### Scenario: Sermons carousel displays sermon entries

- **GIVEN** the page loads
- **THEN** the "Listen To Our Sermons" section is visible
- **AND** sermon entries are displayed in a carousel
- **AND** each entry shows a sermon title and date

#### Scenario: Testimonies carousel displays testimonial cards

- **GIVEN** the page loads
- **THEN** the "Testimonies" section is visible
- **AND** testimonial cards with quotes and author names are displayed

#### Scenario: Upcoming events carousel displays event cards

- **GIVEN** the page loads
- **THEN** the "Upcoming Events" section is visible
- **AND** event cards with images, dates, titles, and descriptions are displayed

#### Scenario: Footer renders with columns and social links

- **GIVEN** the page loads
- **THEN** the footer is visible with dark background
- **AND** the footer has About, Quick Menu, Ministries, and Get In Touch columns
- **AND** social media icon links are present
- **AND** a copyright notice is displayed
- **AND** a "Component Dock" link is present in the footer

#### Scenario: All sections have correct design tokens applied

- **GIVEN** the page loads
- **THEN** headings use "Amatic SC" font family
- **AND** body text uses "Work Sans" font family
- **AND** primary accent color is #f23a2e red
- **AND** CTA buttons have pill shape (30px border-radius)
- **AND** section backgrounds alternate between white, light gray, and dark overlay

#### Scenario: Responsive layout adapts to mobile viewports

- **GIVEN** the browser viewport is 375px wide
- **THEN** the navbar shows a hamburger menu
- **AND** the hero slider maintains full-width display
- **AND** church service items stack vertically
- **AND** feature cards stack vertically
- **AND** the footer columns stack vertically

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/devotion/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/devotion/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] Navbar renders with logo and all navigation links
- [ ] Hero slider shows background image with dark overlay and CTAs
- [ ] Upcoming events red band shows below hero
- [ ] Church services section shows 3 items with icons
- [ ] Feature cards section shows 3 items with icons
- [x] "God is Love" section renders with sermon content and Watch Video CTA
- [x] "More Features" section renders
- [x] "Our Mission" section renders with Read More link
- [ ] Sermons carousel displays entries with audio player UI
- [ ] Testimonies carousel displays cards
- [ ] Upcoming events carousel displays event cards
- [ ] Footer has 4 columns, social icons, copyright, and Component Dock link
- [ ] Amatic SC loaded for headings, Work Sans for body
- [ ] Primary color #f23a2e used for icons and accents
- [ ] Pill-shaped buttons with 30px border-radius
- [ ] Responsive layout works at 375px, 768px, 1024px
- [x] No ColorLib references in app code (provenance only in spec/TEMPLATES.md)
- [ ] Placeholder images via picsum.photos with deterministic seeds
- [ ] lucide-react icons replace icomoon/flaticon source icons
- [x] Footer links to componentdock.com
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
