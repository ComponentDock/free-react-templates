# Stillframe — Design Notes & Implementation Outline

Source: ColorLib Bato — https://colorlib.com/wp/template/bato/
Preview: https://preview.colorlib.com/theme/bato/
New name: stillframe

## Section order (top to bottom)

1. **Header** — fixed top bar with brand name "Stillframe" (Playfair Display)
   and hamburger toggle icon (3 bars). Transparent overlay on hero.

2. **Hero Carousel** — full viewport height, owl-carousel style with 3 slides.
   Each slide: 60% left (full-height background image) + 40% right (text panel).
   Text panel: tag label (uppercase, 13px, letter-spacing 7px), heading
   (Playfair Display, 58px, bold), description paragraph (Karla, gray),
   CTA button "View Galleries" (uppercase, 13px, letter-spacing 7px,
   border 1px solid black, no border-radius).
   Large ghost counter (01/03 etc) at bottom — 220px, #f2f2f2.
   Prev/next nav buttons at bottom-center — square, white bg, yellow hover.

3. **Footer** — minimal; contains "Made with Component Dock" link
   (https://www.componentdock.com/). No external attribution.

## Design tokens → Tailwind mapping

| Original CSS            | Tailwind usage                              |
| ----------------------- | ------------------------------------------- |
| font-family: Karla      | `font-sans` (via @theme custom)             |
| font-family: Playfair   | `font-serif` (via @theme custom)            |
| #F9CE00 accent          | `bg-accent`, `text-accent`, `border-accent` |
| #ffffff background      | `bg-white`                                  |
| gray body text          | `text-gray-500`                             |
| rgba(0,0,0,0.8) headings| `text-black/80`                             |
| 0px border-radius       | `rounded-none`                              |
| letter-spacing 7px      | `tracking-[7px]`                            |

## Implementation notes

- Copy simplest existing app as scaffold (e.g. apps/shutterly or similar)
- Rename package to @free-react-templates/stillframe
- Add Google Fonts link for Karla + Playfair Display in index.html
- Hero carousel: build a custom React carousel (no owl-carousel dependency)
  with prev/next buttons and auto-advance. Each slide is a flex container
  with bg-image left + text panel right.
- Side navigation: React state-driven slide-in panel from right.
  Use CSS transform translateX for animation.
- Placeholder images: `https://picsum.photos/seed/stillframe-<n>/1200/800`
  for hero slides, `https://picsum.photos/seed/stillframe-thumb-<n>/200/200`
  for nav gallery.
- No new npm dependencies needed.
- All components: Navbar, SideNav, HeroCarousel, HeroSlide, Footer.
- Tests: render each component, verify content, test carousel navigation,
  test side nav toggle, verify responsive classes.

## Section-by-section fidelity notes

### Header
- Brand text "Stillframe" — Playfair Display, serif
- Hamburger icon: 3 horizontal lines, click toggles side nav
- Position: fixed top, z-index above hero
- Toggle button: transparent bg, small padding

### Hero Carousel
- Full viewport height (100vh)
- Each slide: flex row, 60% image + 40% text panel
- Image: cover, full height
- Text panel: vertically centered via flex
- Tag: uppercase, 13px, letter-spacing 7px, block display, margin-bottom 15px
- Heading: 58px mobile 24px, font-weight 700, letter-spacing 2px
- Description: Karla font, gray color, margin-bottom 1.5em
- CTA: uppercase, 13px, letter-spacing 7px, 1px solid black border, padding 7px
- Desc line: 1px black horizontal rule after description (CSS ::after)
- Counter: absolute bottom, 220px font, #f2f2f2 color
- Nav arrows: square (0 radius), white bg, yellow (#F9CE00) on hover

### Side Navigation
- Slides in from right, 360px wide (300px mobile)
- White background
- Search input at top with button
- Page links: uppercase, 14px (16px mobile), Karla font
- Active link: yellow (#F9CE00) color
- 2x2 gallery grid at bottom with hover overlay (search icon)
- Page scales to 110% with dark overlay when nav is open

### Footer
- Minimal: single line "Made with Component Dock" linking to componentdock.com
- White background, centered text
