# Tribune — Implementation Notes

Source: ColorLib "Confpro" — https://colorlib.com/wp/template/confpro/
Preview: https://preview.colorlib.com/theme/confpro/
New name: tribune (apps/tribune)

## Section Order (top to bottom)

1. **Navbar** — fixed dark navy (#0a2642), logo left, nav center, CTA right
2. **Hero Slider** — 3-slide carousel, background images, large white text,
   orange year, purple date badge, numbered dots
3. **Countdown Timer** — purple overlay on crowd image, 4-column countdown
4. **About** — white bg, centered "The Best Marketing Conference" title
5. **Topics/Tabs** — off-white bg, 6 vertical tabs with image+text content
6. **Schedule** — white bg, colored day bars (purple/orange), schedule items
7. **Speakers** — off-white bg, card grid (3-4 per row)
8. **CTA** — purple overlay, "Get your tickets now!" + button
9. **Footer** — dark navy, 4 columns (logo, links, newsletter, Instagram),
   copyright bar

## Design Fidelity Notes

### Navbar
- Background: solid #0a2642, full-width
- Logo: white text "CONFPRO" bold + "CONFERENCE" smaller below
- Nav links: white, uppercase, letter-spacing 2px, font-weight 400
- Hover: no visible change (dropdown indicators on About/Schedule)
- CTA button: #7f66ff bg, white text, uppercase, arrow icon
- Mobile: hamburger → dropdown overlay

### Hero Slider
- Full-viewport width, background-image cover
- 3 slides with different background images
- Headline: white, ~48-60px, bold
- Year: #ff9000 (orange), same line or above headline
- Date badge: #7f66ff bg, white text, inline-block, padding
- Button: white bg, dark text, border-bottom animation on hover
- Dots: numbered 01. 02. 03., active = #7f66ff bg

### Countdown Timer
- Purple overlay: #7f66ff at ~80% opacity over crowd image
- 4 columns: Days | Hours | Minutes | Seconds
- Numbers: white, ~72px, font-weight 700
- Labels: white, ~14px, below numbers
- Colons between numbers

### About
- White background
- Centered container, max-width ~800px
- Section title: large, bold, dark text
- Body text: #68727c, 16px

### Topics/Tabs
- Off-white bg (#f5f8fb)
- Subtitle: "see what's all about" — #7f66ff, uppercase, 13px, 700
- Title: "The Topics" — centered, large, bold
- Tabs: vertical list on left, content on right
- 6 tabs: Marketing 101, Marketing Strategy, Cyber Marketing,
  Online Strategy, Stories, Special Guest
- Active tab: purple left border or highlight
- Content: image + descriptive text

### Schedule
- White bg
- Same subtitle/title pattern as Topics
- Day bars: full-width colored (Day 1 = #7f66ff, Day 2 = #ff9000)
- Each item: thumbnail (round or square), time, title, host
- Time: gray text, ~14px
- Title: bold, dark
- Host: gray with linked name

### Speakers
- Off-white bg (#f5f8fb)
- Same subtitle/title pattern
- Card grid: 3-4 columns
- Each card: photo, name (bold), role (gray)

### CTA
- Purple overlay (#7f66ff) on background image
- Centered: "Get your tickets now!" white, large
- Subtext below
- White button with arrow

### Footer
- Dark navy bg (#0a2642)
- 4 columns: About (logo+text), Quick Links, Newsletter, Instagram
- Newsletter: email input + subscribe button with arrow
- Instagram: grid of 4 small images
- Footer bar: #081624, copyright left, social icons right
- Replace Colorlib attribution with Component Dock link

## Key Implementation Decisions

- Use a simple React carousel (or CSS-only) for the hero slider instead of
  OwlCarousel. 3 static slides with auto-play and dot navigation.
- Countdown timer: useState + useEffect with setInterval, targeting a future
  date. Display days/hours/minutes/seconds.
- Tabs: useState for active tab index, render content conditionally.
- Schedule: static data array, render with map. Two day groups with different
  colored headers.
- Speakers: static data array, 4-column grid with hover effects.
- Footer newsletter: form with email input, no backend (just prevents default).
- Use picsum.photos for all placeholder images (hero, schedule thumbnails,
  speaker photos, Instagram grid).
- Font: Google Fonts link for Roboto (300, 400, 500, 700).
