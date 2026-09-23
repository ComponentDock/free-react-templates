# Bookcraft — Implementation Notes

## Source mapping

- **ColorLib source:** Booke — https://colorlib.com/wp/template/booke/
- **Preview:** https://preview.colorlib.com/theme/booke/
- **New name:** bookcraft

## Section order (top → bottom)

1. **Navbar** — Sticky, transparent over hero → white on scroll. Logo "Bookcraft" + nav links (Home, Features, About Author, Testimonials, Contact). Mobile: hamburger menu.
2. **Hero** — Dark background with book image, white text. Headline "Meet Your Next Book", subtitle paragraph, CTA button "Buy This Book" (white pill). Full-width.
3. **Features** — `bg-light` (#f8f9fa). Heading "Features Of This Book" (Oswald, uppercase). 6 feature cards in 3×2 grid. Each card: icon (lucide-react), title, short description. White card bg, hover shadow.
4. **Screenshot Carousel** — Heading "Book Screenshot" (Oswald). Prev/Next text links. Image carousel (embla or custom) showing book screenshots.
5. **Author** — Split 50/50 layout: left = background image (cover), right = text. Author name "Jane", bio paragraphs, signature image placeholder, title "Book Author & Publisher". Stacks vertically on mobile.
6. **Testimonials** — `bg-light`. Heading "Testimonial From Readers". 3-column grid of white cards. Each: blockquote, avatar (rounded-full), name, role. Stacks on mobile.
7. **Newsletter / Subscribe** — `bg-primary` (brand blue). Heading "Subscribe For The New Updates". Inline email input + "Send Email" button (white pill).
8. **Footer** — Dark (#333333). 3 columns:
   - About Us (text)
   - Navigation (link list)
   - Quick Contact form (name, email, textarea, "Send Message" button)
   - Social icons row (Facebook, Twitter, Instagram, LinkedIn — use lucide-react)
   - Copyright line with Component Dock link

## Design fidelity notes

- **Fonts:** Load Roboto + Oswald via Google Fonts `<link>` in index.html.
- **Brand blue:** `#1C63FB` — use as Tailwind custom color in `@theme` block. Apply via `bg-brand`, `text-brand`, `border-brand`.
- **Buttons:** All pill-shaped (`rounded-full`), 2px border. Primary: blue bg + white text; hover: transparent + blue border/text. White variant: white bg; hover: transparent + white border/text.
- **Section padding:** 4.5rem mobile, 7em desktop. Use responsive Tailwind `py-16 lg:py-28`.
- **Service/feature cards:** White bg, no border, shadow on hover (`shadow-lg` on hover via group-hover or transition).
- **Testimonial avatars:** `rounded-full`.
- **Footer:** Dark bg, muted text (#8c8c8c), links lighter (#b3b3b3), headings white.
- **Sticky navbar:** Use `IntersectionObserver` or scroll listener to add sticky class. Logo color switches from white (over hero) to black (sticky). Nav links: white over hero, dark when sticky, active link = brand blue.
- **Author split:** Flex row, image side uses `bg-cover bg-center`, text side has generous padding (7rem on desktop).

## Component plan

```
apps/bookcraft/src/
  App.tsx              — Composes all sections
  components/
    Navbar.tsx          — Sticky nav with scroll-aware styling
    Hero.tsx            — Dark hero with book image + CTA
    Features.tsx        — 6 feature cards grid
    ScreenshotCarousel.tsx — Prev/next image carousel
    Author.tsx          — Split layout author section
    Testimonials.tsx    — 3 testimonial cards
    Newsletter.tsx      — Blue subscription bar
    Footer.tsx          — 3-column footer with contact form
  index.css             — Tailwind entry + @theme brand tokens
  main.tsx              — Entry (excluded from coverage)
```
