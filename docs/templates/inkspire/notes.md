# Inkspire — Implementation Notes

**Source:** ColorLib Author (slug: `author`)
**Preview:** https://preview.colorlib.com/theme/author/
**Spec:** `openspec/specs/template-inkspire/spec.md`

---

## Section Order (top to bottom)

1. **Navbar** — sticky/scroll-aware, transparent over hero → white on scroll.
   Brand "Inkspire." on left; 7 nav links (Home, About, Chapter, Reviews,
   My Books, Author, Contact) on right; hamburger on mobile.

2. **Hero** — two-column layout.
   - Left: subheading "BEST SELLER BOOK OF THE WEEK" (green), heading
     "Clue Of The Wooden Cottage" (large, dark), description paragraph,
     pill CTA button "Buy Now For $22.78".
   - Right: illustration placeholder (use `picsum.photos/seed/inkspire-hero/600x600`).

3. **Partners Strip** — horizontal row of 5 partner logos on white bg.
   Use text-based placeholder logos (e.g. styled company names or generic
   shapes). Greyscale treatment.

4. **About the Book** — two-column.
   - Left: book stack image placeholder (`picsum.photos/seed/inkspire-books/500x600`).
   - Right: heading "About The Book", description, "Award achievements"
     sub-list, feature items with icons: "Read On Any Devices",
     "Very High Resolution" (use `lucide-react` icons: `Smartphone`, `Monitor`).

5. **Counter** — full-width bg image, 4 stat cards in a row.
   Stats: 1100 Copies Sold, 1000 Happy Clients, 2500 Published Books,
   5000 Active Readers. Numbers should count up on scroll intersection.
   Use `IntersectionObserver` + `requestAnimationFrame` or a simple counter
   hook. Cards have `bg-white/90` or `bg-gray-100` bg with dark blue
   (#263b5e) number text.

6. **Services** — dark background (`bg-gray-900`), 3 service cards.
   Cards: Experience (icon: `Briefcase`), Marketing Goals (icon: `Target`),
   Targeting Vision (icon: `Eye`). Each card: `bg-gray-800` with green
   (#17b978) icon, white title, light gray description. Hover: card bg
   turns green.

7. **Testimonials** — green (#17b978) overlay background.
   Carousel of testimonial cards. Each card: avatar image, quote text,
   client name, star rating (5 stars). Carousel auto-plays with dot
   navigation. Active dot: green. Implement as a simple state-driven
   carousel (useState for current index).

8. **My Other Books** — heading "My Other Books" centered, then 4×2 grid
   of book cover images. Use `picsum.photos/seed/inkspire-book-N/300x450`
   for 8 covers. On mobile: 2 columns. Each card: image with subtle hover
   scale effect.

9. **About the Author** — two-column.
   - Left: author portrait placeholder (`picsum.photos/seed/inkspire-author/500x600`).
   - Right: heading "About the Author", bio paragraphs, social media
     icon links (Twitter, Facebook, Instagram, LinkedIn from `lucide-react`
     or inline SVGs). Icons styled as circular with hover effect.

10. **Contact** — two-column.
    - Left: 3 info boxes stacked vertically, each with a green icon circle
      and text: address, phone, email, website.
    - Right: contact form (name, email, subject, message textarea, submit
      button). Form uses controlled state; no backend submission needed
      (preventDefault on submit).

11. **Footer** — black (#000) background, 4-column grid.
    - Col 1: brand "Inkspire." + description paragraph.
    - Col 2: "Template Page" links list.
    - Col 3: "Community" links list.
    - Col 4: "Newsletter" — text + email input + subscribe button.
    - Bottom bar: copyright text + "Made with ❤️ by Component Dock" linking
      to `https://www.componentdock.com/`.

---

## Design Token Notes

- Tailwind `@theme` custom properties for brand green `--color-brand: #17b978`.
- Fonts loaded via Google Fonts `<link>` in `index.html`: Open Sans
  (weights 400, 600, 700) + Raleway (weights 400, 500, 600, 700).
- Body font: `font-sans` mapped to Open Sans. Headings: `font-heading`
  mapped to Raleway.
- Pill buttons: `rounded-full px-6 py-3 bg-brand text-white font-semibold`.
- Counter numbers: `text-[#263b5e] font-bold text-3xl`.
- Services cards: `bg-gray-800 rounded-lg p-6 hover:bg-brand transition`.
- Footer: `bg-black text-white`.

---

## Fidelity Notes

- Section order matches the original 1:1.
- The hero uses an illustrated person reading on books — replace with a
  `picsum.photos` placeholder but keep the split layout.
- The partner logos section uses actual brand logos in the original —
  use generic text/shapes as placeholders.
- The counter section uses a background image — use `picsum.photos/seed/inkspire-counter-bg/1920x400`.
- Testimonials use owl carousel in the original — implement a simple
  state-based carousel in React.
- The book gallery uses real book cover images — use `picsum.photos` placeholders.
- Author portrait uses a real photo — use `picsum.photos/seed/inkspire-portrait/500x600`.

---

## Component Structure

```
apps/inkspire/
  src/
    App.tsx                  — Composes all sections
    main.tsx                 — Entry point (excluded from coverage)
    index.css                — Tailwind entry + @theme tokens
    components/
      Navbar.tsx
      Hero.tsx
      PartnerStrip.tsx
      AboutBook.tsx
      Counter.tsx
      Services.tsx
      Testimonials.tsx
      BookGallery.tsx
      AboutAuthor.tsx
      Contact.tsx
      Footer.tsx
    test/
      setup.ts               — jest-dom import
```

---

## Existing Patterns to Reuse

- `packages/ui`: Button, ButtonLink, Card (with Card.Header compound), cn()
- Counter animation: look for existing count-up hook or implement with
  `useEffect` + `IntersectionObserver`
- Carousel: simple useState-based, no new dependencies
- Form handling: controlled inputs, `onSubmit` with `preventDefault`
