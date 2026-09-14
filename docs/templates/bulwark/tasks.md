# Bulwark (ColorLib Security) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-bulwark`. Recreation name: **Bulwark** (NEW name —
> the ColorLib source keeps its name "Security").

## Source mapping

- **ColorLib item:** "Security" (TEMPLATES.md line 1161).
- **Source URL:** https://colorlib.com/wp/template/security/
- **Preview URL — REACHABLE (verified by direct fetch):**
  **`https://preview.colorlib.com/theme/security/`** (HTTP 200).
- **Preview CSS:** `css/main.css` (Bootstrap 4 based, Poppins font, brand
  color `#fab700`). Additional CSS: `css/bootstrap.css`, `css/linearicons.css`,
  `css/font-awesome.min.css`, `css/animate.min.css`, `css/owl.carousel.css`.
  Scripts: jQuery 2.2.4, Bootstrap, Owl Carousel, Magnific Popup, waypoints,
  counterup, parallax. Font: Poppins (Google Fonts, weights 300–700).
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/security-free-template.jpg

## Reference research (done — do not redo)

### Live preview DOM analysis

Fetched `https://preview.colorlib.com/theme/security/` and extracted full
HTML (500+ lines). Sections in order:

1. **Header** — Two-tier: top bar (social icons: Facebook, Twitter, Dribbble,
   Behance | phone link + Register/Login) + nav (logo + 7 menu items + Pages
   dropdown with 2 sub-items). Uses Bootstrap grid (`container`, `row`,
   `col-6`).
2. **Banner/Hero** (`.banner-area`) — Full-width, background image
   (`header-bg.jpg`), dark overlay (`rgba(0,0,0,0.7)`), content left-aligned
   in `col-lg-9`: subtitle (h6), heading (h1 "Exhibition on Modern Era"),
   paragraph, `.primary-btn` CTA ("Get Started").
3. **Service Area** (`.service-area.section-gap`) — Centered title block
   (h1 "Our Offered Services" + subtitle), 3 `col-lg-4` cards
   (`.single-service`): image thumb + h4 title + paragraph. Hover turns
   card bg to `#fab700`.
4. **Feature Area** (`.feature-area.section-gap`) — Light `#f9f9ff` bg,
   centered header text (h1 + subtitle), 6 `col-lg-4 col-md-6` items
   (`.single-feature`): Linearicons icon + h4 title + paragraph. Hover:
   shadow + `#fab700` bg.
5. **Facts Area** (`.facts-area.section-gap`) — Full-width `#fab700` bg,
   5 `.col.single-fact` items: h1 counter + p label. Numbers: 2536, 6784,
   1059, 2239, 435.
6. **Gallery** (`.galery-area.section-gap`) — Centered title, 7 images in
   masonry: col-lg-7 + col-lg-5 (row 1), col-lg-4 × 3 (row 2),
   col-lg-5 + col-lg-7 (row 3). Uses `.single-gallery` links with
   Magnific Popup.
7. **Blog** (`.blog-area.section-gap`) — Light `#f9f9ff` bg, centered title,
   4 `col-lg-3` cards (`.single-blog`): image thumb + date badge (black bg,
   white text) + h4 title + excerpt + meta (likes + comments with
   Linearicons).
8. **Footer** (`.footer-area.section-gap`) — Dark navy `#04091e` bg,
   3 columns: About Us (text + copyright with Colorlib attribution —
   REPLACE with Component Dock), Newsletter (email input + submit),
   Follow Us (social icons).

### CSS token extraction (from main.css)

- **Brand:** `#fab700` (golden yellow) — primary-btn, selection, facts-area
  bg, hover states on service/feature/blog, blockquote border, ordered-list
  color, unordered-list bullet border
- **Text:** `#222222` (headings), `#777777` (body)
- **Section backgrounds:** `#f9f9ff` (feature-area, blog-area, service cards,
  inputs, blockquote), `#fff` (feature cards, page default)
- **Footer:** `#04091e`
- **Overlay:** `rgba(0, 0, 0, 0.7)` on banner
- **Font:** `"Poppins", sans-serif` — weights 300 (body), 400, 500, 600, 700
  (headings)
- **Button:** `.primary-btn` — bg `#fab700`, no radius (square), 42px line
  height, 40px horizontal padding, uppercase, white text; hover: transparent
  bg + `#fab700` border + `#fab700` text
- **Section gap:** 120px vertical padding
- **Blog date:** black bg, white text, 115px width, 2px/15px padding
- **Feature hover:** `box-shadow: -14.142px 14.142px 20px 0px rgba(157,157,157,0.5)`
  + bg `#fab700`

