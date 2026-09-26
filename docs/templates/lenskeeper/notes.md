# Lenskeeper — Prep Notes

Source: ColorLib Photography
Preview: https://preview.colorlib.com/theme/photography/
Screenshot: AVIF format, analyzed via live CSS/HTML DOM extraction

## Section order (must match 1:1)

1. **Navbar** — transparent overlay, logo left, nav links right (Home, About Me, Gallery, Blog, Contact), smooth scroll anchors
2. **Hero Carousel** — full-viewport-height, 3 slides with background images, centered captions with h2 + subtitle, auto-play, prev/next arrows, indicator dots
3. **About** — 2-column split (image left, text right), light background (#f9f9ff), heading + paragraph + "Hire me now" primary pill button
4. **Gallery** — dark background (#222222), "My Recent Photos" heading, 4-column CSS columns masonry grid of clickable photos, white text
5. **Call-to-Action** — gradient background (#7a77ff → #8cfe86), "Not sure about my charge?" heading, "Donate Now" white outline button, 9/3 split
6. **Blog** — 3-column card grid, centered heading + subtitle, each card: image + h4 title + paragraph + author row (avatar, name, date, hearts, comments)
7. **Contact** — split layout (image left, form right), form with name/email/message inputs + "confirm booking" button, no visible input borders
8. **Footer** — dark (#222222), copyright with dynamic year, social icons (Facebook, Twitter, Dribbble, Behance), Component Dock attribution

## Design notes

- **Brand gradient:** linear-gradient(0deg, #7a77ff, #8cfe86) — used on primary buttons AND call-to-area background
- **Primary button:** pill shape (border-radius 25px), gradient bg, white text, arrow icon span
- **Font:** Poppins (Google Fonts), sans-serif
- **Gallery masonry:** CSS columns (4-col), not flexbox grid — each image is full-width within its column
- **Contact form:** transparent inputs with #656463 border, no visible background
- **Hero carousel:** Bootstrap-style carousel pattern, full-viewport height with background-image on each slide
- **Section backgrounds alternate:** dark (gallery, footer) / light (#f9f9ff for about) / white (blog, contact) / gradient (CTA)

## Component breakdown

| Component | Source section | Notes |
|-----------|---------------|-------|
| Navbar | header.default-header | Overlay, transparent bg, logo + nav links |
| HeroCarousel | section.banner-area | Full-height carousel, 3 slides, auto-play |
| About | section.About-area | 2-col: image left, text+button right |
| Gallery | section.gallery-area | Dark bg, CSS columns grid, 10+ photos |
| CallToAction | section.callto-area | Gradient bg, heading + button split |
| Blog | section.blog-area | 3-col card grid, author metadata |
| Contact | section.contact-area | Split: image left, form right |
| Footer | footer.footer-area | Dark bg, copyright + social icons |

## Placeholder image strategy

- Hero slides: `https://picsum.photos/seed/lenskeeper-slide-1/1920/1080` etc.
- About image: `https://picsum.photos/seed/lenskeeper-about/600/800`
- Gallery photos: `https://picsum.photos/seed/lenskeeper-gal-1/400/300` through gal-10
- Blog images: `https://picsum.photos/seed/lenskeeper-blog-1/400/250` etc.
- Author avatars: `https://picsum.photos/seed/lenskeeper-author/40/40`
- Contact image: `https://picsum.photos/seed/lenskeeper-contact/600/800`

## Fidelity risks

- Gallery uses CSS columns (not flexbox/grid) — must preserve masonry-like behavior
- Hero carousel requires auto-play + manual navigation — consider a lightweight carousel library or custom React implementation
- Contact form inputs have no visible border background (transparent + thin border)
- Call-to-action section gradient is the same as the primary button gradient
- Footer social icons use Font Awesome icons — switch to lucide-react equivalents
