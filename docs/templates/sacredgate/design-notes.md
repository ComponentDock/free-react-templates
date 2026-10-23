# SacredGate — Implementation Notes

**Source:** ColorLib "Church" template
**Preview:** https://preview.colorlib.com/theme/church/
**Detail:** https://colorlib.com/wp/template/church/
**New name:** SacredGate (apps/sacredgate, @free-react-templates/sacredgate)

## Section implementation order

1. `TopBar.tsx` — black bg, countdown timer, red donations button
2. `Header.tsx` — sticky nav, Bilbo logo, nav links, search, hamburger
3. `HeroSlider.tsx` — carousel with dark overlay, headline, CTA buttons
4. `Intro.tsx` — two-column: text + image, "Welcome to Our Church"
5. `Services.tsx` — parallax bg, 5 circular icon service items
6. `Causes.tsx` — slider of cause cards with images
7. `Quote.tsx` — parallax bg, large quote text
8. `Sermon.tsx` — light gray bg, sermon cards with play buttons
9. `Newsletter.tsx` — red bg, email signup form
10. `News.tsx` — blog post cards with date badges
11. `Footer.tsx` — dark bg, 3-column layout, social icons, Component Dock link

## Design fidelity notes

- **Fonts:** Bilbo (serif) for logo/headings, Montserrat (sans-serif) for body.
  Both available on Google Fonts.
- **Brand red `#eb4141`:** buttons, newsletter bg, donation button, accents.
  Use in Tailwind `@theme` as primary.
- **Yellow accent `#ffd600`:** button underline effect, hover states.
- **Sharp corners on buttons:** radius 0, not rounded.
- **Parallax sections:** Services and Quote have parallax background images.
  Use `bg-fixed` or CSS `background-attachment: parallax` (may need
  polyfill or `bg-fixed` Tailwind utility).
- **Countdown timer:** Implement with `useState` + `useEffect` + `setInterval`.
  Target date can be static (14 days from now).
- **Owl Carousel replacement:** Use a lightweight carousel (or CSS-only
  scroll-snap for simplicity).
- **Section padding:** ~97–98px vertical throughout (use `py-24` or `py-25`).

## Key layout details

- Top bar is full-width black, content max-width with countdown + donations btn
- Header becomes sticky on scroll
- Hero is full-viewport height carousel
- Services: 5 items in a row (flexbox/grid), each with circular icon
- Causes: horizontal slider of cards
- Quote: large italic text, character name + source below
- Sermon: cards with image top, text bottom, play button overlay
- Newsletter: full-width red bar, centered form
- News: 3-column grid of blog cards
- Footer: dark bg, logo left, 3 link columns, copyright bottom

## Placeholder images

Use `https://picsum.photos/seed/sacredgate-<n>/<w>/<h>` for all images:
- Hero slides: `/seed/sacredgate-hero/1920/1080`
- Intro image: `/seed/sacredgate-intro/800/600`
- Services icons: lucide-react icons (Church, Heart, BookOpen, Users, HandHeart)
- Causes: `/seed/sacredgate-cause-1/400/300` through `-cause-3`
- Quote bg: `/seed/sacredgate-quote/1920/600`
- Sermon: `/seed/sacredgate-sermon-1/400/300` through `-sermon-3`
- News: `/seed/sacredgate-news-1/400/250` through `-news-3`
