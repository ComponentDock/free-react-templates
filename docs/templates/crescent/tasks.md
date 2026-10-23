# Crescent — Implementation Todo & Design Notes

Source: ColorLib Crose
Preview: https://preview.colorlib.com/theme/crose/
Target: apps/crescent

## Section Order (top → bottom)

1. TopBar — dark bg, opening hours / email / phone in a flex row
2. Navbar — white bg, logo left, horizontal nav links right, mega menu
3. Hero — full-width carousel, bg images + overlay, centered heading/subtext/CTA
4. About — light bg (#f3f3f3), section heading, 3-column image+text cards
5. CallToAction — parallax bg image, dark overlay, centered white text + outlined button
6. LatestSermons — white bg, section heading, 3-column sermon cards
7. UpcomingEvents — parallax heading banner, carousel of event cards
8. Blog — white bg, section heading, 3-column blog cards
9. Subscribe — split layout: heading left, email form right
10. Footer — dark navy (#1f1f2c), 4 columns, copyright bar

## Component Breakdown

- `TopBar.tsx` — horizontal bar, 3 flex items (hours, email, phone)
- `Navbar.tsx` — logo + nav links, sticky on scroll
- `Hero.tsx` — carousel with auto-advance, bg images with overlay
- `About.tsx` — section heading + 3 AboutCard sub-components
- `CallToAction.tsx` — parallax section with text + outlined CTA button
- `LatestSermons.tsx` — section heading + 3 SermonCard sub-components
- `SermonCard.tsx` — thumbnail with date badge, media icons, metadata
- `UpcomingEvents.tsx` — parallax header + carousel of event cards
- `EventCard.tsx` — thumbnail left, content right layout
- `Blog.tsx` — section heading + 3 BlogCard sub-components
- `BlogCard.tsx` — image + meta + title + excerpt
- `Subscribe.tsx` — 2-col layout with heading + email form
- `Footer.tsx` — 4-column footer with links + copyright
- `App.tsx` — compose all sections in order

## Fidelity Notes

### TopBar
- Dark bg (#1f1f2c), white text
- 3 items: "Opening Hours - 10 Am to 6 PM", email, phone
- Flex row with space-between

### Navbar
- White background, logo on left
- Horizontal links: Home, About, Sermons, Events, Blog, Contact
- Mega menu on hover (can simplify to dropdown for React version)
- Becomes sticky with shadow on scroll

### Hero
- Full-width carousel, auto-advance every 5s
- Background images with dark semi-transparent overlay
- Centered content: large white heading, white subtext, red CTA button
- Button class: `crose-btn` → bg #c92f2f, white text, border-radius 5px

### About
- Light gray bg (#f3f3f3)
- Section heading centered
- 3 cards in a row: image on top, title, paragraph, "Read More" link
- Cards have white bg, subtle shadow

### CallToAction
- Parallax bg image with dark overlay
- Centered: small heading, large text, outlined button (transparent bg, red border)
- Button variant: transparent with red border (`.btn-2`)

### LatestSermons
- White bg, section heading
- 3 sermon cards: thumbnail image with red date badge overlay
- Media icons row (video, audio, docs, download) — use lucide-react icons
- Title, metadata: speaker, category, date/time

### UpcomingEvents
- Parallax heading area with white text
- Carousel of event cards: thumbnail left, content right
- Event metadata: calendar icon + date, clock icon + time, map icon + location

### Blog
- White bg, section heading
- 3 blog cards: image, meta (date/category), title, excerpt
- "Read More" link

### Subscribe
- White bg, 2-column layout
- Left: "Subscribe To Our Newsletter" heading + subtext
- Right: email input + red subscribe button (form)

### Footer
- Dark navy bg (#1f1f2c), white/light text
- 4 columns: logo + description, quick links (with angle-right icons),
  latest news (small cards), contact info
- Copyright bar at bottom
- Must link to ComponentDock
