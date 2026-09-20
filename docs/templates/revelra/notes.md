# Revelra — Design & Implementation Notes

Source: ColorLib Evento (https://preview.colorlib.com/theme/evento/)

## Section Order (top to bottom)

1. **Navbar** — Fixed top, transparent on hero, solid dark on scroll. Links: Home, Speakers, Events, News, Contact. Hamburger on mobile.
2. **Hero Slider** — Full-width owl-carousel with 3 slides. Each slide: background image, centered/left heading, description, red pill CTA button. Dot navigation at bottom.
3. **Event Info** — 4 icon boxes in a row (Date, Location, Speaker, Price). Icons: ionicons outline style. White background.
4. **Countdown** — Parallax background image with dark overlay. "Counter until the big event" heading. Countdown timer (days/hours/min/sec).
5. **About** — White background. "About the event" title. Centered paragraph text.
6. **Speakers** — White background. "Our speakers" title. Grid of 8 speaker cards. Each: photo, name, social links (hover reveals). Cards on dark background.
7. **Pricing** — White background. "Pricing table" title. 3 cards side-by-side. Early Bird is "active" (highlighted). Each: price, feature list, CTA button.
8. **Events Calendar** — White background. Table with calendar icon header. Rows: event name, date/time, location.
9. **Partners** — Light gray bg (#f0f2f6). "Our partners" title. Owl-carousel of brand logos.
10. **Get Tickets CTA** — Parallax bg, dark overlay. "Get your tickets" heading (white). Paragraph + red pill CTA button.
11. **Footer** — Dark bg (#18181c). 3 columns: About text + social icons, Instagram grid (6 thumbnails), Newsletter (email input + red SUBSCRIBE button).
12. **Copyright** — Darker strip. Copyright text + nav links (Home, Speakers, Events, News, Contact). Must link Component Dock.

## Design Token Mapping (Tailwind @theme)

```
--color-brand: #f50136;        /* primary red */
--color-heading: #18181c;      /* dark headings */
--color-body: #838383;         /* gray body text */
--color-surface-dark: #18181c; /* dark sections */
--color-surface-darker: #0b031b; /* deepest dark */
--color-surface-accent: #1f1039; /* purple accent */
--color-surface-light: #f0f2f6; /* light gray sections */
--font-primary: 'Montserrat', sans-serif;
```

## Fidelity Notes

- The original uses Bootstrap grid + Owl Carousel + Ionicons. Replace with Tailwind grid + CSS transitions/custom carousel + Lucide React icons.
- Countdown is JS-driven (days to target date). Implement with React state + setInterval.
- Speaker cards have hover effect revealing social icons. Use group-hover in Tailwind.
- Pricing "active" card has brand-colored border/bg treatment.
- Parallax backgrounds use `background-attachment: fixed` (or framer-motion for smoother).
- Partners carousel: implement as auto-scrolling logo strip or CSS animation.
- Footer newsletter: controlled form with email input + submit button.

## Component Map

| Section | Component | Notes |
|---|---|---|
| Navbar | `Navbar.tsx` | Fixed, scroll-aware bg change, mobile hamburger |
| Hero | `HeroSlider.tsx` | 3 slides, auto-advance, dot nav |
| Event Info | `EventInfo.tsx` | 4-column icon boxes |
| Countdown | `Countdown.tsx` | Parallax bg, countdown timer |
| About | `About.tsx` | Title + paragraph |
| Speakers | `Speakers.tsx` | Grid of SpeakerCard sub-components |
| Pricing | `Pricing.tsx` | 3 PricingCard sub-components, one active |
| Events | `EventsCalendar.tsx` | Table of event rows |
| Partners | `Partners.tsx` | Logo carousel |
| CTA | `TicketCta.tsx` | Parallax bg, heading, button |
| Footer | `Footer.tsx` | 3-column + copyright strip |

## Placeholder Images

- Hero slides: `https://picsum.photos/seed/revelra-hero-1/1920/1080` (etc.)
- Speaker photos: `https://picsum.photos/seed/revelra-speaker-1/400/400` (etc.)
- Instagram grid: `https://picsum.photos/seed/revelra-insta-1/200/200` (etc.)
- Partner logos: use text-based or simple SVG placeholders
