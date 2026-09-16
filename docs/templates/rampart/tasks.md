# Rampart (ColorLib Security) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-rampart`. Recreation name: **Rampart** (NEW name —
> the ColorLib source keeps its name "Security").

## Source mapping

- **ColorLib item:** "Security" (TEMPLATES.md line 1396; section
  "## Security (1)" at line 1395). The
  `wp/template/security/` slug appears exactly ONCE in
  TEMPLATES.md (no dup rows).
- **Source URL:** https://colorlib.com/wp/template/security/
- **Preview URL — REACHABLE (verified 2026-09-16 by direct fetch):**
  **`https://preview.colorlib.com/theme/security/`**
  (HTTP 200, 24,800 bytes, ~490 lines, `<title>Security</title>`).
  Full HTML successfully fetched and analyzed. CSS: `css/main.css` (44,903
  bytes — all custom styles, plus Bootstrap 3, Font Awesome, Linearicons,
  Owl Carousel, Magnific Popup, Nice Select, Animate.css). Fonts: Poppins
  (Google Fonts via inline `@font-face` in `<style>` tag, weights 100–700;
  use `<link>` with weights 300, 400, 500, 600, 700 for React version).

## Reference research (done — do not redo)

### Screenshot analysis

Preview image: `security-free-template.jpg` (hosted at colorlib.com).
Visual description: Dark overlay hero banner with white text, yellow accent
buttons. The page has a corporate security company aesthetic with:
- Dark navy/black hero with background image and semi-transparent overlay
- Yellow (#fab700) accent color for primary CTA buttons and stats section
- White content sections alternating with very light grey (#f9f9ff) backgrounds
- Service cards with image thumbnails in a 3-column grid
- Feature items with line icons in a 3-column, 2-row grid
- Bright yellow stats counter strip spanning full width
- Masonry-style gallery with 7 images
- Blog cards in 4-column grid with date badges
- Dark navy (#04091e) footer with newsletter signup and social links

### Live preview DOM analysis (section order, structure)

1. **Top utility bar** — `header > .container.header-top` — split into
   `.top-head-left` (social icons: Facebook, Twitter, Dribbble, Behance via
   Font Awesome) and `.top-head-right` (phone number + "Register / Login").
   Followed by `<hr>`.

2. **Main navbar** — `#nav-menu-container > .nav-menu` — Logo image on left,
   horizontal nav links: Home (active), About Us, Service, Team, Price, Blog,
   Contact, Pages (dropdown with blog Single + Elements). Uses Superfish
   JS for dropdowns. **Replace with React hamburger toggle.**

3. **Hero/banner** — `section.banner-area#home` — Full-screen with
   `.overlay.overlay-bg` (rgba(0,0,0,0.7)). Background image: `img/header-bg.jpg`.
   Content: subtitle "Opening on 21st February, 2018", headline "Exhibition on
   Modern Era", paragraph, "Get Started" primary button. Left-aligned.

4. **Services** — `section.service-area.section-gap#service` — Centered heading
   "Our Offered Services" with subtitle. 3 `.single-service` cards (image thumb +
   title link + description paragraph): Basic & Common Repairs, Brake Repairs
   & Services, Preventive Maintenance.

5. **Features** — `section.feature-area.section-gap#feature` — Heading "Some
   Features that Made us Unique" with subtitle. 6 `.single-feature` items in
   3×2 grid (col-lg-4 col-md-6): Expert Technicians (lnr-user), Professional
   Service (lnr-license), Great Support (lnr-phone), Technical Skills
   (lnr-rocket), Highly Recommended (lnr-diamond), Positive Reviews
   (lnr-bubble). **Replace Linearicons with lucide-react.**

6. **Facts/Stats** — `section.facts-area.section-gap#facts-area` — Yellow
   (#fab700) background, 5 `.single-fact` columns with counter values:
   2536 (Projects Completed), 6784 (Happy Clients), 1059 (Tasks Completed),
   2239 (Cups of Coffee), 435 (In House Professionals). Uses
   jquery.counterup + waypoints for animated counting. **Replace with
   React animated counter or static display.**

7. **Gallery** — `section.galery-area.section-gap#gallery` — Heading "Latest
   From Our Gallery" with subtitle. 7 `.single-gallery` image links in
   masonry grid: row 1: col-lg-7 + col-lg-5 (2 images), row 2:
   col-lg-4×3 (3 images), row 3: col-lg-5 + col-lg-7 (2 images).
   Uses Magnific Popup for lightbox. **Replace with picsum.photos placeholders.**

8. **Blog** — `section.blog-area.section-gap#blog` — Heading "Latest From Our
   Blog" with subtitle. 4 `.single-blog` cards (col-lg-3 col-md-6): image
   thumb, date "10 Jan 2018", title "Addiction When Gambling Becomes A Problem",
   excerpt, meta-bottom with heart icon + likes count and bubble icon +
   comments count. Hover: image translates up, title changes color.

9. **Footer** — `footer.footer-area.section-gap` — Dark navy (#04091e)
   background. 3 columns: About Us (description + copyright with Colorlib
   attribution — **replace with Component Dock**), Newsletter (email input +
   arrow submit button), Follow Us (Facebook, Twitter, Dribbble, Behance
   social icons with hover color change).

### Design tokens extracted from `css/main.css`

| Token | Value | Usage |
|-------|-------|-------|
| Brand/accent | `#fab700` | Primary buttons, facts section bg, newsletter button |
| Footer bg | `#04091e` | Footer section background |
| Primary text | `#222222` | Body text, headings |
| Secondary text | `#777777` | Subtitles, muted text |
| Light bg | `#f9f9ff` | Alternating section backgrounds |
| Banner overlay | `rgba(0,0,0,0.7)` | Hero dark overlay |
| Font family | Poppins | All text (weights 300–700) |
| Button border-radius | 3px | `.genric-btn` default |
| Button padding | 13px 32px | `.genric-btn` default |
| Section gap | 80px top/bottom | `.section-gap` |

## Implementation task outline

### Phase 1: Scaffold

- [ ] Copy simplest existing app (e.g. `apps/aurora` or another clean one) as
  `apps/rampart`
- [ ] Rename package to `@free-react-templates/rampart`
- [ ] Update `public/CNAME` to `rampart.free.componentdock.com`
- [ ] Update `homepage` in `package.json` to
  `https://rampart.free.componentdock.com`
- [ ] Run `npm install` at repo root to register workspace in lockfile

### Phase 2: Components (in section order)

- [ ] `TopBar.tsx` — Social icons (lucide-react: Facebook, Twitter, Dribbble,
  Behance mapped to generic social icons), phone number, Register/Login link
- [ ] `Navbar.tsx` — Logo text "Rampart", nav links, hamburger toggle with
  mobile menu (aria-expanded)
- [ ] `Hero.tsx` — Full-screen banner with picsum background image, dark
  overlay, subtitle, headline, paragraph, yellow CTA button
- [ ] `Services.tsx` — Section heading + 3 service cards with picsum images
- [ ] `Features.tsx` — Section heading + 6 feature items with lucide-react
  icons in a 3×2 grid
- [ ] `Facts.tsx` — Yellow background, 5 stat counters with animated numbers
- [ ] `Gallery.tsx` — Section heading + 7 gallery images in masonry grid
- [ ] `Blog.tsx` — Section heading + 4 blog cards with images, dates,
  excerpts, likes/comments
- [ ] `Footer.tsx` — Dark background, 3-column layout: About + Newsletter +
  Social

### Phase 3: Composition + polish

- [ ] `App.tsx` — Compose all sections in order
- [ ] `index.css` — Tailwind entry + theme tokens (brand yellow, dark navy,
  light bg)
- [ ] Verify responsive layout on mobile/tablet/desktop
- [ ] Replace all ColorLib attribution in footer with Component Dock

### Phase 4: Testing

- [ ] Write tests for each component (TDD: RED → GREEN → REFACTOR)
- [ ] Verify 100% coverage with `npm run test:coverage`
- [ ] Run typecheck + lint
- [ ] Build successfully

### Phase 5: Verification + deploy

- [ ] Run `scripts/verify-app.sh rampart` (FAST_MODE local gate)
- [ ] Commit, push, open PR, merge
- [ ] Verify Surge deployment at `rampart.free.componentdock.com`
