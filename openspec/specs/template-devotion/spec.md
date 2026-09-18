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

## Gherkin requirements

```gherkin
Feature: Devotion — Charity/Church Landing Template

  Scenario: Navbar renders with logo and navigation links
    Given the page loads
    Then the navbar is visible with the "Devotion" logo text
    And navigation links "About", "Services", "Sermons", "Events", "Contact" are present
    And the mobile hamburger menu button is visible on small viewports

  Scenario: Hero slider displays with background images and CTAs
    Given the page loads
    Then the hero section displays a full-bleed background image
    And a dark overlay covers the background image
    And the heading text is visible on the hero
    And CTA pill buttons are visible on the hero

  Scenario: Upcoming events band shows countdown
    Given the page loads
    Then the red events band is visible below the hero
    And the band displays "Upcoming Events" heading
    And a countdown or event description is visible

  Scenario: Church services section displays three service items
    Given the page loads
    Then three church service items are displayed in a grid
    And each service item has a primary-colored icon
    And each service item has a title and description text

  Scenario: Feature cards section displays three feature items
    Given the page loads
    Then three feature cards are displayed
    And each card has an icon, title, and description
    And each card has a "Read More" link

  Scenario: God is Love section renders with sermon content
    Given the page loads
    Then the "God is Love" section is visible
    And the section shows a preacher attribution
    And a "Watch Video" CTA button is present

  Scenario: More Features section renders additional items
    Given the page loads
    Then the "More Features" heading is visible
    And additional feature items are displayed

  Scenario: Our Mission section renders with CTA
    Given the page loads
    Then the "Our Mission" section is visible
    And a "Read More" link is present

  Scenario: Sermons carousel displays sermon entries
    Given the page loads
    Then the "Listen To Our Sermons" section is visible
    And sermon entries are displayed in a carousel
    And each entry shows a sermon title and date

  Scenario: Testimonies carousel displays testimonial cards
    Given the page loads
    Then the "Testimonies" section is visible
    And testimonial cards with quotes and author names are displayed

  Scenario: Upcoming events carousel displays event cards
    Given the page loads
    Then the "Upcoming Events" section is visible
    And event cards with images, dates, titles, and descriptions are displayed

  Scenario: Footer renders with columns and social links
    Given the page loads
    Then the footer is visible with dark background
    And the footer has About, Quick Menu, Ministries, and Get In Touch columns
    And social media icon links are present
    And a copyright notice is displayed
    And a "Component Dock" link is present in the footer

  Scenario: All sections have correct design tokens applied
    Given the page loads
    Then headings use "Amatic SC" font family
    And body text uses "Work Sans" font family
    And primary accent color is #f23a2e red
    And CTA buttons have pill shape (30px border-radius)
    And section backgrounds alternate between white, light gray, and dark overlay

  Scenario: Responsive layout adapts to mobile viewports
    Given the browser viewport is 375px wide
    Then the navbar shows a hamburger menu
    And the hero slider maintains full-width display
    And church service items stack vertically
    And feature cards stack vertically
    And the footer columns stack vertically
```

## Verification checklist

- [ ] Navbar renders with logo and all navigation links
- [ ] Hero slider shows background image with dark overlay and CTAs
- [ ] Upcoming events red band shows below hero
- [ ] Church services section shows 3 items with icons
- [ ] Feature cards section shows 3 items with icons
- [ ] "God is Love" section renders with sermon content and Watch Video CTA
- [ ] "More Features" section renders
- [ ] "Our Mission" section renders with Read More link
- [ ] Sermons carousel displays entries with audio player UI
- [ ] Testimonies carousel displays cards
- [ ] Upcoming events carousel displays event cards
- [ ] Footer has 4 columns, social icons, copyright, and Component Dock link
- [ ] Amatic SC loaded for headings, Work Sans for body
- [ ] Primary color #f23a2e used for icons and accents
- [ ] Pill-shaped buttons with 30px border-radius
- [ ] Responsive layout works at 375px, 768px, 1024px
- [ ] No ColorLib references in app code (provenance only in spec/TEMPLATES.md)
- [ ] Placeholder images via picsum.photos with deterministic seeds
- [ ] lucide-react icons replace icomoon/flaticon source icons
- [ ] Footer links to componentdock.com
