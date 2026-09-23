# Archway (ColorLib Archs) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-archway`. Recreation name: **Archway** (NEW name —
> the ColorLib source keeps its name "Archs").

## Source mapping

- **ColorLib item:** "Archs" (TEMPLATES.md line 1964, Architecture category).
- **Source URL:** https://colorlib.com/wp/template/archs/
- **Preview URL — REACHABLE (verified 2026-09-23 by direct fetch):**
  **`https://preview.colorlib.com/theme/archs/`** (HTTP 200, 48,960 bytes).
- **Preview CSS:** `css/style.css` (24,541 bytes) — all custom styles, Bootstrap 4 base.
  Also loads: `css/bootstrap.min.css`, `css/owl.carousel.min.css`,
  `css/aos.css`, `css/jquery.fancybox.min.css`, `css/magnific-popup.css`,
  `css/jquery-ui.css`, `css/bootstrap-datepicker.css`. No Google Fonts
  (system font stack). Icons: Icomoon + Flaticon (replace with lucide-react).
  Scripts: jQuery 3.x, Bootstrap, Owl Carousel, AOS, Stellar (parallax).

## Reference research (done — do not redo)

### Screenshot visual analysis

The screenshot shows a clean, minimal interior design / architecture site.
The hero has a full-width background image with a dark overlay and centered
white heading "Interior Design". Below, three icon+text feature cards
(Innovative Structure, Arhictectural, Interior Design) sit on a white
background with a bottom border. A team section shows 6 members in a 3×2
grid with circular photos. Pricing cards (Starter/Professional/Enterprise)
are displayed in a 3-column layout. A FAQ accordion section follows. The
projects gallery shows interior design images. Blog cards are in a 3-column
grid. Services are shown as icon+text cards. A contact form section
precedes a dark footer with multiple columns. The overall aesthetic is
clean, minimal, with an orange-red accent color on white backgrounds.

### Live preview DOM analysis (2026-09-23)

- **Navbar:** Sticky, logo text "Archs" left (will rename to "Archway"),
  nav links right (Home, About Us, Team, Pricing, FAQ, Projects, News,
  Services, Contact). Mobile hamburger menu. No CTA button in navbar.
- **Hero (`#home-section`, `.site-blocks-cover.overlay`):** Full-width
  parallax background image (hero_bg_1.jpg), dark overlay (`rgba(0,0,0,0.4)`).
  Centered content: h1 "Interior Design" (white, font-weight 900, 3rem),
  subtext paragraph below.
- **About Us (`.site-section.border-bottom`):** Section heading not shown
  as h2 — the section starts directly with 3 icon+text cards in a
  `col-lg-4 col-md-6` grid. Each card has a flaticon icon, a heading
  (Innovative Structure, Arhictectural, Interior Design), and a description
  paragraph. Section has a bottom border.
- **Team (`.site-section`):** Heading "Our Team" centered. 6 team members
  in a 3-column × 2-row grid (`col-lg-4 col-md-6`). Each card: circular
  photo, name (h3), role ("Interior Designer"), bio paragraph. Members:
  Cloe Marena, John Rooster, Will Turner, Nicolas Stainer, George Brook,
  Emely Hopson.
- **Pricing (`.site-section`):** Heading "Choose Your Plan" centered. 3
  pricing cards (`col-lg-4 col-md-6`). Each: tier name (h3), price, feature
  list, "Buy Now" button (btn-primary). Tiers: Starter, Professional,
  Enterprise.
- **FAQ (`.site-section`):** Heading "Frequently Ask Questions" centered.
  Bootstrap accordion with 5 questions. Each: clickable heading (h2)
  toggling a collapse panel with answer text.
- **Projects (`.site-section`):** Heading "Our Projects" centered. Gallery
  of 5 project cards with images and titles: Butterfly House, Interior Bed
  Design, Kitchen Sink Design, Lobby Interior Design, Relaxation Room
  Design. Carousel or grid with navigation.
