# Rostrum — Implementation Tasks & Design Notes

**Source:** ColorLib "Confe" (https://colorlib.com/wp/template/confe/)
**Preview:** https://preview.colorlib.com/theme/confe/
**New name:** Rostrum
**Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Section order (matches original 1:1)

1. **Navbar** — sticky white bar, "Rostrum." logo left, nav links right
   (Home, Speakers, Venue, Sponsors, About, Contact). Mobile hamburger menu.
2. **Hero** — full-viewport parallax background image with `rgba(0,0,0,0.6)`
   overlay. Centered white uppercase heading, date/location subtext, red-orange
   pill CTA button + "Learn More" text link.
3. **About / Countdown** — white section, "About The Conference" heading,
   countdown timer (days/hours/min/sec), two paragraphs of description,
   "Get Your Ticket Now" button.
4. **Image Split 1** — two side-by-side full-bleed images (50/50), no text.
5. **Speakers** — "Speakers" heading, 3×2 grid of speaker cards. Each card:
   photo thumbnail (slight shadow), name (first name in span), role/company.
6. **Image Split 2** — two side-by-side full-bleed images (50/50), no text.
7. **Why Us** — "Why Us?" heading, 3 columns with flaticon icons (paper-plane,
   speaker, chat), uppercase h5 headings, short descriptions.
8. **Sponsors** — "Sponsors" heading, 3×2 grid of sponsor logos, then a
   bordered "Your Company Here" card with "Become a Sponsor" button.
9. **Conference Events** — "Conference Events" heading, carousel of event cards
   (image + play overlay, title, date/author meta, description).
10. **Quick Contact** — black (`#000`) full-width bar, 3 centered columns:
    Where (map icon + "Vancouver"), When (clock icon + "April 17-21, 2019"),
    Email (comment icon + "info@yoursite.com").
11. **Footer** — hero image background with `rgba(0,0,0,0.8)` overlay. Three
    columns: About text + "Read More" button, Quick Menu links (two sub-cols),
    Social Icons. Copyright line with heart icon + Component Dock link.

## Component structure

```
src/
  App.tsx              — composes all sections in order
  components/
    Navbar.tsx         — sticky nav, logo, links, mobile toggle
    Hero.tsx           — parallax bg, overlay, heading, CTA
    AboutCountdown.tsx — countdown timer + description + CTA
    ImageSplit.tsx     — reusable dual-image row (reused twice)
    Speakers.tsx       — 3×2 grid of SpeakerCard
    SpeakerCard.tsx    — photo, name, role
    WhyUs.tsx          — 3 icon feature columns
    FeatureCard.tsx    — icon + heading + description (reused 3×)
    Sponsors.tsx       — logo grid + CTA card
    EventsCarousel.tsx — carousel of event cards
    EventCard.tsx      — image, title, meta, description
    QuickContact.tsx   — 3-column info bar
    Footer.tsx         — image bg, about, menu, social, copyright
  index.css            — Tailwind entry + @theme tokens
```

## Design notes

- **Brand color `#f23a2e`** — use as `--color-primary` in @theme, apply via
  `text-primary` / `bg-primary` Tailwind classes.
- **Font: Work Sans** — load via Google Fonts `<link>` in index.html.
  Weights: 300, 400, 700.
- **Amatic SC** — decorative accent font (available via Google Fonts).
  Use sparingly if at all; the original uses it minimally.
- **Button shape: pill** — `rounded-full` or `radius: 30px`.
  Hero CTA: `bg-primary text-white px-6 py-3 uppercase tracking-wide`.
- **Image shadows** — `shadow-md` or explicit `0 2px 10px -2px rgba(0,0,0,0.25)`.
- **Parallax hero** — use CSS `background-attachment: fixed` or a lightweight
  JS scroll handler. The overlay is a pseudo-element with `rgba(0,0,0,0.6)`.
- **Countdown** — implement with `useEffect` + `setInterval`, computing
  remaining time from a configurable target date.
- **Carousel** — use a lightweight carousel solution (e.g. Embla, Swiper,
  or a simple CSS scroll-snap). Avoid heavy jQuery plugins.
- **Placeholder images** — use `https://picsum.photos/seed/rostrum-<n>/<w>/<h>`
  with deterministic seeds per section.
- **Footer** — background image with `bg-fixed` + dark overlay pseudo-element.
  Component Dock link replaces the original Colorlib attribution.

## Fidelity checklist

- [ ] Match section order exactly: navbar → hero → about → split → speakers → split → why us → sponsors → events → contact → footer
- [ ] Match design tokens: `#f23a2e` brand, Work Sans font, pill buttons
- [ ] Match hero: parallax bg, dark overlay, white uppercase text, pill CTA
- [ ] Match countdown: labeled blocks for days/hours/min/sec
- [ ] Match speakers: 3×2 grid, photo thumbnails with shadow
- [ ] Match sponsors: 6 logos in grid + bordered CTA card
- [ ] Match contact bar: black bg, 3 centered columns with icons
- [ ] Match footer: image bg + dark overlay, 3-column layout
- [ ] No ColorLib references in app code
- [ ] Footer links to Component Dock
- [ ] All images use picsum.photos placeholders
