# TuneVault (ColorLib MusicLab) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-tunevault`. Recreation name: **TuneVault** (NEW
> name — the ColorLib source keeps its name "MusicLab").

## Source mapping

- **ColorLib item:** "MusicLab" (TEMPLATES.md line 606).
- **Source URL:** https://colorlib.com/wp/template/musiclab/
- **Preview URL — REACHABLE (verified by direct fetch):**
  `https://preview.colorlib.com/theme/musiclab/` (HTTP 200, 32,162 bytes).
- **Preview CSS:** `assets/css/style.css` (96,391 bytes) — full hand-written
  styles plus Bootstrap 4, Owl Carousel, SlickNav, animate.css,
  Magnific Popup, FontAwesome, Themify Icons, Slick, Nice Select.
- **Fonts:** "Inter" 200–900 via Google Fonts `@import` at top of style.css.

## Reference research (done — do not redo)

### Screenshot analysis

Browsed the template preview visually. The design shows:

- Dark hero with gradient background (#161a1a → darker), centered white
  headline, two gradient CTA buttons (purple-to-blue pill), hero image
  below caption
- White section with numbered feature items (1, 2, 3) and illustration
- Light grey section with icon cards and illustration (reversed layout)
- 4-column feature icon grid (music features)
- Two pricing cards on grey background (both $0.00/free in demo)
- Testimonial slider with avatars on dark background
- Dark footer with social icons and quick links

### Design tokens (extracted from live CSS, verified by fetch)

| Token           | Value                                           | Use                                                   |
| --------------- | ----------------------------------------------- | ----------------------------------------------------- |
| Font            | "Inter", sans-serif (200–900)                   | All text, base 16px/1.6                               |
| Brand blue      | #42B5F2                                         | `.theme-bg`, `.theme-color`, subtitles, scroll-to-top |
| Accent red      | #F15B43                                         | Secondary accent                                      |
| Gradient        | #ca42f2 → #6a42f2 → #4294f2 → #42b5f2 → #7db9e8 | CTA buttons                                           |
| Dark hero       | #161a1a gradient                                | Hero, sticky header, nav submenu                      |
| Section bg      | #F5F7F9                                         | About2, pricing sections                              |
| Card bg         | #f9f9ff                                         | Pricing cards, form inputs                            |
| Body text       | #6D6D6D                                         | Paragraphs                                            |
| Headings        | #262929                                         | h1–h6                                                 |
| Subtitle        | #97A7AF                                         | Section subtitle spans                                |
| Button radius   | 30px                                            | Pill-shaped CTA buttons                               |
| Section padding | 100px top/bottom                                | All sections                                          |
| Footer padding  | 97px top / 43px bottom                          | Footer area                                           |

### Section order (from DOM analysis)

1. **Navbar** — Transparent, logo + nav + "Get Start" btn_01
2. **Hero** — slider-area, slider-bg1 (dark gradient), hero-caption with
   h1 + subtitle + double-btn (btn_01 + btn_001), hero-desktop-img
3. **About 1** — section-padding, white bg, image left + text right,
   numbered items (icon + pera), section-tittle with sound icon
4. **About 2** — section-bg (#F5F7F9), reversed layout, text left +
   image right, finder icon items with card bg (#fff)
5. **Features** — section-padding, white bg, 4-column icon grid,
   "Get ready for seamless online music", each: icon img + h3 link + p
6. **Pricing** — section-bg, 2 cards (single-card), card-mid (name +
   price) + card-bottom (feature list + btn_01 CTA)
7. **Testimonials** — testimonial-area, dark bg with overlay, slider
   (h1-testimonial-active dot-style), single-testimonial cards with
   avatar + name + role + quote
8. **Footer** — dark bg, logo + description + social icons + quick links
   - copyright bar

## Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/tunevault` from the simplest existing app, rename
       package to `@free-react-templates/tunevault`, add Inter 400/500/600/700
       Google Fonts `<link>` in index.html, set `public/CNAME` =
       `tunevault.free.componentdock.com` + `"homepage"`. Register the
       workspace in package-lock.json.
2. [ ] Write the spec-traceable test suite FIRST (Vitest + Testing Library,
       100% coverage): Navbar (transparent, logo, menu links, mobile
       hamburger toggle), Hero (heading, subtitle, two CTA buttons, hero
       image), About1 (heading, 3 numbered items, illustration image),
       About2 (grey bg heading, 3 icon items, illustration image),
       Features (heading, 4 feature cards with icon/title/description),
       Pricing (heading, 2 cards with name/price/features/CTA),
       Testimonials (heading, carousel with navigation, avatar/name/role/quote),
       Footer (logo, social links, quick links, copyright, Component Dock
       credit), App (landmarks, document title).
3. [ ] Navbar component: transparent header overlaying hero, sticky on
       scroll, logo text, nav links, "Get Started" gradient button
       (btn_01 style), mobile hamburger with slide-down menu. Use lucide
       icons (Menu for hamburger, ArrowRight for CTA).
4. [ ] Hero section: dark gradient background (#161a1a), centered caption
       with h1 "Open the world of music. It's all here.", subtitle text,
       two CTA buttons (gradient filled `#ca42f2→#42b5f2` with 30px radius + outlined with rgba white bg), hero image below (picsum seed
       tunevault-hero-1). Full viewport height.
5. [ ] About Section 1: white bg, two-column layout (image left, text
       right), sound icon, h2 heading, 3 numbered items each with icon
       image + description paragraph. Image: picsum seed tunevault-about-1.
6. [ ] About Section 2: light grey bg (#F5F7F9), reversed two-column
       layout (text left, image right), heading, 3 icon items with
       card-like backgrounds (#fff, padding). Image: picsum seed
       tunevault-about-2.
7. [ ] Features grid: white bg, centered heading "Get ready for seamless
       online music", 4-column responsive grid, each card has lucide icon
       (Music, Headphones, VolumeX, SkipForward), h3 title link,
       description text. Use lucide icons instead of image assets.
8. [ ] Pricing cards: grey bg (#F5F7F9), centered heading, 2 cards side
       by side, each with plan name, price ($0.00/month), feature list
       with check icons, "Get Free" gradient CTA button. Cards have no
       border-radius (matching source).
9. [ ] Testimonials: dark background with overlay, "Customers are loving
       TuneVault" heading, carousel/slider with dot navigation, each slide
       has avatar (picsum 80x80), name, role, quote text. Implement a
       simple auto-advancing carousel with manual dot navigation.
10. [ ] Footer: dark bg, three-column layout: logo + description +
        social icons (Facebook, LinkedIn, Instagram, YouTube via lucide),
        Quick Links column, copyright bar at bottom. Include Component
        Dock credit linking https://www.componentdock.com/.
11. [ ] Run `npm run verify:app -- tunevault` (typecheck → lint → vitest
        100% → build) and fix until green.
12. [ ] Open PR `feat/template-tunevault` → merge immediately
        (`gh pr merge --squash --delete-branch`); PR description must
        include: source URL, preview URL, token list (#42B5F2 brand blue,
        gradient buttons, Inter font, 30px pill radius, dark hero), and
        what differs (renamed "TuneVault", Inter via Google Fonts, lucide
        icons, picsum placeholders, Component Dock footer).
13. [ ] Bookkeeping after merge: mark TEMPLATES.md line 606 `[x]` + surge
        URL (`https://tunevault.free.componentdock.com`), `npm run
    readme:status`, push.