### Screenshot visual notes

The template screenshot shows a dark-themed security/IT services landing page.
The hero has a dark photo with a yellow CTA button. The service section has
three photo cards on white. Features are icon-based on a light background.
The stats bar is a bold yellow strip. Gallery uses a masonry grid. Blog cards
show image + date badge. Footer is very dark navy. Overall aesthetic: clean,
professional, yellow-accent security/IT theme.

## Implementation task outline

### Phase 1: Scaffold
1. Copy simplest existing app as base (e.g., `apps/abjure` or another
   minimal app)
2. Rename package to `@free-react-templates/bulwark`
3. Update `public/CNAME` to `bulwark.free.componentdock.com`
4. Update `homepage` in `package.json`
5. Run `npm install` at repo root for lockfile registration

### Phase 2: Components (in order of page sections)
1. **Header** — `Header.tsx`: top bar (social icons via lucide-react, phone,
   register/login) + nav bar (logo placeholder, menu links, Pages dropdown
   with state toggle)
2. **Hero** — `Hero.tsx`: full-width section with picsum background, dark
   overlay div, content block (subtitle, heading, paragraph, primary CTA
   button). Use `bg-[url(...)]` + `bg-cover` + overlay with absolute div.
3. **Services** — `Services.tsx`: section title + 3 `ServiceCard` components
   (image via picsum, title, description). Hover: bg transition to brand
   color.
4. **Features** — `Features.tsx`: light bg section, title + 6 `FeatureItem`
   components (lucide icon, title, description). Hover: shadow + brand bg.
5. **Facts** — `Facts.tsx`: brand-color bg, 5 counter stat items. Use
   static numbers (no animation dependency needed for MVP).
6. **Gallery** — `Gallery.tsx`: title + 7 images in CSS grid masonry layout
   (use picsum with varying aspect ratios).
7. **Blog** — `Blog.tsx`: light bg, title + 4 `BlogCard` components (image,
   date badge, title, excerpt, likes/comments meta). Hover: image scale +
   title color.
8. **Footer** — `Footer.tsx`: dark bg, 3 columns (About, Newsletter form,
   Social links). Replace Colorlib attribution with Component Dock link.

### Phase 3: Styling
- `index.css`: Tailwind v4 + `@theme` block with brand color `#fab700`,
  font family Poppins via Google Fonts `<link>` in `index.html`
- Use `cn()` from `packages/ui` for conditional classes
- Responsive: stack to single column on mobile (Bootstrap-like breakpoints
  via Tailwind `md:`, `lg:`)

### Phase 4: Testing (TDD)
- One `describe` per component
- Test: renders all sections, displays correct content, hover effects
  (simulate mouseEnter/mouseLeave), responsive behavior
- 100% coverage on all component files

### Phase 5: Verification
- `scripts/verify-app.sh bulwark` (typecheck + lint + tests + build)
- Visual check: section order matches original, colors match tokens
- Footer links to Component Dock
- No ColorLib references in app code

## Section-by-section fidelity notes

| Section | Original behavior | Recreation notes |
|---|---|---|
| Header | Two-tier, Bootstrap grid, Linearicons + Font Awesome | Use lucide-react for all icons. Mobile: hamburger menu (hidden on mobile in original too — keep simple) |
| Hero | Full-width bg image + dark overlay + left-aligned content | `bg-cover bg-center` + absolute overlay div. Content in `max-w-7xl` container, left-aligned. |
| Services | 3 cards with image thumbs, hover yellow | Grid `grid-cols-1 md:grid-cols-3`. Cards: overflow-hidden image + padding + text. Hover: bg transition. |
| Features | 6 items, 3×2 grid, Linearicons, hover shadow+yellow | `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`. Use lucide icons (User, Shield, Phone, Rocket, Diamond, MessageCircle). |
| Facts | 5 counters on yellow bg | `bg-[#fab700]` full-width. `grid-cols-2 md:grid-cols-5`. Static numbers with `font-bold text-4xl`. |
| Gallery | 7 images masonry, Magnific Popup | CSS grid masonry or `columns-2 lg:columns-3` with `break-inside-avoid`. No popup needed (static images). |
| Blog | 4 cards, date badge, hover scale+yellow | `grid-cols-1 md:grid-cols-2 lg:grid-cols-4`. Date badge: absolute positioned, black bg, white text. |
| Footer | Dark navy, 3 cols, newsletter form | `bg-[#04091e]`. Replace Colorlib link with Component Dock. Newsletter: email input + button (no actual submission needed). |
