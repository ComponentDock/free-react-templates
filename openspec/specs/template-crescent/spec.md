# Template: Crescent (Church / Community)

## Purpose

Recreation of ColorLib **Crose** (https://colorlib.com/wp/template/crose/).
Preview URL: https://preview.colorlib.com/theme/crose/

Stack: React 19 · Vite · Tailwind CSS 4 · TypeScript (strict).

Crose is a church/community website template featuring a hero carousel,
about section with cards, call-to-action parallax banner, sermon cards
with date badges and media icons, upcoming events carousel, blog cards,
newsletter subscription, and a 4-column footer. Brand color is deep red
(#c92f2f). Font is Open Sans.

## Design Tokens

| Token             | Value                          | Notes                                  |
| ----------------- | ------------------------------ | -------------------------------------- |
| brand-color       | `#c92f2f`                      | Deep red — buttons, accents, headings  |
| brand-dark        | `#1f1f2c`                      | Dark navy — footer bg, dark sections   |
| body-text         | `#636363`                      | Main paragraph text                    |
| muted-text        | `#959595`                      | Secondary/meta text                    |
| light-bg          | `#f3f3f3`                      | Alternating section backgrounds        |
| white             | `#ffffff`                      | Card backgrounds, hero text            |
| border-color      | `#ebebeb`                      | Light borders, dividers                |
| font-family       | `"Open Sans", sans-serif`       | Body + headings                        |
| button-radius     | `5px`                          | Rounded rectangular buttons            |
| button-padding    | `12px 28px`                    | Approx from CSS `.crose-btn`           |
| button-font       | 700 weight, uppercase implied  | Bold CTAs                              |
| section-padding   | `100px 0`                      | Consistent vertical rhythm             |
| overlay-color     | `rgba(0,0,0,0.4)` (approx)     | Hero + CTA parallax image overlays     |

## Visual Design Notes (from screenshot + live preview)

- Top bar: dark bg (#1f1f2c), opening hours / email / phone in white
- Navbar: white bg, logo left, menu right, mega menu dropdowns
- Hero: full-width carousel, parallax background images with dark overlay,
  centered white heading + subtext + red CTA button
- About: light bg (#f3f3f3), section heading, 3-column image+text cards
- Call to Action: parallax bg image with overlay, centered heading + white
  text + outlined red button
- Latest Sermons: white bg, 3-column cards with thumbnail, date badge
  (red circle), media action icons (video/audio/docs/download), sermon
  metadata (speaker, category, time)
- Upcoming Events: parallax header, carousel of event cards with thumbnail
  image left + content right (title, date/time/location meta, description)
- Blog: white bg, 3-column cards with image + meta + title + excerpt
- Subscribe: white bg, split layout — left: heading + subtext, right: email
  input + red subscribe button
- Footer: dark navy bg (#1f1f2c), 4 columns (logo+desc, quick links,
  latest news, contact info), copyright bar at bottom

## Gherkin Requirements

### Navbar

```gherkin
Scenario: Navbar displays logo and navigation links
  Given the page loads
  Then the navbar shows the site logo on the left
  And navigation links are displayed horizontally
  And links include "Home", "About", "Sermons", "Events", "Blog", "Contact"

Scenario: Navbar is sticky on scroll
  Given the user scrolls past the hero
  Then the navbar remains fixed at the top of the viewport
  And it has a white background with subtle shadow
```

### Hero

```gherkin
Scenario: Hero displays carousel with background image
  Given the page loads
  Then a full-width hero section is visible
  And it shows a centered heading
  And a subtext paragraph below the heading
  And a CTA button styled in brand red

Scenario: Hero slides rotate automatically
  Given the hero carousel is displayed
  When 5 seconds pass without user interaction
  Then the carousel advances to the next slide
```

### About

```gherkin
Scenario: About section shows 3 content cards
  Given the page loads
  Then the About section displays with a section heading "Welcome To [Church]"
  And 3 cards are shown in a row
  And each card has an image on top, a title, description text, and a "Read More" link
```

### Call to Action

```gherkin
Scenario: CTA section shows parallax background with overlay
  Given the page loads
  Then a call-to-action section is visible with a background image
  And the image has a dark overlay
  And centered white text with a heading and subheading
  And a button styled with transparent background and red border
```

### Latest Sermons

```gherkin
Scenario: Sermons section displays sermon cards
  Given the page loads
  Then the Latest Sermons section shows a heading
  And 3 sermon cards are displayed in a row
  And each card has a thumbnail with a date badge
  And media action icons (video, audio, docs, download)
  And a sermon title, speaker name, category, and date/time
```

### Upcoming Events

```gherkin
Scenario: Events section shows event cards with thumbnails
  Given the page loads
  Then the Upcoming Events section has a parallax heading area
  And event cards are displayed in a carousel
  And each card has a thumbnail image on the left
  And event title, date, time, location, and description on the right
```

### Blog

```gherkin
Scenario: Blog section shows blog post cards
  Given the page loads
  Then the Blog section shows a heading
  And 3 blog cards are displayed in a row
  And each card has an image, meta info (date, category), title, and excerpt
```

### Subscribe / Newsletter

```gherkin
Scenario: Newsletter section shows email subscription form
  Given the page loads
  Then a subscribe section is visible
  And it has a heading "Subscribe To Our Newsletter"
  And an email input field on the right
  And a red subscribe button next to the input
```

### Footer

```gherkin
Scenario: Footer displays 4 columns with links and contact info
  Given the page loads
  Then the footer has a dark navy background
  And it shows 4 columns: logo/description, quick links, latest news, contact info
  And a copyright bar at the very bottom
  And the footer links to https://www.componentdock.com/ branded as "Component Dock"
```

## Verification Checklist

- [ ] All sections match the order: TopBar → Navbar → Hero → About → CTA → Sermons → Events → Blog → Subscribe → Footer
- [ ] Brand color `#c92f2f` used for buttons and accents via Tailwind theme
- [ ] Font is Open Sans via Google Fonts link in index.html
- [ ] Buttons have `rounded` (5px) shape, red background, white text
- [ ] Hero section uses parallax bg images with dark overlay
- [ ] CTA section uses parallax bg image with transparent+border button
- [ ] Sermon cards have date badge, media icons, metadata rows
- [ ] Events section has parallax heading + carousel cards
- [ ] Footer is dark navy (#1f1f2c) with 4 columns
- [ ] Footer links to ComponentDock
- [ ] No ColorLib references in app code
- [ ] Footer branded as "Component Dock"
- [ ] 100% test coverage (Vitest)
- [ ] Tests cover all interactive elements and section rendering
