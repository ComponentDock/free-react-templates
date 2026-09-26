# Bitshot (ColorLib Bitmap) — Tasks & Design Notes

> Recreation of ColorLib "Bitmap" (https://colorlib.com/wp/template/bitmap/)
> under the NEW name **Bitshot** (photography-themed — "bit" + "shot" —
> evokes digital photography without reusing the source name), per the
> monorepo naming mandate. Category: **Photography (49)**.

## Design notes (replication findings)

- **Original:** ColorLib "Bitmap" — photography portfolio template
  (source: https://colorlib.com/wp/template/bitmap/).
- **Preview DOM analyzed:** `https://preview.colorlib.com/theme/bitmap/`
  (HTTP 200, ~400 lines HTML + `css/style.css` ~3314 lines parsed for tokens).
  The live preview is the authoritative reference.
- **Screenshot:** `bitmap-free-template.jpg` — shows a photography portfolio
  with dark hero banner, gallery grid, yellow testimonials section, service
  cards, and dark footer.
- **Visual design:** clean photography portfolio aesthetic — white body +
  golden yellow (#fcdc00) accent + dark navy (#04091e) footer; Poppins font
  throughout; sharp-cornered buttons (border-radius: 0px); gallery with hover
  overlays; yellow testimonials strip.
- **Structure (1:1, section order):**
  1. **Navbar** (`header_area`): white navbar, logo image left, Bootstrap
     collapse with nav links (Home active, Gallery, Services, About, Elements,
     Blog dropdown [Blog, Blog Details], Contact), search icon right. Mobile:
     hamburger toggler (`icon-bar` spans).
  2. **Hero** (`home_banner_area`): full-width section with parallax overlay
     (`bg-parallax`, `data-stellar-ratio="0.9"`), centered `.banner_content`:
     h2 "Bitmap Photography" (white), p subtitle, `.theme_btn` "Explore Gallery"
     (yellow bg #fcdc00, dark text #222222, border-radius 0px).
  3. **Gallery** (`home_gallery_area`, bg `#f9f9ff`, padding `p_120`): filter
     bar `.isotope_fillter` with tabs (All active, Approved, Unapproved,
     Unviewed). Grid `.gallery_f_inner.row` — 4-col (`col-lg-3 col-md-4
     col-sm-6`), 12 items. Each item `.h_gallery_item`: img + hover overlay
     (`.hover`) with h4 title + expand icon (`fa-expand`). "Load More Images"
     `.theme_btn` button below.
  4. **Testimonials** (`testimonials_area`, bg `#fcdc00`): two-col layout —
     left `.c_feedback_text` (h4 "Client's Feedback" + p), right `.t_slider`
     owl-carousel with `.item` cards: `.media` layout (avatar img +
     `.media-body` with quote p, h4 name, h6 role).
  5. **Services** (`service_area`, padding `p_120`): centered `.main_title`
     (h2 "Why we are the best" + p subtitle). 3-col grid `.service_inner` —
     6 items `.service_item`: h4 title + p description, border `1px solid
     #eeeeee`, hover → bg `#fcdc00`.
  6. **Instagram** (`instagram_area`): `.insta_btn` centered "Follow us on
     instagram" `.theme_btn`. `.instagram_image.row` — 6 images in a row
     (`flex: 0 0 16.667%`), each `<a>` with `<img>`.
  7. **Footer** (`footer_area`, bg `#04091e`, padding `p_120`): three-col
     `.footer_inner` — col-lg-5 (About Me: f_title h3 + p + copyright),
     col-lg-5 (Newsletter: f_title h3 + p + email form with `.sub-btn`),
     col-lg-2 (Follow Me: f_title h3 + p + social icons: Facebook, Twitter,
     Dribbble, Behance). **Must replace Colorlib attribution with Component
     Dock link.**

## Tasks

- [ ] Create `apps/bitshot/` workspace (copy simplest existing app, rename
      package to `@free-react-templates/bitshot`)
- [ ] Create `public/CNAME` with `bitshot.free.componentdock.com`
- [ ] Set `"homepage": "https://bitshot.free.componentdock.com"` in package.json
- [ ] Create `src/index.css` with Tailwind entry + `@theme` tokens:
      `--color-brand: #fcdc00; --color-navy: #04091e; --color-lavender: #f9f9ff`
- [ ] Create `src/App.tsx` composing all sections in order
- [ ] Create `src/components/Navbar.tsx` — white navbar with logo, nav
      links (Home, Gallery, Services, About, Blog dropdown, Contact),
      search icon, mobile hamburger toggle
- [ ] Create `src/components/Hero.tsx` — parallax background, centered
      heading "Bitshot Photography", subtitle, yellow CTA button
- [ ] Create `src/components/Gallery.tsx` — filter tabs (All, Approved,
      Unapproved, Unviewed), 4-col grid of 12 image items with hover
      overlay (title + expand icon), "Load More" button
- [ ] Create `src/components/Testimonials.tsx` — yellow bg, two-col:
      heading + description left, testimonial carousel right
- [ ] Create `src/components/Services.tsx` — heading + subtitle, 3-col
      grid of 6 service cards with hover effect
- [ ] Create `src/components/Instagram.tsx` — centered button + 6 images
      in a row
- [ ] Create `src/components/Footer.tsx` — dark navy bg, 3-col layout:
      About Me, Newsletter (email form), Follow Me (social icons).
      Link to Component Dock (replace Colorlib attribution).
- [ ] Add Google Fonts `<link>` for Poppins in `index.html`
- [ ] Use `https://picsum.photos/seed/bitshot-<n>/<w>/<h>` for all images
- [ ] Use `lucide-react` icons (Search, Expand, Facebook, Twitter,
      Dribbble, Behance equivalents)
- [ ] Write tests: one `describe` per component, scenario-style `it` blocks
      mirroring the spec's Gherkin scenarios
- [ ] Run `npm run test:coverage` — verify 100% lines/functions/branches/statements
- [ ] Run `npm run verify:app bitshot` (typecheck + lint + tests + build)
- [ ] Commit as `docs: prep Bitshot (ColorLib Bitmap) spec + research`
- [ ] Push to main
