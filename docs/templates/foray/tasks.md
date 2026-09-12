# Foray — Prep Notes & Task Outline

## Source
- **ColorLib template:** Fplus (slug: `fplus`)
- **Preview URL:** https://preview.colorlib.com/theme/fplus/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/fplus-free-template.jpg
- **Category:** Creative Agency / Portfolio

## Section Order (from source)

| # | Section             | Source class / id            | Notes                                            |
|---|---------------------|------------------------------|--------------------------------------------------|
| 1 | Navbar              | `.header_area` + `.fplus-menu-area` | Logo left, hamburger icon, full-screen overlay with vertical nav + social icons |
| 2 | Hero                | `.fplus-hero-area #home`     | Full-viewport bg image, right-aligned text, "View Portfolio" CTA |
| 3 | About Us            | `.fplus-about-us-area #about` | Heading + 2-col image/text + 3 feature cards (icon + title + text) |
| 4 | Projects / Portfolio| `.fplus-projects-area #projects` | Filter bar (All Fields / branding / editorial / graphic) + 3-col masonry grid + hover overlay + Load More |
| 5 | Methods             | `.fplus-method-area #method`  | White inner container, "How We Work" heading + description + video thumbnail with play button |
| 6 | Our Clients         | `.fplus-clients-area #clients` | Horizontal scrolling client logo strip |
| 7 | Recent News / Blog  | `.fplus-blog-area #news`     | 3-col blog card grid (thumbnail + title + author + date) |
| 8 | Contact             | `.fplus-contact-area #contact` | Centered heading + form (Name, Email, Subject, Tel, Message) + Send Message button + Google Maps placeholder |
| 9 | Footer              | `.fplus-footer-area`         | Dark bg, 3-col (About/links, Nav, Subscribe + social), copyright |

## Design Token Notes

- **Font:** Montserrat — import via Google Fonts `<link>` in index.html. Body: 400, Headings: 600, weight range 300-700.
- **Brand accent:** `#ff6c00` (vivid orange) — CTA buttons, active filter highlight, dropdown active state, scroll-to-top bg, preloader border accent.
- **Heading color:** `#000000` — all headings.
- **Body text:** `#606060`, 18px, line-height 2.
- **Section bg:** `#f9f9f9` (`.bg-gray`) — used on all sections except hero and methods white container.
- **Section heading:** uppercase, letter-spacing 4px, centered, 50px × 2px black underline div.
- **Button border-radius:** Mostly minimal (2px for scroll-to-top, 9px for dropdown).
- **Hero:** Full-viewport height, background image, dark overlay for text readability, white text.
- **Navbar:** White semi-transparent bg (rgba(255,255,255,0.95)), becomes full-screen overlay on hamburger toggle.

## Implementation Tasks

1. **Scaffold app** — copy simplest existing app, rename to `foray`, set package name `@free-react-templates/foray`, create CNAME + homepage.
2. **Add Google Fonts** — Montserrat link in `index.html`.
3. **Create theme tokens** — `src/index.css` with `@theme` block: brand `#ff6c00`, bg `#f9f9f9`, heading `#000`, body text `#606060`.
4. **Navbar component** — Logo + hamburger toggle + full-screen overlay menu with nav links + social icons.
5. **Hero component** — Background image, right-aligned heading + CTA button with plus icon.
6. **AboutUs component** — Section heading, 2-col layout (image + text), 3 feature cards with lucide-react icons.
7. **Projects component** — Filter bar, 3-col grid with hover overlay, Load More button.
8. **Methods component** — White container with heading + description + video thumbnail with play button overlay.
9. **Clients component** — Horizontal scrolling logo placeholder strip.
10. **Blog component** — 3-col blog cards (thumbnail + title + author + date).
11. **Contact component** — Centered heading + 5-field form + send button + map placeholder.
12. **Footer component** — Dark bg, 3-col layout, subscribe form, social icons, copyright with Component Dock link.
13. **App.tsx** — Compose all sections in order.
14. **Tests** — TDD: write tests for each component, then implement.
15. **Vite config** — Register `injectUiSource()` per conventions.
16. **Verify** — Run `scripts/verify-app.sh foray`.

## Fidelity Notes

- Match section structure and order 1:1 from the source.
- Use lucide-react icons for feature cards (wallet → DollarSign, credit-card → CreditCard, user → Users).
- Portfolio grid: 3-col, 6 items with hover overlay (filterable by category).
- Contact form: no backend, handle submit gracefully (e.g. console.log or toast).
- Google Maps: static placeholder div, no API key.
- Footer MUST link `https://www.componentdock.com/` — replace ColorLib copyright.
- No ColorLib references in app code — provenance in spec only.
