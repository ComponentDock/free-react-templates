# Devport — Implementation Todo

Source: ColorLib Steve (https://preview.colorlib.com/theme/steve/)
New name: devport
Spec: openspec/specs/template-devport/spec.md

## Section order (1:1 fidelity)

1. Navbar — logo left, 5 nav items (Home, About, Portfolio dropdown, Pages dropdown, Blog dropdown, Contact), hamburger mobile
2. Hero Carousel — full-screen owl-carousel, 3 bg image slides, centered name heading + subtitle + red "Hire Me" button
3. Portfolio — "Latest Works" heading, 4 filter tabs, masonry 8-item grid (mixed col-6/col-3), image + overlay + title + "Client Project"
4. About — gray bg (#f9f9ff), 2-col: illustration left, heading + text + "More Info" button right
5. Testimonials — left 7-col carousel: quote icon + name + 5 stars + quote; right 4-col: 5 brand logos in groups
6. Newsletter — bg image with white text, heading + description, email input + "Subscribe" button inline
7. Footer — centered logo + "Follow Me" + 4 social icons, copyright + Component Dock link

## Design notes

- **Fonts:** Poppins (main title headings), Roboto (body/nav/buttons). Load via Google Fonts.
- **Primary color:** `#e45447` (red) — buttons, hover states. NOT a gradient — solid red.
- **Button style:** rectangular, no border-radius (sharp corners), red bg, white text. Hover: transparent bg, red border, dark text.
- **Hero:** full-screen carousel with 3 different background images. Text is centered on each slide. Same name/subtitle/CTA on all slides.
- **Portfolio:** masonry-style grid with mixed column widths (some items 2-col, some 1-col). Filter tabs switch visible items. Items show image + overlay on hover + title + "Client Project" label.
- **About:** light gray background (#f9f9ff). Illustration on left, heading + paragraphs + CTA on right.
- **Testimonials:** owl-carousel on left with quote icon (img/quote.png), name, 5 star icons, quote paragraph. Brand logos on right in 3 groups (2 top, 1 mid, 2 bottom).
- **Newsletter:** background image with white text overlay. Email input + "Subscribe" button inline (not side-by-side, but input group).
- **Social icons:** Facebook, Twitter, Dribbble, Behance via lucide-react equivalents.
- **No parallax** — this template uses simple bg images, no parallax scrolling.

## Component breakdown

| Component | File | Notes |
|-----------|------|-------|
| Navbar | Navbar.tsx | Fixed, logo, links with dropdowns, hamburger |
| Hero | Hero.tsx | Owl-carousel replacement: state-based slide rotation, 3 bg images, centered CTA |
| Portfolio | Portfolio.tsx | Filter tabs, masonry grid, hover overlay |
| About | About.tsx | Gray bg, 2-col, illustration, text, CTA |
| Testimonials | Testimonials.tsx | Carousel + star ratings + brand logos sidebar |
| Newsletter | Newsletter.tsx | Bg image, heading, email form |
| Footer | Footer.tsx | Logo, social icons, copyright, Component Dock |

## Shared UI reuse

- `Button` / `ButtonLink` from packages/ui for CTAs (Hire Me, More Info, Subscribe)
- `cn()` for class composition
- `Card` if applicable for portfolio items
