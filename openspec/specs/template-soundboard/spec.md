# Template: Soundboard (Music Event / Band)

## Purpose

Recreation of the ColorLib **Hnband** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page application.

- **Source template**: [Hnband](https://colorlib.com/wp/template/hnband/)
- **Preview URL**: https://preview.colorlib.com/theme/hnband/
- **Category**: Music / Event / Band
- **Description**: Dark-themed music event/band site with hero slider, about section, discography grid, audio player, video player, upcoming shows list, and footer contact form.

## Design tokens

Extracted from the live preview CSS (`css/style.css`):

| Token | Value | Notes |
|-------|-------|-------|
| **Primary font** | `"Nunito Sans", sans-serif` | Google Font, weights 400–800 |
| **Accent font** | `"Satisfy", cursive` | Google Font, used for section subtitles |
| **Brand purple** | `#503aca` | Gradient start for CTA buttons |
| **Brand magenta** | `#ea34ff` | Gradient end for CTA buttons, subtitle color `#e934ff` |
| **Button gradient** | `linear-gradient(45deg, #503aca 0%, #ea34ff 100%)` | All `.site__btn` elements |
| **Dark background** | `#0c0617` | About section, overall page background |
| **Heading color (light bg)** | `#222222` | Headings on white/light sections |
| **Body text** | `#c4c4c4` | Paragraph text (on dark backgrounds) |
| **Text on dark** | `#fff` | All headings/paragraphs in `.text-white` sections |
| **Subtitle color** | `#e934ff` | `.sub-title` and `.about__text span` |
| **Button radius** | No explicit radius (sharp corners) | `.site__btn` has no border-radius |
| **Album card image** | `border-radius: 50%` | Circular album art |
| **Nav active color** | `#503aca` | `.menu--active` |
| **Section backgrounds** | Dark `#0c0617` with overlay images | `set-bg` classes with background-position top center |
| **Button hover** | `color: #fff` (same, gradient preserved) | No visible hover state change in original |

### Visual design notes (from template screenshot + HTML)

The template has a **dark, moody aesthetic** — near-black purple (`#0c0617`) as the dominant background, with vibrant magenta/purple gradient accents. The hero section is a full-width image slider with overlaid text. The about section overlaps the hero via negative margin (`margin-top: -255px`). The discography grid shows 8 album cards in a 4×2 layout with circular artwork. The footer includes a contact form with a side image, address/phone info, social icons (Facebook, Twitter, YouTube, Instagram), and copyright.

## Section structure (in order)

1. **Navbar** — Sticky header with logo left, nav links center (Home, About, Albums, Tours, Pages, Blog, Contact), "Buy tickets" CTA right
2. **Hero** — Full-width background image with text slider (subtitle in Satisfy font, headline, description, CTA button)
3. **About** — Two-column: left image, right text block (subtitle, headline, description, CTA)
4. **Discography** — Dark overlay background, section title, 8 album cards (circular image + title + artist), "Buy on iTunes" CTA
5. **Audio Player** — Split: left side with track info + playback controls + progress bar, right side with playlist
6. **Video Section** — Dark overlay, section title, video player with playlist sidebar
7. **Shows (Upcoming Shows)** — List of upcoming concerts: each row has date badge, title, location, time, "Buy tickets" CTA
8. **Footer** — Three parts: (a) contact form + side image, (b) 3-column row with address, phone/email, social icons, (c) copyright bar

## Gherkin scenarios

### Navbar

```gherkin
Feature: Soundboard Navbar

  Scenario: Navbar displays logo and navigation links
    Given the user loads the Soundboard page
    Then the navbar contains links: Home, About, Albums, Tours, Blog, Contact
    And a "Buy tickets" button is visible on the right side

  Scenario: Navbar is sticky on scroll
    Given the user scrolls down the page
    Then the navbar remains visible at the top of the viewport
```

### Hero

```gherkin
Feature: Soundboard Hero Section

  Scenario: Hero section displays with background image and text
    Given the user loads the Soundboard page
    Then the hero section shows a full-width background image
    And a subtitle in cursive font is visible
    And a headline and description paragraph are visible
    And a "Buy tickets" CTA button is displayed

  Scenario: Hero section is responsive
    Given the user views the page on a mobile device
    Then the hero content stacks vertically
    And text remains readable and CTA is tappable
```

### About

```gherkin
Feature: Soundboard About Section

  Scenario: About section shows two-column layout
    Given the user scrolls to the About section
    Then an image is displayed on the left
    And a text block with subtitle, headline, description, and CTA is on the right

  Scenario: About section has dark background
    Given the user views the About section
    Then the background is dark (#0c0617)
    And text and headings are white
```

### Discography

```gherkin
Feature: Soundboard Discography Section

  Scenario: Discography shows album cards in grid
    Given the user scrolls to the Discography section
    Then 8 album cards are displayed in a 4-column grid
    And each card has a circular image, title, and artist name

  Scenario: Discography has dark overlay background
    Given the user views the Discography section
    Then the section has a dark overlay background
    And the section title "Our Discography" is in cursive font
```

### Audio Player

```gherkin
Feature: Soundboard Audio Player

  Scenario: Audio player displays track info and controls
    Given the user scrolls to the Audio Player section
    Then a track name and artist are shown
    And playback controls (previous, play/pause, next) are visible
    And a progress bar and volume control are displayed
    And a playlist is shown on the right side

  Scenario: Audio player is split layout
    Given the user views the Audio Player
    Then the left side shows track info and controls
    And the right side shows the playlist
```

### Video Section

```gherkin
Feature: Soundboard Video Section

  Scenario: Video section displays with playlist
    Given the user scrolls to the Video section
    Then a video player area is shown on the left
    And a video playlist is shown on the right
    And the section title "Our Videos" is in cursive font

  Scenario: Video section has dark background
    Given the user views the Video section
    Then the background is dark with an overlay
```

### Shows

```gherkin
Feature: Soundboard Upcoming Shows

  Scenario: Shows list displays concert entries
    Given the user scrolls to the Shows section
    Then multiple show entries are displayed in a list
    And each entry has a date badge, title, location, time, and "Buy tickets" button

  Scenario: Show date badge is prominent
    Given the user views a show entry
    Then the day number is displayed large
    And the month abbreviation is below it

  Scenario: Show "Buy tickets" button uses line variant
    Given the user views the Shows section
    Then each "Buy tickets" button has a transparent background with gradient underline
```

### Footer

```gherkin
Feature: Soundboard Footer

  Scenario: Footer shows contact form
    Given the user scrolls to the Footer
    Then a "Contact us" subtitle and "Got a Question?" headline are visible
    And a form with Name, Email, Message fields and "Send Email" button is displayed

  Scenario: Footer shows contact info and social links
    Given the user scrolls to the Footer
    Then an address, phone number, and email are shown
    And social media icons (Facebook, Twitter, YouTube, Instagram) are displayed

  Scenario: Footer shows copyright
    Given the user views the bottom of the page
    Then a copyright bar is displayed with "Component Dock" attribution link

  Scenario: Footer links to Component Dock
    Given the user views the footer
    Then a link to https://www.componentdock.com/ is present
```

## Verification checklist

- [ ] All sections present in correct order: Navbar, Hero, About, Discography, Audio Player, Video, Shows, Footer
- [ ] Brand gradient (purple #503aca → magenta #ea34ff) applied to all CTA buttons
- [ ] Nunito Sans loaded as primary font, Satisfy for section subtitles
- [ ] Dark background (#0c0617) on About, Discography, Video, Shows sections
- [ ] Album cards display circular images in 4-column grid
- [ ] Audio player split layout with controls and playlist
- [ ] Video player split layout with playlist
- [ ] Shows list with date badges and "Buy tickets" line-variant buttons
- [ ] Footer contact form, info columns, social icons, copyright
- [ ] Footer links to https://www.componentdock.com/ (Component Dock)
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] Responsive: mobile-friendly stacking and readable text
- [ ] Placeholder images use picsum.photos/seed pattern
- [ ] Google Fonts loaded via index.html link tags
- [ ] Icons from lucide-react (replacing Font Awesome)
- [ ] Spec is on origin/main before implementation begins
