# Snapvue — Design Notes & Task Outline

## Source mapping

- **ColorLib:** Bato — https://colorlib.com/wp/template/bato/
- **Preview:** https://preview.colorlib.com/theme/bato/
- **New name:** snapvue (photography portfolio)

## Structure order (single-page SPA)

The original Bato template is multi-page (index.html, work.html, about.html,
blog.html, contact.html). For the React SPA, consolidate into sections on
one page:

1. **Navbar** — Sticky/fixed header with logo "Snapvue" + hamburger toggle
2. **Hero** — Carousel with 3 slides (split layout: 60% image / 40% text)
3. **Work/Portfolio** — 6 entries with alternating image-text layout
4. **Newsletter/Subscribe** — Centered heading + email form + CTA
5. **Footer** — 3-column (Office, Get in Touch, Social) + copyright

## Section-by-section fidelity notes

### 1. Navbar
- Logo text: "Snapvue" (Playfair Display, uppercase, bold, #000)
- Hamburger toggle: three-line icon, rgba(0,0,0,0.05) bg, black on hover
- Slide-out nav panel: right-aligned, 360px wide (300px on mobile), white bg
- Nav links: Home, Work, About, Contact (uppercase, 14px, black, active = #F9CE00)
- Search input in nav panel
- 4 gallery thumbnails in nav panel (2-column grid, 150px height)
- Page scales to 1.1x with dark overlay when nav is open (CSS transition)

### 2. Hero Carousel
- Full-height split layout: 60% background image (left), 40% text panel (right)
- Each slide: slide number (absolute bottom, outline style), tag label
  (uppercase, letter-spacing 7px), heading (58px, Playfair Display, bold),
  description paragraph, "View Galleries" outline button (1px solid #000)
- Owl Carousel for slide transitions (use Framer Motion or CSS transitions)
- Nav arrows at bottom left (white bg, yellow on hover)

### 3. Work/Portfolio Section
- Centered "Works" heading
- 6 work entries in alternating layout:
  - Odd: image right (55%), text left (45%) with -4em margin-left offset
  - Even: image left (55%), text right (45%)
- Each entry: background image (full-height), text panel with white bg,
  heading (40px, Playfair Display, bold), description, "View Photo" outline button
- Bottom margin 7em between entries
- Use flex layout (not Bootstrap grid)

### 4. Newsletter/Subscribe Section
- 5em vertical padding
- Centered heading "Subscribe Newsletter" (Playfair Display, bold)
- Subtitle "Subscribe our newsletter and get latest update" (18px)
- Email input + "Subscribe Now" yellow primary button (#F9CE00 bg, #fff text)
- Form uses flex layout

### 5. Footer
- 8em vertical padding
- 3 columns: "Office" (address), "Get in Touch" (email link), "Social" (4 icons)
- Footer headings: 18px, uppercase, bold, #000, letter-spacing 1px
- Social icons: 24px, #000, use Lucide icons (Facebook, Twitter, Mail, Dribbble)
- Copyright line with "Made with ❤ by Component Dock" + link to componentdock.com
- No ColorLib attribution

## Color palette

- Primary/accent: #F9CE00 (bright yellow)
- Primary hover: #FFD614
- Text primary: rgba(0,0,0,0.8)
- Text body: gray
- Background: #ffffff
- Nav panel: #ffffff
- Selection: bg #b7c2c2, color #fcfcfc

## Typography

- Body: Karla 400, 16px, line-height 1.8
- Headings: Playfair Display 400/700
- Tags/labels: uppercase, letter-spacing 7px
- CTA buttons: 13px, letter-spacing 7px, uppercase

## Component mapping

| Section        | Component file(s)           | Notes                                    |
|----------------|-----------------------------|------------------------------------------|
| Navbar         | `Navbar.tsx`                | Hamburger + slide-out panel              |
| Hero           | `Hero.tsx`                  | Carousel with 3 slides                   |
| Work           | `Work.tsx`                  | 6 alternating portfolio entries          |
| Newsletter     | `Newsletter.tsx`            | Email form + CTA                         |
| Footer         | `Footer.tsx`                | 3-column + attribution                   |
| App            | `App.tsx`                   | Composes all sections                    |

## Implementation tasks

- [ ] Scaffold app from simplest existing template (copy + rename package)
- [ ] Configure `vite.config.ts` with `injectUiSource()` pattern
- [ ] Set up `public/CNAME` → `snapvue.free.componentdock.com`
- [ ] Set up `package.json` homepage + package name
- [ ] Add Google Fonts link for Karla + Playfair Display in index.html
- [ ] Define design tokens in `src/index.css` (@theme block)
- [ ] Implement Navbar with hamburger toggle + slide-out panel
- [ ] Implement Hero carousel with 3 slides + navigation arrows
- [ ] Implement Work section with 6 alternating entries
- [ ] Implement Newsletter section with email form
- [ ] Implement Footer with 3 columns + Component Dock link
- [ ] Compose all sections in App.tsx
- [ ] Add placeholder images via picsum.photos
- [ ] Write tests for all components (100% coverage)
- [ ] Run `npm run verify:app snapvue`
- [ ] Ensure no ColorLib references in any app file

## Pitfalls

- Hero carousel: don't use a heavy library; Framer Motion or CSS-only is fine
- The original uses Bootstrap grid; the React version should use Tailwind
- Work entry text panels have specific negative margins (-4em) for the offset effect
- Nav panel animation uses scale transform (1 → 1.1) on the main page container
- Mobile breakpoints: 768px (nav panel 300px, hero text 24px, gallery thumbs 2-col)
