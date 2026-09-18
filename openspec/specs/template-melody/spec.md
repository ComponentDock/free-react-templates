# Template: Melody (Fullscreen Music Website)

## Purpose

Melody is a single-page fullscreen music website in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Music" free
template (source: https://colorlib.com/wp/template/music/), built under a
DIFFERENT name (**Melody**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a fullscreen musician/band website: a dark purple-to-blue
gradient header with logo and navigation, a full-viewport owl-carousel hero
slider ("your music.") with a ticket search form overlaid, a parallax
"Song of the Week" audio player section, a two-column Tour Dates list with
a promotional "world tour" card, a "Get Your Music Right Now!" app download
section, a Featured Albums playlist grid, a Latest News 3-column blog card
grid, a "Subscribe & Follow" newsletter section, and a dark footer with
logo + social icons. The aesthetic is bold, colorful, and music-industry
themed — neon green (#2ac275) accents on a purple (#3b125d) / blue (#2457d7)
gradient base, with bright yellow (#eeff2d) and magenta (#e830fe) highlights.
Josefin Sans is the sole font. Pill-shaped buttons (22px radius) with a
green-to-yellow gradient.

**Preview URL:** https://preview.colorlib.com/theme/music/

## Naming

The ColorLib source name "Music" is FORBIDDEN as the app name. The NEW
name is **Melody** (single lowercase word, music-related, no collision with
`ls apps/` or `openspec/specs/`). Source slug: `music`.

- App folder: `apps/melody`
- Package: `@free-react-templates/melody`
- CNAME: `melody.free.componentdock.com`
- Homepage: `https://melody.free.componentdock.com`

## Design Tokens (extracted from live preview CSS)

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| Brand green | `#2ac275` | Primary accent, buttons, active states, player bar |
| Dark purple | `#3b125d` | Header background, menu background |
| Deep blue | `#2457d7` | Header gradient left, menu gradient left |
| Bright yellow | `#eeff2d` | Header scroll state, button gradient, extra_year |
| Lime yellow | `#cbdc0b` | Button gradient center |
| Magenta/pink | `#e830fe` | Home slider dots, active nav marker |
| Coral/salmon | `#ffa07f` | Home social section background |
| Tomato red | `#ff1a4b` | Featured list border |
| Body text dark | `#2a2a2a` | Headings, primary text |
| Body text medium | `#6d6d6d` | Secondary text |
| Body text light | `#a5a5a5` | Placeholder, muted text |
| Page background | `#FFFFFF` | Body background |
| Section background | `#eef2f6` | Light gray section backgrounds |

### Gradients
| Name | Value |
|------|-------|
| Header/menu | `linear-gradient(to right, #2457d7, #3b125d)` |
| Button | `linear-gradient(to right, #2ac275, #cbdc0b, #2ac275)` |
| Header scrolled | `linear-gradient(to right, #eeff2d, #2ac275)` |

### Typography
| Token | Value |
|-------|-------|
| Font family | `'Josefin Sans', sans-serif` (Google Fonts) |
| Body text | 14px, `#a5a5a5` |
| Headings (h1) | Section titles, large bold |
| Logo text | Lowercase, bold |

### Buttons
| Property | Value |
|----------|-------|
| Border radius | `22px` (pill shape) |
| Background | `#2ac275` solid, or gradient |
| Text color | `#ffffff` |
| Hover | Gradient underline effect via `::after` pseudo-element |
| Button variants | `.button`, `.extra_button`, `.tour_button`, `.newsletter_button` |

### Misc
| Property | Value |
|----------|-------|
| Border radius (cards) | `15px` |
| Border radius (social icons) | `50%` (circular) |
| Overlay | `rgba(0,0,0,0.66)` on background images |
| Semi-transparent white | `rgba(255,255,255,0.14)` and `rgba(255,255,255,0.63)` |

## Visual Design (from TEMPLATES.md screenshot)

The screenshot shows a dark, moody musician website with:
- Full-viewport hero slider with a dark background image and large
  white "your music." headline text centered, with a ticket search
  form overlay
- Bold neon green (#2ac275) accents throughout
- Purple-to-blue gradient header bar with "music" logo text and
  horizontal navigation
- Clean, bold typography (Josefin Sans) in white on dark backgrounds
- Music player controls in a parallax section
- Tour dates list with green pill "get your tickets" buttons
- App download section with phone mockup images
- 3-column news cards
- Newsletter subscription with green button
- Dark footer with social icon circles

## Section Structure (page order from live preview)

1. **Header** — logo (5-bar graphic + "music" text) + main nav (Home,
   Artists, Download Music, News, Contact) + login/register links
2. **Hero Slider** — owl-carousel, 3 slides, each with:
   - Full-viewport background image (dark overlay `rgba(0,0,0,0.66)`)
   - Centered white h1 "your music." (with green span)
   - Ticket search form: Event dropdown + Tickets input + Search button
   - Social links sidebar ("follow" text + icon list)
   - Scroll-down arrow
3. **Song of the Week** — parallax background section:
   - Audio player controls (play/stop buttons)
   - Song image (album art)
   - Progress bar with current time / duration
   - Artist name "Michael Smith"
   - Volume controls with mute button
4. **Tour Dates** — two-column layout:
   - Left (col-lg-8): "Tour Dates" title + list of tour dates
     (date, venue name, location, "get your tickets" button per row)
     + "See All Tour Dates" link
   - Right (col-lg-4): Promotional card with background image,
     "it's awesome" text, "2019" year, "world tour" title,
     "november 2018" subtitle, "get your tickets" button
5. **App Download** — two-column layout:
   - Left: phone/device image
   - Right: "Get Your Music Right Now!" title + description text
     + App Store + Google Play download buttons
6. **Featured Albums** — centered section:
   - "Featured Albums" title (centered)
   - Playlist grid (jplayer playlist with album images)
7. **Latest News** — three-column card grid:
   - Each card: image (alternating top/bottom), date, title, text
   - Cards: "Music Seminary at Festival", "Festival list for 2019",
     "New album release in 2019"
8. **Newsletter** — two-column layout:
   - Left: "Subscribe & Follow" title + description text
   - Right: Email input + "subscribe" green pill button
9. **Footer** — dark background image:
   - Logo (same 5-bar + text)
   - Social icons row (Pinterest, Facebook, Twitter, Dribbble, Behance)
   - Copyright bar

## Gherkin Requirements

### Hero Slider

```gherkin
Feature: Hero Slider
  As a visitor, I want to see a fullscreen hero slider so I can discover the music site.

  Scenario: Hero slider renders with background images
    Given the page loads
    Then a fullscreen hero section is visible
    And the hero has a dark overlay on the background image
    And the headline "your music." is displayed in large white text

  Scenario: Ticket search form is present
    Given the hero slider is visible
    Then an Event dropdown selector is displayed
    And a Tickets text input is displayed
    And a Search button is displayed

  Scenario: Social links sidebar is visible
    Given the hero slider is visible
    Then a "follow" label is displayed
    And social media icon links are displayed in a vertical list

  Scenario: Scroll down indicator is visible
    Given the hero slider is visible
    Then a scroll-down arrow/link is displayed at the bottom
```

### Song of the Week Player

```gherkin
Feature: Song of the Week Player
  As a visitor, I want to play a featured song so I can preview the music.

  Scenario: Player section renders with parallax background
    Given the Song of the Week section is in the viewport
    Then a parallax background image is displayed
    And the section title "song of the week" is visible

  Scenario: Player controls are interactive
    Given the audio player is displayed
    Then a play button is visible
    And a stop button is visible
    And a progress bar with current time and duration is visible
    And an artist name is displayed

  Scenario: Volume controls are present
    Given the audio player is displayed
    Then a mute/volume button is visible
    And a volume slider bar is visible
```

### Tour Dates

```gherkin
Feature: Tour Dates
  As a visitor, I want to see upcoming tour dates so I can attend concerts.

  Scenario: Tour dates list renders
    Given the Tour Dates section is visible
    Then the title "Tour Dates" is displayed
    And at least 4 tour date entries are listed
    And each entry shows date, venue name, and location
    And each entry has a "get your tickets" button

  Scenario: Tour promotional card renders
    Given the Tour Dates section is visible
    Then a promotional card is displayed on the right side
    And the card shows "it's awesome" text
    And the card shows a year, title "world tour", and subtitle
    And the card has a "get your tickets" button

  Scenario: See All Tour Dates link is visible
    Given the Tour Dates section is visible
    Then a "See All Tour Dates" link is displayed below the list
```

### App Download

```gherkin
Feature: App Download
  As a visitor, I want to download the music app so I can listen on mobile.

  Scenario: App section renders with device image
    Given the App Download section is visible
    Then a phone/device image is displayed
    And the title "Get Your Music Right Now!" is displayed

  Scenario: Store download buttons are visible
    Given the App Download section is visible
    Then an App Store download button/image is displayed
    And a Google Play download button/image is displayed
```

### Featured Albums

```gherkin
Feature: Featured Albums
  As a visitor, I want to browse featured albums so I can discover music.

  Scenario: Featured Albums section renders
    Given the Featured Albums section is visible
    Then the title "Featured Albums" is centered
    And a grid/list of album entries is displayed
```

### Latest News

```gherkin
Feature: Latest News
  As a visitor, I want to read the latest news so I can stay updated.

  Scenario: News grid renders with 3 cards
    Given the Latest News section is visible
    Then the title "Latest News" is displayed
    And 3 news post cards are displayed in a grid
    And each card has an image, date, title, and text excerpt

  Scenario: News cards have alternating image positions
    Given the Latest News section is visible
    Then the first card has the image on top
    And the second card has the image on bottom
    And the third card has the image on top
```

### Newsletter

```gherkin
Feature: Newsletter Subscription
  As a visitor, I want to subscribe to the newsletter so I get updates.

  Scenario: Newsletter form renders
    Given the Newsletter section is visible
    Then the title "Subscribe & Follow" is displayed
    And description text is displayed
    And an email input field is displayed
    And a "subscribe" button is displayed

  Scenario: Newsletter form validates email
    Given the Newsletter section is visible
    When I click "subscribe" without entering an email
    Then the form shows a validation error
```

### Footer

```gherkin
Feature: Footer
  As a visitor, I want to see the footer so I can find social links.

  Scenario: Footer renders with logo and social icons
    Given the footer is visible
    Then the logo is displayed
    And social media icon links are displayed (Pinterest, Facebook,
        Twitter, Dribbble, Behance)

  Scenario: Footer has copyright
    Given the footer is visible
    Then a copyright notice is displayed in the footer bar
    And the copyright links to Component Dock
```

## Verification Checklist

- [ ] All 9 sections render in correct order (Header → Hero → Song → Tours → App → Featured → News → Newsletter → Footer)
- [ ] Hero slider: fullscreen, dark overlay, "your music." headline, ticket form, social sidebar, scroll indicator
- [ ] Song player: parallax background, play/stop controls, progress bar, artist name, volume controls
- [ ] Tour Dates: list of 4+ dates with venue/location/button, promotional card with year/title/subtitle, "See All" link
- [ ] App Download: device image, title, description, App Store + Google Play buttons
- [ ] Featured Albums: centered title, album grid/list
- [ ] Latest News: 3 cards in grid, alternating image positions, date/title/text
- [ ] Newsletter: title, description, email input, subscribe button, validation
- [ ] Footer: logo, social icons, copyright with Component Dock link
- [ ] Design tokens: Josefin Sans font, #2ac275 green primary, #3b125d purple header, pill buttons (22px radius)
- [ ] Responsive layout: mobile-friendly, hamburger menu, stacked columns
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Footer links to Component Dock
