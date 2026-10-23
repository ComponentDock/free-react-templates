# Shuttercraft — Implementation Notes

Source: ColorLib Cassi (https://preview.colorlib.com/theme/cassi/)
New name: shuttercraft

## Section order (homepage)

1. **Header** — Transparent, logo text "SHUTTERCRAFT" left, hamburger icon right
2. **Hero Slider** — Full-viewport owl-carousel, two-column split (text left / image right), 3 slides
3. **Footer** — Dark bar, social links (FB, TW, IG) left, copyright right

## Section-by-section fidelity notes

### Header
- Transparent overlay on hero, no solid bg
- Logo: uppercase text (original uses image, recreate as styled text)
- Hamburger: 3-line icon, white, positioned top-right
- On scroll: could add a subtle dark bg transition (optional enhancement)

### Hero
- Full-viewport height (100vh)
- Two-column split: left ~45% dark bg with text, right ~55% image
- Left column content:
  - Category badge: brand blue (#242deb) bg, white uppercase text, small rounded corners
  - Heading: "Photo Studio" — large, white, display/serif font
  - Description: light gray text, 2-3 lines
  - CTA button: "See More →" — white uppercase text, arrow icon in brand blue
- Right column: full-bleed image (no padding/margin)
- Slider: 3 slides, each with different background image, same text content
- Navigation: owl-dots or arrows at bottom-right of hero

### Footer
- Single row, dark bg (#151515 or similar)
- Left: social links (Facebook, Twitter, Instagram) as text links, white
- Right: copyright text, gray (#969696), includes heart icon
- Footer MUST link componentdock.com

### Offcanvas menu
- Triggered by hamburger icon
- Slides in from right, dark bg (#151515)
- Contains: logo, close button, nav links (Home, Gallery, Blog, About, Contact), social links, copyright
- Nav links: white text, Roboto font, hover = brand blue

## Design token mapping to Tailwind

| Original CSS var/class   | Tailwind equivalent                        |
| ------------------------ | ------------------------------------------ |
| `background: #151515`    | `bg-[#151515]` or theme token             |
| `background: #242deb`    | `bg-[#242deb]` or `bg-brand-primary`      |
| `color: #fff`            | `text-white`                               |
| `color: #bfbfbf`         | `text-gray-300` or custom                  |
| `color: #969696`         | `text-gray-500` or custom                  |
| `font-family: "Poppins"` | Google Fonts link in index.html            |
| `border-radius: 2px`     | `rounded-sm` or `rounded`                  |
| `text-transform: uppercase` | `uppercase`                             |
| `letter-spacing: 1px`    | `tracking-wider`                           |

## Image strategy

- Hero images: use `https://picsum.photos/seed/shuttercraft-<n>/1920/1080` for deterministic placeholders
- Logo: text-based "SHUTTERCRAFT" in uppercase, bold
- Gallery items (if inner pages): `https://picsum.photos/seed/shuttercraft-gallery-<n>/600/400`

## Components to build

1. `Navbar.tsx` — transparent header with logo + hamburger
2. `HeroSlider.tsx` — full-viewport carousel with split layout
3. `HeroSlide.tsx` — individual slide (badge + heading + text + CTA + image)
4. `Footer.tsx` — social links + copyright
5. `OffcanvasMenu.tsx` — slide-in menu with nav + socials
6. `App.tsx` — composes Navbar + HeroSlider + Footer
