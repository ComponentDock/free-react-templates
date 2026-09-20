# Gathering — Design & Structure Notes

Source: ColorLib Agenda (https://colorlib.com/wp/template/agenda/)
Preview: https://preview.colorlib.com/theme/agenda/

## Section order (1:1 with original)

1. **Navbar** — Fixed header bar with logo (left), nav links (center), "Buy Tickets" pill button (right). Mobile: hamburger → purple slide-in drawer.
2. **Hero Slider** — Full-width Swiper slider with dark image backgrounds, countdown timer (Days/Hours/Minutes/Seconds), large white bold heading, and pill "Order here" CTA. Pagination bullets + arrow navigation.
3. **Info Section** — White background. Split: logo image left, "What is Agenda..." heading + paragraph right, "Read More" (gradient) + "Register Now" (dark pill) buttons.
4. **Featured Events** — Parallax background image. Masonry-style grid of event cards (absolute-positioned on desktop). Cards have images with purple overlay labels (title + date).
5. **Next Events** — White background. Centered heading with decorative underline image. 3-column event cards: image + circular purple rating badge + title + date + description + "Buy Tickets" link.
6. **Regional Events** — Full-width parallax. "Events in New York" heading + location dropdown (pill-shaped, gradient background). Horizontal Swiper of event slides with hover overlay (purple + "+" icon). Partners logo row below slider.
7. **Newsletter** — Parallax background. Centered heading + "Join our database NOW!" text. Inline form: Name input + Email input + gradient "Subscribe" button.
8. **Footer** — Dark indigo (#08011e) background. Centered logo, nav links, social icons (Pinterest, LinkedIn, Instagram, Facebook, Twitter), copyright with "Component Dock" attribution.

## Design token mapping (Tailwind)

| Original CSS              | Tailwind class / CSS variable                     |
| ------------------------- | ------------------------------------------------- |
| `#9a28d7` (primary)      | `bg-[#9a28d7]` or `text-[#9a28d7]`               |
| gradient `#ab00e5 → #581479` | `bg-gradient-to-r from-[#ab00e5] to-[#581479]` |
| `border-radius: 50px`    | `rounded-full`                                    |
| `#232127` (heading)       | `text-[#232127]`                                  |
| `#777777` (muted)         | `text-gray-500`                                   |
| `#08011e` (footer bg)     | `bg-[#08011e]`                                    |
| `#bec0cc` (link muted)    | `text-gray-400`                                   |
| Calibri font              | `font-sans` (Open Sans via Google Fonts)          |

## Component breakdown

| Component        | Notes                                                            |
| ---------------- | ---------------------------------------------------------------- |
| `Navbar.tsx`     | Logo, nav links, Buy Tickets button. Mobile hamburger + drawer.  |
| `HeroSlider.tsx` | Swiper-like slider with countdown, heading, CTA. Auto-advance.   |
| `InfoSection.tsx`| Split layout: image + heading + description + 2 buttons.         |
| `FeaturedEvents.tsx` | Masonry grid with absolute positioning on desktop.           |
| `NextEvents.tsx` | 3-column grid of event cards with rating badges.                 |
| `RegionalEvents.tsx` | Parallax bg, location dropdown, horizontal card slider.     |
| `Partners.tsx`   | Logo row (flex, even spacing).                                   |
| `Newsletter.tsx` | Centered form: name + email + gradient submit.                   |
| `Footer.tsx`     | Dark bg, logo, nav, social icons, copyright.                     |

## Fidelity notes

- Hero slider: original uses Swiper.js. Implement with a simple React state-based slider or CSS-only approach. Countdown uses jQuery countdown plugin → replace with React hook.
- Featured events grid: desktop uses absolute positioning with fixed pixel offsets for a masonry look. Consider a CSS grid or flex alternative for responsiveness.
- Regional events slider: horizontal scrollable, similar to hero but simpler. Overlay on hover with transition.
- Partners row: horizontal scrolling logos, flex wrap.
- All images → `picsum.photos/seed/gathering-<n>/<w>/<h>`.
- Font → Google Fonts "Open Sans" (sans-serif), loaded via `<link>` in index.html.
- Footer must link Component Dock per conventions.
- No ColorLib references in app code.
