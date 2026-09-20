# Galactic — Implementation Outline

Source: ColorLib Eventz (https://colorlib.com/wp/template/eventz/)
Preview: https://preview.colorlib.com/theme/eventz/

## Section Order (top → bottom)

1. **Navbar** — Sticky header: logo left, nav links center-right, "Get Your Ticket" CTA button far right. Collapses to hamburger on mobile.
2. **Hero Slider** — Full-width background image, overlay text: subtitle "Committed to success" with left border accent, h1 "Digital Conference For Designers", two CTAs (Download button + circular play-video button with "Story Video Watch" label). Static (no carousel needed — single slide in original).
3. **Countdown Timer** — Absolute-positioned at hero bottom-right. Four values: Days, Hours, Minutes, Seconds in gold `#ffdb6f`. Updates every second via `setInterval`. Hidden on small screens (`d-none d-sm-block`).
4. **About** — Two-column: left has heading "The Biggest Digital Conference", body text, two info cards (Where/When with flaticon icons), "Get Your Ticket" CTA button. Right has overlapping image pair (front image + back image offset).
5. **Speakers** — Dark background image (`section_bg02.png`), white text. Heading "The Most Important Speakers" + "View Speaker" button. 6 speaker cards in responsive grid (col-lg-3). Each: photo, name, role, social icons row.
6. **Schedule** — Tabbed accordion. 4 tabs (Day 01–04). Each tab content: accordion with 3 time-slot cards (time range, title, expandable description). Uses Bootstrap tab + accordion pattern.
7. **Gallery** — Mosaic grid, no padding. 6 images: 2×col-3 + 1×col-6 (row 1), 1×col-6 + 2×col-3 (row 2). Hover: dark overlay + opacity transition.
8. **Pricing** — 3 pricing cards. Center card is "active" (elevated via `scale(1.2)`, purple bg `#31118f`, white text). Each: day label, price, feature list, CTA button. Cards have 6px radius.
9. **Sponsors** — Deep purple bg `#2e0e8c`. Heading "Our Top General Sponsors" (white text). 6 sponsor logos in 3×2 grid. Logos are grayscale/original images.
10. **Blog** — Heading "News From Blog". 2 blog cards side by side. Each: image with date badge overlay (day number + month), category label, title, "Read more" link.
11. **Footer** — 4-column layout: About Us, Contact Info, Important Links, Newsletter (email input + submit). Bottom row: logo, 3 stat counters (5000+, 451, 568), copyright with Component Dock link, social icons.

## Design Fidelity Notes

### Colors
- Primary brand: `#331391` (deep indigo-purple) — used for buttons, links, hover states, active pricing
- Secondary: `#1f2b7b` — headings, secondary button styles
- Dark accent: `#2e0e8c` — sponsors section bg
- Gold accent: `#ffdb6f` — countdown timer, video play button border
- Cyan accent: `#4cd3e3` — success button variant
- Light bg: `#f9f9ff` — section backgrounds, form inputs
- Section tint: `#f0e9ff` — subtle lavender background
- Active pricing: `#31118f` — elevated card bg

### Typography
- Headings: `Sarabun` (Google Fonts) — weight 500–800
- Body: `Roboto` (Google Fonts) — weight 400
- Labels/Countdown: `Sen` (Google Fonts) — weight 400–700
- Section title h2: 49px desktop, scales down on tablet/mobile

### Buttons
- All buttons: `border-radius: 0` (square corners)
- Primary `.btn`: bg `#331391`, white text, padding 27px 44px, hover animates bg to `#3e44ec` via scaleX transform
- `.hero-btn`: white bg, `#331391` text, 30px 39px padding
- `.boxed-btn`: white bg, `#331391` text + border, 18px 44px padding, hover fills `#331391`
- `.black-btn`: black bg, used on pricing cards
- `.white-btn`: white bg, used on speakers section

### Sections Backgrounds
- Hero: background image (`h1_hero.png`) with cover
- Speakers: background image (`section_bg02.png`) with dark overlay
- Sponsors: solid `#2e0e8c` inline style
- Most other sections: white or `#f9f9ff`

### Images (placeholder strategy)
- Hero background: `https://picsum.photos/seed/galactic-hero/1920/900`
- About images: `https://picsum.photos/seed/galactic-about1/600/400` and `galactic-about2/600/500`
- Speaker photos: `https://picsum.photos/seed/galactic-speaker{1-6}/400/400`
- Gallery: `https://picsum.photos/seed/galactic-gallery{1-6}/800/486`
- Blog images: `https://picsum.photos/seed/galactic-blog{1,2}/750/400`
- Sponsor logos: `https://picsum.photos/seed/galactic-sponsor{1-6}/200/80` (or use text-based placeholders)

### Interactivity
- Countdown timer: `useEffect` + `setInterval` for live countdown to a fixed future date
- Schedule tabs: controlled component with `useState` for active tab index
- Accordion: controlled with `useState` per day, or single open item per tab
- Gallery hover: CSS `::after` overlay + image scale on hover
- Pricing active state: CSS `:hover` or static active class on center card
- Navbar sticky: CSS `position: sticky` or scroll-based state

## Component Structure

```
apps/galactic/src/
  main.tsx
  App.tsx
  index.css
  components/
    Navbar.tsx
    Hero.tsx
    Countdown.tsx
    About.tsx
    Speakers.tsx
    Schedule.tsx
    Gallery.tsx
    Pricing.tsx
    Sponsors.tsx
    Blog.tsx
    Footer.tsx
```

## Implementation Tasks

- [ ] Scaffold app from template (copy simplest existing app, rename)
- [ ] Set up index.css with Tailwind + Google Fonts + theme tokens
- [ ] Implement Navbar (sticky, responsive, CTA)
- [ ] Implement Hero + Countdown timer
- [ ] Implement About section
- [ ] Implement Speakers section
- [ ] Implement Schedule (tabs + accordion)
- [ ] Implement Gallery (mosaic grid + hover)
- [ ] Implement Pricing cards
- [ ] Implement Sponsors section
- [ ] Implement Blog section
- [ ] Implement Footer (4-col + newsletter + stats)
- [ ] Write tests for all components (100% coverage)
- [ ] Verify: typecheck, lint, build, test:coverage all pass
- [ ] Update public/CNAME and package.json homepage
