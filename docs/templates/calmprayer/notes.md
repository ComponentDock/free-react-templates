# CalmPrayer — Prep Notes

**Source:** ColorLib "Inward" — https://colorlib.com/wp/template/inward/
**Preview:** https://preview.colorlib.com/theme/inward/
**New name:** `calmprayer`
**Category:** Nonprofit / Church

---

## Section Order (from preview HTML)

1. Navbar — transparent → solid dark on scroll, brand "CalmPrayer", dropdown on Messages
2. Hero Slider — full-width, dark overlay, Playfair Display heading, white outline CTA
3. Camp Meeting Split — left: forest bg + countdown timer + "Join Now"; right: event list
4. Audio Sermons — bg-light, 3-column card grid (image + title + author + audio player)
5. Latest Events — 3-column media cards (thumbnail + title + category + excerpt)
6. Personal Testimony — bg-light, carousel with photos + blockquotes + attribution
7. Footer — dark, 4-column (brand+social, church links, messages links, contact info), copyright with Component Dock

## Design Tokens Summary

| Token         | Value                     |
|---------------|---------------------------|
| Primary blue  | #6A99CB                   |
| Hover blue    | #90b3d8                   |
| Body font     | Open Sans                 |
| Heading font  | Playfair Display          |
| Button radius | 0 (square)                |
| Page bg       | #fff                      |
| Alt bg        | #f8f9fa (Bootstrap light) |
| Navbar        | transparent → #000        |
| Footer bg     | dark/black                |
| Loader accent | #f4b214                   |

## Fidelity Notes

- Hero uses a warm-toned hand-reaching image with dark overlay (rgba(0,0,0,0.2)). Use a picsum seed image with dark overlay.
- Countdown timer: use a lightweight React countdown library or custom hook. Display weeks/days/hours/min/sec.
- Audio sermons: each card has an `<audio>` element. Use a simple HTML5 audio player (no heavy library needed).
- Testimonial carousel: implement with a lightweight slider (or CSS-based carousel). Original uses owl-carousel.
- Camp meeting split: CSS flexbox/grid split, 50/50 layout on md+ breakpoint, stacked on mobile.
- Social icons: use lucide-react icons (Twitter/X, Facebook, LinkedIn, Instagram) instead of FontAwesome.
- Dropdown: Messages nav item has a submenu. Implement with React state or Headless UI popover.
- All text is placeholder (lorem ipsum) — keep the same kind of content (headings, blurbs, CTAs) but paraphrase.

## Component Architecture

- `Navbar.tsx` — fixed navbar, scroll detection (useState + useEffect + scroll listener), dropdown state
- `Hero.tsx` — full-width slider with overlay, heading, subtext, CTA button
- `CampMeeting.tsx` — split layout: countdown (left) + event list (right)
- `CountdownTimer.tsx` — standalone countdown component with weeks/days/hours/min/sec
- `AudioSermons.tsx` — section heading + 3-column grid of sermon cards
- `SermonCard.tsx` — image + title + meta + audio player
- `LatestEvents.tsx` — section heading + 3-column grid of event cards
- `EventCard.tsx` — thumbnail + title + category + description
- `Testimonials.tsx` — carousel with slides, prev/next navigation
- `Footer.tsx` — 4-column layout, social icons, contact info, Component Dock link

## Key Implementation Decisions

- Use `picsum.photos/seed/calmprayer-N/` for all images (hero, camp meeting, sermons, events, testimonials)
- Google Fonts via `<link>` in index.html: Open Sans (400, 700, 800) + Playfair Display (400, 700)
- Tailwind theme tokens in index.css: `--color-primary: #6A99CB; --color-primary-hover: #90b3d8;`
- Countdown: custom `useCountdown` hook (no external lib)
- Carousel: simple state-based slide rotation with dots/arrows
- Audio: native `<audio controls>` — no custom player UI needed
