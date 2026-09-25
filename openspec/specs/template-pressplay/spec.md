# Template: PressPlay (Music)

## Purpose

Recreation of the ColorLib "Mixtape" template as a single-page React app.
Preview URL: https://preview.colorlib.com/theme/mixtape/
ColorLib source: https://colorlib.com/wp/template/mixtape/
Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript

Dark-themed music/band promotional site featuring a hero carousel, featured
album section with audio player, upcoming shows list, artist bio with
signature, a ticket-buying CTA with parallax background, and a newsletter
footer.

## Design Tokens

Extracted from the live preview CSS (`main_styles.css`):

| Token | Value | Usage |
|---|---|---|
| Font family | `'Futura', sans-serif` | All text (headings, body, nav) |
| Primary brand | `#de4f33` (tomato red) | Accent links, featured player bg, section highlights |
| Secondary accent | `#FF6347` (tomato) | Active nav items, hover states |
| Light accent | `#ffa07f` (light salmon) | Secondary hover |
| Dark background | `#000000` | Page bg, header, footer, CTA button |
| Card/player bg | `#333232` | Featured album player container |
| Muted bg | `#525252` / `#5c5c5c` | Slider dots, player controls |
| Text primary | `#FFFFFF` | Headings, body, nav |
| Text muted | `rgba(255,255,255,0.67)` | Subtitles, descriptions |
| Text faint | `rgba(255,255,255,0.5)` | Player details |
| Overlay | `rgba(0,0,0,0.85)` | Header/menu overlay |
| Image overlay | `rgba(0,0,0,0.45)` | Featured album image overlay |
| Border radius | `0px` | Sharp edges throughout |
| Button shape | Square (no radius), solid bg | Buy Tickets, Buy Now, Listen on Soundcloud |

## Visual Design Notes (from screenshot + DOM)

- Full-width dark page with black backgrounds throughout.
- Hero: fullscreen background image slider (OwlCarousel) with centered text
  overlay (subtitle "New single release", heading, CTA link).
- Featured Album: split layout — left: album art with red-tinted overlay
  (`#de4f32`), right: dark player card (`#333232`) with artist name, track
  title, "buy it on itunes" link, and embedded audio player controls.
- Shows: white section background, two-column — left: list of shows (date,
  venue name + location, "Buy Tickets" button), right: venue image with
  overlay.
- Artist: white background, split — left: artist portrait, right: bio text
  with signature image and embedded single-track player.
- Extra/CTA: full-width parallax background image, large heading "Get your
  tickets now!", description paragraph, black "Buy Now" button.
- Footer: black background, two-part — left: newsletter subscription form
  (email input + subscribe button), right: three link columns (Useful Links,
  Site links, Connect). Copyright bar at bottom.

## Gherkin Requirements

### Header

Scenario: Logo and navigation display
  Given the page loads
  Then the header shows the site logo "PressPlay"
  And navigation links: Home, About, Music, News, Contact
  And Login/Register links are visible

Scenario: Mobile hamburger menu
  Given the viewport is below 768px
  When the hamburger icon is clicked
  Then a fullscreen overlay menu appears with nav links
  And the menu can be closed

### Hero Slider

Scenario: Hero slider displays
  Given the page loads
  Then the hero section shows a full-width background image
  And the heading "Love is all around" is displayed
  And the subtitle "New single release" is displayed
  And a "Listen on Soundcloud" CTA link is shown

Scenario: Slider navigation dots
  Given the hero slider is visible
  Then navigation dots appear at the bottom
  And the active dot is highlighted

### Featured Album

Scenario: Featured album section renders
  Given the user scrolls to the Featured Album section
  Then the section subtitle "Events" and title "Featured Album" are visible
  And an album artwork image is displayed on the left
  And a player card is displayed on the right

Scenario: Album player shows track info
  Given the featured album section is in view
  Then the artist name "Maria Smith" is shown
  And the track title "Love is all Around" is shown
  And a "buy it on itunes" link is present

Scenario: Audio player controls render
  Given the featured album player is visible
  Then a play/pause button is rendered
  And a progress/seek bar is rendered
  And current time and duration labels are present
  And a volume control is present

### Shows / Upcoming Events

Scenario: Shows list displays
  Given the user scrolls to the Shows section
  Then the section subtitle "Events" and title "Upcoming Shows" are visible
  And at least 6 show entries are listed
  And each show entry has a date, venue name, and location

Scenario: Buy Tickets buttons
  Given the shows list is visible
  Then each show entry has a "Buy Tickets" button
  And clicking "Buy Tickets" triggers no navigation (placeholder)

Scenario: Shows image
  Given the shows section is visible
  Then a venue/crowd image is displayed alongside the list

### Artist Bio

Scenario: Artist section renders
  Given the user scrolls to the Artist section
  Then the section subtitle "Events" and title "The Artist" are visible
  And an artist portrait image is displayed
  And bio text paragraphs are shown

Scenario: Artist signature
  Given the artist section is in view
  Then a signature image is displayed below the bio text

Scenario: Single track player
  Given the artist section is visible
  Then an embedded single-track audio player is rendered below the signature
  And play/pause controls are present

### Extra / CTA Section

Scenario: Ticket CTA renders
  Given the user scrolls to the Extra section
  Then a parallax background image is displayed
  And the heading "Get your tickets now!" is shown
  And a description paragraph is present
  And a "Buy Now" button is displayed

### Footer / Newsletter

Scenario: Newsletter subscription form
  Given the user scrolls to the footer
  Then a "Subscribe to our newsletter" heading is displayed
  And an email input field is present
  And a "Subscribe" button is present

Scenario: Footer link columns
  Given the footer is visible
  Then three link columns are displayed (Useful Links, PressPlay, Connect)
  And each column has at least 4 links

Scenario: Copyright bar
  Given the footer is visible
  Then a copyright bar is shown at the bottom
  And it links to "Component Dock" (not ColorLib)

## Verification Checklist

- [ ] Header renders with logo, nav, and auth links
- [ ] Hero slider shows background image, heading, subtitle, CTA
- [ ] Featured Album section shows album art, player card, track info
- [ ] Audio player controls render (play, seek, volume)
- [ ] Shows list renders with date, venue, location, Buy Tickets
- [ ] Artist section shows portrait, bio, signature, single-player
- [ ] Extra/CTA section shows parallax bg, heading, description, button
- [ ] Footer has newsletter form, 3 link columns, copyright bar
- [ ] Footer copyright links to Component Dock
- [ ] All text is white on black backgrounds (dark theme)
- [ ] Font is Futura (or Google Fonts geometric sans-serif substitute)
- [ ] Brand accent color #de4f33 used for highlights
- [ ] No ColorLib references in app code
- [ ] Placeholder images use picsum.photos with deterministic seeds
- [ ] Responsive layout (mobile hamburger, stacked columns)
