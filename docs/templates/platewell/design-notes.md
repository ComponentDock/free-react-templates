# Platewell — Implementation Notes

**Source:** ColorLib Eatwell
**Preview:** https://preview.colorlib.com/theme/eatwell/
**New name:** platewell

## Section order (top to bottom)

1. **Navbar** — transparent, dark-themed, fixed on scroll → white background
2. **Hero / Cover** — full-viewport, background image, centered heading + CTA
3. **About** — split 5/1/6 column layout: text left, image right
4. **Offers** — carousel of food cards (image, price, name, description, CTA)
5. **Menu** — tabbed (Breakfast/Lunch/Dinner), 2-col grid of food items with circular thumbnails
6. **News** — 3-column grid of blog cards
7. **Gallery** — 3×2 image grid with lightbox
8. **Contact** — form (Name/Email/Message) + contact info sidebar
9. **Map placeholder** — static map area (400px height)
10. **Footer** — dark (#222) background, 4-col: about text, restaurant links, useful links ×2, social icons, copyright

## Component breakdown

| Component | File | Notes |
|---|---|---|
| Navbar | `Navbar.tsx` | Transparent → white on scroll. Use IntersectionObserver or scroll listener. Nav links: Home, About, Offers, Menu, News, Gallery, Contact |
| Hero | `Hero.tsx` | Full viewport height, background image via picsum, heading "Welcome To Platewell", outline-white CTA button. min-height: 700px on desktop |
| About | `About.tsx` | Two-column:5 (text) + 1 (spacer) + 6 (image). "Our Story" subtitle uppercase letter-spaced, "Welcome" display heading |
| OfferCarousel | `OfferCarousel.tsx` | Horizontal scroll carousel. Each card: image top, price in brand color, dish name, description, "Order Now!" CTA. Use CSS scroll-snap or simple overflow-x carousel |
| MenuTabs | `MenuTabs.tsx` | Pill-style tab buttons (uppercase, letter-spaced, bordered). Active = black border. Content: 2-col grid, each item has circular 100px thumbnail + text + price |
| News | `News.tsx` | 3-column grid of blog cards. Each: image, title, description, "Read More" CTA |
| Gallery | `Gallery.tsx` | 3×2 grid of images. Clickable thumbnails (lightbox). Use picsum with seed-based images |
| Contact | `Contact.tsx` | 7-col form (Name, Email, Message, Submit) + 1 spacer + 4-col info (image, address, phone, email) |
| Footer | `Footer.tsx` | Dark bg #222. 4-col: About Us text, "The Restaurant" links, two "Useful Links" columns. Social icons row. Copyright with Component Dock link |

## Design token → Tailwind mapping

```css
@theme {
  --color-brand: #FDA403;
  --color-brand-hover: #cb8402;
  --color-surface-dark: #222222;
  --color-surface-light: #fafafa;
  --color-body-text: #b8b8b8;
  --color-heading: #000000;
  --font-heading: "Playfair Display", serif;
  --font-body: "Raleway", sans-serif;
}
```

## Key implementation notes

- **No carousel library needed.** The owl-carousel can be replaced with CSS `overflow-x: auto; scroll-snap-type: x mandatory;` and snap children.
- **Tab switching:** simple React state for active tab index, no external library.
- **Gallery lightbox:** use a simple modal overlay on click (or a lightweight library like `react-medium-image-zoom` if needed).
- **Scroll-to-section:** anchor links + smooth scroll behavior.
- **Navbar scroll effect:** `useState` + `useEffect` with `window.scrollY` threshold (e.g. 100px) to toggle `.scrolled` class behavior.
- **Images:** use `https://picsum.photos/seed/platewell-<n>/<w>/<h>` for deterministic placeholders.
- **Icons:** use `lucide-react` for social icons (Twitter, Facebook, Instagram).
- **Google Fonts:** load Playfair Display (400, 700) and Raleway (400) via `<link>` in index.html.
