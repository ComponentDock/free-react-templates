# Manuscript (ColorLib Author) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-manuscript`. Recreation name: **Manuscript** (NEW
> name — the ColorLib source keeps its name "Author").

## Source mapping

- **ColorLib item:** "Author" (TEMPLATES.md line 2291).
- **Source URL:** https://colorlib.com/wp/template/author/
- **Preview URL — REACHABLE (verified 2026-09-25):**
  `https://preview.colorlib.com/theme/author/`
  (HTTP 200, full HTML with 12 sections, Open Sans + Raleway fonts,
  Bootstrap 4, owl carousel, font-awesome 4.7 CDN, animate.css).
- **Preview CSS:** `css/style.css` (2,562 lines — Bootstrap 4 bundled +
  all custom styles in one file).
- **Font:** Open Sans (400, 600, 700) + Raleway (400–900) via Cloudflare
  @font-face. **Implementation: use Google Fonts `<link>` for Open Sans
  400/600/700 + Raleway 400/700/900.**
- **Icons:** Font Awesome 4.7 via CDN (`stackpath.bootstrapcdn.com`) →
  **replace with lucide-react. Do NOT ship font-awesome.**
- **Animations:** animate.css + jquery.waypoints + jquery.animateNumber
  for scroll-triggered counters → **use CSS animations + IntersectionObserver.**

## Reference research (done — do not redo)

### Screenshot (`author-free-template.jpg`)

The preview image shows an author/book promotion onepage: clean white hero
with a large SVG illustration of a person reading on the right, text on the
left with green accent. Below are partner logos, a book overview section
with image, animated stat counters, a chapter table of contents accordion,
service cards, testimonials carousel, book cover gallery, author bio with
info list, and a contact form with map. The overall aesthetic is clean,
literary, professional with a green accent color.

### Live preview analysis (2026-09-25)

Fetched `https://preview.colorlib.com/theme/author/` via curl. Confirmed
12 sections in order (see spec.md for full list). Key observations:
- Navbar is dark (navbar-dark) with "Author" + green dot brand
- Hero is a full-height split: text left, SVG illustration right (60%)
- Partner section: 5 logos in a row, all greyscale
- About The Book: split layout with background image + 3 feature items
- Counter: 4 animated stat cards (waypoints + animateNumber)
- Chapter: accordion with 8 book sections (page-1 through page-8)
- Services: 3 cards (Experience, Marketing Goals, Targeting Vision)
- Testimonials: owl carousel with review cards
- Projects: 6 book covers as background images with title overlays
- Author: split layout with photo + bio info list
- Contact: 4 info boxes + form + map placeholder
- Footer: black bg, 4 columns, copyright line

### CSS token extraction

From `css/style.css` (custom styles section):
- `.navbar-brand { font-family: "Raleway"; font-weight: 900; }` / `span { color: #17b978; }`
- `.btn-primary { background: #17b978; border-color: #17b978; }` (overrides Bootstrap blue)
- `.subheading { color: #17b978; }` (green section labels)
- `.heading { color: #263b5e; }` (dark blue headings)
- `body { color: #212529; }` / `.text { color: #4d4d4d; }`
- `.ftco-footer { background: #000000; }` / `h2 { color: #fff; }` / `a { color: rgba(255,255,255,0.8); }`
- `.hero-wrap .overlay { background: #fff; opacity: 0; }` (transparent on desktop)
- `.hero-wrap .slider-text { height: 750px; }`
- `.counter-wrap .block-18 { background: #f8f9fa; }` (bg-light)
- `.contact-info .box { background: #f8f9fa; }` (bg-light)
- `.contact-form { background: #f8f9fa; }` (bg-light)

## Implementation tasks (ordered)

### Phase 1: Scaffold
1. Copy simplest existing app as base, rename package to
   `@free-react-templates/manuscript`
2. Update `apps/manuscript/package.json` — name, description, homepage
3. Create `apps/manuscript/public/CNAME` with `manuscript.free.componentdock.com`
4. Run `npm install` at repo root to register workspace in lockfile
5. Set up `src/index.css` with Tailwind v4 + theme tokens:
   - `@import "tailwindcss";`
   - `@theme { --color-brand: #17b978; --color-heading: #263b5e; }`
   - Google Fonts link in `index.html` for Open Sans 400/600/700 +
     Raleway 400/700/900

### Phase 2: Components (in page order)
6. `Navbar.tsx` — "Author" + green dot logo, 7 nav links, dark navbar,
   sticky on scroll with solid bg
7. `Hero.tsx` — split: text left (subheading, h1, description, CTA
   button), SVG/book illustration right (use picsum or placeholder)
8. `Partners.tsx` — 5 partner logos in a row (use placeholder SVGs or
   text-based logos)
9. `AboutBook.tsx` — split: image left, text right with 3 feature items
10. `Counter.tsx` — 4 animated stat cards (use IntersectionObserver +
    counter animation, no jQuery)
11. `Chapter.tsx` — "What's Inside The Book" accordion with 8 items
    (React state, no jQuery)
12. `Services.tsx` — 3 service cards: Experience, Marketing Goals,
    Targeting Vision
13. `Testimonials.tsx` — carousel with review cards (CSS carousel or
    lightweight JS, no owl carousel)
14. `BookGallery.tsx` — 6 book cover cards with background images
    and title overlays
15. `AuthorBio.tsx` — split: photo left, bio right with info list +
    "View All Books" button
16. `Contact.tsx` — 4 info boxes + contact form + map placeholder
17. `Footer.tsx` — black bg, 4 columns, social icons, copyright
    linking to Component Dock

### Phase 3: App composition
18. `App.tsx` — compose all sections in order
19. `App.test.tsx` — test that all sections render

### Phase 4: Verification
20. Run `scripts/verify-app.sh manuscript` — typecheck + lint + tests + build
21. Visual check: compare with screenshot for fidelity
22. Ensure no ColorLib references in app code
23. Ensure footer links to Component Dock

## Design notes

- **Section order must match exactly:** Navbar → Hero → Partners → About
  Book → Counter → Chapter → Services → Testimonials → Projects → Author
  → Contact → Footer
- **Hero split layout:** Text takes ~40% on left, illustration 60% on
  right. On mobile, stack vertically with illustration on top.
- **Animated counters:** Use IntersectionObserver to trigger when the
  counter section enters viewport. Animate numbers from 0 to target
  using requestAnimationFrame (no jQuery.animateNumber).
- **Chapter accordion:** Implement with React state (no jQuery/Bootstrap JS).
  Use `aria-expanded` and `aria-controls` for accessibility.
- **Testimonials carousel:** Use a simple auto-rotating CSS carousel
  with JS interval, or manual next/prev. No owl carousel dependency.
- **Book gallery:** Background images with dark overlay and white title
  text on hover. Use picsum.photos for placeholders.
- **Author info list:** Simple key-value pairs in a styled list.
  Name, DOB, Address, Zip, Email, Phone.
- **Contact form:** Use controlled inputs. Map can be a static placeholder
  image or a simple styled div.
- **Responsive:** Mobile hamburger menu, stacked columns, single-column
  layouts for cards. Hero stacks vertically.
- **Placeholder images:** Use `https://picsum.photos/seed/manuscript-<n>/<w>/<h>`
  with deterministic seeds. Hero illustration: use an SVG or picsum.
  Book covers: 400×600. Author photo: 600×800.
