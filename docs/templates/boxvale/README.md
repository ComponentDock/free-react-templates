# Boxvale — Design Notes & Implementation Todo

**Source:** ColorLib Boxus (https://colorlib.com/wp/template/boxus/)
**Preview:** https://preview.colorlib.com/theme/boxus/
**New name:** boxvale
**Category:** Creative Digital Agency (one-page)

## Section structure (implementation order)

1. **Navbar** — sticky, transparent-over-indigo, 8 links with smooth-scroll anchors. Mobile: hamburger toggle.
2. **Hero** — full-viewport indigo bg, centered white headline with pink span, PT Serif subtitle. Logo at top.
3. **Services** — "01 Services" heading, 4–8 service cards (icon + green title + description) in a responsive grid. Replace slider with CSS grid + optional carousel.
4. **Portfolio** — masonry grid, hover overlay (colored bg, title + category). Filter tabs optional.
5. **About** — "About" heading, team member cards in a horizontal scroll/carousel with arrows. Photo + name + role.
6. **News** — blog cards with title, date, excerpt. Text slider → use simple horizontal scroll or grid.
7. **Video** — full-width dark section, background image (placeholder), centered play button. No actual video needed — static poster with play icon overlay.
8. **Skills** — "06 Skills" heading, progress bars (Branding, Web Design, HTML/CSS, Graphic Design) with scroll-triggered animation. Green fill (#32DB8A).
9. **Contact** — "07 Contact" heading, form (name, email, subject, message, submit). Validate with react-hook-form + zod.
10. **Footer** — indigo bg, copyright, social icons, Component Dock link.

## Fidelity notes

- Section numbers ("01"–"07") are large decorative numerals before each section title. Use `font-family: Montserrat` with large font-size and light weight.
- The original uses a custom slider for Services — in React, replicate as a CSS grid or use a lightweight carousel.
- Portfolio hover overlay: the original uses a semi-transparent colored layer. Match with absolute positioning + opacity transition.
- The Video section is a fullscreen parallax area — use a static placeholder image as background with a play icon overlay (no video player needed).
- Skills bars animate from 0% to their target width on scroll — use Intersection Observer + CSS transition.
- Color palette: Primary #221C5A (deep indigo), Pink #EE87A4, Green #32DB8A, Yellow #FFBA42, Red-pink #E74C78.
- Fonts: Google Fonts via <link> — Roboto (body), Montserrat (headings), PT Serif (accent/hero subtitle).
- The original navbar is transparent over the hero and becomes solid on scroll — implement with scroll listener.
