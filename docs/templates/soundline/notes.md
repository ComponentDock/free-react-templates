# Soundline — Implementation Notes

**Source:** ColorLib "Poca" (https://colorlib.com/wp/template/poca/)
**Preview:** https://preview.colorlib.com/theme/poca/
**New name:** Soundline
**Stack:** React 19, Vite, Tailwind CSS 4, TypeScript

## Structure Order (sections top → bottom)

1. `Navbar.tsx` — Sticky header: logo left, nav links center, search + social icons right. Hamburger on mobile.
2. `HeroCarousel.tsx` — Full-viewport carousel (3 slides). Each slide: bg image + dark overlay + heading + subtitle + 2 subscribe buttons + featured episode card with audio player + like/share/download.
3. `LatestEpisodes.tsx` — Section heading + filter bar (All/Entrepreneurship/Media/Tech/Tutorials) + 2-column grid of 6 episode cards + Load More button.
4. `FeaturedGuests.tsx` — Section heading + 3-column guest cards (photo + name + role).
5. `Newsletter.tsx` — Parallax bg image + dark overlay + two-column: heading left, email form right.
6. `Footer.tsx` — 4-column: About Us, Categories, Latest Episodes, Follow Us (social + app badges). Component Dock attribution.

## Design Token Notes (for index.css @theme)

```
brand-red: #f55656
heading: #232323
body-text: #666666
bg-gray: #f4f4f4
white: #ffffff
dark: #000000
border: #ebebeb
secondary: #a6a6a6
```

Font: HK Grotesk (load via Google Fonts or self-host). Fallback: sans-serif.

## Component Implementation Notes

### Navbar
- Desktop: flex container — logo left, nav links center, search + social right
- Mobile: hamburger toggle → vertical slide-down menu
- Sticky: on scroll > threshold, add fixed positioning + dark bg
- Social icons: Facebook, Twitter, Pinterest, Instagram, YouTube (use lucide-react or inline SVGs)

### HeroCarousel
- Implement as controlled carousel (3 slides)
- Each slide: full-viewport height, bg image via `picsum.photos/seed/soundline-<n>`, dark overlay (`bg-black/50`)
- Heading: white, 44px, font-weight 600
- Two buttons: solid (active) + outline, pill-shaped (`rounded-full`)
- Featured episode card below text: flex row, thumbnail left (picsum), content right with metadata + audio player + action links
- Audio: use `<audio>` HTML5 element with controls

### LatestEpisodes
- Filter bar: row of pill buttons, active state = primary red bg
- Episode cards: 2-column grid, each card flex row — thumbnail left, content right
- Content: date, title, author/category/duration, audio player, like/share/download links
- "Load More" button: pill-shaped, centered, primary red
- Use `useState` for active filter; filter episodes array by category

### FeaturedGuests
- 3-column grid (col-3 each on desktop, stack on mobile)
- Each card: image (picsum/seed), name below, role in uppercase small text
- Simple layout, no hover effects needed

### Newsletter
- Full-width section with parallax bg image + dark overlay
- Two-column: left = heading + subtitle (white text), right = email form
- Form: email input + submit button, inline flex
- Use `picsum.photos/seed/soundline-newsletter` for bg

### Footer
- 4-column grid: About Us | Categories | Latest Episodes | Follow Us
- About: text paragraph + copyright
- Categories: nav list (Entrepreneurship, Media, Tech, Tutorials)
- Latest Episodes: 2 entries with date + linked title
- Follow Us: social icon links + App Store / Google Play badge placeholders
- MUST include Component Dock attribution link at bottom
- No ColorLib references anywhere in this component

## Placeholder Images

Use `picsum.photos/seed/soundline-<n>` for all images:
- Hero slide backgrounds: `soundline-hero-1`, `soundline-hero-2`, `soundline-hero-3`
- Episode thumbnails: `soundline-ep-1` through `soundline-ep-6`
- Guest photos: `soundline-guest-1`, `soundline-guest-2`, `soundline-guest-3`
- Newsletter bg: `soundline-newsletter`

## Audio Player

Use native HTML5 `<audio controls>` element. No custom player needed — the original uses a basic audio player. Style the container to match the card layout.

## Testing Notes

- Navbar: test sticky behavior, mobile toggle, all nav links present
- HeroCarousel: test slide transitions, subscribe buttons, episode card rendering
- LatestEpisodes: test filter functionality (click filter → correct items shown), Load More button visible
- FeaturedGuests: test 3 cards render with correct data
- Newsletter: test form input + submit
- Footer: test 4 columns render, Component Dock link present, social icons present
- Audio: test audio element renders with controls attribute
