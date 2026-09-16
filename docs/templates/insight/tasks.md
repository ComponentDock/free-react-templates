# Insight (ColorLib Buson) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-insight`. Recreation name: **Insight** (NEW name —
> the ColorLib source keeps its name "Buson").

## Source mapping

- **ColorLib item:** "Buson" (TEMPLATES.md line 1366; section "## Consulting (35)" at line 1362).
  The `wp/template/buson/` slug appears ONCE in TEMPLATES.md (no dup rows).
- **Source URL:** https://colorlib.com/wp/template/buson/
- **Preview URL — REACHABLE (verified 2026-09-16):**
  **`https://preview.colorlib.com/theme/buson/`**
  (HTTP 200, 33,556 bytes, Bootstrap 5 framework, `<title>Consulting HTML-5 Template</title>`).
- **Preview CSS:** `assets/css/style.css` (65,035 bytes — hand-written + Bootstrap 5)
  + `assets/css/bootstrap.min.css` + `assets/css/owl.carousel.min.css` (carousel)
  + `assets/css/animate.min.css` (animations) + `assets/css/magnific-popup.css` (lightbox)
  + `assets/css/slicknav.css` (mobile menu) + `assets/css/nice-select.css` (custom select)
  + `assets/css/fontawesome-all.min.css` + `assets/css/themify-icons.css` + `assets/css/flaticon.css`
  Font: Poppins (Google Fonts). Icons: FontAwesome + Themify + Flaticon — REPLACE with lucide-react.
  Scripts: jQuery, Owl Carousel, Magnific Popup, SlickNav, Nice Select, wow.js —
  replace all with React equivalents.

## Reference research (done — do not redo)

### Screenshot (`buson-free-template.jpg`)

The screenshot was not viewable via vision_analyze (URL format issue). Design
description derived from the live DOM + CSS analysis:
- Clean, modern consulting template with white/light lavender background
- Coral/salmon red (`#ff656a`) accent color on buttons and highlights
- Dark navy (`#002d5b`) for hero heading text and CTA sections
- Hero: large background image with white text overlay, "We help you to grow
  your business" in bold dark navy, coral "Contact Now" button
- Team section: circular profile photos in a row
- Trusted section: image with semi-transparent white overlay card
- Services: 3-column card layout with icons
- Completed cases: image with stat counters overlay
- Blog: 3-column card grid with images
- Callback form: dark navy background with white form
- Footer: light background, 4-column grid
- Overall aesthetic: professional, clean, corporate consulting feel

### Design tokens (live stylesheet + rendered page, verified 2026-09-16)

| Token         | Value               | Use                                                           |
| ------------- | ------------------- | ------------------------------------------------------------- |
| Brand primary | `#ff656a`           | Coral/salmon red; buttons, accents, stat counters (34 uses)   |
| Dark navy     | `#002d5b`           | Hero heading color, CTA section bg (4 uses)                   |
| Secondary dark| `#191d34`           | Body text, headings (11 uses)                                 |
| Light lavender| `#f9f9ff`           | Section alternating bg (23 uses)                              |
| Footer bg     | `#f8fafe`           | Very light blue-gray footer background                        |
| Muted text    | `#999999`           | Secondary/muted text (10 uses)                                |
| Blue accent   | `#415094`           | Links, secondary accent (7 uses)                              |
| Cyan accent   | `#4cd3e3`           | Hover/secondary accents (5 uses)                              |
| Font          | Poppins 400/500/600/700/900 | Google Fonts; body 16px/1.6                          |
| Button bg     | `#ff656a`           | Coral red, uppercase, 14px, weight 500, letter-spacing 1px    |
| Button hover  | `#e6373d`           | Darker red on hover (via scaleX animation)                    |
| Button radius | 5px                 | Subtle rounded corners                                        |
| Hero heading  | 700px (desktop)     | Weight 900, color `#002d5b`, uppercase, line-height 1.2      |
| Trusted card  | `rgba(255,255,255,0.8)` | Semi-transparent white overlay on image                   |
| Request CTA bg| `#002d5b`           | Dark navy full-width section for callback form                |
| Card radius   | 5px, 8px, 12px      | Various card border-radius values                             |

### Section-by-section fidelity notes

1. **HeaderTop**: Simple bar with address left, email right, social icons.
   Light gray or white bg. Use lucide-react icons.

2. **Navbar**: White bg, dark text. Logo "Insight" left. Nav links center.
   CTA button right (coral `#ff656a`). Mobile: hamburger menu.

3. **Hero Slider**: Background image with text overlay. 2-slide carousel
   with auto-rotation. Main heading "We help you to grow your business"
   in dark navy `#002d5b`, weight 900, uppercase. "Contact Now" coral button.
   Use `picsum.photos/seed/insight-hero/1920/800` for bg.

4. **Team Profiles**: 3 circular photos in a row. Each has a name and role
   below. Use `picsum.photos/seed/insight-team-{1,2,3}/200/200` for photos.

5. **We're Trusted**: Split layout — background image left, semi-transparent
   white card (`rgba(255,255,255,0.8)`) right with "What we do for you"
   heading and description. Use `picsum.photos/seed/insight-trusted/800/600`.

6. **Our Services**: "Our Services" heading centered. 3-column grid with
   service cards: Strategic Planning, Trades & Stocks, Audit & Assurance.
   Each has an icon (lucide-react), title, description, "Learn More" link.
   "More Services" button below. Light lavender bg `#f9f9ff`.

7. **Completed Cases**: "Completed Cases" heading. 2-column: left has
   background image with stat counters overlay (coral numbers), right has
   "Marketing Strategy" text blocks with icons.

8. **Recent News**: "Our Recent News" heading. 3-column blog card grid.
   Each card has image, title, date, "See more" link. Use
   `picsum.photos/seed/insight-news-{1,2,3}/400/300`.

9. **Request Callback**: Dark navy (`#002d5b`) full-width bg. "Request for
   Call Back" heading in white. Form with Name and Phone inputs. Submit button.

10. **Footer**: Light bg (`#f8fafe`). 4-column grid: Logo + description
    (left), Company links, Services links, Get in Touch (phone, email, address).

11. **Footer Bottom**: Copyright bar with "Component Dock" link to
    `https://www.componentdock.com/`.

### Implementation task order

1. Scaffold `apps/insight/` (copy simplest existing app, rename package)
2. Set up `index.css` with Tailwind theme tokens (`--color-brand: #ff656a`,
   `--color-navy: #002d5b`, `--color-lavender: #f9f9ff`)
3. Add Google Fonts `<link>` for Poppins to `index.html`
4. Build components top-down: HeaderTop → Navbar → HeroSlider → TeamProfiles →
   WeAreTrusted → OurServices → CompletedCases → RecentNews →
   RequestCallback → Footer → FooterBottom
5. Compose in `App.tsx`
6. Tests (Vitest + Testing Library, 100% coverage)
7. Verify: `scripts/verify-app.sh insight`
8. Commit, push, PR, merge
