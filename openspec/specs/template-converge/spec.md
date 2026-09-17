# spec: Converge — Marketing Conference Landing Template

Recreation of ColorLib "Confpro"
(https://colorlib.com/wp/template/confpro/).

## Design tokens (from ColorLib preview CSS)

| Token         | Value            | Usage                                               |
| ------------- | ---------------- | --------------------------------------------------- |
| Brand primary | `#7f66ff`        | Purple/violet — buttons, active states, accent text |
| Dark navy     | `#0a2642`        | Header background, section overlays, headings       |
| Body text     | `#68727c`        | Paragraph copy                                      |
| Muted text    | `#a5a5a5`        | Secondary text                                      |
| Salmon accent | `#ffa07f`        | Link underlines                                     |
| Orange CTA    | `#ff9000`        | Call-to-action button variant                       |
| Font family   | Roboto (300–900) | All text via Google Fonts `<link>`                  |

## Sections (in order)

1. **Navbar** — fixed top, dark navy bg, logo ("converge"), nav links (Home, About, Schedule, News, Contact), Login/Register, "Get Tickets" CTA, mobile hamburger
2. **Hero** — full-screen dark section with background image, large heading ("2025 Marketing Conference"), date/location info, "Get Tickets" CTA, slide dots
3. **Countdown** — parallax background, 4-unit countdown (Days, Hours, Minutes, Seconds) with live ticker
4. **Intro** — white bg, centered heading ("The Best Marketing Conference"), descriptive paragraph, "Get Tickets" CTA
5. **Topics** — tabbed section with 6 tabs (Marketing Intro, Strategy, Cyber, Online, Stories, Special Guest), each showing heading + text + image
6. **Schedule** — two-column layout (Day 1 / Day 2), each with 5 sessions showing time, title, host name, avatar
7. **Speakers** — 3×2 grid of speaker cards with photo, name, role on dark navy overlay
8. **CTA** — orange background section with "Get Your Tickets Now!" heading, description, ticket button
9. **Footer** — dark navy, 3-column: about + social icons, newsletter form, Instagram gallery; footer bar with Component Dock link

## Scenarios

### Navbar

- Renders logo, nav links, login/register, and Get Tickets CTA
- Mobile menu toggles open/closed
- Clicking a nav link closes mobile menu

### Hero

- Displays conference year, title, date, and location
- Shows Get Tickets CTA and slide dots

### Countdown

- Shows all 4 time units with labels
- Counts down each second
- Shows 00:00:00:00 when target is past

### Intro

- Renders heading, descriptive text, and Get Tickets link

### Topics

- Renders all 6 tab buttons
- Shows first topic by default
- Switches content when a different tab is clicked

### Schedule

- Renders Day 1 and Day 2 columns with session titles, times, and hosts

### Speakers

- Renders all 6 speaker cards with names, roles, and images

### CTA

- Renders heading, description, and Get Tickets button

### Footer

- Renders logo, about text, newsletter form, Instagram gallery (8 images)
- Contains Component Dock link in footer bar
- Social media icons (Facebook, Twitter, Dribbble) via inline SVGs

### App

- Composes all sections with correct landmarks
