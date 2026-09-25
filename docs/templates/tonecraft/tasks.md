# Tonecraft — Implementation Notes

**Source:** ColorLib "Musico" — https://preview.colorlib.com/theme/musico/
**New name:** Tonecraft
**Spec:** openspec/specs/template-tonecraft/spec.md

## Section order (1:1 fidelity)

1. **Header/Navbar** — transparent, sticky
   - Logo text "Tonecraft" (left)
   - Nav links: Home, About, Tracks, Blog, Contact
   - Social icons: Facebook, Twitter, Instagram (right)
   - Mobile hamburger menu
   - Becomes solid background on scroll

2. **Hero** — full-width, dark concert photo background, dark overlay
   - Heading: "MUSICIAN" (centered, large white text, Josefin Sans)
   - Background image: concert/musician photo (picsum seed tonecraft-hero)
   - Height: ~900px (viewport-height on mobile)
   - Dark overlay class: `.overlay2`

3. **Music Player Bar** — black (#000) background
   - Left: artist avatar (picsum seed tonecraft-avatar1)
   - Center: artist name "Frando Kally" + date "10 November, 2019"
   - HTML5 `<audio>` element with controls
   - Right: "Buy Album" button (boxed-btn: transparent, red border, hover → red fill)

4. **About** — white background, 2-column layout
   - Left: artist photo (picsum seed tonecraft-about)
   - Right: heading "Jack Kalib", bio paragraph, signature image

5. **Video Gallery** — light background (#f9f9ff), 4-column grid
   - 4 video thumbnail cards, each with:
     - Thumbnail image (picsum seed tonecraft-video-<n>)
     - Play button overlay (red circle, fa-play icon) on hover
     - Show name + video title text on hover
   - Dark overlay on hover: `rgba(0,0,0,0.2)`

6. **Latest Tracks** — black (#000) background
   - Section heading: "Latest Tracks" (white, centered, 50px)
   - 3 track rows (each in a centered container):
     - Artist avatar (picsum seed tonecraft-track-<n>)
     - Artist name + date
     - HTML5 `<audio>` element
     - "Buy Album" button (boxed-btn style)

7. **Image Gallery** — white background
   - Section heading: "Image Galleries" (centered, #001D38)
   - 5 images in masonry-style grid:
     - Row 1: col-5 + col-7
     - Row 2: col-4 + col-4 + col-4
   - Purple hover overlay: `rgba(97, 92, 253, 0.4)` with `+` icon
   - Images: picsum seed tonecraft-gallery-<n>

8. **Contact RSVP** — parallax background image
   - Heading: "Contact For RSVP" (white, centered, 50px)
   - CTA button: "Contact Me" (boxed-btn3: red fill, white text)
   - Parallax scroll effect on background
   - Generous padding (~184px vertical)

9. **Footer** — dark navy (#001D38) background
   - Top section (2-column):
     - Left: "Services" heading + subscribe form (email input + button) + sub text
     - Right: "Contact Me" heading + contact list (email, phone, address)
       + social media icon links (colored circles)
   - Copyright bar: copyright text + nav links (home, about, tracks, blog, contact)
   - Footer border divider line
   - "Made with ❤ by Component Dock" link (replaces Colorlib attribution)

## Design tokens (from CSS)

| Token              | Value                                    |
| ------------------ | ---------------------------------------- |
| Font primary       | "Josefin Sans", sans-serif               |
| Font secondary     | "Muli", sans-serif                       |
| Brand red          | #ED1B1B                                  |
| Dark navy          | #001D38                                  |
| Black              | #000                                     |
| Light bg           | #f9f9ff                                  |
| White              | #fff                                     |
| Gallery hover      | rgba(97, 92, 253, 0.4) — purple #615CFD |
| Heading color      | #001D38                                  |
| Body text          | #999999 / #888888                        |
| Button (boxed-btn) | transparent, border, hover → #ED1B1B     |
| Button (boxed-btn3)| #ED1B1B fill, hover → transparent        |
| Social Facebook    | #3B5797                                  |
| Social Google+     | #DB4337                                  |
| Social Twitter     | #00ACED                                  |
| Social YouTube     | #BB0000                                  |
| Social Instagram   | #AC907A                                  |
| Section title size | 50px, weight 400                         |
| Hero height        | 900px                                    |

## Fidelity notes

- The original uses Bootstrap grid — recreate with Tailwind flex/grid.
- Original has custom audioplayer.js — use native HTML5 `<audio>` controls.
- Original has isotope.js for masonry gallery — use CSS grid with
  `grid-template-rows: masonry` or manual row spans.
- Original has magnific-popup for lightbox — use a simple modal or skip
  (not essential for template fidelity).
- Parallax on Contact RSVP: use `bg-fixed` Tailwind class or
  `background-attachment: fixed`.
- Sticky header: use `position: sticky` + `backdrop-filter` or
  background transition on scroll.
- Social icons: use lucide-react (Facebook, Twitter, Instagram) instead
  of Font Awesome.
- The `.overlay2` class applies a dark gradient overlay on the hero —
  recreate with a pseudo-element or Tailwind `before:` utility.
- Placeholder images use deterministic picsum seeds for consistency.
- No ColorLib assets copied — all images are placeholders.
