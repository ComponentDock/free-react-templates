# Feastly — Design Notes

## Source

- ColorLib: Buri (restaurant template)
- Preview: https://preview.colorlib.com/theme/buri/
- Stack: Bootstrap-based HTML, converting to React 19 + Vite + Tailwind 4

## Section Order & Structure

1. **Navbar** — Bootstrap transparent navbar. Logo left, 6 nav links. Desktop: inline links. Mobile: hamburger toggle dropdown. Sticky on scroll.
2. **Banner/Hero** — Full-width section with background image + dark overlay. Centered text: subtitle (h5), heading (h1), CTA button. Left-aligned in 7-col width within container.
3. **About** — Two-column (7:5). Left: subheading + heading + 2 paragraphs + "Learn More" ghost button. Right: restaurant image. White background.
4. **Food Menu** — Section title centered. Two-column grid of 6 food items. Each: thumbnail (60px), name (h3), description (p), price (h5). White background.
5. **Intro Video** — Full-width dark background image. Centered play button icon (Themify icon `ti-control-play`). Popup YouTube video on click. No text content.
6. **Testimonials** — Cream background (`#f7efe7`). Section title centered. Owl carousel of 3 review cards. Each: quote text, client avatar, client name, 5 filled stars.
7. **Contact** — Left half only: 3 info blocks (Address, Hours, Reservation). Each has a gold (h5) label + description (p). No form.
8. **Footer** — Dark background (`#1c1a18`). 3 columns: (1) logo + phone + email + social (FB, IG), (2) quick links list, (3) newsletter email form. Bottom: copyright + Component Dock link.

## Design Token Mapping to Tailwind

| Original CSS          | Tailwind class/custom                  |
| --------------------- | -------------------------------------- |
| `#d6ad86` (gold)      | `--color-primary: #d6ad86` in `@theme` |
| `#1c1a18` (dark)      | `--color-dark-bg: #1c1a18`             |
| `#f7efe7` (cream)     | `--color-cream: #f7efe7`               |
| `#ffb830` (amber)     | `--color-amber: #ffb830`               |
| `#555555` (body text) | `text-gray-600` or custom              |
| `#2c3033` (nav text)  | `text-gray-800`                        |
| `#a9a9a9` (footer)    | `text-gray-400`                        |
| Playfair Display      | `font-playfair` (Google Font)          |
| Montserrat            | `font-montserrat` (Google Font)        |

## Fidelity Notes

- Hero background: use `https://picsum.photos/seed/feastly-hero/1920/1080` for placeholder
- About image: use `https://picsum.photos/seed/feastly-about/600/400`
- Food images: use `https://picsum.photos/seed/feastly-food-{n}/80/80` (6 items)
- Client avatars: use `https://picsum.photos/seed/feastly-client-{n}/80/80`
- Video background: use `https://picsum.photos/seed/feastly-video/1920/800`
- Play button icon: use `lucide-react` Play icon
- Star ratings: use `lucide-react` Star icon (filled)
- Social icons: use `lucide-react` Facebook + Instagram icons
- Newsletter form: controlled React form with email input + submit button
- Section numbering is NOT used in this template (unlike Boxus)
- The banner heading is large (65px) — use `text-5xl` or `text-6xl`
- Buttons use gold background with white text (primary) and gold border ghost variant (secondary)
- The testimonial carousel can use a simple React state-based carousel (no dependency needed)

## Component Breakdown

```
src/
  App.tsx              — composes all sections
  components/
    Navbar.tsx         — responsive Bootstrap-style navbar
    Banner.tsx         — hero with background image
    About.tsx          — two-column about section
    FoodMenu.tsx       — 2x3 grid of menu items
    IntroVideo.tsx     — video play button section
    Testimonials.tsx   — carousel review cards
    Contact.tsx        — contact info display
    Footer.tsx         — 3-column footer with newsletter
```

## Risks / Notes

- Original uses Bootstrap grid — convert to Tailwind grid/flex equivalents
- Owl carousel for testimonials → implement as simple React carousel (no heavy dep)
- Video popup uses Magnific Popup → convert to simple modal/lightbox or YouTube embed
- Nice-select, gijgo, animate.css dependencies → remove; use Tailwind animations
- Original uses Themify Icons for play button → use lucide-react
- Original uses Font Awesome for stars and social → use lucide-react
