# GoldFrame (ColorLib Mostudio) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-goldframe`. Recreation name: **GoldFrame** (NEW name —
> the ColorLib source keeps its name "Mostudio").

## Source mapping

- **ColorLib item:** "Mostudio" (TEMPLATES.md line 2458; section
  "## Photography (49)" at line 2433; also duplicated at line 2533 under
  "## Portfolio (89)"). The `wp/template/mostudio/` slug appears twice
  in TEMPLATES.md (Photography + Portfolio sections).
- **Source URL:** https://colorlib.com/wp/template/mostudio/
- **Preview URL — REACHABLE (verified 2026-09-26 by curl):**
  **`https://preview.colorlib.com/theme/mostudio/`**
  (HTTP 200, 20,574 bytes). Returns a full HTML page with title
  "Mostudio - Free Bootstrap 4 Template by Colorlib".
- **Preview CSS:** `css/style.css` (59,284 bytes — Bootstrap 4 + custom
  styles). Also loads: `css/animate.css`, `css/owl.carousel.min.css`,
  `css/owl.theme.default.min.css`, `css/magnific-popup.css`,
  `css/flaticon.css`, Font Awesome 4.7. Scripts: jQuery, Bootstrap 4,
  Owl Carousel, Magnific Popup, Waypoints, Stellar, Scrollax.
  Fonts: Poppins (300-700) + Abril Fatface (400) via Cloudflare font-face.

## Reference research (done — do not redo)

### Live preview DOM analysis (2026-09-26)

Fetched via `curl -sL https://preview.colorlib.com/theme/mostudio/`.

**Page structure:**
1. `#colorlib-page` — outer wrapper
2. `#colorlib-aside` (fixed left sidebar, `.js-fullheight`):
   - `#colorlib-logo` — h1 with background image, text "Mostudio"
   - `#colorlib-main-menu` — nav with 5 links: Home, Gallery, About, Pricing, Contact
   - `.colorlib-footer` — newsletter subscribe form + copyright
3. `#colorlib-main` — scrollable main content:
   - 9x `portfolio-wrap` sections (`.col-md-12`), each containing:
     - `.row.no-gutters.align-items-center` → 50/50 split
     - Image side: `.img` with `background-image`, `.icon` overlay (FA expand)
     - Text side: `.text` → `.desc` → `.top` (subheading + h2) + `.absolute` (paragraph) + `.custom-btn`
   - Alternating: odd = image left (`.col-md-6.img` first), even = image right (`.order-md-last`)
   - "Load more" link at bottom (`.btn-custom-load`)

**Portfolio items (from DOM):**
| # | Category | Title | Image |
|---|----------|-------|-------|
| 1 | Portrait | Black & Gold Paint Face | work-1.jpg |
| 2 | Nature | Green Leaves | work-2.jpg |
| 3 | Nature | Coal | work-3.jpg |
| 4 | Nature | Top Leaf | work-4.jpg |
| 5 | Portrait | Building | work-5.jpg |
| 6 | Fashion | Black Girl Model | work-6.jpg |
| 7 | Animals | Pug Puppy | work-7.jpg |
| 8 | Nature | White Flower | work-8.jpg |
| 9 | Animals | Turtle | work-9.jpg |

### CSS token extraction (2026-09-26)

From `css/style.css` (59,284 bytes):

- **Brand color:** `#f3c623` (golden yellow) — used on `.custom-btn` color,
  `.colorlib-active` text/border, hover states, loader spinner stroke
- **Sidebar:** `background: #000000` (with `aside.png` overlay image)
- **Body:** `background: #fff`, `color: #212529`
- **Custom button:** `text-transform: uppercase; font-size: 12px;
  letter-spacing: 3px; color: #f3c623; font-weight: 700; border: none;
  background: transparent`
- **Nav active:** `color: #f3c623` with gold left border indicator
- **Subheading:** uppercase, letter-spaced, small, grey
- **Portfolio titles:** h2, bold, black
- **Loader:** SVG circle, stroke `#F96D00` on `#eeeeee` ring
- **Fonts:** Poppins 300-700 (body), Abril Fatface 400 (display/logo)

### Screenshot analysis

Template image: `mostudio-free-template.jpg` (from TEMPLATES.md).
Shows a dark sidebar on the left with "Mostudio" logo and nav links,
main content area with a large portrait photo (black & gold face paint)
on the left and text on the right. Gold accent on the CTA button.
Clean, editorial photography portfolio aesthetic. Dark + gold palette.

## Implementation tasks

### Phase 1: Scaffold
- [ ] Copy simplest existing app as base (e.g., `apps/aurora` or similar)
- [ ] Rename package to `@free-react-templates/goldframe`
- [ ] Set `public/CNAME` to `goldframe.free.componentdock.com`
- [ ] Set `homepage` in `package.json` to `https://goldframe.free.componentdock.com`
- [ ] Run `npm install` at repo root to register workspace in lockfile
- [ ] Update `vite.config.ts` with `injectUiSource()` pattern

### Phase 2: Components (section by section)
- [ ] `Sidebar.tsx` — fixed left panel: logo, nav (5 links with active state), newsletter form, copyright footer
- [ ] `PortfolioRow.tsx` — alternating image/text split component (accepts: category, title, description, imageSeed, isReversed prop)
- [ ] `PortfolioGrid.tsx` — renders 9 PortfolioRow items with alternating layout
- [ ] `LoadMore.tsx` — full-width link with refresh icon
- [ ] `App.tsx` — compose Sidebar + main content area

### Phase 3: Styling
- [ ] Tailwind `@theme` tokens: brand gold (#f3c623), sidebar black (#000000)
- [ ] Google Fonts: Poppins (300-700) + Abril Fatface (400) in `index.html`
- [ ] Sidebar: fixed position, 270px width desktop, overlay mobile
- [ ] Portfolio rows: 50/50 grid, no gutters, alternating order
- [ ] Image hover overlay: magnify icon, white on semi-transparent bg
- [ ] Custom button: uppercase, 12px, letter-spacing 3px, gold
- [ ] Mobile: sidebar collapse + hamburger toggle
- [ ] Full-page loader (optional — can skip for SPA)

### Phase 4: Tests + Verification
- [ ] Write tests for each component (Vitest + Testing Library)
- [ ] Ensure 100% coverage (lines, functions, branches, statements)
- [ ] Run `scripts/verify-app.sh goldframe` — typecheck + lint + tests + build
- [ ] Self-review: no ColorLib references in app code, footer links Component Dock

### Phase 5: Deploy
- [ ] Commit: `feat: add GoldFrame template (ColorLib Mostudio)`
- [ ] Open PR, merge, verify Surge deploy to goldframe.free.componentdock.com