- **Blog (`.site-section`):** Heading "Our Blog Posts" centered. 3 blog
  cards (`col-lg-4 col-md-6`) with image, title ("Architectural Art
  Modern"), excerpt, and "View All Posts" button.
- **Services (`.site-section`):** Heading "Our Services" centered. Intro
  paragraph. 6 service cards in a 2×3 grid (`col-lg-4 col-md-6`). Each:
  flaticon icon (lucide-react equivalent), title, description. Services:
  Innovative Structure, Arcitectural Design, Interior Design, Modern Window
  Design, Experts Architect, Sit Down (as named in the source).
- **Contact (`.site-section`):** Heading "Contact Us" centered. Contact
  form with input fields and submit button.
- **Footer (`.site-footer.bg-dark`):** Dark background (`#191919`). 4
  columns: About Us (text), Navigation (links), Recent News (3 article
  links with excerpts), Subscribe Newsletter (form), Follow Us (social
  icons). Copyright bar at bottom.

### Design tokens (from CSS extraction)

- **Primary brand accent:** `#ff5733` (orange-red, used on buttons and
  accent elements)
- **Button style:** `.btn-primary` = white text on brand bg; hover = transparent
  bg + brand border + brand text (outlined style); `border-width: 2px`,
  `border-radius: 4px`, `.btn-lg` padding `10px 20px` font-size `16px`
- **Headings:** All h1–h6 `color: #000`; h1 on cover is `#fff`,
  `font-weight: 900`, `font-size: 3rem`
- **Body text:** `color: gray`, `font-weight: 300`, `font-size: 1rem`,
  `line-height: 1.7`
- **Text greys:** `#212529`, `#333333`, `#343a40`, `#737373`, `#999999`,
  `#b3b3b3`, `#cccccc`
- **Backgrounds:** `#fff` (main sections), `#f8f9fa` (`.bg-light`), `#ebeef0`
  (alternate sections)
- **Overlay:** `rgba(0, 0, 0, 0.4)` on hero cover
- **Section padding:** `.site-section` `padding: 2.5em 0` (desktop `5em 0`)
- **Footer:** `#191919` dark bg, white headings and links, `padding: 70px 0`
- **Font:** System font stack (`-apple-system, BlinkMacSystemFont, "Segoe UI",
  Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif`)
- **Icons:** Flaticon + Icomoon (replace with lucide-react)
- **Light form:** `.bg-light form { border-radius: 10px; box-shadow: 0 5px 20px
  -5px rgba(0,0,0,0.05); }`

## Implementation task outline

### Phase 1: Scaffolding
1. Copy simplest existing app (e.g. `apps/abjure/`) as base → rename to `apps/archway/`
2. Rename package to `@free-react-templates/archway`
3. Create `public/CNAME` with `archway.free.componentdock.com`
4. Update `package.json` homepage to `https://archway.free.componentdock.com`
5. Run `npm install` at repo root to register workspace in lockfile

### Phase 2: Design tokens (index.css + tailwind config)
1. No Google Fonts needed (system font stack)
2. Define `@theme` tokens in `src/index.css`:
   - `--color-brand: #ff5733`
   - `--color-overlay: rgba(0, 0, 0, 0.4)`
   - `--color-section-alt: #ebeef0`
   - `--color-footer: #191919`
3. Set body defaults: `font-weight: 300; font-size: 1rem; line-height: 1.7; color: gray`

### Phase 3: Components (section-by-section)

1. **Navbar.tsx** — Sticky header with logo text "Archway", nav links
   (Home, About Us, Team, Pricing, FAQ, Projects, News, Services, Contact).
   Mobile hamburger menu with drawer. Dark-mode toggle button. Use `cn()`
   from packages/ui.

2. **Hero.tsx** — Full-width section with parallax background image
   (picsum.photos/seed/archway-hero/1920/1080). Dark overlay (`rgba(0,0,0,0.4)`).
   Centered content: h1 "Interior Design" (white, bold) + subtext paragraph.

3. **AboutUs.tsx** — Three-column grid of feature cards. Each card: lucide-react
   icon, heading, description. Section has bottom border. Responsive: stacks
   on mobile.

4. **Team.tsx** — Centered heading "Our Team". 3×2 grid of member cards.
   Each: circular photo (picsum.photos/seed/archway-member-<n>/200/200),
   name (h3), role, bio paragraph. 6 members total.

5. **Pricing.tsx** — Centered heading "Choose Your Plan". 3 pricing cards
   (Starter, Professional, Enterprise). Each: tier name, price, feature list,
   "Buy Now" button (btn-primary with brand accent). Professional highlighted.

6. **Faq.tsx** — Centered heading "Frequently Ask Questions". Accordion
   with 5 items. Each: clickable heading toggling answer panel. One-at-a-time
   accordion behavior.

7. **Projects.tsx** — Centered heading "Our Projects". Gallery of 5 project
   cards. Each: image (picsum.photos/seed/archway-project-<n>/600/400),
   title. Carousel or grid with navigation controls.

8. **BlogPosts.tsx** — Centered heading "Our Blog Posts". 3 blog cards.
   Each: image, title, excerpt. "View All Posts" button below.

9. **Services.tsx** — Centered heading "Our Services" + intro paragraph.
   6 service cards in 2×3 grid. Each: lucide-react icon, title, description.

10. **Contact.tsx** — Centered heading "Contact Us". Contact form: name,
    email, subject, message textarea. Submit button with brand accent.
    Form validation with zod + react-hook-form.

11. **Footer.tsx** — Dark background (`#191919`). 4 columns: About Us text,
    Navigation links, Recent News links, Subscribe Newsletter form. Social
    media icons. Copyright bar with Component Dock link.

### Phase 4: Testing + Verification
1. Write Vitest tests for each component (100% coverage)
2. Run `scripts/verify-app.sh archway`
3. Typecheck + lint + build + test:coverage
4. Verify all sections render correctly

### Phase 5: Deploy prep
1. `npm install` at root (lockfile registration)
2. Commit with conventional format
3. Push to main, verify deploy
